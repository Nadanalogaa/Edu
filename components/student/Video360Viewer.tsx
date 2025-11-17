import React, { useRef, useEffect } from 'react';

interface Video360ViewerProps {
  topic: string;
  subject: string;
}

const Video360Viewer: React.FC<Video360ViewerProps> = ({ topic, subject }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay prevented:', err);
      });
    }
  }, []);

  // Get subject-specific color
  const getSubjectColor = () => {
    switch (subject) {
      case 'Physics': return '#e94560';
      case 'Chemistry': return '#778da9';
      case 'Biology': return '#52b788';
      case 'Maths': return '#dc2f02';
      default: return '#a855f7';
    }
  };

  const color = getSubjectColor();

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#000' }}>
      {/* 360 Video Placeholder - You can replace this with real 360 video URL */}
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${color}20 0%, #00000080 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${color}40 0%, transparent 70%)`,
          animation: 'pulse 3s ease-in-out infinite'
        }}></div>

        {/* Content Card */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '3rem',
          maxWidth: '600px'
        }}>
          {/* Icon */}
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 10px 40px ${color}40`,
            animation: 'float 3s ease-in-out infinite'
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </div>

          {/* Title */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            {topic}
          </h2>

          {/* Subject Badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: color,
            borderRadius: '2rem',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '2rem',
            boxShadow: `0 4px 20px ${color}60`
          }}>
            {subject}
          </div>

          {/* Description */}
          <p style={{
            color: '#e5e7eb',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            marginBottom: '2rem'
          }}>
            Experience immersive 360° learning content designed to make complex concepts easy to understand.
          </p>

          {/* Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '2rem'
          }}>
            {[
              { icon: '🎯', label: 'Interactive' },
              { icon: '🎨', label: 'Visual' },
              { icon: '⚡', label: 'Engaging' }
            ].map((feature, i) => (
              <div key={i} style={{
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '1rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                <div style={{ color: 'white', fontSize: '0.875rem', fontWeight: '500' }}>{feature.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `${color}20`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              filter: 'blur(20px)'
            }}
          />
        ))}
      </div>

      {/* Instructions Overlay */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '28rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{ fontSize: '0.875rem', margin: 0 }}>
          <strong>🌐 Immersive Learning Experience</strong>
        </p>
      </div>

      {/* Bottom Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '28rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{ fontSize: '0.75rem', margin: 0 }}>
          ✨ Perfect for demonstrations • Real AR/VR integration coming soon
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default Video360Viewer;
