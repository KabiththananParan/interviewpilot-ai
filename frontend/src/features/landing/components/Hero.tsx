import { useEffect, useRef } from 'react';

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

    // Explicitly type the context as WebGLRenderingContext to fix property errors
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
          float t = u_time * 0.2;
          vec3 color = vec3(0.0588, 0.0902, 0.1647);
          
          float n1 = snoise(uv * 2.0 + t);
          float n2 = snoise(uv * 1.5 - t * 0.8);
          float n3 = snoise(uv * 3.0 + t * 0.5);
          
          vec3 blue = vec3(0.231, 0.51, 0.965);
          vec3 purple = vec3(0.545, 0.361, 0.965);
          
          float blob1 = smoothstep(0.2, 0.8, n1);
          float blob2 = smoothstep(0.3, 0.9, n2);
          float blob3 = smoothstep(0.4, 1.0, n3);
          
          color = mix(color, blue * 0.4, blob1);
          color = mix(color, purple * 0.3, blob2);
          color = mix(color, blue * 0.2, blob3);
          
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

    // Fixed ESLint 'prefer-const' by using const since object references don't change
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
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden px-4 md:px-12">
      <div className="absolute inset-0 w-full h-full opacity-40" style={{ display: 'block' }}>
        <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
      
      <div className="hero-glow -top-20 -left-20"></div>
      <div className="hero-glow bottom-0 right-0 opacity-50"></div>
      
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-medium">Now in Private Beta</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Land Your Dream <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Software Engineering</span> Job
          </h1>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto lg:mx-0">
            The elite mentor for ambitious engineers. From high-fidelity resume analysis to AI-driven mock interviews and customized learning roadmaps designed for FAANG+ standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95">Start Preparing Free</button>
            <button className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-sm text-on-surface rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">play_circle</span> Watch Demo
            </button>
          </div>
          <div className="pt-10 flex items-center justify-center lg:justify-start gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xs font-mono uppercase">Trusted by engineers at</span>
            <div className="flex gap-6 items-center">
              <div className="h-6 w-20 bg-white/10 rounded-full"></div>
              <div className="h-6 w-24 bg-white/10 rounded-full"></div>
              <div className="h-6 w-16 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                <path d="M100 100 Q 200 50 300 100 T 300 300 Q 200 350 100 300 T 100 100" fill="none" stroke="url(#line-grad)" strokeDasharray="10 5" strokeWidth="2"></path>
                <defs>
                  <linearGradient id="line-grad" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'var(--tw-gradient-from)' }}></stop>
                    <stop offset="100%" style={{ stopColor: 'var(--tw-gradient-to)' }}></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="glass-card absolute top-[10%] left-[5%] p-4 rounded-xl w-48 animate-float shadow-2xl" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/20 rounded-lg text-primary"><span className="material-symbols-outlined text-sm">description</span></div>
                <span className="text-xs font-bold text-on-surface">Resume Uploaded</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary w-[80%]"></div></div>
            </div>
            
            <div className="glass-card absolute top-[50%] -translate-y-1/2 left-[55%] -translate-x-1/2 p-6 rounded-2xl w-64 shadow-2xl border-primary/30 z-20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold">Interview Readiness</span>
                <span className="text-primary font-bold">84%</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] text-on-surface-variant"><span>System Design</span><span>92%</span></div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-tertiary w-[92%]"></div></div>
                <div className="flex justify-between text-[10px] text-on-surface-variant"><span>Coding Patterns</span><span>78%</span></div>
                {/* Fixed the 'class' to 'className' translation error below */}
                <div className="h-1 bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-primary w-[78%]"></div></div>
              </div>
            </div>
            
            <div className="glass-card absolute bottom-[15%] right-[5%] p-4 rounded-xl w-52 animate-float shadow-2xl" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 mb-2 text-tertiary">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span className="text-xs font-bold">Job Match High</span>
              </div>
              <p className="text-[10px] text-on-surface-variant">Your profile matches 92% of "Senior Frontend Engineer" role at Vercel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}