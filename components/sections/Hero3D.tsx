'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-badge', {
        opacity: 0,
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
      })
      .from('.hero-word', {
        y: 300,
        rotateX: -90,
        opacity: 0,
        duration: 1.8,
        stagger: 0.3,
        ease: 'power4.out',
      }, '-=0.5')
      .from('.hero-description', {
        opacity: 0,
        y: 50,
        duration: 1.2,
      }, '-=1')
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(2)',
      }, '-=0.8')
      .from('.floating-element', {
        opacity: 0,
        scale: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.3)',
      }, '-=1.5');

      // Parallax scroll effect
      gsap.to('.hero-parallax', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-noir via-noir-soft to-noir-medium opacity-90" />
      
      {/* Animated light beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent opacity-20 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-light to-transparent opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="hero-parallax max-w-[1400px] mx-auto px-6 md:px-24 text-center z-10 relative">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-3 px-6 py-3 mb-10 bg-gradient-to-r from-gold/10 to-gold-dark/10 border border-gold/30 rounded-full backdrop-blur-xl">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs tracking-[0.4em] uppercase text-gold font-bold">
            Award-Winning Developer
          </span>
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
        </div>

        {/* 3D Perspective Title */}
        <h1 
          className="font-playfair text-5xl md:text-7xl lg:text-[10rem] font-black leading-[0.9] mb-16"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="overflow-hidden pb-4">
            <span className="hero-word inline-block bg-gradient-to-r from-white via-platinum to-white bg-clip-text text-transparent">
              Architecting
            </span>
          </div>
          <div className="overflow-hidden pb-4">
            <span className="hero-word inline-block relative">
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-gold via-gold-light to-gold opacity-50" />
              <span className="relative bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent animate-shimmer">
                Digital
              </span>
            </span>
          </div>
          <div className="overflow-hidden pb-4">
            <span className="hero-word inline-block bg-gradient-to-r from-white via-platinum to-white bg-clip-text text-transparent">
              Masterpieces
            </span>
          </div>
        </h1>

        {/* Enhanced Description */}
        <div className="hero-description relative max-w-[900px] mx-auto mb-16">
          <div className="absolute -inset-4 bg-gradient-to-r from-gold/5 via-gold-light/10 to-gold/5 blur-3xl" />
          <p className="relative text-xl md:text-2xl lg:text-3xl text-platinum leading-relaxed font-light">
            Transforming <span className="text-gold font-semibold">ambitious visions</span> into 
            exceptional digital experiences through 
            <span className="text-gold-light font-semibold"> cutting-edge technology</span> and 
            uncompromising craftsmanship.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold to-gold-dark blur-xl group-hover:blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
            <Button href="#work" variant="primary">
              View Masterpieces
            </Button>
          </div>
          <Button href="#contact" variant="secondary">
            Start Your Project
          </Button>
        </div>

        {/* Stats Row */}
        <div className="hero-cta grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { number: '150+', label: 'Projects' },
            { number: '8+', label: 'Years Exp.' },
            { number: '99%', label: 'Satisfied' },
          ].map((stat, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent blur-xl group-hover:blur-2xl transition duration-500" />
              <div className="relative border border-gold/20 bg-noir-soft/50 backdrop-blur-xl p-6 clip-path-card hover:border-gold transition-all duration-500">
                <div className="text-3xl md:text-4xl font-black font-playfair text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-xs tracking-wider uppercase text-platinum/70">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-element absolute top-[15%] right-[10%] w-64 h-64 border-2 border-gold/10 rounded-full animate-spin-slow backdrop-blur-3xl hidden lg:block" />
      <div className="floating-element absolute bottom-[20%] left-[8%] w-40 h-40 border-2 border-gold-light/10 rounded-full animate-spin-reverse backdrop-blur-3xl hidden lg:block" />
      <div className="floating-element absolute top-[40%] left-[15%] w-32 h-32 border-2 border-gold-dark/10 clip-path-diamond animate-float backdrop-blur-3xl hidden xl:block" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
        <span className="text-xs tracking-[0.4em] uppercase text-gold font-semibold">Scroll</span>
        <div className="w-6 h-10 border-2 border-gold/30 rounded-full p-1">
          <div className="w-1 h-3 bg-gold rounded-full animate-scroll mx-auto" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-noir to-transparent pointer-events-none" />
    </section>
  );
}
