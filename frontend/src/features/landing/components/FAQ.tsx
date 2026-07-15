import React from 'react';

const FAQ_DATA = [
  { q: 'How accurate is the AI interview feedback?', a: 'Our AI models are trained on thousands of real technical interview transcripts from top-tier tech companies. It evaluates not just your answer\'s correctness, but also your reasoning process, edge-case consideration, and communication clarity.' },
  { q: 'Can it help with non-technical behavioral rounds?', a: 'Yes. We have specialized modules for the STAR method, leadership principles (including Amazon\'s specific requirements), and cultural fit questions commonly found in modern engineering hiring.' },
  { q: 'Is my resume data secure?', a: 'Security is our priority. Your data is encrypted in transit and at rest. We do not use your personal information to train public models, and you can delete your entire profile history at any time.' },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 md:px-12" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <details key={index} className="group glass-card rounded-xl">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                <span className="font-bold">{item.q}</span>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-on-surface-variant text-sm">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}