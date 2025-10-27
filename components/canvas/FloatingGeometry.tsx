'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.15;
      sphereRef.current.position.y = Math.cos(time * 0.4) * 0.3;
    }
    
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.25;
      octahedronRef.current.rotation.z = time * 0.2;
      octahedronRef.current.position.y = Math.sin(time * 0.6) * 0.4;
    }
  });

  return (
    <>
      {/* Torus */}
      <mesh ref={torusRef} position={[4, 0, -5]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color="#D4AF37"
          transparent
          opacity={0.15}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>

      {/* Sphere */}
      <mesh ref={sphereRef} position={[-4, 2, -8]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <MeshDistortMaterial
          color="#F4E4C1"
          transparent
          opacity={0.1}
          distort={0.4}
          speed={1.5}
          wireframe
        />
      </mesh>

      {/* Octahedron */}
      <mesh ref={octahedronRef} position={[0, -3, -6]}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#9B7F2A"
          transparent
          opacity={0.12}
          wireframe
          emissive="#D4AF37"
          emissiveIntensity={0.2}
        />
      </mesh>
    </>
  );
}
