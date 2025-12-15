import React, { useRef, useState, useEffect, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { useLanguage } from '../../context/LanguageContext';

// Camera component for AR mode
const CameraFeed: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>;
  onCameraReady: () => void;
  onCameraError: (error: string) => void;
}> = ({ videoRef, onCameraReady, onCameraError }) => {
  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use back camera on mobile
            width: { ideal: 1920 },
            height: { ideal: 1080 }
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play();
            onCameraReady();
          };
        }
      } catch (err) {
        console.error('Camera error:', err);
        if (err instanceof Error) {
          if (err.name === 'NotAllowedError') {
            onCameraError('Camera permission denied. Please allow camera access for AR mode.');
          } else if (err.name === 'NotFoundError') {
            onCameraError('No camera found. AR mode requires a camera.');
          } else {
            onCameraError(`Camera error: ${err.message}`);
          }
        }
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [videoRef, onCameraReady, onCameraError]);

  return null;
};

interface LessonStep {
  id: number;
  title: { en: string; ta: string };
  description: { en: string; ta: string };
  cameraPosition: [number, number, number];
  highlightPart?: string;
  duration: number;
}

interface Lesson3DViewerProps {
  topic: string;
  subject: string;
  mode: 'vr' | 'ar';
  onClose?: () => void;
}

// Heart model using basic geometries
const HeartModel: React.FC<{
  highlightPart?: string;
  onPartClick: (part: string) => void;
  modelScale?: number;
  modelPosition?: [number, number, number];
}> = ({ highlightPart, onPartClick, modelScale = 1.5, modelPosition = [0, 0, 0] }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  const getColor = (part: string) => {
    if (highlightPart === part) return '#ff4444';
    return '#cc3333';
  };

  return (
    <group ref={groupRef} position={modelPosition} scale={modelScale}>
      {/* Left Atrium */}
      <mesh
        position={[-0.4, 0.5, 0]}
        onClick={() => onPartClick('leftAtrium')}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color={getColor('leftAtrium')}
          roughness={0.4}
          metalness={0.1}
        />
        {highlightPart === 'leftAtrium' && (
          <Html position={[0.5, 0.3, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Left Atrium
            </div>
          </Html>
        )}
      </mesh>

      {/* Right Atrium */}
      <mesh
        position={[0.4, 0.5, 0]}
        onClick={() => onPartClick('rightAtrium')}
      >
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color={getColor('rightAtrium')}
          roughness={0.4}
          metalness={0.1}
        />
        {highlightPart === 'rightAtrium' && (
          <Html position={[0.5, 0.3, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Right Atrium
            </div>
          </Html>
        )}
      </mesh>

      {/* Left Ventricle */}
      <mesh
        position={[-0.3, -0.2, 0]}
        onClick={() => onPartClick('leftVentricle')}
      >
        <coneGeometry args={[0.45, 0.9, 32]} />
        <meshStandardMaterial
          color={getColor('leftVentricle')}
          roughness={0.4}
          metalness={0.1}
        />
        {highlightPart === 'leftVentricle' && (
          <Html position={[0.6, 0, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Left Ventricle
            </div>
          </Html>
        )}
      </mesh>

      {/* Right Ventricle */}
      <mesh
        position={[0.3, -0.2, 0]}
        onClick={() => onPartClick('rightVentricle')}
      >
        <coneGeometry args={[0.4, 0.8, 32]} />
        <meshStandardMaterial
          color={getColor('rightVentricle')}
          roughness={0.4}
          metalness={0.1}
        />
        {highlightPart === 'rightVentricle' && (
          <Html position={[0.6, 0, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Right Ventricle
            </div>
          </Html>
        )}
      </mesh>

      {/* Aorta */}
      <mesh
        position={[0, 0.9, 0]}
        onClick={() => onPartClick('aorta')}
      >
        <cylinderGeometry args={[0.12, 0.15, 0.5, 32]} />
        <meshStandardMaterial
          color={getColor('aorta')}
          roughness={0.3}
          metalness={0.2}
        />
        {highlightPart === 'aorta' && (
          <Html position={[0.4, 0.2, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Aorta
            </div>
          </Html>
        )}
      </mesh>

      {/* Pulmonary Artery */}
      <mesh
        position={[0.25, 0.85, 0.15]}
        rotation={[0, 0, 0.3]}
        onClick={() => onPartClick('pulmonaryArtery')}
      >
        <cylinderGeometry args={[0.08, 0.1, 0.4, 32]} />
        <meshStandardMaterial
          color={highlightPart === 'pulmonaryArtery' ? '#4444ff' : '#3333aa'}
          roughness={0.3}
          metalness={0.2}
        />
        {highlightPart === 'pulmonaryArtery' && (
          <Html position={[0.5, 0.2, 0]} center>
            <div className="bg-white/90 dark:bg-slate-800/90 px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
              Pulmonary Artery
            </div>
          </Html>
        )}
      </mesh>
    </group>
  );
};

// Animated camera controller
const CameraController: React.FC<{ targetPosition: [number, number, number] }> = ({ targetPosition }) => {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(...targetPosition), 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Blood flow particles - simplified animated spheres
const BloodFlow: React.FC<{ active: boolean }> = ({ active }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current && active) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  if (!active) return null;

  return (
    <group ref={groupRef}>
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i / 12) * Math.PI * 2) * 0.8,
            Math.cos((i / 12) * Math.PI * 2) * 0.8 - 0.2,
            0
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

const Lesson3DViewer: React.FC<Lesson3DViewerProps> = ({ topic, subject, mode, onClose }) => {
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [highlightPart, setHighlightPart] = useState<string | undefined>(undefined);
  const [showBloodFlow, setShowBloodFlow] = useState(false);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  // AR-specific state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  // AR model controls
  const [modelScale, setModelScale] = useState(1.5);
  const [modelPosition, setModelPosition] = useState<[number, number, number]>([0, 0, 0]);
  const [showARControls, setShowARControls] = useState(true);

  const handleCameraReady = useCallback(() => {
    setCameraReady(true);
    setCameraError(null);
  }, []);

  const handleCameraError = useCallback((error: string) => {
    setCameraError(error);
    setCameraReady(false);
  }, []);

  // AR control functions
  const adjustScale = (delta: number) => {
    setModelScale(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  const adjustPosition = (axis: 'x' | 'y' | 'z', delta: number) => {
    setModelPosition(prev => {
      const newPos: [number, number, number] = [...prev];
      const index = axis === 'x' ? 0 : axis === 'y' ? 1 : 2;
      newPos[index] = Math.max(-3, Math.min(3, newPos[index] + delta));
      return newPos;
    });
  };

  const resetARControls = () => {
    setModelScale(1.5);
    setModelPosition([0, 0, 0]);
  };

  // Lesson steps for Human Heart
  const lessonSteps: LessonStep[] = [
    {
      id: 0,
      title: { en: 'Introduction to the Heart', ta: 'இதயத்தின் அறிமுகம்' },
      description: {
        en: 'The human heart is a muscular organ that pumps blood throughout the body. It has four chambers: two atria and two ventricles.',
        ta: 'மனித இதயம் ஒரு தசை உறுப்பு ஆகும், இது உடல் முழுவதும் இரத்தத்தை செலுத்துகிறது. இதில் நான்கு அறைகள் உள்ளன: இரண்டு ஏட்ரியா மற்றும் இரண்டு வென்ட்ரிக்கிள்கள்.'
      },
      cameraPosition: [0, 0, 5],
      duration: 8000
    },
    {
      id: 1,
      title: { en: 'Right Atrium', ta: 'வலது ஏட்ரியம்' },
      description: {
        en: 'The right atrium receives deoxygenated blood from the body through the superior and inferior vena cava.',
        ta: 'வலது ஏட்ரியம் உடலிலிருந்து ஆக்சிஜன் இல்லாத இரத்தத்தை மேல் மற்றும் கீழ் வீனா காவா மூலம் பெறுகிறது.'
      },
      cameraPosition: [2, 1, 4],
      highlightPart: 'rightAtrium',
      duration: 8000
    },
    {
      id: 2,
      title: { en: 'Right Ventricle', ta: 'வலது வென்ட்ரிக்கிள்' },
      description: {
        en: 'The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery for oxygenation.',
        ta: 'வலது வென்ட்ரிக்கிள் ஆக்சிஜன் இல்லாத இரத்தத்தை நுரையீரல் தமனி வழியாக நுரையீரலுக்கு செலுத்துகிறது.'
      },
      cameraPosition: [2, -0.5, 4],
      highlightPart: 'rightVentricle',
      duration: 8000
    },
    {
      id: 3,
      title: { en: 'Left Atrium', ta: 'இடது ஏட்ரியம்' },
      description: {
        en: 'The left atrium receives oxygenated blood from the lungs through the pulmonary veins.',
        ta: 'இடது ஏட்ரியம் நுரையீரலிலிருந்து ஆக்சிஜனேற்றப்பட்ட இரத்தத்தை நுரையீரல் சிரைகள் வழியாக பெறுகிறது.'
      },
      cameraPosition: [-2, 1, 4],
      highlightPart: 'leftAtrium',
      duration: 8000
    },
    {
      id: 4,
      title: { en: 'Left Ventricle', ta: 'இடது வென்ட்ரிக்கிள்' },
      description: {
        en: 'The left ventricle is the strongest chamber. It pumps oxygenated blood to the entire body through the aorta.',
        ta: 'இடது வென்ட்ரிக்கிள் மிகவும் வலுவான அறை. இது ஆக்சிஜனேற்றப்பட்ட இரத்தத்தை அயோர்டா வழியாக முழு உடலுக்கும் செலுத்துகிறது.'
      },
      cameraPosition: [-2, -0.5, 4],
      highlightPart: 'leftVentricle',
      duration: 8000
    },
    {
      id: 5,
      title: { en: 'Blood Flow Animation', ta: 'இரத்த ஓட்ட அனிமேஷன்' },
      description: {
        en: 'Watch how blood flows through the heart. Red particles represent oxygenated blood, flowing from lungs to body.',
        ta: 'இதயத்தின் வழியாக இரத்தம் எவ்வாறு பாய்கிறது என்பதைப் பாருங்கள். சிவப்பு துகள்கள் ஆக்சிஜனேற்றப்பட்ட இரத்தத்தைக் குறிக்கின்றன.'
      },
      cameraPosition: [0, 0, 5],
      duration: 10000
    }
  ];

  // Auto-advance lesson steps
  useEffect(() => {
    if (!isPlaying) return;

    const step = lessonSteps[currentStep];
    setHighlightPart(step.highlightPart);
    setShowBloodFlow(currentStep === 5);

    const timer = setTimeout(() => {
      if (currentStep < lessonSteps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsPlaying(false);
      }
    }, step.duration);

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying]);

  const handlePartClick = (part: string) => {
    setSelectedPart(part);
    setIsPlaying(false);
    setHighlightPart(part);
  };

  const partInfo: Record<string, { en: string; ta: string }> = {
    leftAtrium: {
      en: 'Left Atrium: Receives oxygenated blood from lungs',
      ta: 'இடது ஏட்ரியம்: நுரையீரலிலிருந்து ஆக்சிஜன் இரத்தத்தைப் பெறுகிறது'
    },
    rightAtrium: {
      en: 'Right Atrium: Receives deoxygenated blood from body',
      ta: 'வலது ஏட்ரியம்: உடலிலிருந்து ஆக்சிஜன் இல்லாத இரத்தத்தைப் பெறுகிறது'
    },
    leftVentricle: {
      en: 'Left Ventricle: Pumps blood to the body (strongest chamber)',
      ta: 'இடது வென்ட்ரிக்கிள்: உடலுக்கு இரத்தத்தை செலுத்துகிறது (வலுவான அறை)'
    },
    rightVentricle: {
      en: 'Right Ventricle: Pumps blood to the lungs',
      ta: 'வலது வென்ட்ரிக்கிள்: நுரையீரலுக்கு இரத்தத்தை செலுத்துகிறது'
    },
    aorta: {
      en: 'Aorta: Main artery carrying blood from heart to body',
      ta: 'அயோர்டா: இதயத்திலிருந்து உடலுக்கு இரத்தத்தை எடுத்துச் செல்லும் முக்கிய தமனி'
    },
    pulmonaryArtery: {
      en: 'Pulmonary Artery: Carries deoxygenated blood to lungs',
      ta: 'நுரையீரல் தமனி: ஆக்சிஜன் இல்லாத இரத்தத்தை நுரையீரலுக்கு எடுத்துச் செல்கிறது'
    }
  };

  const currentLessonStep = lessonSteps[currentStep];

  return (
    <div className={`w-full h-full flex flex-col ${mode === 'vr' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-black'}`}>
      {/* AR Camera Feed */}
      {mode === 'ar' && (
        <>
          <CameraFeed
            videoRef={videoRef}
            onCameraReady={handleCameraReady}
            onCameraError={handleCameraError}
          />
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </>
      )}

      {/* Camera Error Message for AR */}
      {mode === 'ar' && cameraError && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-red-900/90 border border-red-500 rounded-2xl p-6 max-w-md text-center">
            <div className="text-5xl mb-4">📷</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {language === 'ta' ? 'கேமரா பிழை' : 'Camera Error'}
            </h3>
            <p className="text-red-200 mb-4">{cameraError}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              {language === 'ta' ? 'மீண்டும் முயற்சிக்கவும்' : 'Try Again'}
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className={`flex-shrink-0 p-4 ${mode === 'ar' ? 'bg-black/50' : 'bg-black/30'} backdrop-blur-sm border-b border-white/10 z-10`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">{topic}</h2>
            <p className={`text-sm ${mode === 'ar' ? 'text-green-300' : 'text-purple-300'}`}>
              {subject} - {mode === 'vr' ? (language === 'ta' ? 'மெய்நிகர் உண்மை அனுபவம்' : 'VR Experience') : (language === 'ta' ? 'மிகை மெய்ம்மை அனுபவம்' : 'AR Experience')}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {mode === 'ar' && (
              <span className={`text-xs px-2 py-1 rounded-full ${cameraReady ? 'bg-green-500/30 text-green-300' : 'bg-yellow-500/30 text-yellow-300'}`}>
                {cameraReady
                  ? (language === 'ta' ? '📷 கேமரா செயலில்' : '📷 Camera Active')
                  : (language === 'ta' ? '📷 இணைக்கிறது...' : '📷 Connecting...')}
              </span>
            )}
            <span className="text-sm text-white/70">
              {language === 'ta' ? 'படி' : 'Step'} {currentStep + 1} / {lessonSteps.length}
            </span>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: mode === 'ar' ? 'transparent' : undefined }}
          gl={{ alpha: mode === 'ar' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={mode === 'ar' ? 0.8 : 0.5} />
            <directionalLight position={[10, 10, 5]} intensity={mode === 'ar' ? 1.5 : 1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6666" />

            <HeartModel
              highlightPart={highlightPart}
              onPartClick={handlePartClick}
              modelScale={mode === 'ar' ? modelScale : 1.5}
              modelPosition={mode === 'ar' ? modelPosition : [0, 0, 0]}
            />
            <BloodFlow active={showBloodFlow} />

            <CameraController targetPosition={currentLessonStep.cameraPosition} />
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              minDistance={3}
              maxDistance={10}
            />
            {mode === 'vr' && (
              <>
                <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2} />
                <Environment preset="studio" />
              </>
            )}
          </Suspense>
        </Canvas>

        {/* AR Mode Badge */}
        {mode === 'ar' && cameraReady && (
          <div className="absolute top-4 right-4 bg-green-500/80 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/50 z-20">
            <p className="text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              {language === 'ta' ? 'AR நேரடி' : 'AR LIVE'}
            </p>
          </div>
        )}

        {/* AR Controls Panel */}
        {mode === 'ar' && cameraReady && (
          <div className="absolute right-4 top-20 z-20">
            {/* Toggle Button */}
            <button
              onClick={() => setShowARControls(!showARControls)}
              className="mb-2 w-full px-3 py-2 bg-green-600/80 hover:bg-green-700/80 backdrop-blur-sm rounded-lg text-white text-xs font-semibold transition-all border border-green-400/50"
            >
              {showARControls ? '🎮 Hide Controls' : '🎮 Show Controls'}
            </button>

            {showARControls && (
              <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-green-500/30 space-y-3 w-44">
                {/* Scale Controls */}
                <div>
                  <p className="text-xs text-green-300 font-semibold mb-2">
                    {language === 'ta' ? '📏 அளவு' : '📏 Scale'}: {modelScale.toFixed(1)}x
                  </p>
                  <div className="flex gap-1">
                    <button
                      onClick={() => adjustScale(-0.2)}
                      className="flex-1 px-2 py-2 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-lg font-bold transition-all"
                    >
                      −
                    </button>
                    <button
                      onClick={() => adjustScale(0.2)}
                      className="flex-1 px-2 py-2 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-lg font-bold transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Position Controls */}
                <div>
                  <p className="text-xs text-green-300 font-semibold mb-2">
                    {language === 'ta' ? '📍 நிலை' : '📍 Position'}
                  </p>
                  {/* Up/Down */}
                  <div className="flex justify-center mb-1">
                    <button
                      onClick={() => adjustPosition('y', 0.3)}
                      className="px-4 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-sm transition-all"
                    >
                      ▲
                    </button>
                  </div>
                  {/* Left/Right */}
                  <div className="flex justify-center gap-2 mb-1">
                    <button
                      onClick={() => adjustPosition('x', -0.3)}
                      className="px-4 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-sm transition-all"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() => adjustPosition('x', 0.3)}
                      className="px-4 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-sm transition-all"
                    >
                      ▶
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => adjustPosition('y', -0.3)}
                      className="px-4 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-sm transition-all"
                    >
                      ▼
                    </button>
                  </div>
                </div>

                {/* Depth Controls */}
                <div>
                  <p className="text-xs text-green-300 font-semibold mb-2">
                    {language === 'ta' ? '↔️ தூரம்' : '↔️ Depth'}
                  </p>
                  <div className="flex gap-1">
                    <button
                      onClick={() => adjustPosition('z', 0.5)}
                      className="flex-1 px-2 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-xs transition-all"
                    >
                      {language === 'ta' ? 'அருகில்' : 'Closer'}
                    </button>
                    <button
                      onClick={() => adjustPosition('z', -0.5)}
                      className="flex-1 px-2 py-1 bg-green-600/60 hover:bg-green-600/80 text-white rounded-lg text-xs transition-all"
                    >
                      {language === 'ta' ? 'தொலைவு' : 'Further'}
                    </button>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetARControls}
                  className="w-full px-3 py-2 bg-red-500/60 hover:bg-red-500/80 text-white rounded-lg text-xs font-semibold transition-all"
                >
                  {language === 'ta' ? '🔄 மீட்டமை' : '🔄 Reset'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Info Panel */}
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <div className={`${mode === 'ar' ? 'bg-black/80' : 'bg-black/70'} backdrop-blur-md rounded-2xl p-5 border ${mode === 'ar' ? 'border-green-500/30' : 'border-white/20'}`}>
            <h3 className="text-lg font-bold text-white mb-2">
              {currentLessonStep.title[language]}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {currentLessonStep.description[language]}
            </p>

            {/* Part info when clicked */}
            {selectedPart && partInfo[selectedPart] && (
              <div className={`mt-3 p-3 ${mode === 'ar' ? 'bg-green-600/30 border-green-400/30' : 'bg-purple-600/30 border-purple-400/30'} rounded-lg border`}>
                <p className={`text-sm ${mode === 'ar' ? 'text-green-200' : 'text-purple-200'}`}>
                  {partInfo[selectedPart][language]}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 z-20 max-w-xs">
          <p className="text-xs text-white/80">
            {mode === 'ar'
              ? (language === 'ta'
                  ? '📱 கேமரா நகர்த்தவும் • 🎮 கட்டுப்பாடுகள் பயன்படுத்தவும் • விவரங்களுக்கு தட்டவும்'
                  : '📱 Move camera • 🎮 Use controls to adjust • Tap for details')
              : (language === 'ta'
                  ? '🖱️ சுழற்ற இழுக்கவும் • பெரிதாக்க உருட்டவும் • விவரங்களுக்கு கிளிக் செய்யவும்'
                  : '🖱️ Drag to rotate • Scroll to zoom • Click parts for details')}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className={`flex-shrink-0 p-4 ${mode === 'ar' ? 'bg-black/50' : 'bg-black/30'} backdrop-blur-sm border-t border-white/10 z-10`}>
        <div className="flex items-center justify-between gap-4">
          {/* Progress bar */}
          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${mode === 'ar' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`}
              style={{ width: `${((currentStep + 1) / lessonSteps.length) * 100}%` }}
            />
          </div>

          {/* Control buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all"
            >
              {language === 'ta' ? 'முந்தைய' : 'Previous'}
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-2 text-white font-semibold rounded-lg transition-all ${
                mode === 'ar'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              {isPlaying
                ? (language === 'ta' ? 'இடைநிறுத்து' : 'Pause')
                : (language === 'ta' ? 'தொடர்' : 'Play')}
            </button>

            <button
              onClick={() => setCurrentStep(Math.min(lessonSteps.length - 1, currentStep + 1))}
              disabled={currentStep === lessonSteps.length - 1}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all"
            >
              {language === 'ta' ? 'அடுத்து' : 'Next'}
            </button>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {lessonSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => {
                setCurrentStep(index);
                setIsPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStep
                  ? (mode === 'ar' ? 'bg-green-500 scale-125' : 'bg-purple-500 scale-125')
                  : index < currentStep
                    ? (mode === 'ar' ? 'bg-green-400/60' : 'bg-purple-400/60')
                    : 'bg-white/30'
              }`}
              title={step.title[language]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson3DViewer;
