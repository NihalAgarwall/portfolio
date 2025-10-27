'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { number: 10, suffix: '+', label: 'Projects Completed' },
  { number: 5, suffix: '+', label: 'Happy Clients' },
  { number: 1, suffix: '+', label: 'Years Experience' },
  { number: 99, suffix: '%', label: 'Client Satisfaction' },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-48 px-6 md:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-32">
          <div className="text-sm tracking-[0.4em] uppercase text-gold mb-6 font-semibold">— 03</div>
          <h2 className="font-playfair text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gold via-platinum to-gold bg-clip-text text-transparent">
            By The Numbers
          </h2>
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center p-12 bg-gradient-to-br from-gold/5 to-gold/[0.02] border border-gold/10 clip-path-card hover:border-gold hover:-translate-y-3 transition-all duration-500">
              <div className="font-playfair text-7xl font-black mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-platinum text-sm tracking-[0.2em] uppercase font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
