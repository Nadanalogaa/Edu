import React, { useEffect, useRef, useState } from 'react';
import aframeOnlyLoader from '../../utils/aframeOnlyLoader';

interface SimpleARViewerProps {
  topic: string;
  subject: string;
}

const SimpleARViewer: React.FC<SimpleARViewerProps> = ({ topic, subject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cameraError, setCameraError] = useState(false);

  useEffect(() => {
    const initCamera = async () => {
      try {
        console.log('Requesting camera access...');
        // Request camera access
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user', // Use front camera for easier demo
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });

        console.log('Camera access granted, stream:', stream);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log('Stream set to video element');

          // Wait for video to be ready
          videoRef.current.onloadedmetadata = () => {
            console.log('Video metadata loaded');
            videoRef.current?.play().then(() => {
              console.log('Video playing');
            }).catch(err => {
              console.error('Error playing video:', err);
            });
          };
        }
      } catch (error) {
        console.error('Failed to access camera:', error);
        setCameraError(true);
      }
    };

    const loadLibraries = async () => {
      try {
        console.log('Loading A-Frame...');
        await aframeOnlyLoader.loadAFrame();
        console.log('A-Frame loaded, initializing camera...');
        await initCamera();
        console.log('Camera initialized, hiding loading screen');
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load A-Frame:', error);
        setIsLoading(false);
      }
    };

    loadLibraries();

    // Cleanup
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Define colors based on subject
  const getSubjectColors = () => {
    switch (subject) {
      case 'Physics':
        return {
          nucleus: '#e94560',
          electron1: '#4ECDC4',
          electron2: '#95E1D3',
          electron3: '#F38181'
        };
      case 'Chemistry':
        return {
          nucleus: '#778da9',
          electron1: '#415a77',
          electron2: '#1b263b',
          electron3: '#0d1b2a'
        };
      case 'Biology':
        return {
          nucleus: '#52b788',
          electron1: '#40916c',
          electron2: '#2d6a4f',
          electron3: '#1b4332'
        };
      case 'Maths':
        return {
          nucleus: '#dc2f02',
          electron1: '#e85d04',
          electron2: '#f48c06',
          electron3: '#faa307'
        };
      default:
        return {
          nucleus: '#FF6B6B',
          electron1: '#4ECDC4',
          electron2: '#95E1D3',
          electron3: '#F38181'
        };
    }
  };

  const colors = getSubjectColors();

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-white">Loading AR Experience...</p>
          </div>
        </div>
      ) : cameraError ? (
        <div className="w-full h-full flex items-center justify-center bg-slate-900">
          <div className="text-center p-8">
            <p className="text-white text-lg mb-4">Camera access denied</p>
            <p className="text-gray-400 text-sm">Please allow camera permissions to use AR mode</p>
          </div>
        </div>
      ) : (
        <>
          {/* Camera Feed Background */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1
            }}
          />

          {/* A-Frame Scene Overlay (transparent background) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          }}>
            <a-scene
              embedded
              vr-mode-ui="enabled: false"
              background="color: transparent"
              className="embedded"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'transparent !important'
              }}
            >
              {/* 3D Model - Rotating Atom in center */}
              <a-entity position="0 0 -3">
                {/* Nucleus */}
                <a-sphere
                  position="0 0 0"
                  radius="0.3"
                  color={colors.nucleus}
                  metalness="0.8"
                  roughness="0.2"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 4000; easing: linear"
                ></a-sphere>

                {/* Electron Orbit 1 */}
                <a-torus
                  position="0 0 0"
                  radius="0.6"
                  radius-tubular="0.02"
                  color={colors.electron1}
                  rotation="90 0 0"
                ></a-torus>
                <a-sphere
                  position="0.6 0 0"
                  radius="0.08"
                  color={colors.electron1}
                  animation="property: object3D.position.x; to: -0.6; from: 0.6; loop: true; dur: 2000; dir: alternate; easing: linear"
                ></a-sphere>

                {/* Electron Orbit 2 */}
                <a-torus
                  position="0 0 0"
                  radius="0.8"
                  radius-tubular="0.02"
                  color={colors.electron2}
                  rotation="45 45 0"
                ></a-torus>
                <a-sphere
                  position="0 0 0.8"
                  radius="0.08"
                  color={colors.electron2}
                  animation="property: object3D.position.z; to: -0.8; from: 0.8; loop: true; dur: 3000; dir: alternate; easing: linear"
                ></a-sphere>

                {/* Electron Orbit 3 */}
                <a-torus
                  position="0 0 0"
                  radius="1.0"
                  radius-tubular="0.02"
                  color={colors.electron3}
                  rotation="120 30 60"
                ></a-torus>
                <a-sphere
                  position="1.0 0 0"
                  radius="0.08"
                  color={colors.electron3}
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

                {/* Subject label below */}
                <a-text
                  value={subject}
                  color="#AAAAAA"
                  position="0 -1.5 0"
                  align="center"
                  width="2"
                ></a-text>
              </a-entity>

              {/* Ambient Light */}
              <a-light type="ambient" intensity="0.8" color="#fff"></a-light>
              <a-light type="directional" position="1 1 0" intensity="0.5"></a-light>

              {/* Camera (no controls needed) */}
              <a-entity camera position="0 0 0"></a-entity>
            </a-scene>
          </div>

          {/* Instructions Overlay */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '28rem',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 10
          }}>
            <p style={{ fontSize: '0.875rem' }}>
              <strong>Simple AR Mode</strong> - 3D model overlaid on camera
            </p>
          </div>

          {/* Interactive Hint */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '28rem',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 10
          }}>
            <p style={{ fontSize: '0.75rem' }}>
              Move your device around to see the 3D {subject} model from different angles
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default SimpleARViewer;
