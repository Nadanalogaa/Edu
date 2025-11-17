import React, { useEffect, useRef, useState } from 'react';
import aframeLoader from '../../utils/aframeLoader';

interface ARViewerProps {
  modelUrl?: string;
  topic: string;
}

const ARViewer: React.FC<ARViewerProps> = ({ modelUrl, topic }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        await aframeLoader.loadLibraries();
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load AR libraries:', error);
        setIsLoading(false);
      }
    };

    loadLibraries();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-white">Loading AR Experience...</p>
          </div>
        </div>
      ) : (
        <>
      {/* AR Scene */}
      <a-scene
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        vr-mode-ui="enabled: false"
      >
        {/* Camera */}
        <a-entity camera></a-entity>

        {/* Marker-based AR - using Hiro marker */}
        <a-marker preset="hiro">
          {/* 3D Model - Rotating Atom */}
          <a-entity position="0 0.5 0">
            {/* Nucleus */}
            <a-sphere
              position="0 0 0"
              radius="0.3"
              color="#FF6B6B"
              animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear"
            ></a-sphere>

            {/* Electron Orbit 1 */}
            <a-torus
              position="0 0 0"
              radius="0.6"
              radius-tubular="0.02"
              color="#4ECDC4"
              rotation="90 0 0"
            ></a-torus>
            <a-sphere
              position="0.6 0 0"
              radius="0.08"
              color="#4ECDC4"
              animation="property: object3D.position.x; to: -0.6; from: 0.6; loop: true; dur: 2000; dir: alternate; easing: linear"
            ></a-sphere>

            {/* Electron Orbit 2 */}
            <a-torus
              position="0 0 0"
              radius="0.8"
              radius-tubular="0.02"
              color="#95E1D3"
              rotation="45 45 0"
            ></a-torus>
            <a-sphere
              position="0 0 0.8"
              radius="0.08"
              color="#95E1D3"
              animation="property: object3D.position.z; to: -0.8; from: 0.8; loop: true; dur: 3000; dir: alternate; easing: linear"
            ></a-sphere>

            {/* Electron Orbit 3 */}
            <a-torus
              position="0 0 0"
              radius="1.0"
              radius-tubular="0.02"
              color="#F38181"
              rotation="120 30 60"
            ></a-torus>
            <a-sphere
              position="1.0 0 0"
              radius="0.08"
              color="#F38181"
              animation="property: object3D.position.x; to: -1.0; from: 1.0; loop: true; dur: 2500; dir: alternate; easing: linear"
            ></a-sphere>

            {/* Topic Text */}
            <a-text
              value={topic}
              color="#FFFFFF"
              position="0 1.5 0"
              align="center"
              width="3"
              animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"
            ></a-text>
          </a-entity>
        </a-marker>
      </a-scene>

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-md bg-black/60 text-white p-4 rounded-lg text-center">
        <p className="text-sm mb-2">
          <strong>How to use AR:</strong>
        </p>
        <p className="text-xs">
          1. Allow camera access when prompted
          <br />
          2. Print or display the HIRO marker on another device
          <br />
          3. Point your camera at the marker to see the 3D model
        </p>
        <a
          href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs"
        >
          Download HIRO Marker
        </a>
      </div>
        </>
      )}
    </div>
  );
};

export default ARViewer;
