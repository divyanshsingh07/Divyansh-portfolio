"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

export interface GlobeMarker {
  lat: number;
  lng: number;
  src: string;
  label: string;
}

interface GlobeConfig {
  atmosphereColor?: string;
  atmosphereIntensity?: number;
  bumpScale?: number;
  autoRotateSpeed?: number;
}

interface Globe3DProps {
  className?: string;
  markers?: GlobeMarker[];
  config?: GlobeConfig;
}

const latLongToVector3 = (lat: number, lng: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

const GlobeMesh = ({ config, markers = [] }: { config: GlobeConfig; markers?: GlobeMarker[] }) => {
  const globeRef = useRef<THREE.Mesh>(null);
  
  // Use a basic generated material for safety, or you can load an earth map if passed
  const radius = 2;

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += (config.autoRotateSpeed || 0.5) * 0.01;
    }
  });

  return (
    <group ref={globeRef as any}>
      {/* Globe Sphere */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          roughness={0.6}
          metalness={0.1}
          wireframe={true} // Adding wireframe for that tech look since no texture is provided
        />
      </mesh>

      {/* Atmosphere / Glow */}
      <mesh>
        <sphereGeometry args={[radius * 1.05, 64, 64]} />
        <meshBasicMaterial 
          color={config.atmosphereColor || "#4da6ff"} 
          transparent 
          opacity={config.atmosphereIntensity ? config.atmosphereIntensity / 100 : 0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Markers */}
      {markers.map((marker, idx) => {
        const position = latLongToVector3(marker.lat, marker.lng, radius * 1.01);
        return (
          <group key={idx} position={position}>
            {/* Simple dot for the marker */}
            <mesh>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
            <Html center distanceFactor={15}>
              <div className="flex flex-col items-center pointer-events-none">
                {marker.src && (
                  <img src={marker.src} alt={marker.label} className="w-8 h-8 rounded-full border-2 border-white/50 shadow-lg object-cover mb-1" />
                )}
                <div className="bg-black/80 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md border border-white/10 whitespace-nowrap hidden group-hover:block">
                  {marker.label}
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

export const Globe3D: React.FC<Globe3DProps> = ({ className, markers, config = {} }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <GlobeMesh config={config} markers={markers} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false} /* we control rotation in the mesh */
        />
      </Canvas>
    </div>
  );
};
