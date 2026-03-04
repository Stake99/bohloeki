'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingGeometryProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
  speed?: number;
}

/**
 * Floating geometric shapes for background depth
 */
export function FloatingGeometry({
  position = [0, 0, 0],
  color = '#1B4332',
  size = 0.5,
  speed = 1,
}: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001 * speed;
      meshRef.current.rotation.y += 0.002 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial
        color={color}
        roughness={0.5}
        metalness={0.5}
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
}
