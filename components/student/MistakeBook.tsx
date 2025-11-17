import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon, TargetIcon, TrendingUpIcon, VideoIcon, AudioIcon, ReadIcon, ARIcon, VRIcon } from '../icons';
import { Mistake } from '../../types';
import { loadFromLocalStorage } from '../../utils/localStorage';
import Video360Viewer from './Video360Viewer';
import UltraSimpleARViewer from './UltraSimpleARViewer';

// Mockup data for demo
const mockMistakes: Mistake[] = [
    {
        question: "A body of mass 2 kg is moving with velocity 10 m/s. What is its kinetic energy?",
        yourAnswer: "50 J",
        correctAnswer: "100 J",
        explanation: "Kinetic Energy = (1/2)mv². Substituting m=2kg and v=10m/s: KE = (1/2) × 2 × (10)² = (1/2) × 2 × 100 = 100 J. Remember to square the velocity before multiplying.",
        subject: "Physics",
        topic: "Work, Energy and Power",
        difficulty: "Easy",
        attemptedOn: "2 days ago",
        testName: "Physics Mock Test 1"
    },
    {
        question: "What is the IUPAC name of CH₃-CH₂-CH₂-OH?",
        yourAnswer: "2-Propanol",
        correctAnswer: "1-Propanol (or Propan-1-ol)",
        explanation: "When naming alcohols, number the carbon chain from the end that gives the -OH group the lowest number. In this case, numbering from the left gives the -OH on carbon 1. The name is 1-Propanol or Propan-1-ol according to IUPAC nomenclature.",
        subject: "Chemistry",
        topic: "Organic Chemistry - Nomenclature",
        difficulty: "Medium",
        attemptedOn: "3 days ago",
        testName: "Chemistry Chapter Test",
        videoExplanationUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        question: "Which of the following is NOT a function of the mitochondria?",
        yourAnswer: "Protein synthesis",
        correctAnswer: "Photosynthesis",
        explanation: "Mitochondria are known as the powerhouse of the cell and are responsible for ATP production through cellular respiration. They also play roles in calcium signaling, thermogenesis, and apoptosis. Photosynthesis occurs in chloroplasts (in plant cells), not mitochondria. Mitochondria do have ribosomes and can synthesize some proteins.",
        subject: "Biology",
        topic: "Cell Structure and Function",
        difficulty: "Easy",
        attemptedOn: "1 day ago",
        testName: "NEET Biology Mock"
    },
    {
        question: "If sin θ = 3/5 and θ is in the second quadrant, find cos θ",
        yourAnswer: "4/5",
        correctAnswer: "-4/5",
        explanation: "Using the identity sin²θ + cos²θ = 1, we get: (3/5)² + cos²θ = 1, which gives cos²θ = 1 - 9/25 = 16/25, so cos θ = ±4/5. Since θ is in the second quadrant where cosine is negative, cos θ = -4/5. Always consider the quadrant when determining the sign.",
        subject: "Maths",
        topic: "Trigonometry",
        difficulty: "Medium",
        attemptedOn: "5 days ago",
        testName: "JEE Maths Practice"
    },
    {
        question: "The SI unit of electric field intensity is:",
        yourAnswer: "Volt",
        correctAnswer: "Volt per meter (V/m) or Newton per Coulomb (N/C)",
        explanation: "Electric field intensity E is defined as force per unit charge (E = F/q) or as the negative gradient of electric potential (E = -dV/dx). Therefore, its SI unit can be expressed as N/C (Newton per Coulomb) or V/m (Volt per meter). Both are equivalent. Volt alone is the unit of electric potential, not electric field.",
        subject: "Physics",
        topic: "Electrostatics",
        difficulty: "Easy",
        attemptedOn: "1 week ago",
        testName: "Physics Full Test"
    },
    {
        question: "Which reagent is used to distinguish between aldehydes and ketones?",
        yourAnswer: "Fehling's solution",
        correctAnswer: "Tollen's reagent (or Fehling's/Benedict's solution)",
        explanation: "Several reagents can distinguish aldehydes from ketones. Tollen's reagent (ammoniacal silver nitrate) gives a silver mirror test with aldehydes. Fehling's and Benedict's solutions also work, giving a red precipitate with aldehydes. Your answer is correct! Ketones do not react with these reagents under normal conditions because they are harder to oxidize.",
        subject: "Chemistry",
        topic: "Aldehydes and Ketones",
        difficulty: "Medium",
        attemptedOn: "4 days ago",
        testName: "Organic Chemistry Test"
    },
    {
        question: "What is the powerhouse of the cell?",
        yourAnswer: "Nucleus",
        correctAnswer: "Mitochondria",
        explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP (adenosine triphosphate) through cellular respiration. ATP is the energy currency of the cell. The nucleus is the control center of the cell, containing genetic material (DNA), but it doesn't produce energy.",
        subject: "Biology",
        topic: "Cell Biology",
        difficulty: "Easy",
        attemptedOn: "6 days ago",
        testName: "Biology Basics"
    },
    {
        question: "∫ sin²x dx = ?",
        yourAnswer: "(x/2) - (sin2x/4) + C",
        correctAnswer: "(x/2) - (sin2x/4) + C",
        explanation: "This is correct! Using the identity sin²x = (1 - cos2x)/2, we can write: ∫ sin²x dx = ∫ (1 - cos2x)/2 dx = (1/2)∫(1 - cos2x)dx = (1/2)[x - (sin2x/2)] + C = x/2 - sin2x/4 + C. Well done!",
        subject: "Maths",
        topic: "Integration",
        difficulty: "Medium",
        attemptedOn: "3 days ago",
        testName: "Calculus Practice"
    }
];

const MistakeBook: React.FC = () => {
    const [mistakes, setMistakes] = useState<Mistake[]>([]);
    const [expandedMistake, setExpandedMistake] = useState<number | null>(0);
    const [subjectFilter, setSubjectFilter] = useState<string>('All');

    // Multimedia modal states
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [showVideoTypeSelection, setShowVideoTypeSelection] = useState(false);
    const [selectedVideoType, setSelectedVideoType] = useState<'2D' | '3D' | null>(null);
    const [showAudioPlayer, setShowAudioPlayer] = useState(false);
    const [showPDFViewer, setShowPDFViewer] = useState(false);
    const [showARViewer, setShowARViewer] = useState(false);
    const [showVRExperience, setShowVRExperience] = useState(false);
    const [selectedMistake, setSelectedMistake] = useState<Mistake | null>(null);

    useEffect(() => {
        const storedMistakes = loadFromLocalStorage<Mistake[]>('mistakeBook', []);
        // Use mockup data if no stored mistakes, otherwise use stored mistakes
        setMistakes(storedMistakes.length > 0 ? storedMistakes : mockMistakes);
    }, []);

    const handleToggleMistake = (index: number) => {
        setExpandedMistake(expandedMistake === index ? null : index);
    };

    // Calculate statistics
    const subjects = ['All', ...Array.from(new Set(mistakes.map(m => m.subject || 'Unknown')))];
    const filteredMistakes = subjectFilter === 'All'
        ? mistakes
        : mistakes.filter(m => m.subject === subjectFilter);

    const subjectStats = subjects.slice(1).map(subject => {
        const count = mistakes.filter(m => m.subject === subject).length;
        return { subject, count };
    });

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Easy':
                return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300';
            case 'Medium':
                return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300';
            case 'Hard':
                return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300';
            default:
                return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    Mistake Book
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Learn from your mistakes and improve your performance
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-6 rounded-2xl text-white shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <BookOpenIcon className="w-8 h-8 opacity-80" />
                        <TrendingUpIcon className="w-6 h-6" />
                    </div>
                    <p className="text-3xl font-bold">{mistakes.length}</p>
                    <p className="text-sm opacity-90">Total Mistakes</p>
                </div>

                {subjectStats.slice(0, 3).map((stat, idx) => (
                    <div
                        key={stat.subject}
                        className={`p-6 rounded-2xl text-white shadow-lg ${
                            idx === 0
                                ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                                : idx === 1
                                ? 'bg-gradient-to-br from-emerald-500 to-teal-600'
                                : 'bg-gradient-to-br from-orange-500 to-amber-600'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <TargetIcon className="w-8 h-8 opacity-80" />
                        </div>
                        <p className="text-3xl font-bold">{stat.count}</p>
                        <p className="text-sm opacity-90">{stat.subject}</p>
                    </div>
                ))}
            </div>

            {/* Subject Filter */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        Filter by Subject:
                    </label>
                    <select
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-800 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {subjects.map((subject) => (
                            <option key={subject} value={subject}>
                                {subject}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                    Showing {filteredMistakes.length} of {mistakes.length} mistakes
                </div>
            </div>

            {/* Mistakes List */}
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-4">
                    {filteredMistakes.length > 0 ? (
                        filteredMistakes.map((item, index) => (
                            <div
                                key={index}
                                className="border-2 border-slate-200 dark:border-slate-700 rounded-xl transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700"
                            >
                                <div className="p-5">
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                {item.subject && (
                                                    <span className="px-3 py-1 text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">
                                                        {item.subject}
                                                    </span>
                                                )}
                                                {item.difficulty && (
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(item.difficulty)}`}>
                                                        {item.difficulty}
                                                    </span>
                                                )}
                                                {item.attemptedOn && (
                                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                                        {item.attemptedOn}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="font-semibold text-slate-800 dark:text-slate-100 text-base leading-relaxed">
                                                {item.question}
                                            </p>
                                            {(item.topic || item.testName) && (
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                                                    {item.topic && `Topic: ${item.topic}`}
                                                    {item.topic && item.testName && ' • '}
                                                    {item.testName}
                                                </p>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleToggleMistake(index)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                            aria-expanded={expandedMistake === index}
                                        >
                                            {expandedMistake === index ? (
                                                <ChevronUpIcon className="w-6 h-6 text-slate-400" />
                                            ) : (
                                                <ChevronDownIcon className="w-6 h-6 text-slate-400" />
                                            )}
                                        </button>
                                    </div>

                                    {/* Multimedia Learning Resources - Always Visible */}
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <button
                                            title="Watch Video"
                                            className="p-2 rounded-lg bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMistake(item);
                                                setShowVideoTypeSelection(true);
                                            }}
                                        >
                                            <VideoIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Listen Audio"
                                            className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMistake(item);
                                                setShowAudioPlayer(true);
                                            }}
                                        >
                                            <AudioIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Read Material"
                                            className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMistake(item);
                                                setShowPDFViewer(true);
                                            }}
                                        >
                                            <ReadIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="View AR"
                                            className="p-2 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMistake(item);
                                                setShowARViewer(true);
                                            }}
                                        >
                                            <ARIcon className="w-4 h-4" />
                                        </button>

                                        <button
                                            title="Experience VR"
                                            className="p-2 rounded-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-700 text-orange-600 dark:text-orange-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMistake(item);
                                                setShowVRExperience(true);
                                            }}
                                        >
                                            <VRIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                                {expandedMistake === index && (
                                    <div className="px-5 pb-5 text-sm">
                                        <div className="border-t border-slate-200 dark:border-slate-700 pt-4 space-y-5">
                                            {/* Answers Comparison */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                                                        <span className="font-semibold text-red-700 dark:text-red-300">
                                                            Your Answer:
                                                        </span>
                                                    </div>
                                                    <p className="text-red-800 dark:text-red-200 font-medium">
                                                        {item.yourAnswer}
                                                    </p>
                                                </div>
                                                <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                                                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                                                            Correct Answer:
                                                        </span>
                                                    </div>
                                                    <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                                                        {item.correctAnswer}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Explanation */}
                                            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-700 rounded-lg">
                                                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2">
                                                    <BookOpenIcon className="w-5 h-5" />
                                                    Explanation:
                                                </h4>
                                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                                    {item.explanation}
                                                </p>
                                            </div>

                                            {/* Video Explanation */}
                                            {item.videoExplanationUrl && (
                                                <div>
                                                    <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                        </svg>
                                                        Video Explanation
                                                    </h4>
                                                    <div className="aspect-video w-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden">
                                                        <iframe
                                                            className="w-full h-full"
                                                            src={item.videoExplanationUrl}
                                                            title="Video explanation"
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="flex gap-3 pt-2">
                                                <button className="flex-1 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                                                    Practice Similar Questions
                                                </button>
                                                <button className="py-2 px-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
                                                    Mark as Reviewed
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full mb-4">
                                <BookOpenIcon className="w-8 h-8 text-slate-400" />
                            </div>
                            <p className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                No mistakes found
                            </p>
                            <p className="text-slate-500 dark:text-slate-400">
                                {subjectFilter === 'All'
                                    ? 'Your mistake book is empty. Incorrect answers from tests will appear here.'
                                    : `No mistakes in ${subjectFilter}. Try a different subject filter.`}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Tips Section */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Learning Tips
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                        <span>Review your mistakes regularly to identify patterns and weak areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                        <span>Practice similar questions to reinforce concepts you got wrong</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                        <span>Read explanations carefully and make notes of key points</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-0.5">•</span>
                        <span>Watch video explanations for complex topics to gain better understanding</span>
                    </li>
                </ul>
            </div>

            {/* Video Type Selection Modal */}
            {showVideoTypeSelection && selectedMistake && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-8">
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
                            Choose Video Type
                        </h3>
                        <div className="space-y-4">
                            <button
                                onClick={() => {
                                    setSelectedVideoType('2D');
                                    setShowVideoTypeSelection(false);
                                    setShowVideoModal(true);
                                }}
                                className="w-full p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                📺 Standard Video (2D)
                            </button>
                            <button
                                onClick={() => {
                                    setSelectedVideoType('3D');
                                    setShowVideoTypeSelection(false);
                                    setShowVRExperience(true);
                                }}
                                className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                🌐 360° Immersive Video
                            </button>
                            <button
                                onClick={() => {
                                    setShowVideoTypeSelection(false);
                                    setSelectedMistake(null);
                                }}
                                className="w-full p-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 2D Video Modal */}
            {showVideoModal && selectedMistake && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center z-10">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                📺 Video Explanation: {selectedMistake.topic || selectedMistake.subject}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowVideoModal(false);
                                    setSelectedMistake(null);
                                }}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden mb-4">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Video explanation"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
                                <p className="text-sm text-slate-700 dark:text-slate-300">
                                    <strong>Topic:</strong> {selectedMistake.topic || 'General Concept'}
                                </p>
                                <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                                    <strong>Subject:</strong> {selectedMistake.subject}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Audio Player Modal */}
            {showAudioPlayer && selectedMistake && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                                🎧 Audio Explanation
                            </h3>
                            <button
                                onClick={() => {
                                    setShowAudioPlayer(false);
                                    setSelectedMistake(null);
                                }}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                                    </svg>
                                </div>
                            </div>
                            <audio controls className="w-full mb-4">
                                <source src="/audio/explanation.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                            <div className="text-center">
                                <p className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                                    {selectedMistake.topic || 'Audio Explanation'}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {selectedMistake.subject} • Listen and Learn
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* PDF Viewer Modal */}
            {showPDFViewer && selectedMistake && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                        <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                                📚 Study Material: {selectedMistake.topic || selectedMistake.subject}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowPDFViewer(false);
                                    setSelectedMistake(null);
                                }}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 overflow-auto bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800">
                            {/* PDF Viewer - Scrollable Multi-Page Content */}
                            <div className="max-w-4xl mx-auto p-6 space-y-8">
                                {/* === PAGE 1 === */}
                                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 min-h-[800px]">
                                    <div className="border-b-2 border-emerald-500 pb-4 mb-6">
                                        <h2 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                            {selectedMistake.subject} - Study Guide
                                        </h2>
                                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                                            Topic: {selectedMistake.topic || 'General Concepts'}
                                        </p>
                                    </div>

                                    <div className="prose dark:prose-invert max-w-none">
                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">
                                            Overview
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                                            {selectedMistake.explanation || 'This comprehensive study material covers the fundamental concepts and advanced topics related to this subject.'}
                                        </p>

                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">
                                            Key Concepts
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                                            <li>Understanding the fundamental principles</li>
                                            <li>Common misconceptions and how to avoid them</li>
                                            <li>Practice problems and solutions</li>
                                            <li>Real-world applications</li>
                                            <li>Exam preparation strategies</li>
                                        </ul>

                                        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">
                                            Detailed Explanation
                                        </h3>
                                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {selectedMistake.explanation || 'Detailed explanation and study notes will help you master this topic. Review the key points, practice regularly, and refer to this material whenever you need clarification.'}
                                        </p>

                                        <div className="mt-8 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border-l-4 border-emerald-500">
                                            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                                                💡 Pro Tip: Review this material regularly and practice related questions to reinforce your understanding.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <div className="mt-8 text-center">
                                        <button
                                            onClick={() => {
                                                // Create a simple text file with the study material
                                                const content = `${selectedMistake.subject} - Study Guide\n\nTopic: ${selectedMistake.topic || 'General Concepts'}\n\nExplanation:\n${selectedMistake.explanation || 'Study material for this topic.'}\n\nKey Concepts:\n- Understanding the fundamental principles\n- Common misconceptions and how to avoid them\n- Practice problems and solutions\n- Real-world applications\n- Exam preparation strategies`;
                                                const blob = new Blob([content], { type: 'text/plain' });
                                                const url = window.URL.createObjectURL(blob);
                                                const a = document.createElement('a');
                                                a.href = url;
                                                a.download = `${selectedMistake.subject}-${selectedMistake.topic || 'Study-Material'}.txt`;
                                                document.body.appendChild(a);
                                                a.click();
                                                document.body.removeChild(a);
                                                window.URL.revokeObjectURL(url);
                                            }}
                                            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200"
                                        >
                                            📥 Download Study Material
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* AR Viewer Modal */}
            {showARViewer && selectedMistake && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="w-full h-full max-w-7xl max-h-screen flex flex-col">
                        <div className="bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white">
                                🔮 AR Experience: {selectedMistake.topic || selectedMistake.subject}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowARViewer(false);
                                    setSelectedMistake(null);
                                }}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 relative">
                            <UltraSimpleARViewer
                                topic={selectedMistake.topic || 'Concept Visualization'}
                                subject={selectedMistake.subject || 'Science'}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* VR Experience Modal */}
            {showVRExperience && selectedMistake && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="w-full h-full max-w-7xl max-h-screen flex flex-col">
                        <div className="bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white">
                                🌐 360° Immersive Experience: {selectedMistake.topic || selectedMistake.subject}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowVRExperience(false);
                                    setSelectedMistake(null);
                                }}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 relative">
                            <Video360Viewer
                                topic={selectedMistake.topic || 'Immersive Learning'}
                                subject={selectedMistake.subject || 'Science'}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MistakeBook;
