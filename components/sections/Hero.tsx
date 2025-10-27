'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '@/components/ui/Button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-subtitle', { opacity: 0, y: 30, duration: 1.2 })
        .from('.hero-word', { y: 200, duration: 1.4, stagger: 0.2 }, '-=0.6')
        .from('.hero-description', { opacity: 0, y: 30, duration: 1 }, '-=0.8')
        .from('.hero-cta', { opacity: 0, y: 30, duration: 1 }, '-=0.6');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-24 text-center z-10">
        <div className="hero-subtitle text-xs md:text-sm tracking-[0.6em] uppercase text-gold mb-10 font-semibold">
          Full-Stack Developer
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-9xl font-black leading-[1.1] mb-12">
          <div className="overflow-hidden pb-3">
            <span className="hero-word inline-block">Architecting</span>
          </div>
          <div className="overflow-hidden pb-3">
            <span className="hero-word inline-block bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent">
              Digital
            </span>
          </div>
          <div className="overflow-hidden pb-3">
            <span className="hero-word inline-block">Masterpieces</span>
          </div>
        </h1>
        <p className="hero-description text-lg md:text-2xl text-platinum max-w-[800px] mx-auto mb-16 leading-relaxed font-light">
          Transforming ambitious visions into exceptional digital experiences through cutting-edge technology and uncompromising craftsmanship.
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center">
          <Button href="#work" variant="primary">Explore Portfolio</Button>
          <Button href="#contact" variant="secondary">Start a Project</Button>
        </div>
      </div>
      <div className="absolute top-[10%] right-[5%] w-48 md:w-72 h-48 md:h-72 border border-gold/15 rounded-full animate-spin-slow hidden md:block" />
      <div className="absolute bottom-[15%] left-[8%] w-32 md:w-48 h-32 md:h-48 border border-gold/15 rounded-full animate-spin-reverse hidden md:block" />
    </section>
  );
}
