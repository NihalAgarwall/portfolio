'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;

    gsap.to(buttonRef.current, {
      x,
      y,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  const baseStyles = 'relative inline-block px-12 py-5 text-sm tracking-[0.3em] uppercase font-bold overflow-hidden group';
  
  const variants = {
    primary: 'bg-gradient-to-br from-gold to-gold-dark text-noir',
    secondary: 'border-2 border-gold text-gold',
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      className={`${baseStyles} ${variants[variant]} clip-path-button transition-all duration-500`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background */}
      <span className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
      
      {/* Text */}
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <span className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
          →
        </span>
      </span>
    </Link>
  );
}
