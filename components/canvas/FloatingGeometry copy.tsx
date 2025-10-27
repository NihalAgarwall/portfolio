'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

function FloatingShape({ position, geometry, color }: any) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
}

export default function FloatingGeometry() {
  return (
    <>
      <FloatingShape 
        position={[-3, 2, -2]} 
        geometry={<icosahedronGeometry args={[1, 0]} />} 
        color="#D4AF37"
      />
      <FloatingShape 
        position={[3, -1, -3]} 
        geometry={<torusGeometry args={[0.8, 0.3, 16, 100]} />} 
        color="#F4E4C1"
      />
      <FloatingShape 
        position={[-2, -2, -4]} 
        geometry={<octahedronGeometry args={[1]} />} 
        color="#E5E4E2"
      />
      <FloatingShape 
        position={[2, 3, -2]} 
        geometry={<boxGeometry args={[1.2, 1.2, 1.2]} />} 
        color="#D4AF37"
      />
      <FloatingShape 
        position={[0, -3, -5]} 
        geometry={<tetrahedronGeometry args={[1]} />} 
        color="#F4E4C1"
      />
    </>
  );
}
