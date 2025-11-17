import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { PlayIcon, ZapIcon, TargetIcon } from '../icons';

interface Short {
  id: string;
  videoId: string;
  title: string;
  subject: 'Physics' | 'Chemistry' | 'Biology' | 'All';
  topic: string;
  duration: string;
  views: string;
}

const shortsData: Short[] = [
  // User provided shorts
  {
    id: '1',
    videoId: 'CPrzFz6yHCk',
    title: 'NEET Biology Quick Concept',
    subject: 'Biology',
    topic: 'Cell Biology',
    duration: '0:45',
    views: '125K'
  },
  {
    id: '2',
    videoId: 'jshT48DBmrk',
    title: 'Physics Formula Trick',
    subject: 'Physics',
    topic: 'Mechanics',
    duration: '0:58',
    views: '98K'
  },
  {
    id: '3',
    videoId: 'drbmdR1Apz0',
    title: 'Chemistry Shortcut Method',
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    duration: '0:52',
    views: '156K'
  },
  {
    id: '4',
    videoId: '1DyuLd_dLpA',
    title: 'NEET Biology Memory Trick',
    subject: 'Biology',
    topic: 'Plant Physiology',
    duration: '0:48',
    views: '89K'
  },
  {
    id: '5',
    videoId: 'xm6p6-2X3Qk',
    title: 'Physics Problem Solving',
    subject: 'Physics',
    topic: 'Thermodynamics',
    duration: '0:55',
    views: '112K'
  },
  {
    id: '6',
    videoId: 'Pvsavkm7qms',
    title: 'Organic Chemistry Reactions',
    subject: 'Chemistry',
    topic: 'Reactions',
    duration: '0:50',
    views: '134K'
  },
  {
    id: '7',
    videoId: '8COJ7fsT8bc',
    title: 'NEET Important Concept',
    subject: 'Biology',
    topic: 'Genetics',
    duration: '0:46',
    views: '201K'
  },
  {
    id: '8',
    videoId: 'ezgXB6urHUw',
    title: 'Quick Revision Tips',
    subject: 'All',
    topic: 'Study Tips',
    duration: '0:59',
    views: '178K'
  },
  // Additional NEET/JEE related shorts
  {
    id: '9',
    videoId: 'Ks-_Mh1QhMc',
    title: 'Photosynthesis in 60 Seconds',
    subject: 'Biology',
    topic: 'Plant Physiology',
    duration: '0:60',
    views: '145K'
  },
  {
    id: '10',
    videoId: 'yAoLSRbwxL8',
    title: 'Newtons Laws Quick Recap',
    subject: 'Physics',
    topic: 'Laws of Motion',
    duration: '0:54',
    views: '167K'
  },
  {
    id: '11',
    videoId: 'kJGi9Cy3V_Q',
    title: 'Periodic Table Tricks',
    subject: 'Chemistry',
    topic: 'Periodic Table',
    duration: '0:47',
    views: '223K'
  },
  {
    id: '12',
    videoId: 'R3qPjWHbFkw',
    title: 'Human Heart Structure',
    subject: 'Biology',
    topic: 'Anatomy',
    duration: '0:52',
    views: '198K'
  },
  {
    id: '13',
    videoId: 'S_fXfhF5zkg',
    title: 'Electrostatics Fundamentals',
    subject: 'Physics',
    topic: 'Electrostatics',
    duration: '0:49',
    views: '132K'
  },
  {
    id: '14',
    videoId: 'HB-6VfSM7oc',
    title: 'Chemical Bonding Basics',
    subject: 'Chemistry',
    topic: 'Chemical Bonding',
    duration: '0:56',
    views: '189K'
  },
  {
    id: '15',
    videoId: 'LYg1v0pGE1g',
    title: 'DNA Replication Explained',
    subject: 'Biology',
    topic: 'Molecular Biology',
    duration: '0:58',
    views: '215K'
  },
  {
    id: '16',
    videoId: 'zNVQfWC_evg',
    title: 'Work Energy Theorem',
    subject: 'Physics',
    topic: 'Work & Energy',
    duration: '0:51',
    views: '143K'
  }
];

const Shorts: React.FC = () => {
  const { language } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Physics' | 'Chemistry' | 'Biology'>('All');
  const [selectedVideo, setSelectedVideo] = useState<Short | null>(null);

  const filteredShorts = selectedSubject === 'All'
    ? shortsData
    : shortsData.filter(short => short.subject === selectedSubject || short.subject === 'All');

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'Physics':
        return 'bg-gradient-to-br from-red-500 to-pink-600';
      case 'Chemistry':
        return 'bg-gradient-to-br from-cyan-500 to-blue-600';
      case 'Biology':
        return 'bg-gradient-to-br from-green-500 to-emerald-600';
      default:
        return 'bg-gradient-to-br from-purple-500 to-indigo-600';
    }
  };

  const getSubjectEmoji = (subject: string) => {
    switch (subject) {
      case 'Physics': return '⚡';
      case 'Chemistry': return '🧪';
      case 'Biology': return '🧬';
      default: return '📚';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            {language === 'ta' ? 'குறும்படங்கள்' : 'Shorts'}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {language === 'ta'
              ? 'விரைவான கற்றல் - ஒரு நிமிடத்தில் கருத்துகளை மாஸ்டர் செய்யுங்கள்'
              : 'Quick Learning - Master concepts in under a minute!'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ZapIcon className="w-6 h-6 text-yellow-500" />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {filteredShorts.length} {language === 'ta' ? 'வீடியோக்கள்' : 'Videos'}
          </span>
        </div>
      </div>

      {/* Subject Filter */}
      <div className="flex flex-wrap gap-3">
        {['All', 'Physics', 'Chemistry', 'Biology'].map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject as any)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              selectedSubject === subject
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600'
            }`}
          >
            {getSubjectEmoji(subject)} {language === 'ta'
              ? (subject === 'All' ? 'அனைத்தும்' : subject === 'Physics' ? 'இயற்பியல்' : subject === 'Chemistry' ? 'வேதியியல்' : 'உயிரியல்')
              : subject}
          </button>
        ))}
      </div>

      {/* Shorts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredShorts.map((short) => (
          <div
            key={short.id}
            onClick={() => setSelectedVideo(short)}
            className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[9/16] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
              <img
                src={`https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`}
                alt={short.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to default thumbnail if maxres is not available
                  e.currentTarget.src = `https://img.youtube.com/vi/${short.videoId}/hqdefault.jpg`;
                }}
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <PlayIcon className="w-8 h-8 text-indigo-600 ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded">
                {short.duration}
              </div>

              {/* Subject Badge */}
              <div className="absolute top-2 left-2">
                <span className={`${getSubjectColor(short.subject)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {getSubjectEmoji(short.subject)} {short.subject}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100 mb-1 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {short.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                {short.topic}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                  👁️ {short.views}
                </span>
                <TargetIcon className="w-4 h-4 text-indigo-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="aspect-[9/16] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Info */}
            <div className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className={`${getSubjectColor(selectedVideo.subject)} text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg flex-shrink-0`}>
                  {getSubjectEmoji(selectedVideo.subject)} {selectedVideo.subject}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {selectedVideo.topic}
              </p>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>👁️ {selectedVideo.views} views</span>
                <span>⏱️ {selectedVideo.duration}</span>
              </div>

              {/* Open in YouTube Button */}
              <a
                href={`https://www.youtube.com/shorts/${selectedVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {language === 'ta' ? 'YouTube இல் திற' : 'Open in YouTube'}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredShorts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📹</div>
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {language === 'ta' ? 'வீடியோக்கள் இல்லை' : 'No Videos Found'}
          </p>
          <p className="text-slate-500 dark:text-slate-400">
            {language === 'ta'
              ? 'இந்த பாடத்திற்கான வீடியோக்கள் விரைவில் சேர்க்கப்படும்'
              : 'Videos for this subject will be added soon'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Shorts;
