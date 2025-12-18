import React, { useState, useMemo, useRef, Suspense, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Float, Billboard, Sky, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useLanguage } from '../context/LanguageContext';
import { tnSchoolsData, getTotalStats, searchSchools, District, Block, School } from '../data/tnSchoolsData';

// Icons
const BackIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const SchoolIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const BlockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const HomeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const GridIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const MapViewIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const FullscreenIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const ExitFullscreenIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4H4m0 0l5 5m6-5h5v5m0-5l-5 5M9 15v5H4m0 0l5-5m6 5h5v-5m0 5l-5-5" />
  </svg>
);

const TravelIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const WalkIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

// District 3D positions (geographic approximation for Tamil Nadu)
// Using UPPERCASE to match the data file - All 38 districts
const district3DPositions: { [key: string]: { x: number; z: number } } = {
  // Northern Districts (Row 1)
  'CHENNAI': { x: 3.2, z: -4.2 },
  'TIRUVALLUR': { x: 2.2, z: -4.8 },
  'KANCHEEPURAM': { x: 2.6, z: -3.6 },
  'CHENGALPATTU': { x: 3.4, z: -3.0 },
  'VELLORE': { x: 1.4, z: -5.2 },
  'RANIPET': { x: 2.0, z: -4.4 },
  'TIRUPATHUR': { x: 0.8, z: -5.6 },
  'KRISHNAGIRI': { x: -0.2, z: -5.0 },
  'DHARMAPURI': { x: -0.6, z: -4.2 },

  // Central North Districts (Row 2)
  'VILLUPURAM': { x: 2.8, z: -2.4 },
  'KALLAKURICHI': { x: 1.8, z: -2.6 },
  'TIRUVANNAMALAI': { x: 1.0, z: -3.6 },
  'SALEM': { x: -0.4, z: -3.0 },
  'NAMAKKAL': { x: -1.2, z: -2.0 },
  'ERODE': { x: -2.2, z: -2.6 },

  // Central Districts (Row 3)
  'CUDDALORE': { x: 3.2, z: -1.4 },
  'PERAMBALUR': { x: 1.2, z: -1.6 },
  'ARIYALUR': { x: 1.8, z: -0.8 },
  'TIRUCHIRAPPALLI': { x: 0.0, z: -0.8 },
  'KARUR': { x: -1.0, z: -0.6 },
  'TIRUPPUR': { x: -2.0, z: -1.2 },
  'COIMBATORE': { x: -3.2, z: -2.0 },
  'THE NILGIRIS': { x: -3.4, z: -3.2 },

  // East Central Districts (Row 4)
  'MAYILADUTHURAI': { x: 2.4, z: -0.2 },
  'NAGAPATTINAM': { x: 3.0, z: 0.4 },
  'THANJAVUR': { x: 1.4, z: 0.2 },
  'TIRUVARUR': { x: 2.0, z: 0.8 },
  'PUDUKKOTTAI': { x: 0.4, z: 0.8 },

  // Southern Districts (Row 5-6)
  'DINDIGUL': { x: -1.4, z: 0.2 },
  'MADURAI': { x: -0.8, z: 1.2 },
  'SIVAGANGAI': { x: 0.2, z: 1.6 },
  'RAMANATHAPURAM': { x: 1.2, z: 2.2 },
  'VIRUDHUNAGAR': { x: -1.2, z: 1.8 },
  'THENI': { x: -2.4, z: 0.6 },
  'TENKASI': { x: -2.4, z: 2.2 },
  'TIRUNELVELI': { x: -1.8, z: 2.8 },
  'THOOTHUKKUDI': { x: -0.6, z: 2.6 },
  'KANNIYAKUMARI': { x: -2.2, z: 3.6 },
};

// 3D District Block Component
const District3DBlock: React.FC<{
  district: District;
  position: [number, number, number];
  isHovered: boolean;
  isSelected: boolean;
  onHover: (name: string | null) => void;
  onClick: () => void;
}> = ({ district, position, isHovered, isSelected, onHover, onClick }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const schoolCount = district.blocks.reduce((acc, b) => acc + b.schools.length, 0);

  // Calculate height based on school count
  const baseHeight = 0.3;
  const height = baseHeight + (schoolCount / 50) * 0.8;

  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      const targetY = isHovered ? position[1] + 0.3 : position[1];
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);

      if (isHovered) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      } else {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, 0, 0.1);
      }
    }
  });

  const color = new THREE.Color(district.color);

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => onHover(district.name)}
        onPointerLeave={() => onHover(null)}
        onClick={onClick}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.8, height, 0.8]} />
        <meshStandardMaterial
          color={isHovered ? color.clone().multiplyScalar(1.3) : color}
          metalness={0.3}
          roughness={0.4}
          emissive={isHovered ? color.clone().multiplyScalar(0.3) : new THREE.Color(0x000000)}
        />
      </mesh>

      {/* Glow effect when hovered */}
      {isHovered && (
        <mesh position={[0, height / 2, 0]}>
          <boxGeometry args={[0.9, height + 0.1, 0.9]} />
          <meshBasicMaterial color={district.color} transparent opacity={0.2} />
        </mesh>
      )}

      {/* School count indicator */}
      <mesh position={[0, height + 0.15, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.5} />
      </mesh>

      {/* District label - Billboard keeps text facing camera */}
      {isHovered && (
        <Billboard position={[0, height + 0.5, 0]}>
          <Text
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {district.name}
          </Text>
        </Billboard>
      )}
    </group>
  );
};

// Tamil Nadu 3D Base Plate
const TamilNaduBase: React.FC = () => {
  return (
    <group>
      {/* Main base plate */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial
          color="#1e1b4b"
          metalness={0.1}
          roughness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Grid lines */}
      <gridHelper args={[12, 20, '#4c1d95', '#312e81']} position={[0, -0.19, 0]} />

      {/* Glowing border */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.18, 0]}>
        <ringGeometry args={[5.5, 6, 64]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

// Floating particles
const FloatingParticles3D: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = Math.random() * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#a78bfa" transparent opacity={0.6} />
    </points>
  );
};

// Camera auto-rotation
const CameraController: React.FC<{ autoRotate: boolean }> = ({ autoRotate }) => {
  const { camera } = useThree();

  useFrame((state) => {
    if (autoRotate) {
      const radius = 10;
      const speed = 0.1;
      camera.position.x = Math.sin(state.clock.elapsedTime * speed) * radius;
      camera.position.z = Math.cos(state.clock.elapsedTime * speed) * radius;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

// ==================== TRAVEL MODE COMPONENTS ====================

// Smooth camera transition for travel mode
const TravelCameraController: React.FC<{
  targetPosition: [number, number, number];
  targetLookAt: [number, number, number];
}> = ({ targetPosition, targetLookAt }) => {
  const { camera } = useThree();
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Smoothly interpolate camera position
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetPosition[0], 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetPosition[1], 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetPosition[2], 0.05);

    // Smoothly interpolate look at target
    currentLookAt.current.x = THREE.MathUtils.lerp(currentLookAt.current.x, targetLookAt[0], 0.05);
    currentLookAt.current.y = THREE.MathUtils.lerp(currentLookAt.current.y, targetLookAt[1], 0.05);
    currentLookAt.current.z = THREE.MathUtils.lerp(currentLookAt.current.z, targetLookAt[2], 0.05);

    camera.lookAt(currentLookAt.current);
  });

  return null;
};

// District Building for Travel Mode
const DistrictBuilding: React.FC<{
  district: District;
  position: [number, number, number];
  onClick: () => void;
  isNearby: boolean;
}> = ({ district, position, onClick, isNearby }) => {
  const meshRef = useRef<THREE.Group>(null);
  const schoolCount = district.blocks.reduce((acc, b) => acc + b.schools.length, 0);
  const height = 3 + (schoolCount / 30) * 4;

  useFrame((state) => {
    if (meshRef.current && isNearby) {
      // Subtle glow pulse when nearby
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={meshRef} position={position} onClick={onClick}>
      {/* Main building */}
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[4, height, 4]} />
        <meshStandardMaterial
          color={district.color}
          metalness={0.2}
          roughness={0.6}
          emissive={isNearby ? district.color : '#000000'}
          emissiveIntensity={isNearby ? 0.2 : 0}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, height + 0.5, 0]}>
        <boxGeometry args={[4.5, 1, 4.5]} />
        <meshStandardMaterial color="#1e1b4b" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Windows */}
      {[...Array(Math.min(4, Math.floor(height / 2)))].map((_, i) => (
        <group key={i}>
          <mesh position={[2.01, i * 2 + 1.5, 0]} castShadow>
            <boxGeometry args={[0.1, 1, 1.5]} />
            <meshStandardMaterial color="#fef3c7" emissive="#fef3c7" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[-2.01, i * 2 + 1.5, 0]} castShadow>
            <boxGeometry args={[0.1, 1, 1.5]} />
            <meshStandardMaterial color="#fef3c7" emissive="#fef3c7" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}

      {/* District name label */}
      <Billboard position={[0, height + 2.5, 0]}>
        <Text
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.08}
          outlineColor="#000000"
        >
          {district.name}
        </Text>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.4}
          color="#a78bfa"
          anchorX="center"
          anchorY="middle"
        >
          {schoolCount} Schools • {district.blocks.length} Blocks
        </Text>
      </Billboard>

      {/* School count indicator sphere */}
      <mesh position={[0, height + 1.5, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
};

// Block Building component for detailed view
const BlockBuilding: React.FC<{
  block: Block;
  position: [number, number, number];
  districtColor: string;
  onClick: () => void;
  isNearby: boolean;
}> = ({ block, position, districtColor, onClick, isNearby }) => {
  const height = 1.5 + (block.schools.length / 10) * 2;

  return (
    <group position={position} onClick={onClick}>
      <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
        <boxGeometry args={[2, height, 2]} />
        <meshStandardMaterial
          color={districtColor}
          metalness={0.1}
          roughness={0.7}
          emissive={isNearby ? districtColor : '#000000'}
          emissiveIntensity={isNearby ? 0.3 : 0}
        />
      </mesh>

      {/* Block label */}
      <Billboard position={[0, height + 1, 0]}>
        <Text
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.04}
          outlineColor="#000000"
        >
          {block.name}
        </Text>
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.25}
          color="#93c5fd"
          anchorX="center"
          anchorY="middle"
        >
          {block.schools.length} Schools
        </Text>
      </Billboard>
    </group>
  );
};

// School Building component
const SchoolBuilding: React.FC<{
  school: School;
  position: [number, number, number];
  districtColor: string;
  isNearby: boolean;
}> = ({ school, position, districtColor, isNearby }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && isNearby) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* School building */}
      <mesh ref={meshRef} castShadow receiveShadow position={[0, 0.75, 0]}>
        <boxGeometry args={[1.2, 1.5, 1.2]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.1}
          roughness={0.8}
          emissive={isNearby ? '#3b82f6' : '#000000'}
          emissiveIntensity={isNearby ? 0.4 : 0}
        />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.7, 0]}>
        <coneGeometry args={[0.9, 0.6, 4]} />
        <meshStandardMaterial color="#ef4444" />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.4, 0.61]}>
        <boxGeometry args={[0.3, 0.8, 0.05]} />
        <meshStandardMaterial color="#854d0e" />
      </mesh>

      {/* School label - only when nearby */}
      {isNearby && (
        <Billboard position={[0, 2.8, 0]}>
          <Text
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="#000000"
            maxWidth={4}
          >
            {school.name.length > 30 ? school.name.substring(0, 30) + '...' : school.name}
          </Text>
          <Text
            position={[0, -0.35, 0]}
            fontSize={0.15}
            color="#fbbf24"
            anchorX="center"
            anchorY="middle"
          >
            #{school.sno}
          </Text>
        </Billboard>
      )}

      {/* Marker pin above school */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={districtColor}
          emissive={districtColor}
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
};

// Ground/Road for Travel Mode
const TravelGround: React.FC = () => {
  return (
    <group>
      {/* Main ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.1} roughness={0.9} />
      </mesh>

      {/* Road network */}
      {/* Horizontal roads */}
      {[-20, -10, 0, 10, 20].map((z) => (
        <mesh key={`h${z}`} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, z]}>
          <planeGeometry args={[60, 3]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
      ))}

      {/* Vertical roads */}
      {[-20, -10, 0, 10, 20].map((x) => (
        <mesh key={`v${x}`} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.01, 0]}>
          <planeGeometry args={[3, 60]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
      ))}

      {/* Road markings */}
      {[-20, -10, 0, 10, 20].map((z) => (
        <group key={`mark${z}`}>
          {[-25, -15, -5, 5, 15, 25].map((x) => (
            <mesh key={`${x}-${z}`} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.02, z]}>
              <planeGeometry args={[2, 0.2]} />
              <meshStandardMaterial color="#fbbf24" />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
};

// Mini-map component
const MiniMap: React.FC<{
  playerPosition: THREE.Vector3;
  districts: District[];
  language: string;
}> = ({ playerPosition, districts, language }) => {
  const mapSize = 150;
  const scale = mapSize / 60; // Map world size (60) to minimap size

  return (
    <div className="absolute top-4 right-4 z-30">
      <div className="bg-black/80 backdrop-blur-md rounded-xl p-2 border border-purple-500/30">
        <div className="text-xs text-white mb-1 text-center font-semibold">
          {language === 'ta' ? 'வரைபடம்' : 'Mini Map'}
        </div>
        <div
          className="relative rounded-lg overflow-hidden border border-white/20"
          style={{ width: mapSize, height: mapSize, background: '#1a1a2e' }}
        >
          {/* Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(#4c1d95 1px, transparent 1px), linear-gradient(90deg, #4c1d95 1px, transparent 1px)',
            backgroundSize: '15px 15px'
          }} />

          {/* Districts as dots */}
          {districts.map((district) => {
            const pos = district3DPositions[district.name];
            if (!pos) return null;
            const x = (pos.x + 5) * scale * 5;
            const y = (pos.z + 5) * scale * 5;
            return (
              <div
                key={district.name}
                className="absolute w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: mapSize / 2 + x,
                  top: mapSize / 2 + y,
                  backgroundColor: district.color,
                }}
                title={district.name}
              />
            );
          })}

          {/* Player position */}
          <div
            className="absolute w-3 h-3 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse border-2 border-white"
            style={{
              left: mapSize / 2 + playerPosition.x * scale,
              top: mapSize / 2 + playerPosition.z * scale,
            }}
          />

          {/* Player direction indicator */}
          <div
            className="absolute w-0 h-0 transform -translate-x-1/2"
            style={{
              left: mapSize / 2 + playerPosition.x * scale,
              top: mapSize / 2 + playerPosition.z * scale - 8,
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderBottom: '8px solid #22c55e',
            }}
          />
        </div>
        <div className="text-[10px] text-gray-400 text-center mt-1">
          X: {playerPosition.x.toFixed(0)} Z: {playerPosition.z.toFixed(0)}
        </div>
      </div>
    </div>
  );
};

// Travel Mode 3D Scene - Redesigned with click navigation
const TravelMode3DScene: React.FC<{
  onDistrictClick: (district: District) => void;
  onBlockClick: (block: Block, district: District) => void;
  selectedDistrict: District | null;
  selectedBlock: Block | null;
  hoveredItem: string | null;
  setHoveredItem: (item: string | null) => void;
}> = ({
  onDistrictClick,
  onBlockClick,
  selectedDistrict,
  selectedBlock,
  hoveredItem,
  setHoveredItem
}) => {
  // Calculate camera position based on current view
  const getCameraSettings = () => {
    if (selectedBlock) {
      // Viewing schools - closer view
      return {
        position: [12, 10, 12] as [number, number, number],
        lookAt: [0, 0, 0] as [number, number, number]
      };
    } else if (selectedDistrict) {
      // Viewing blocks - medium view
      return {
        position: [20, 15, 20] as [number, number, number],
        lookAt: [0, 0, 0] as [number, number, number]
      };
    } else {
      // Viewing all districts - wide view
      return {
        position: [30, 25, 30] as [number, number, number],
        lookAt: [0, 0, 0] as [number, number, number]
      };
    }
  };

  const cameraSettings = getCameraSettings();

  return (
    <Canvas
      shadows
      camera={{ position: [30, 25, 30], fov: 50, near: 0.1, far: 500 }}
      style={{ background: 'linear-gradient(to bottom, #0f0f23, #1a1a2e)' }}
    >
      <Suspense fallback={null}>
        {/* Sky and atmosphere */}
        <Sky sunPosition={[100, 20, 100]} turbidity={8} rayleigh={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <fog attach="fog" args={['#1a1a2e', 30, 80]} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[30, 40, 30]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 15, 0]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-20, 10, 20]} intensity={0.3} color="#22c55e" />

        {/* Ground */}
        <TravelGround />

        {/* Orbit Controls - Free mouse movement */}
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          minDistance={10}
          maxDistance={60}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          target={cameraSettings.lookAt}
        />

        {/* Render based on current view level */}
        {!selectedDistrict && !selectedBlock && (
          // Show all 38 district buildings in a grid layout
          <>
            {tnSchoolsData.map((district, index) => {
              // Arrange in a more compact 8x5 grid
              const cols = 8;
              const row = Math.floor(index / cols);
              const col = index % cols;
              const spacing = 5;
              const x = (col - cols / 2 + 0.5) * spacing;
              const z = (row - 2.5) * spacing;

              const isHovered = hoveredItem === district.name;
              const schoolCount = district.blocks.reduce((acc, b) => acc + b.schools.length, 0);
              const height = 2 + (schoolCount / 40) * 3;

              return (
                <group
                  key={district.name}
                  position={[x, 0, z]}
                  onClick={(e) => { e.stopPropagation(); onDistrictClick(district); }}
                  onPointerEnter={() => setHoveredItem(district.name)}
                  onPointerLeave={() => setHoveredItem(null)}
                >
                  {/* Building */}
                  <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
                    <boxGeometry args={[3.5, height, 3.5]} />
                    <meshStandardMaterial
                      color={district.color}
                      metalness={0.2}
                      roughness={0.5}
                      emissive={isHovered ? district.color : '#000000'}
                      emissiveIntensity={isHovered ? 0.4 : 0}
                    />
                  </mesh>

                  {/* Roof */}
                  <mesh position={[0, height + 0.3, 0]}>
                    <boxGeometry args={[4, 0.6, 4]} />
                    <meshStandardMaterial color="#1e1b4b" />
                  </mesh>

                  {/* Glowing top indicator */}
                  <mesh position={[0, height + 0.8, 0]}>
                    <sphereGeometry args={[0.25, 16, 16]} />
                    <meshStandardMaterial
                      color="#22c55e"
                      emissive="#22c55e"
                      emissiveIntensity={isHovered ? 1 : 0.5}
                    />
                  </mesh>

                  {/* Always visible label */}
                  <Billboard position={[0, height + 2, 0]}>
                    <Text
                      fontSize={isHovered ? 0.5 : 0.35}
                      color="white"
                      anchorX="center"
                      anchorY="middle"
                      outlineWidth={0.05}
                      outlineColor="#000000"
                    >
                      {district.name}
                    </Text>
                    {isHovered && (
                      <Text
                        position={[0, -0.5, 0]}
                        fontSize={0.25}
                        color="#a78bfa"
                        anchorX="center"
                        anchorY="middle"
                      >
                        {schoolCount} Schools • {district.blocks.length} Blocks
                      </Text>
                    )}
                  </Billboard>

                  {/* Hover highlight ring */}
                  {isHovered && (
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
                      <ringGeometry args={[2, 2.5, 32]} />
                      <meshBasicMaterial color={district.color} transparent opacity={0.5} />
                    </mesh>
                  )}
                </group>
              );
            })}

            {/* Title */}
            <Billboard position={[0, 12, 0]}>
              <Text fontSize={1.2} color="white" outlineWidth={0.1} outlineColor="#4c1d95">
                Tamil Nadu Districts
              </Text>
              <Text position={[0, -1.2, 0]} fontSize={0.5} color="#a78bfa">
                Click any district to explore
              </Text>
            </Billboard>
          </>
        )}

        {selectedDistrict && !selectedBlock && (
          // Show blocks within selected district
          <>
            {selectedDistrict.blocks.map((block, index) => {
              // Arrange blocks in a circular pattern
              const totalBlocks = selectedDistrict.blocks.length;
              const angle = (index / totalBlocks) * Math.PI * 2;
              const radius = 6 + Math.floor(index / 8) * 4;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;

              const isHovered = hoveredItem === block.name;
              const height = 1.5 + (block.schools.length / 15) * 2;

              return (
                <group
                  key={block.name}
                  position={[x, 0, z]}
                  onClick={(e) => { e.stopPropagation(); onBlockClick(block, selectedDistrict); }}
                  onPointerEnter={() => setHoveredItem(block.name)}
                  onPointerLeave={() => setHoveredItem(null)}
                >
                  <mesh castShadow receiveShadow position={[0, height / 2, 0]}>
                    <boxGeometry args={[2.5, height, 2.5]} />
                    <meshStandardMaterial
                      color={selectedDistrict.color}
                      metalness={0.15}
                      roughness={0.6}
                      emissive={isHovered ? selectedDistrict.color : '#000000'}
                      emissiveIntensity={isHovered ? 0.4 : 0}
                    />
                  </mesh>

                  {/* Roof */}
                  <mesh position={[0, height + 0.2, 0]}>
                    <boxGeometry args={[2.8, 0.4, 2.8]} />
                    <meshStandardMaterial color="#312e81" />
                  </mesh>

                  {/* Label */}
                  <Billboard position={[0, height + 1.5, 0]}>
                    <Text
                      fontSize={isHovered ? 0.4 : 0.3}
                      color="white"
                      anchorX="center"
                      anchorY="middle"
                      outlineWidth={0.04}
                      outlineColor="#000000"
                    >
                      {block.name}
                    </Text>
                    <Text
                      position={[0, -0.4, 0]}
                      fontSize={0.2}
                      color="#93c5fd"
                      anchorX="center"
                      anchorY="middle"
                    >
                      {block.schools.length} Schools
                    </Text>
                  </Billboard>

                  {isHovered && (
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
                      <ringGeometry args={[1.5, 2, 32]} />
                      <meshBasicMaterial color={selectedDistrict.color} transparent opacity={0.5} />
                    </mesh>
                  )}
                </group>
              );
            })}

            {/* District title in center */}
            <Billboard position={[0, 8, 0]}>
              <Text fontSize={0.9} color="white" outlineWidth={0.08} outlineColor="#000">
                {selectedDistrict.name}
              </Text>
              <Text position={[0, -0.9, 0]} fontSize={0.4} color="#a78bfa">
                {selectedDistrict.blocks.length} Blocks • Click to view schools
              </Text>
            </Billboard>
          </>
        )}

        {selectedBlock && selectedDistrict && (
          // Show schools within selected block
          <>
            {selectedBlock.schools.map((school, index) => {
              // Arrange schools in a grid
              const cols = Math.ceil(Math.sqrt(selectedBlock.schools.length));
              const row = Math.floor(index / cols);
              const col = index % cols;
              const spacing = 2.5;
              const x = (col - cols / 2 + 0.5) * spacing;
              const z = (row - Math.ceil(selectedBlock.schools.length / cols) / 2 + 0.5) * spacing;

              const isHovered = hoveredItem === `school-${school.sno}`;

              return (
                <group
                  key={school.sno}
                  position={[x, 0, z]}
                  onPointerEnter={() => setHoveredItem(`school-${school.sno}`)}
                  onPointerLeave={() => setHoveredItem(null)}
                >
                  {/* School building */}
                  <mesh castShadow receiveShadow position={[0, 0.6, 0]}>
                    <boxGeometry args={[1.5, 1.2, 1.5]} />
                    <meshStandardMaterial
                      color="#3b82f6"
                      emissive={isHovered ? '#3b82f6' : '#000000'}
                      emissiveIntensity={isHovered ? 0.5 : 0}
                    />
                  </mesh>

                  {/* Roof */}
                  <mesh position={[0, 1.5, 0]}>
                    <coneGeometry args={[1.1, 0.8, 4]} />
                    <meshStandardMaterial color="#ef4444" />
                  </mesh>

                  {/* Door */}
                  <mesh position={[0, 0.35, 0.76]}>
                    <boxGeometry args={[0.4, 0.7, 0.05]} />
                    <meshStandardMaterial color="#854d0e" />
                  </mesh>

                  {/* School label - always visible */}
                  <Billboard position={[0, 2.8, 0]}>
                    <Text
                      fontSize={isHovered ? 0.22 : 0.15}
                      color="white"
                      anchorX="center"
                      anchorY="middle"
                      outlineWidth={0.02}
                      outlineColor="#000000"
                      maxWidth={3}
                    >
                      {school.name.length > 25 ? school.name.substring(0, 25) + '...' : school.name}
                    </Text>
                    <Text
                      position={[0, -0.25, 0]}
                      fontSize={0.12}
                      color="#fbbf24"
                      anchorX="center"
                      anchorY="middle"
                    >
                      #{school.sno}
                    </Text>
                  </Billboard>

                  {/* Marker */}
                  <mesh position={[0, 2.2, 0]}>
                    <sphereGeometry args={[0.12, 16, 16]} />
                    <meshStandardMaterial
                      color={selectedDistrict.color}
                      emissive={selectedDistrict.color}
                      emissiveIntensity={isHovered ? 1 : 0.5}
                    />
                  </mesh>
                </group>
              );
            })}

            {/* Block title */}
            <Billboard position={[0, 6, 0]}>
              <Text fontSize={0.7} color="white" outlineWidth={0.06} outlineColor="#000">
                {selectedBlock.name}
              </Text>
              <Text position={[0, -0.7, 0]} fontSize={0.35} color="#93c5fd">
                {selectedBlock.schools.length} Schools in {selectedDistrict.name}
              </Text>
            </Billboard>
          </>
        )}
      </Suspense>
    </Canvas>
  );
};

// 3D Map Scene
const TamilNadu3DMap: React.FC<{
  onDistrictClick: (name: string) => void;
  hoveredDistrict: string | null;
  setHoveredDistrict: (name: string | null) => void;
}> = ({ onDistrictClick, hoveredDistrict, setHoveredDistrict }) => {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <Canvas
      shadows
      camera={{ position: [8, 8, 8], fov: 45 }}
      style={{ background: 'transparent' }}
      onPointerDown={() => setAutoRotate(false)}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[10, 5, 10]} intensity={0.3} color="#22c55e" />

        {/* Base */}
        <TamilNaduBase />

        {/* Floating particles */}
        <FloatingParticles3D />

        {/* District blocks */}
        {tnSchoolsData.map((district, index) => {
          const pos = district3DPositions[district.name];
          // Fallback position if not defined - arrange in a grid
          const fallbackX = (index % 8) * 1.2 - 4;
          const fallbackZ = Math.floor(index / 8) * 1.2 - 3;
          const x = pos?.x ?? fallbackX;
          const z = pos?.z ?? fallbackZ;

          return (
            <District3DBlock
              key={district.name}
              district={district}
              position={[x, 0.15, z]}
              isHovered={hoveredDistrict === district.name}
              isSelected={false}
              onHover={setHoveredDistrict}
              onClick={() => onDistrictClick(district.name)}
            />
          );
        })}

        {/* Title - Billboard keeps text facing camera */}
        <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
          <Billboard position={[0, 4, 0]}>
            <Text
              fontSize={0.5}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.03}
              outlineColor="#4c1d95"
            >
              Tamil Nadu
            </Text>
          </Billboard>
        </Float>

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          minDistance={6}
          maxDistance={15}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
        />

        <CameraController autoRotate={autoRotate} />
      </Suspense>
    </Canvas>
  );
};

// District Card Component
const DistrictCard: React.FC<{
  district: District;
  onClick: () => void;
  index: number;
}> = ({ district, onClick, index }) => {
  const schoolCount = district.blocks.reduce((acc, block) => acc + block.schools.length, 0);
  const studentCount = district.blocks.reduce((acc, block) =>
    acc + block.schools.reduce((sum, school) => sum + school.studentCount, 0), 0);

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 50}ms`,
        animation: 'fadeInUp 0.5s ease-out forwards',
        opacity: 0,
        background: 'rgba(30, 27, 75, 0.6)',
        border: `1.5px solid ${district.color}20`,
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Simple hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `${district.color}15`
        }}
      />

      {/* Top accent bar */}
      <div
        className="h-1.5"
        style={{ backgroundColor: district.color }}
      />

      <div className="relative z-10 p-5 pb-4">
        {/* Header with icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-2">
            <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-100 transition-colors">
              {district.name}
            </h3>
            <p className="text-sm font-medium text-purple-200">
              {district.nameTa}
            </p>
          </div>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundColor: `${district.color}50`
            }}
          >
            <MapIcon />
          </div>
        </div>

        {/* Stats section - compact responsive design */}
        <div className="flex items-stretch gap-1.5 mb-1">
          <div className="flex-1 bg-blue-500/20 backdrop-blur-sm rounded-lg px-1.5 py-1.5 border border-blue-400/20">
            <div className="flex flex-col items-center justify-center gap-0.5">
              <div className="w-4 h-4 rounded-md bg-blue-400/40 flex items-center justify-center">
                <BlockIcon />
              </div>
              <div className="text-[10px] text-blue-200 font-medium leading-tight">Blocks</div>
              <div className="text-sm font-bold text-blue-300 leading-tight">{district.blocks.length}</div>
            </div>
          </div>

          <div className="flex-1 bg-green-500/20 backdrop-blur-sm rounded-lg px-1.5 py-1.5 border border-green-400/20">
            <div className="flex flex-col items-center justify-center gap-0.5">
              <div className="w-4 h-4 rounded-md bg-green-400/40 flex items-center justify-center">
                <SchoolIcon />
              </div>
              <div className="text-[10px] text-green-200 font-medium leading-tight">Schools</div>
              <div className="text-sm font-bold text-green-300 leading-tight">{schoolCount}</div>
            </div>
          </div>

          <div className="flex-1 bg-orange-500/20 backdrop-blur-sm rounded-lg px-1.5 py-1.5 border border-orange-400/20">
            <div className="flex flex-col items-center justify-center gap-0.5">
              <div className="w-4 h-4 rounded-md bg-orange-400/40 flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div className="text-[10px] text-orange-200 font-medium leading-tight">Students</div>
              <div className="text-sm font-bold text-orange-300 leading-tight">{studentCount}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover arrow indicator - repositioned to top right */}
      <div className="absolute right-3 top-16 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          style={{
            backgroundColor: `${district.color}80`
          }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Block Card Component
const BlockCard: React.FC<{
  block: Block;
  districtColor: string;
  onClick: () => void;
  index: number;
}> = ({ block, districtColor, onClick, index }) => {
  const studentCount = block.schools.reduce((sum, school) => sum + school.studentCount, 0);

  return (
  <div
    onClick={onClick}
    className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-xl"
    style={{
      animationDelay: `${index * 30}ms`,
      animation: 'fadeInUp 0.4s ease-out forwards',
      opacity: 0,
      background: 'rgba(30, 27, 75, 0.5)',
      border: `1.5px solid ${districtColor}20`,
      backdropFilter: 'blur(8px)'
    }}
  >
    {/* Simple hover effect */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `${districtColor}10`
      }}
    />

    <div className="relative z-10 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
            style={{
              backgroundColor: `${districtColor}50`
            }}
          >
            <BlockIcon />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white group-hover:text-purple-100 transition-colors">{block.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <div className="px-2 py-0.5 bg-green-500/30 border border-green-400/50 text-green-300 text-xs rounded-md font-medium">
                {block.schools.length} Schools
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs rounded-md font-medium">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                {studentCount}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-70 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
          <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  );
};

// School Card Component
const SchoolCard: React.FC<{
  school: School;
  index: number;
  districtColor: string;
}> = ({ school, index, districtColor }) => (
  <div
    className="group relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-102 hover:shadow-lg"
    style={{
      animationDelay: `${index * 30}ms`,
      animation: 'fadeInUp 0.4s ease-out forwards',
      opacity: 0,
      background: 'rgba(30, 27, 75, 0.4)',
      border: `1.5px solid ${districtColor}20`,
      backdropFilter: 'blur(8px)'
    }}
  >
    {/* Simple hover effect */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `${districtColor}08`
      }}
    />

    <div className="relative z-10 p-4">
      <div className="flex items-start gap-3">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundColor: `${districtColor}45`
          }}
        >
          <SchoolIcon />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-purple-500/30 border border-purple-400/50 text-purple-200 text-xs rounded-md font-semibold">
              #{school.sno}
            </span>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-orange-500/20 border border-orange-400/30 rounded-md">
              <svg className="w-3 h-3 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="text-xs font-semibold text-orange-200">{school.studentCount}</span>
            </div>
          </div>
          <h4 className="font-semibold text-white text-sm leading-tight line-clamp-2 group-hover:text-purple-100 transition-colors">
            {school.name}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

// Search Results Component
const SearchResults: React.FC<{
  results: { district: string; block: string; school: School }[];
  onSelectDistrict: (name: string) => void;
}> = ({ results, onSelectDistrict }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-400">No schools found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.slice(0, 50).map((result, index) => (
        <div
          key={`${result.school.sno}-${index}`}
          onClick={() => onSelectDistrict(result.district)}
          className="group relative overflow-hidden rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-102 hover:shadow-lg bg-slate-800/40 backdrop-blur-sm border border-purple-400/20"
        >
          {/* Simple hover effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-500/10" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 bg-purple-500/30 border border-purple-400/50 text-purple-200 text-xs rounded-md font-semibold">
                #{result.school.sno}
              </span>
            </div>
            <h4 className="font-semibold text-white text-sm mb-3 line-clamp-2 group-hover:text-purple-100 transition-colors">
              {result.school.name}
            </h4>
            <div className="flex items-center gap-2 text-xs flex-wrap">
              <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/40 text-blue-300 rounded-md font-medium">
                {result.district}
              </span>
              <span className="text-gray-500">•</span>
              <span className="px-2 py-1 bg-green-500/20 border border-green-400/40 text-green-300 rounded-md font-medium">
                {result.block}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Component
const TNSchoolsPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const stats = useMemo(() => getTotalStats(), []);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'grid' | 'travel'>('map');
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Travel Mode state - simplified
  const [travelSelectedDistrict, setTravelSelectedDistrict] = useState<District | null>(null);
  const [travelSelectedBlock, setTravelSelectedBlock] = useState<Block | null>(null);
  const [travelHoveredItem, setTravelHoveredItem] = useState<string | null>(null);

  // Reset travel mode state when switching views
  useEffect(() => {
    if (viewMode === 'travel') {
      setTravelSelectedDistrict(null);
      setTravelSelectedBlock(null);
      setTravelHoveredItem(null);
    }
  }, [viewMode]);

  // Handle district click in travel mode
  const handleTravelDistrictClick = useCallback((district: District) => {
    setTravelSelectedDistrict(district);
    setTravelSelectedBlock(null);
  }, []);

  // Handle block click in travel mode
  const handleTravelBlockClick = useCallback((block: Block, district: District) => {
    setTravelSelectedBlock(block);
    setTravelSelectedDistrict(district);
  }, []);

  // Handle back in travel mode
  const handleTravelBack = useCallback(() => {
    if (travelSelectedBlock) {
      setTravelSelectedBlock(null);
    } else if (travelSelectedDistrict) {
      setTravelSelectedDistrict(null);
    }
  }, [travelSelectedBlock, travelSelectedDistrict]);

  const searchResults = useMemo(() => {
    if (searchQuery.length < 2) return [];
    return searchSchools(searchQuery);
  }, [searchQuery]);

  const handleBack = () => {
    if (selectedBlock) {
      setSelectedBlock(null);
    } else if (selectedDistrict) {
      setSelectedDistrict(null);
    } else {
      navigate('/');
    }
  };

  const handleDistrictClick = (district: District) => {
    setSelectedDistrict(district);
    setSelectedBlock(null);
    setSearchQuery('');
    setIsSearching(false);
  };

  const handleDistrictClickByName = (name: string) => {
    const district = tnSchoolsData.find(d => d.name === name);
    if (district) {
      handleDistrictClick(district);
    }
  };

  const handleBlockClick = (block: Block) => {
    setSelectedBlock(block);
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
    setSelectedDistrict(null);
    setSelectedBlock(null);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Breadcrumb navigation
  const Breadcrumb = () => (
    <div className="flex items-center gap-2 text-sm mb-6">
      <button
        onClick={() => { setSelectedDistrict(null); setSelectedBlock(null); setSearchQuery(''); setIsSearching(false); }}
        className="flex items-center gap-1 text-purple-300 hover:text-white transition-colors"
      >
        <HomeIcon />
        <span>{language === 'ta' ? 'தமிழ்நாடு' : 'Tamil Nadu'}</span>
      </button>
      {selectedDistrict && (
        <>
          <span className="text-gray-500">/</span>
          <button
            onClick={() => setSelectedBlock(null)}
            className={`${selectedBlock ? 'text-purple-300 hover:text-white' : 'text-white'} transition-colors`}
          >
            {selectedDistrict.name}
          </button>
        </>
      )}
      {selectedBlock && (
        <>
          <span className="text-gray-500">/</span>
          <span className="text-white">{selectedBlock.name}</span>
        </>
      )}
    </div>
  );

  // Get hovered district data
  const hoveredDistrictData = hoveredDistrict ? tnSchoolsData.find(d => d.name === hoveredDistrict) : null;
  const hoveredSchoolCount = hoveredDistrictData?.blocks.reduce((acc, b) => acc + b.schools.length, 0) || 0;

  return (
    <div
      ref={containerRef}
      className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex flex-col"
    >
      {/* Header - Compact */}
      <header className="relative z-20 bg-black/30 backdrop-blur-md border-b border-white/10 flex-shrink-0">
        <div className="max-w-full mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <BackIcon />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="text-2xl">🏫</span>
                  {language === 'ta' ? 'தமிழ்நாடு பள்ளிகள்' : 'Tamil Nadu Schools'}
                </h1>
                <p className="text-xs text-purple-300">
                  {language === 'ta' ? 'VP பள்ளிகள் அகாடமி வரைபடம்' : 'VP Schools Academy Map'}
                </p>
              </div>
            </div>

            {/* View Toggle & Fullscreen - Only on main view */}
            {!selectedDistrict && !selectedBlock && !isSearching && (
              <div className="flex items-center gap-3">
                <div className="flex bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
                  <button
                    onClick={() => setViewMode('map')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      viewMode === 'map'
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <MapViewIcon />
                    <span className="hidden sm:inline">{language === 'ta' ? '3D வரைபடம்' : '3D Map'}</span>
                  </button>
                  <button
                    onClick={() => setViewMode('travel')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      viewMode === 'travel'
                        ? 'bg-green-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <TravelIcon />
                    <span className="hidden sm:inline">{language === 'ta' ? 'பயணம்' : 'Travel'}</span>
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                      viewMode === 'grid'
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <GridIcon />
                    <span className="hidden sm:inline">{language === 'ta' ? 'கார்டுகள்' : 'Cards'}</span>
                  </button>
                </div>

                {(viewMode === 'map' || viewMode === 'travel') && (
                  <button
                    onClick={toggleFullscreen}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  >
                    {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 overflow-hidden">
        {/* Breadcrumb - For detail views */}
        {(selectedDistrict || selectedBlock) && !isSearching && (
          <div className="px-4 pt-4">
            <Breadcrumb />
          </div>
        )}

        {/* Content based on state */}
        {isSearching && searchQuery.length >= 2 ? (
          <div className="px-4 py-4 overflow-auto h-full">
            <div className="mb-4 text-sm text-gray-400">
              {searchResults.length} {language === 'ta' ? 'முடிவுகள் கிடைத்தன' : 'results found'}
            </div>
            <SearchResults
              results={searchResults}
              onSelectDistrict={(name) => {
                const district = tnSchoolsData.find(d => d.name === name);
                if (district) handleDistrictClick(district);
              }}
            />
          </div>
        ) : selectedBlock ? (
          <div className="px-4 py-4 overflow-auto h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">{selectedBlock.name}</h2>
              <p className="text-purple-300">
                {selectedBlock.schools.length} {language === 'ta' ? 'பள்ளிகள்' : 'Schools'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedBlock.schools.map((school, index) => (
                <SchoolCard
                  key={school.sno}
                  school={school}
                  index={index}
                  districtColor={selectedDistrict?.color || '#6366f1'}
                />
              ))}
            </div>
          </div>
        ) : selectedDistrict ? (
          <div className="px-4 py-4 overflow-auto h-full">
            <div className="mb-6 flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${selectedDistrict.color}30` }}
              >
                <MapIcon />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedDistrict.name}</h2>
                <p className="text-lg text-purple-300">{selectedDistrict.nameTa}</p>
                <p className="text-sm text-gray-400">
                  {selectedDistrict.blocks.length} {language === 'ta' ? 'வட்டாரங்கள்' : 'Blocks'} •{' '}
                  {selectedDistrict.blocks.reduce((acc, b) => acc + b.schools.length, 0)} {language === 'ta' ? 'பள்ளிகள்' : 'Schools'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {selectedDistrict.blocks.map((block, index) => (
                <BlockCard
                  key={block.name}
                  block={block}
                  districtColor={selectedDistrict.color}
                  onClick={() => handleBlockClick(block)}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : viewMode === 'map' ? (
          // 3D Map View
          <div className="h-full flex">
            {/* 3D Canvas - Takes most space */}
            <div className="flex-1 relative">
              <TamilNadu3DMap
                onDistrictClick={handleDistrictClickByName}
                hoveredDistrict={hoveredDistrict}
                setHoveredDistrict={setHoveredDistrict}
              />

              {/* Hover tooltip on map */}
              {hoveredDistrictData && (
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-purple-500/30 min-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: hoveredDistrictData.color }}
                    />
                    <h4 className="font-bold text-white">{hoveredDistrictData.name}</h4>
                  </div>
                  <p className="text-purple-300 text-sm mb-2">{hoveredDistrictData.nameTa}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-gray-300">
                      <span>{language === 'ta' ? 'வட்டாரங்கள்' : 'Blocks'}:</span>
                      <span className="text-blue-300 font-semibold">{hoveredDistrictData.blocks.length}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>{language === 'ta' ? 'பள்ளிகள்' : 'Schools'}:</span>
                      <span className="text-green-300 font-semibold">{hoveredSchoolCount}</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 text-center">
                    <span className="text-purple-400 text-xs">
                      {language === 'ta' ? 'காண கிளிக் செய்யவும்' : 'Click to explore'}
                    </span>
                  </div>
                </div>
              )}

              {/* Instructions */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <p className="text-xs text-white/70">
                  {language === 'ta'
                    ? '🖱️ சுழற்ற இழுக்கவும் • உருட்டி பெரிதாக்கவும் • கிளிக் செய்யவும்'
                    : '🖱️ Drag to rotate • Scroll to zoom • Click district'}
                </p>
              </div>
            </div>

            {/* Stats Panel - Right side */}
            <div className="w-64 bg-black/30 backdrop-blur-md border-l border-white/10 p-4 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white text-center border-b border-white/10 pb-3">
                {language === 'ta' ? 'புள்ளிவிவரங்கள்' : 'Statistics'}
              </h3>

              {/* Active Districts */}
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 text-center">{stats.districts}</div>
                <div className="text-xs text-green-300 text-center mt-1">
                  {language === 'ta' ? 'செயலில் உள்ள மாவட்டங்கள்' : 'Active Districts'}
                </div>
              </div>

              {/* Total Blocks */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 text-center">{stats.blocks}</div>
                <div className="text-xs text-blue-300 text-center mt-1">
                  {language === 'ta' ? 'மொத்த வட்டாரங்கள்' : 'Total Blocks'}
                </div>
              </div>

              {/* Total Schools */}
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 text-center">{stats.schools}</div>
                <div className="text-xs text-purple-300 text-center mt-1">
                  {language === 'ta' ? 'மொத்த பள்ளிகள்' : 'Total Schools'}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-auto bg-white/5 rounded-xl p-3 border border-white/10">
                <h4 className="text-xs font-semibold text-white mb-2">
                  {language === 'ta' ? 'குறிப்பு' : 'Legend'}
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-300">{language === 'ta' ? 'பள்ளி எண்ணிக்கை' : 'School count'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-6 bg-purple-500/50 rounded" />
                    <span className="text-gray-300">{language === 'ta' ? 'உயரம் = பள்ளிகள்' : 'Height = Schools'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : viewMode === 'travel' ? (
          // Travel/City View Mode - Click to navigate
          <div className="h-full relative">
            {/* 3D Canvas for Travel Mode */}
            <div ref={canvasContainerRef} className="w-full h-full">
              <TravelMode3DScene
                onDistrictClick={handleTravelDistrictClick}
                onBlockClick={handleTravelBlockClick}
                selectedDistrict={travelSelectedDistrict}
                selectedBlock={travelSelectedBlock}
                hoveredItem={travelHoveredItem}
                setHoveredItem={setTravelHoveredItem}
              />
            </div>

            {/* Navigation Breadcrumb */}
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-green-500/30">
                <div className="flex items-center gap-2 text-sm">
                  <button
                    onClick={() => { setTravelSelectedDistrict(null); setTravelSelectedBlock(null); }}
                    className={`flex items-center gap-1 ${!travelSelectedDistrict ? 'text-green-400' : 'text-purple-300 hover:text-white'} transition-colors`}
                  >
                    <HomeIcon />
                    <span>{language === 'ta' ? 'தமிழ்நாடு' : 'Tamil Nadu'}</span>
                  </button>
                  {travelSelectedDistrict && (
                    <>
                      <span className="text-gray-500">/</span>
                      <button
                        onClick={() => setTravelSelectedBlock(null)}
                        className={`${!travelSelectedBlock ? 'text-green-400' : 'text-purple-300 hover:text-white'} transition-colors`}
                      >
                        {travelSelectedDistrict.name}
                      </button>
                    </>
                  )}
                  {travelSelectedBlock && (
                    <>
                      <span className="text-gray-500">/</span>
                      <span className="text-green-400">{travelSelectedBlock.name}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="absolute bottom-4 left-4 z-20">
              <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 border border-green-500/30 min-w-[250px]">
                <div className="flex items-center gap-2 mb-3">
                  <TravelIcon />
                  <span className="text-green-400 font-bold">
                    {language === 'ta' ? 'நகர காட்சி' : 'City View'}
                  </span>
                </div>

                {travelSelectedBlock ? (
                  <div>
                    <h3 className="text-white font-bold text-lg">{travelSelectedBlock.name}</h3>
                    <p className="text-purple-300 text-sm">{travelSelectedDistrict?.name} District</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">
                        {travelSelectedBlock.schools.length} {language === 'ta' ? 'பள்ளிகள்' : 'Schools'}
                      </span>
                    </div>
                  </div>
                ) : travelSelectedDistrict ? (
                  <div>
                    <h3 className="text-white font-bold text-lg">{travelSelectedDistrict.name}</h3>
                    <p className="text-purple-300 text-sm">{travelSelectedDistrict.nameTa}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                        {travelSelectedDistrict.blocks.length} {language === 'ta' ? 'வட்டாரங்கள்' : 'Blocks'}
                      </span>
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">
                        {travelSelectedDistrict.blocks.reduce((acc, b) => acc + b.schools.length, 0)} {language === 'ta' ? 'பள்ளிகள்' : 'Schools'}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      {language === 'ta' ? 'வட்டாரத்தை தேர்ந்தெடுக்க கிளிக் செய்யவும்' : 'Click a block to view schools'}
                    </p>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-white font-bold text-lg">{language === 'ta' ? 'தமிழ்நாடு' : 'Tamil Nadu'}</h3>
                    <p className="text-purple-300 text-sm">{language === 'ta' ? 'VP பள்ளிகள்' : 'VP Schools'}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                      <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded">
                        {stats.districts} {language === 'ta' ? 'மாவட்டங்கள்' : 'Districts'}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                        {stats.schools} {language === 'ta' ? 'பள்ளிகள்' : 'Schools'}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-2">
                      {language === 'ta' ? 'மாவட்டத்தை தேர்ந்தெடுக்க கிளிக் செய்யவும்' : 'Click a district to explore'}
                    </p>
                  </div>
                )}

                {/* Back button */}
                {(travelSelectedDistrict || travelSelectedBlock) && (
                  <button
                    onClick={handleTravelBack}
                    className="mt-3 w-full px-3 py-2 bg-purple-600/50 hover:bg-purple-600 text-white text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <BackIcon />
                    {language === 'ta' ? 'பின் செல்' : 'Go Back'}
                  </button>
                )}
              </div>
            </div>

            {/* Hover Info - Right side */}
            {travelHoveredItem && (
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-purple-500/30">
                  <p className="text-white font-semibold">{travelHoveredItem.replace('school-', '#')}</p>
                  <p className="text-purple-300 text-xs">
                    {language === 'ta' ? 'தேர்ந்தெடுக்க கிளிக் செய்யவும்' : 'Click to select'}
                  </p>
                </div>
              </div>
            )}

            {/* Controls hint */}
            <div className="absolute bottom-4 right-4 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <p className="text-xs text-gray-400">
                  {language === 'ta'
                    ? '🖱️ இழுத்து சுழற்று • உருட்டி பெரிதாக்கு'
                    : '🖱️ Drag to rotate • Scroll to zoom'}
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Card Grid View
          <div className="h-full overflow-auto p-4">
            {/* Search bar - Only in Card view */}
            <div className="mb-6 max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={handleSearchFocus}
                  placeholder={language === 'ta' ? 'மாவட்டம், வட்டாரம் அல்லது பள்ளியைத் தேடுங்கள்...' : 'Search district, block, or school...'}
                  className="w-full pl-12 pr-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <div className="rounded-xl px-8 py-4 text-center transform hover:scale-105 transition-all duration-300 bg-green-500/20 backdrop-blur-sm border border-green-400/20">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-3xl font-bold text-green-300">{stats.districts}</div>
                <div className="text-xs font-semibold text-green-200 mt-1">{language === 'ta' ? 'மாவட்டங்கள்' : 'Districts'}</div>
              </div>

              <div className="rounded-xl px-8 py-4 text-center transform hover:scale-105 transition-all duration-300 bg-blue-500/20 backdrop-blur-sm border border-blue-400/20">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-3xl font-bold text-blue-300">{stats.blocks}</div>
                <div className="text-xs font-semibold text-blue-200 mt-1">{language === 'ta' ? 'வட்டாரங்கள்' : 'Blocks'}</div>
              </div>

              <div className="rounded-xl px-8 py-4 text-center transform hover:scale-105 transition-all duration-300 bg-purple-500/20 backdrop-blur-sm border border-purple-400/20">
                <div className="text-2xl mb-1">🏫</div>
                <div className="text-3xl font-bold text-purple-300">{stats.schools}</div>
                <div className="text-xs font-semibold text-purple-200 mt-1">{language === 'ta' ? 'பள்ளிகள்' : 'Schools'}</div>
              </div>

              <div className="rounded-xl px-8 py-4 text-center transform hover:scale-105 transition-all duration-300 bg-orange-500/20 backdrop-blur-sm border border-orange-400/20">
                <div className="text-2xl mb-1">👥</div>
                <div className="text-3xl font-bold text-orange-300">{stats.students}</div>
                <div className="text-xs font-semibold text-orange-200 mt-1">{language === 'ta' ? 'மாணவர்கள்' : 'Students'}</div>
              </div>
            </div>

            {/* District Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {tnSchoolsData.map((district, index) => (
                <DistrictCard
                  key={district.name}
                  district={district}
                  onClick={() => handleDistrictClick(district)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default TNSchoolsPage;
