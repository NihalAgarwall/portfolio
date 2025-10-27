'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function AdvancedParticles() {
  const points = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particlesCount = 2000;

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * viewport.width * 2;
      positions[i3 + 1] = (Math.random() - 0.5) * viewport.height * 2;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      const colorValue = Math.random();
      colors[i3] = colorValue;
      colors[i3 + 1] = colorValue * 0.5;
      colors[i3 + 2] = 0;
    }

    return [positions, colors];
  }, [viewport]);

  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const positionArray = points.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const x = positionArray[i3];
      const y = positionArray[i3 + 1];

      positionArray[i3 + 1] = y - 0.01;

      if (positionArray[i3 + 1] < -viewport.height) {
        positionArray[i3 + 1] = viewport.height;
      }

      positionArray[i3] = x + Math.sin(time + i) * 0.001;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.z = time * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
