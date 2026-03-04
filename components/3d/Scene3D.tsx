'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, ReactNode } from 'react';

interface Scene3DProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base 3D Scene wrapper with Canvas setup
 * Provides optimized settings for performance
 */
export function Scene3D({ children, className = '' }: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
