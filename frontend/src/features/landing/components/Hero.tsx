import { useEffect, useRef } from 'react';
import { Play, FileText, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas!.clientWidth || 1280;
      const h = canvas!.clientHeight || 720;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    let resizeObserver: ResizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                  -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 a0 = x - floor(x + 0.5);
        vec3 m0 = 1.0 - 1.5*(a0*a0 + h*h);
        vec3 g = a0 * vec3(x0.x,x12.xz) + h * vec3(x0.y,x12.yw);
        vec4 norm = 1.79284291400159 - 0.85373472095314 *
          vec4(dot(g,g), dot(m0,m0), 0.0, 0.0);
        g *= norm.x;
        return 130.0 * dot(m, g);
      }

      void main() {
          vec2 uv = v_texCoord;
          float t = u_time * 0.15;
          vec3 color = vec3(0.03, 0.05, 0.1);
          
          float n1 = snoise(uv * 1.8 + t);
          float n2 = snoise(uv * 1.3 - t * 0.6);
          
          vec3 blue = vec3(0.12, 0.25, 0.55);
          vec3 purple = vec3(0.18, 0.12, 0.38);
          
          float blob1 = smoothstep(0.1, 0.9, n1);
          float blob2 = smoothstep(0.2, 0.8, n2);
          
          color = mix(color, blue * 0.35, blob1);
          color = mix(color, purple * 0.25, blob2);
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      const s = gl!.createShader(type);
      if (!s) return null;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    const compiledVs = compileShader(gl.VERTEX_SHADER, vs);
    const compiledFs = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!prog || !compiledVs || !compiledFs) return;

    gl.attachShader(prog, compiledVs);
    gl.attachShader(prog, compiledFs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    function render(t: number) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#070b15] text-white overflow-hidden px-6 md:px-16 py-12">
      {/* Background Interactive WebGL canvas */}
      <div className="absolute inset-0 w-full h-full opacity-50 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Copy Section */}
        <div className="lg:col-span-7 space-y-7 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#10b981]"></span>
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#94a3b8] uppercase font-bold">
              Now in Private Beta
            </span>
          </div>

          {/* Heading with customized color structure matching mockup */}
          <h1 className="text-4xl md:text-[56px] font-black tracking-tight leading-[1.12]">
            Land Your Dream Software <br />
            <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#10b981] bg-clip-text text-transparent">
              Engineering
            </span>{' '}
            Job
          </h1>

          <p className="text-sm md:text-base text-[#94a3b8]/90 max-w-[500px] leading-relaxed">
            The elite mentor for ambitious engineers. From high-fidelity resume analysis to AI-driven mock interviews and customized learning roadmaps designed for FAANG+ standards.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-7 py-3.5 bg-[#9ab6ff] text-[#070b15] rounded-xl font-extrabold text-sm hover:bg-[#b3c8ff] hover:shadow-[0_0_24px_rgba(154,182,255,0.4)] transition-all duration-300 transform active:scale-95">
              Start Preparing Free
            </button>
            <button className="px-7 py-3.5 border border-white/[0.08] bg-[#111927]/40 backdrop-blur-md text-slate-200 rounded-xl font-extrabold text-sm hover:bg-[#111927]/80 hover:text-white transition-all duration-300 flex items-center justify-center gap-2.5">
              <Play className="w-4 h-4 fill-current text-slate-300" />
              Watch Demo
            </button>
          </div>

          {/* Trusted Badges */}
          {/* <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#475569] font-bold">
              Trusted by engineers at
            </span>
            <div className="flex gap-3.5 items-center">
              <div className="h-6 w-16 bg-white/[0.03] border border-white/[0.03] rounded-md"></div>
              <div className="h-6 w-20 bg-white/[0.03] border border-white/[0.03] rounded-md"></div>
              <div className="h-6 w-14 bg-white/[0.03] border border-white/[0.03] rounded-md"></div>
            </div>
          </div> */}
        </div>

        {/* Right Graphical Mockup Section */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[480px]">
          <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center">
            
            {/* SVG Background Trace Path Pattern */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110">
              <svg className="w-full h-full opacity-[0.04]" viewBox="0 0 500 400" fill="none">
                <path d="M 120 120 C 180 80, 340 100, 360 220 C 380 340, 260 380, 180 340" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" />
                <path d="M 360 220 C 380 340, 420 310, 430 260" stroke="white" strokeWidth="1.5" strokeDasharray="6 6" />
              </svg>
            </div>

            {/* Card 1: Resume Uploaded (Top Left) */}
            <div className="absolute top-[8%] left-[-4%] bg-[#111927]/90 border border-white/[0.04] p-4 rounded-xl w-52 backdrop-blur-lg shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex items-center gap-3">
              <div className="p-2 bg-white/[0.04] text-[#93c5fd] rounded-lg border border-white/[0.05]">
                <FileText className="w-4 h-4 text-slate-300" />
              </div>
              <div className="flex-1 space-y-2">
                <span className="text-[11px] font-bold text-slate-200 block">Resume Uploaded</span>
                <div className="h-[3.5px] w-full bg-white/[0.08] rounded-full overflow-hidden">
                  <div className="h-full bg-[#60a5fa]/80 w-[72%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card 2: Interview Readiness Assessment (Center Right) */}
            <div className="absolute top-[28%] right-[2%] bg-[#111927]/90 border border-white/[0.04] p-6 rounded-2xl w-72 backdrop-blur-lg shadow-[0_25px_60px_rgba(0,0,0,0.5)] z-20">
              <div className="flex justify-between items-center mb-5">
                <span className="text-[12px] font-extrabold text-slate-300">Interview Readiness</span>
                <span className="text-[#60a5fa] font-black text-[13px]">84%</span>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>System Design</span>
                    <span className="text-slate-400">92%</span>
                  </div>
                  <div className="h-[4px] bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10b981] w-[92%] rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                    <span>Coding Patterns</span>
                    <span className="text-slate-400">78%</span>
                  </div>
                  <div className="h-[4px] bg-white/[0.08] rounded-full overflow-hidden">
                    <div className="h-full bg-[#9ab6ff] w-[78%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Job Match Status (Bottom Right) */}
            <div className="absolute bottom-[10%] right-[-6%] bg-[#111927]/95 border border-white/[0.04] p-4 rounded-xl w-60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-30 space-y-1.5">
              <div className="flex items-center gap-2 text-[#10b981]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="text-[11px] font-black tracking-wide">Job Match High</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal font-medium">
                Your profile matches 92% of "Senior Frontend Engineer" role at Vercel.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}