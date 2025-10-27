'use client';

import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    category: 'E-Commerce Excellence',
    title: 'Luxury Fashion Platform',
    description: 'A bespoke e-commerce ecosystem featuring AI-powered personalization, real-time inventory synchronization, immersive 3D product visualization, and seamless omnichannel integration.',
    tech: ['Next.js 14', 'Three.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    image: '/api/placeholder/800/600',
    gradient: 'from-gold/20 to-gold-dark/20',
  },
  {
    id: 2,
    category: 'Financial Technology',
    title: 'Investment Dashboard',
    description: 'Enterprise-grade financial analytics platform with real-time market data visualization, sophisticated portfolio management, and predictive analytics.',
    tech: ['React 18', 'D3.js', 'Python', 'FastAPI', 'Redis', 'Docker'],
    image: '/api/placeholder/800/600',
    gradient: 'from-gold-light/20 to-gold/20',
  },
  {
    id: 3,
    category: 'Hospitality & Travel',
    title: 'Premium Hotel Booking',
    description: 'Sophisticated booking platform featuring immersive virtual tours, intelligent concierge AI chatbot, dynamic pricing engine, and global distribution integration.',
    tech: ['Vue.js 3', 'WebGL', 'Django', 'MongoDB', 'GraphQL'],
    image: '/api/placeholder/800/600',
    gradient: 'from-gold-dark/20 to-platinum/10',
  },
  {
    id: 4,
    category: 'Creative Studio',
    title: 'Artist Portfolio CMS',
    description: 'Custom content management system for creative professionals with advanced media galleries, client collaboration portals, and automated workflows.',
    tech: ['Nuxt.js', 'Prisma ORM', 'GraphQL', 'TypeScript', 'Cloudflare'],
    image: '/api/placeholder/800/600',
    gradient: 'from-platinum/10 to-gold-light/20',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [springProps, setSpringProps] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setSpringProps({ rotateX, rotateY, scale: 1.05 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSpringProps({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <animated.div
      ref={ref}
      style={{
        transform: springProps.rotateX.to(
          (rx) =>
            `perspective(1000px) rotateX(${rx}deg) rotateY(${springProps.rotateY.get()}deg) scale(${springProps.scale.get()})`
        ),
        opacity: inView ? 1 : 0,
        translateY: inView ? 0 : 50,
        transition: 'opacity 0.8s, transform 0.8s',
        transitionDelay: `${index * 0.2}s`,
      }}
      className="group relative"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative bg-gradient-to-br from-noir-soft to-noir-medium border border-gold/20 clip-path-card p-8 md:p-12 overflow-hidden cursor-pointer"
      >
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
        
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: isHovered
              ? `radial-gradient(600px circle at ${springProps.rotateY.get() * 10 + 50}% ${springProps.rotateX.get() * -10 + 50}%, rgba(212, 175, 55, 0.1), transparent 40%)`
              : 'none',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
              {project.category}
            </span>
            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold text-sm font-bold group-hover:bg-gold group-hover:text-noir transition-all duration-300">
              {String(project.id).padStart(2, '0')}
            </div>
          </div>

          <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-black mb-6 group-hover:text-gold transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-platinum text-base md:text-lg leading-relaxed mb-8 font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-gold/30 text-gold text-xs tracking-wider uppercase clip-path-button hover:bg-gold hover:text-noir transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-3 text-gold text-sm tracking-[0.2em] uppercase font-bold group-hover:gap-6 transition-all duration-300"
          >
            View Case Study
            <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-gold/10 group-hover:border-gold/30 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-gold/10 group-hover:border-gold/30 transition-colors duration-500" />
      </div>
    </animated.div>
  );
}

export default function ProjectsAdvanced() {
  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-gold-light/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gold/5 border border-gold/20 rounded-full backdrop-blur-xl">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-semibold">Portfolio</span>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-gold via-platinum to-gold bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-platinum/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Showcasing excellence in design, development, and digital innovation
          </p>
          
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
