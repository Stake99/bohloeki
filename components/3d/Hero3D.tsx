'use client';

import { useState, useEffect } from 'react';
import { Scene3D } from './Scene3D';
import { TireModel } from './TireModel';
import { FloatingGeometry } from './FloatingGeometry';
import { canHandle3D } from '@/lib/performance';

/**
 * 3D Hero Scene with interactive tire model
 * Responds to mouse movement for immersive effect
 * Automatically disables on low-end devices
 */
export function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Check if device can handle 3D
    setShouldRender3D(canHandle3D());

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!shouldRender3D) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Scene3D>
        <TireModel mouseX={mousePosition.x} mouseY={mousePosition.y} />
        
        {/* Floating background elements */}
        <FloatingGeometry position={[-3, 2, -2]} color="#D4AF37" size={0.3} speed={0.5} />
        <FloatingGeometry position={[3, -1, -3]} color="#2D6A4F" size={0.4} speed={0.7} />
        <FloatingGeometry position={[-2, -2, -4]} color="#1B4332" size={0.35} speed={0.6} />
        <FloatingGeometry position={[2, 3, -2]} color="#D4AF37" size={0.25} speed={0.8} />
      </Scene3D>
    </div>
  );
}
