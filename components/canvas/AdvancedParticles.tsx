'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function AdvancedParticles() {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const particlesCount = 5000;
  
  const [positions, colors, scales] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    
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
      
      scales[i] = Math.random();
    }
    
    return [positions, colors, scales];
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
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aScale"
          count={particlesCount}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
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
