import React, { useEffect, useRef, useState } from 'react';
import aframeLoader from '../../utils/aframeLoader';

interface VRViewerProps {
  topic: string;
  subject: string;
}

const VRViewer: React.FC<VRViewerProps> = ({ topic, subject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        await aframeLoader.loadLibraries();
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load VR libraries:', error);
        setIsLoading(false);
      }
    };

    loadLibraries();
  }, []);

  // Define environment colors based on subject
  const getSubjectEnvironment = () => {
    switch (subject) {
      case 'Physics':
        return {
          skyColor: '#1a1a2e',
          groundColor: '#16213e',
          accentColor: '#0f3460',
          particleColor: '#e94560'
        };
      case 'Chemistry':
        return {
          skyColor: '#0d1b2a',
          groundColor: '#1b263b',
          accentColor: '#415a77',
          particleColor: '#778da9'
        };
      case 'Biology':
        return {
          skyColor: '#081c15',
          groundColor: '#1b4332',
          accentColor: '#2d6a4f',
          particleColor: '#52b788'
        };
      case 'Maths':
        return {
          skyColor: '#03071e',
          groundColor: '#370617',
          accentColor: '#6a040f',
          particleColor: '#dc2f02'
        };
      default:
        return {
          skyColor: '#1a1a2e',
          groundColor: '#16213e',
          accentColor: '#0f3460',
          particleColor: '#e94560'
        };
    }
  };

  const env = getSubjectEnvironment();

  return (
    <div ref={containerRef} className="w-full h-full">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-white">Loading VR Experience...</p>
          </div>
        </div>
      ) : (
        <>
      {/* VR Scene */}
      <a-scene embedded vr-mode-ui="enabled: true">
        {/* Sky */}
        <a-sky color={env.skyColor}></a-sky>

        {/* Ground */}
        <a-plane
          position="0 0 0"
          rotation="-90 0 0"
          width="50"
          height="50"
          color={env.groundColor}
          shadow="receive: true"
        ></a-plane>

        {/* Central Platform */}
        <a-cylinder
          position="0 0.1 -5"
          radius="3"
          height="0.2"
          color={env.accentColor}
          shadow="cast: true"
        ></a-cylinder>

        {/* Main 3D Educational Model - DNA Helix for Biology, Atom for Physics, etc. */}
        <a-entity position="0 2 -5">
          {/* Central Sphere */}
          <a-sphere
            position="0 0 0"
            radius="0.5"
            color={env.particleColor}
            metalness="0.8"
            roughness="0.2"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 8000; easing: linear"
          ></a-sphere>

          {/* Orbiting Elements */}
          {[0, 60, 120, 180, 240, 300].map((angle, index) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 1.5;
            const z = Math.sin(rad) * 1.5;
            return (
              <a-entity key={index} position={`${x} 0 ${z}`}>
                <a-box
                  width="0.3"
                  height="0.3"
                  depth="0.3"
                  color={env.particleColor}
                  metalness="0.6"
                  animation={`property: position; to: ${x} ${Math.sin((index * Math.PI) / 3)} ${z}; loop: true; dur: ${2000 + index * 500}; dir: alternate; easing: easeInOutSine`}
                ></a-box>
              </a-entity>
            );
          })}

          {/* Topic Title in 3D Space */}
          <a-text
            value={topic}
            color="#FFFFFF"
            position="0 2 0"
            align="center"
            width="6"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
          ></a-text>
        </a-entity>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const x = (Math.random() - 0.5) * 20;
          const y = Math.random() * 5 + 1;
          const z = (Math.random() - 0.5) * 20 - 5;
          return (
            <a-sphere
              key={i}
              position={`${x} ${y} ${z}`}
              radius="0.1"
              color={env.particleColor}
              opacity="0.6"
              animation={`property: position; to: ${x} ${y + 2} ${z}; loop: true; dur: ${3000 + Math.random() * 2000}; dir: alternate; easing: easeInOutSine`}
            ></a-sphere>
          );
        })}

        {/* Information Panels */}
        <a-entity position="-4 1.5 -5">
          <a-plane
            width="2"
            height="1.5"
            color="#ffffff"
            opacity="0.1"
          ></a-plane>
          <a-text
            value={`Subject: ${subject}`}
            color="#ffffff"
            position="0 0.4 0.01"
            align="center"
            width="1.8"
          ></a-text>
          <a-text
            value="Interactive 3D Learning"
            color="#aaaaaa"
            position="0 0 0.01"
            align="center"
            width="1.8"
            wrap-count="20"
          ></a-text>
        </a-entity>

        <a-entity position="4 1.5 -5">
          <a-plane
            width="2"
            height="1.5"
            color="#ffffff"
            opacity="0.1"
          ></a-plane>
          <a-text
            value="VR Mode Active"
            color="#ffffff"
            position="0 0.4 0.01"
            align="center"
            width="1.8"
          ></a-text>
          <a-text
            value="Look around and explore"
            color="#aaaaaa"
            position="0 0 0.01"
            align="center"
            width="1.8"
            wrap-count="20"
          ></a-text>
        </a-entity>

        {/* Directional Light */}
        <a-light type="directional" position="2 4 -3" intensity="0.8" color="#fff"></a-light>
        <a-light type="ambient" intensity="0.4" color="#fff"></a-light>

        {/* Camera with Look Controls */}
        <a-entity
          camera
          look-controls
          wasd-controls
          position="0 1.6 0"
        ></a-entity>
      </a-scene>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-md bg-black/60 text-white p-4 rounded-lg text-center pointer-events-none">
        <p className="text-sm mb-2">
          <strong>VR Controls:</strong>
        </p>
        <p className="text-xs">
          🖱️ Drag to look around • WASD to move
          <br />
          📱 On mobile: Move device to look around
          <br />
          🥽 Click VR icon (bottom right) for full VR mode
        </p>
      </div>
        </>
      )}
    </div>
  );
};

export default VRViewer;
