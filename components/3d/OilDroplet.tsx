'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

/**
 * Animated 3D Oil Droplet
 * Morphs and floats with subtle animation
 */
export function OilDroplet() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#D4AF37" />
      
      {/* Main droplet */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#1B4332"
          roughness={0.2}
          metalness={0.8}
          emissive="#D4AF37"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Highlight sphere */}
      <mesh position={[0.3, 0.4, 0.3]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
}
