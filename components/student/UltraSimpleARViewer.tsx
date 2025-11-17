import React, { useEffect, useRef, useState } from 'react';

interface UltraSimpleARViewerProps {
  topic: string;
  subject: string;
}

const UltraSimpleARViewer: React.FC<UltraSimpleARViewerProps> = ({ topic, subject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cameraError, setCameraError] = useState(false);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const initCamera = async () => {
      try {
        console.log('UltraSimple: Requesting camera access...');
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        });

        console.log('UltraSimple: Camera access granted, stream:', stream);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log('UltraSimple: Stream set to video element');

          videoRef.current.onloadedmetadata = () => {
            console.log('UltraSimple: Video metadata loaded');
            videoRef.current?.play().then(() => {
              console.log('UltraSimple: Video playing - hiding loader');
              setIsLoading(false);
              startAnimation();
            }).catch(err => {
              console.error('UltraSimple: Error playing video:', err);
              setIsLoading(false);
              startAnimation();
            });
          };

          // Fallback: If onloadedmetadata doesn't fire, try after a delay
          setTimeout(() => {
            if (videoRef.current && videoRef.current.readyState >= 2) {
              console.log('UltraSimple: Fallback - video ready, starting anyway');
              videoRef.current.play().catch(console.error);
              setIsLoading(false);
              startAnimation();
            }
          }, 2000);
        } else {
          console.error('UltraSimple: videoRef.current is null');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('UltraSimple: Failed to access camera:', error);
        setCameraError(true);
        setIsLoading(false);
      }
    };

    const getSubjectColor = () => {
      switch (subject) {
        case 'Physics': return { primary: '#e94560', secondary: '#4ECDC4' };
        case 'Chemistry': return { primary: '#778da9', secondary: '#415a77' };
        case 'Biology': return { primary: '#52b788', secondary: '#40916c' };
        case 'Maths': return { primary: '#dc2f02', secondary: '#e85d04' };
        default: return { primary: '#FF6B6B', secondary: '#4ECDC4' };
      }
    };

    const colors = getSubjectColor();
    let rotation = 0;

    const startAnimation = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const animate = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(canvas.width, canvas.height) * 0.15;

        // Draw rotating atom
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        // Nucleus (center)
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = colors.primary;
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Electron orbits
        for (let i = 0; i < 3; i++) {
          const orbitRadius = radius * (1 + i * 0.4);
          const angle = (rotation * (i + 1)) + (i * Math.PI * 0.7);

          // Orbit circle
          ctx.beginPath();
          ctx.arc(0, 0, orbitRadius, 0, Math.PI * 2);
          ctx.strokeStyle = colors.secondary + '40';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Electron
          const electronX = Math.cos(angle) * orbitRadius;
          const electronY = Math.sin(angle) * orbitRadius;
          ctx.beginPath();
          ctx.arc(electronX, electronY, radius * 0.1, 0, Math.PI * 2);
          ctx.fillStyle = colors.secondary;
          ctx.shadowColor = colors.secondary;
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        ctx.restore();

        // Draw topic text
        ctx.save();
        ctx.font = 'bold 28px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 3;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textY = centerY - radius * 2;
        ctx.strokeText(topic, centerX, textY);
        ctx.fillText(topic, centerX, textY);

        // Draw subject text
        ctx.font = '20px Arial';
        ctx.fillStyle = '#CCCCCC';
        const subjectY = centerY + radius * 2.5;
        ctx.strokeText(subject, centerX, subjectY);
        ctx.fillText(subject, centerX, subjectY);
        ctx.restore();

        rotation += 0.02;
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    };

    initCamera();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [topic, subject]);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      {isLoading ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              border: '4px solid #a855f7',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p style={{ color: 'white' }}>Loading AR Experience...</p>
          </div>
        </div>
      ) : cameraError ? (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a' }}>
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: 'white', fontSize: '1.125rem', marginBottom: '1rem' }}>Camera access denied</p>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Please allow camera permissions to use AR mode</p>
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
              objectFit: 'cover'
            }}
          />

          {/* Canvas Overlay for 3D Animation */}
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          />

          {/* Instructions Overlay */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '28rem',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            pointerEvents: 'none'
          }}>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>
              <strong>✨ Simple AR Mode</strong> - Interactive 3D Overlay
            </p>
          </div>

          {/* Interactive Hint */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '28rem',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            textAlign: 'center',
            pointerEvents: 'none'
          }}>
            <p style={{ fontSize: '0.75rem', margin: 0 }}>
              📱 Perfect for quick demos - No markers needed!
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default UltraSimpleARViewer;
