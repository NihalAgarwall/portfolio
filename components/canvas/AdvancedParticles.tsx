'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function AdvancedParticles() {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particlesCount = 5000;
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    
    const goldColor = new THREE.Color('#D4AF37');
    const lightColor = new THREE.Color('#F4E4C1');
    
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      
      // Spiral galaxy formation
      const radius = Math.random() * 15;
      const spinAngle = radius * 0.5;
      const branchAngle = ((i % 3) / 3) * Math.PI * 2;
      
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + (Math.random() - 0.5) * 2;
      
      // Color gradient
      const mixedColor = goldColor.clone();
      mixedColor.lerp(lightColor, Math.random());
      
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, []);

  useFrame((state) => {
    if (points.current) {
      const time = state.clock.getElapsedTime();
      
      points.current.rotation.y = time * 0.02;
      points.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      
      // Mouse interaction
      points.current.rotation.y += mouse.x * 0.0001;
      points.current.rotation.x += mouse.y * 0.0001;
    }
  });

  return (
    <points ref={points}>
      <primitive object={particlesGeometry} attach="geometry" />
      <pointsMaterial
        size={0.015}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
