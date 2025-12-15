import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import type { Role } from './types';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import AdminDashboard from './components/dashboards/AdminDashboard';
import TeacherDashboard from './components/dashboards/TeacherDashboard';
import StudentDashboard from './components/dashboards/StudentDashboard';
import Login from './components/Login';
import LandingPage from './components/landing/LandingPage';
import RegistrationLanding from './components/landing/RegistrationLanding';
import StudentRegistrationForm from './components/registration/StudentRegistrationForm';
import TeacherRegistrationForm from './components/registration/TeacherRegistrationForm';
import SchoolRegistrationForm from './components/registration/SchoolRegistrationForm';
import PracticeModeNew from './components/student/PracticeModeNew';
import ExamModeNew from './components/student/ExamModeNew';
import MistakeBook from './components/student/MistakeBook';
import LiveClassesView from './components/student/LiveClassesView';
import DailyChallengeContainer from './components/student/DailyChallengeContainer';
import Shorts from './components/student/Shorts';
import QuestionBank from './components/admin/QuestionBank';
import TestCreation from './components/admin/TestCreation';
import DailyChallengeCreation from './components/admin/DailyChallengeCreation';
import TestManagement from './components/admin/TestManagement';
import LanguageSelector from './components/LanguageSelector';
import TNSchoolsPage from './pages/TNSchoolsPage';
import GamificationStats from './components/GamificationStats';
import api from './services/api';
import {
    SunIcon, MoonIcon, LayoutDashboardIcon, UsersIcon, UserIcon, LogOutIcon,
    SchoolIcon, FileTextIcon, ClipboardCheckIcon, GraduationCapIcon, PenSquareIcon, BookOpenIcon, StethoscopeIcon, VideoIcon
} from './components/icons';

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-lg'
        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    {icon}
    <span className="ml-3 hidden lg:inline">{label}</span>
  </button>
);

const ThemeToggle: React.FC<{
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}> = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-3 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
        </button>
    );
};

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Dashboard Layout Component
const DashboardLayout: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { t, language } = useLanguage();
  const [activeView, setActiveView] = useState('dashboard');
  const [streak, setStreak] = useState(0);
  const [coins, setCoins] = useState(0);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const handleSetTheme = useCallback((newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    handleSetTheme(theme);
  }, [theme, handleSetTheme]);

  // Listen for navigation requests from child components
  useEffect(() => {
    const handleStorageChange = () => {
      const navRequest = localStorage.getItem('navRequest');
      if (navRequest) {
        setActiveView(navRequest);
        localStorage.removeItem('navRequest');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Also check on mount
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Fetch gamification stats for students
  useEffect(() => {
    const fetchGamificationStats = async () => {
      if (currentUser?.role === 'student') {
        try {
          const analyticsRes = await api.get('/student/analytics');
          if (analyticsRes.data.success) {
            setStreak(analyticsRes.data.data.userStats?.streak || 0);
            setCoins(analyticsRes.data.data.userStats?.coins || 0);
          }
        } catch (error) {
          console.error('Error fetching gamification stats:', error);
        }
      }
    };

    fetchGamificationStats();
  }, [currentUser]);

  const navConfig: Record<Role, { label: string; icon: React.ReactNode; view: string }[]> = {
    student: [
      { label: t('dashboard'), icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: t('practiceMode'), icon: <PenSquareIcon className="w-5 h-5" />, view: 'practice' },
      { label: t('takeAnExam'), icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'exam' },
      { label: t('dailyChallenge'), icon: <FileTextIcon className="w-5 h-5" />, view: 'daily-challenge' },
      { label: language === 'ta' ? 'குறும்படங்கள்' : 'Shorts', icon: <VideoIcon className="w-5 h-5" />, view: 'shorts' },
      { label: t('mistakeBook'), icon: <BookOpenIcon className="w-5 h-5" />, view: 'mistakes' },
      { label: t('liveClasses'), icon: <UsersIcon className="w-5 h-5" />, view: 'classes' },
    ],
    teacher: [
      { label: t('dashboard'), icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: t('myStudents'), icon: <GraduationCapIcon className="w-5 h-5" />, view: 'students' },
      { label: t('createTest'), icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'create-test' },
      { label: t('questionBankNav'), icon: <BookOpenIcon className="w-5 h-5" />, view: 'q-bank' },
      { label: t('analytics'), icon: <UsersIcon className="w-5 h-5" />, view: 'analytics' },
    ],
    admin: [
      { label: t('dashboard'), icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: t('questionBank'), icon: <BookOpenIcon className="w-5 h-5" />, view: 'question-bank' },
      { label: t('createTest'), icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'create-test' },
      { label: 'Test Management', icon: <FileTextIcon className="w-5 h-5" />, view: 'test-management' },
      { label: t('dailyChallenge'), icon: <PenSquareIcon className="w-5 h-5" />, view: 'daily-challenge' },
      { label: t('manageSchools'), icon: <SchoolIcon className="w-5 h-5" />, view: 'schools' },
      { label: t('manageTeachers'), icon: <UsersIcon className="w-5 h-5" />, view: 'teachers' },
      { label: t('manageStudents'), icon: <GraduationCapIcon className="w-5 h-5" />, view: 'students' },
      { label: t('reports'), icon: <FileTextIcon className="w-5 h-5" />, view: 'reports' },
    ],
  };

  const renderContent = () => {
    if (!currentUser) return null;

    if (currentUser.role === 'admin') {
      switch (activeView) {
        case 'dashboard':
          return <AdminDashboard />;
        case 'question-bank':
          return <QuestionBank />;
        case 'create-test':
          return <TestCreation />;
        case 'test-management':
          return <TestManagement />;
        case 'daily-challenge':
          return <DailyChallengeCreation />;
        default:
          return <AdminDashboard />;
      }
    }

    if (currentUser.role === 'teacher') {
      return <TeacherDashboard />;
    }

    if (currentUser.role === 'student') {
      switch (activeView) {
        case 'dashboard':
          return <StudentDashboard />;
        case 'practice':
          return <PracticeModeNew />;
        case 'exam':
          return <ExamModeNew />;
        case 'daily-challenge':
          return <DailyChallengeContainer />;
        case 'shorts':
          return <Shorts />;
        case 'mistakes':
          return <MistakeBook />;
        case 'classes':
          return <LiveClassesView />;
        default:
          return <StudentDashboard />;
      }
    }

    return null;
  };

  if (!currentUser) return null;

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 font-sans">
      <aside className="w-20 lg:w-64 bg-white dark:bg-slate-800/50 p-4 lg:p-6 flex flex-col border-r border-slate-200 dark:border-slate-800 transition-all duration-300">
        {/* Logo - Fixed at top */}
        <div className="flex-shrink-0 flex items-center mb-6">
            <img
              src="/logo.png"
              alt="Education Intelligence Logo"
              className="w-10 h-10 lg:w-12 lg:h-12"
            />
            <div className="ml-3 hidden lg:flex flex-col">
              <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">{t('appTitle')}</h1>
              <span className="text-xs text-indigo-600 dark:text-indigo-400">{t('landing.nav.tagline')}</span>
            </div>
        </div>

        {/* Navigation - Scrollable middle section */}
        <nav className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent">
           {navConfig[currentUser.role].map(item => (
               <NavItem
                    key={item.view}
                    icon={item.icon}
                    label={item.label}
                    isActive={activeView === item.view}
                    onClick={() => setActiveView(item.view)}
               />
           ))}
        </nav>

        {/* Bottom section - Fixed at bottom - Only Female Doctor Image */}
        <div className="flex-shrink-0">
            {currentUser.role === 'student' && (
              <div className="hidden lg:block">
                <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner bg-slate-100">
                  <img
                    src="/female-doctor.jpg"
                    alt="Indian doctor"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />
                </div>
              </div>
            )}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {/* Compact Universal Header */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-4 sm:px-6 lg:px-10 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {currentUser.role === 'student' ? (
              <div className="flex items-center gap-3">
                <StethoscopeIcon className="w-7 h-7 text-indigo-500" />
                <div>
                  <h1 className="text-base font-bold text-slate-800 dark:text-slate-100">
                    {language === 'ta' ? 'வருக எதிர்கால மருத்துவர், ' : 'Welcome Future Doctor, '}
                    <span className="text-indigo-600 dark:text-indigo-400">{currentUser.name}</span>!
                  </h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {language === 'ta' ? 'இன்று உங்கள் தேர்வுகளை வெல்லலாம்! தொடங்குவோம்.' : "Ready to conquer your exams today? Let's get started."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <UserIcon className="w-8 h-8 p-1.5 text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{currentUser.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{currentUser.role}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              {currentUser.role === 'student' && (
                <GamificationStats streak={streak} coins={coins} t={{ streak: language === 'ta' ? 'நாள் தொடர்ச்சி' : 'Day Streak', coins: language === 'ta' ? 'நாணயங்கள்' : 'coins' }} />
              )}
              <LanguageSelector />
              <ThemeToggle theme={theme} setTheme={handleSetTheme} />
              <button
                onClick={logout}
                aria-label="Logout"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <LogOutIcon className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-6 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

// Login Route Component
const LoginRoute: React.FC = () => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Login />;
};

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/tn-schools" element={<TNSchoolsPage />} />
      <Route path="/register" element={<RegistrationLanding />} />
      <Route path="/register/student" element={<StudentRegistrationForm />} />
      <Route path="/register/teacher" element={<TeacherRegistrationForm />} />
      <Route path="/register/school" element={<SchoolRegistrationForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
};

export default App;
