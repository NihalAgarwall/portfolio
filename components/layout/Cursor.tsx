'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed w-5 h-5 border-2 border-gold rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 2 : 1})`,
          left: 0,
          top: 0,
        }}
      />
      <div
        className="fixed w-12 h-12 border border-gold rounded-full pointer-events-none z-[9999] opacity-50"
        style={{
          transform: `translate3d(${followerPosition.x}px, ${followerPosition.y}px, 0)`,
          left: 0,
          top: 0,
        }}
      />
    </>
  );
}
