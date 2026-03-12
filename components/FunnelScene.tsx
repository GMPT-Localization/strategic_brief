
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Cylinder, Environment, Torus, Sphere } from '@react-three/drei';

export const MarketingFunnelScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
        <Environment preset="city" />
        
        <Float rotationIntensity={0.2} floatIntensity={0.2} speed={1.5}>
          <group rotation={[0.1, 0, 0]} position={[0, 0.5, 0]}>
            
            {/* Funnel Section 1: Top (Awareness) - Lightest Blue */}
            <Cylinder args={[2.5, 1.8, 1, 64]} position={[0, 1.5, 0]}>
               <meshStandardMaterial color="#93C5FD" metalness={0.6} roughness={0.2} transparent opacity={0.9} />
            </Cylinder>
            <Torus args={[2.5, 0.05, 16, 64]} position={[0, 2, 0]} rotation={[Math.PI/2, 0, 0]}>
               <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} />
            </Torus>

            {/* Funnel Section 2: Middle (Consideration) - Medium Blue */}
            <Cylinder args={[1.8, 1.0, 1, 64]} position={[0, 0.5, 0]}>
               <meshStandardMaterial color="#3B82F6" metalness={0.6} roughness={0.2} transparent opacity={0.9} />
            </Cylinder>
             <Torus args={[1.8, 0.05, 16, 64]} position={[0, 1, 0]} rotation={[Math.PI/2, 0, 0]}>
               <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} />
            </Torus>

            {/* Funnel Section 3: Bottom (Conversion) - Dark Blue */}
            <Cylinder args={[1.0, 0.3, 1, 64]} position={[0, -0.5, 0]}>
               <meshStandardMaterial color="#1E40AF" metalness={0.6} roughness={0.2} transparent opacity={0.9} />
            </Cylinder>
             <Torus args={[1.0, 0.05, 16, 64]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
               <meshStandardMaterial color="#FFFFFF" metalness={0.9} roughness={0.1} />
            </Torus>

            {/* Spout */}
            <Cylinder args={[0.3, 0.3, 0.5, 64]} position={[0, -1.25, 0]}>
               <meshStandardMaterial color="#0F172A" metalness={0.8} roughness={0.2} />
            </Cylinder>

            {/* Abstract Particles floating in/around */}
            <Sphere args={[0.15]} position={[-2, 2.5, 1]}>
               <meshStandardMaterial color="#FFFFFF" />
            </Sphere>
            <Sphere args={[0.1]} position={[1.8, 2.2, -1]}>
               <meshStandardMaterial color="#FFFFFF" />
            </Sphere>
            <Sphere args={[0.12]} position={[0.5, 2.8, 0.5]}>
               <meshStandardMaterial color="#FFFFFF" />
            </Sphere>

             {/* Output Particle */}
             <Sphere args={[0.2]} position={[0, -2, 0]}>
               <meshStandardMaterial color="#4ADE80" emissive="#4ADE80" emissiveIntensity={0.5} />
            </Sphere>

          </group>
        </Float>
      </Canvas>
    </div>
  );
}
