'use client';

const expertiseData = [
  {
    icon: '⚡',
    title: 'Frontend Development',
    skills: ['React / Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
  {
    icon: '🎯',
    title: 'Backend & APIs',
    skills: ['Node.js / Express', 'MongoDB / PostgreSQL', 'REST APIs', 'JWT Authentication', 'Stripe Integration'],
  },
  {
    icon: '💎',
    title: 'Tools & Deployment',
    skills: ['Git / GitHub', 'Vercel / Netlify', 'Docker Basics', 'AWS S3', 'CI/CD Pipelines'],
  },
  {
    icon: '🚀',
    title: 'Design & UX',
    skills: ['Figma / Adobe XD', 'UI/UX Principles', 'Animations (GSAP)', 'Three.js 3D', 'Accessibility'],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-48 px-6 md:px-24 bg-gradient-to-b from-noir via-noir-soft to-noir">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <div className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-semibold">— 02</div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gold via-platinum to-gold bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
          {expertiseData.map((item, index) => (
            <div key={index} className="group bg-white/[0.02] border border-gold/10 clip-path-card p-10 hover:border-gold hover:shadow-gold-lg hover:-translate-y-3 transition-all duration-500">
              <span className="text-6xl mb-8 block">{item.icon}</span>
              <h3 className="font-playfair text-3xl font-bold mb-6 text-gold">{item.title}</h3>
              <ul className="space-y-3">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="text-platinum text-sm py-3 border-b border-white/5 hover:text-gold hover:pl-2 transition-all">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
