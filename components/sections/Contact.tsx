'use client';

import MagneticButton from '@/components/ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-48 px-6 md:px-24 bg-gradient-to-b from-noir to-noir-soft text-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-light/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        <div className="mb-28">
          <div className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-semibold">— 04</div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gold via-platinum to-gold bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        {/* Email */}
        <div className="mb-16">
          <a 
            href="mailto:nihalagarwal2025@gmail.com" 
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-black text-gold hover:tracking-wider transition-all duration-500 inline-block relative group"
          >
            nihalagarwal2025@gmail.com
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500 border-gold-glow" />
          </a>
        </div>

        <p className="text-platinum text-xl mb-20 font-light leading-relaxed max-w-[700px] mx-auto">
          Available for select projects, collaborations, and innovative ventures.
          <br />
          Let's create something extraordinary together.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {[
            { name: 'GitHub', href: 'https://github.com/NihalAgarwall' },
            { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nihal-agarwal-859237326/' },
          
            
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-24 h-24 border border-gold/30 flex items-center justify-center text-gold text-base font-bold clip-path-card bg-white/[0.02] hover:bg-gold hover:text-noir hover:-translate-y-3 hover:shadow-gold-lg transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">{social.name.slice(0, 2).toUpperCase()}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold via-gold-light to-gold blur-2xl opacity-30" />
          <MagneticButton href="mailto:nihalagarwal2025@gmail.com" variant="primary">
            Start Your Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
