'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import AdvancedParticles from './AdvancedParticles';
import FloatingGeometry from './FloatingGeometry';
import { OrbitControls, Environment } from '@react-three/drei';

export default function Scene() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#D4AF37" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F4E4C1" />
          
          <AdvancedParticles />
          <FloatingGeometry />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
