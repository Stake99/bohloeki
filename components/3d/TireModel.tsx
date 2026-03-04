'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

/**
 * Interactive 3D Tire Model
 * Rotates based on mouse movement and scroll
 */
export function TireModel({ mouseX = 0, mouseY = 0 }: { mouseX?: number; mouseY?: number }) {
  const meshRef = useRef<Mesh>(null);

  // Smooth rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = mouseY * 0.3;
      meshRef.current.rotation.z = mouseX * 0.2;
    }
  });

  return (
    <group>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D4AF37" />

      {/* Tire outer ring */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.6, 16, 100]} />
        <meshStandardMaterial
          color="#1C1C1C"
          roughness={0.7}
          metalness={0.3}
          emissive="#1B4332"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner details */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#D4AF37"
          roughness={0.3}
          metalness={0.8}
          emissive="#D4AF37"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Center hub */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        <meshStandardMaterial
          color="#2D6A4F"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}
