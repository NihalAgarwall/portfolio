'use client';

const projects = [
  {
    id: 1,
    category: 'E-Commerce Excellence',
    title: 'Luxury Fashion Platform',
    description: 'A bespoke e-commerce ecosystem featuring AI-powered personalization, real-time inventory synchronization, and immersive 3D product visualization.',
    tech: ['Next.js 14', 'Three.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'AWS'],
  },
  {
    id: 2,
    category: 'Financial Technology',
    title: 'Investment Dashboard',
    description: 'Enterprise-grade financial analytics platform with real-time market data visualization and sophisticated portfolio management.',
    tech: ['React 18', 'D3.js', 'Python', 'FastAPI', 'Redis', 'Docker'],
  },
  {
    id: 3,
    category: 'Hospitality & Travel',
    title: 'Premium Hotel Booking',
    description: 'Sophisticated booking platform featuring immersive virtual tours and intelligent concierge AI chatbot.',
    tech: ['Vue.js 3', 'WebGL', 'Django', 'MongoDB', 'GraphQL'],
  },
  {
    id: 4,
    category: 'Creative Studio',
    title: 'Artist Portfolio CMS',
    description: 'Custom content management system for creative professionals with advanced media galleries and project management tools.',
    tech: ['Nuxt.js', 'Prisma ORM', 'GraphQL', 'TypeScript'],
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <div className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-semibold">— 01</div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gold via-platinum to-gold bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gradient-to-br from-noir-soft to-noir-medium border border-gold/20 clip-path-card p-12 hover:border-gold hover:shadow-gold-lg transition-all duration-500">
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">{project.category}</span>
              <h3 className="font-playfair text-4xl font-black my-6 group-hover:text-gold transition-colors">{project.title}</h3>
              <p className="text-platinum text-lg leading-relaxed mb-8">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-4 py-2 border border-gold/30 text-gold text-xs tracking-wider uppercase clip-path-button hover:bg-gold hover:text-noir transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
