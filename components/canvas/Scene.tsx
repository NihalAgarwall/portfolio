'use client';

import { Canvas } from '@react-three/fiber';
import FloatingGeometry from './FloatingGeometry';
import AdvancedParticles from './AdvancedParticles';

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingGeometry />
        <AdvancedParticles />
      </Canvas>
    </div>
  );
}
