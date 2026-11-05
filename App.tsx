import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import type { Role } from './types';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Login from './components/Login';
import LanguageSelector from './components/LanguageSelector';
import GamificationStats from './components/GamificationStats';
import api from './services/api';

// Pages most users never open are loaded on demand, so students download less
const LandingPage = lazy(() => import('./components/landing/LandingPage'));
const RegistrationLanding = lazy(() => import('./components/landing/RegistrationLanding'));
const StudentRegistrationForm = lazy(() => import('./components/registration/StudentRegistrationForm'));
const TeacherRegistrationForm = lazy(() => import('./components/registration/TeacherRegistrationForm'));
const SchoolRegistrationForm = lazy(() => import('./components/registration/SchoolRegistrationForm'));
const QuestionBank = lazy(() => import('./components/admin/QuestionBank'));
const TNSchoolsPage = lazy(() => import('./pages/TNSchoolsPage'));
const SuperAdminLogin = lazy(() => import('./components/SuperAdminLogin'));
// NEET / JEE Zone (sample content screens with 3D/AR/VR and videos)
const NeetDashboard = lazy(() => import('./components/dashboards/StudentDashboard'));
const NeetPractice = lazy(() => import('./components/student/PracticeModeNew'));
const NeetExam = lazy(() => import('./components/student/ExamModeNew'));
const NeetDailyChallenge = lazy(() => import('./components/student/DailyChallengeContainer'));
const NeetShorts = lazy(() => import('./components/student/Shorts'));
const NeetLiveClasses = lazy(() => import('./components/student/LiveClassesView'));
const NeetMistakeBook = lazy(() => import('./components/student/MistakeBook'));
import SchoolOverview from './components/school/SchoolOverview';
import PeopleManager from './components/school/PeopleManager';
import OwnerOverview from './components/owner/OwnerOverview';
import SchoolsManager from './components/owner/SchoolsManager';
import SyllabusManager from './components/owner/SyllabusManager';
import ChangePasswordModal from './components/common/ChangePasswordModal';
import QuestionBankScreen from './components/assessments/QuestionBankScreen';
import TestsScreen from './components/assessments/TestsScreen';
import MyTests from './components/student/MyTests';
import StudentHome from './components/student/StudentHome';
import Practice from './components/student/Practice';
import Mistakes from './components/student/Mistakes';
import ReportsScreen from './components/reports/ReportsScreen';
import StudentReport from './components/reports/StudentReport';
import { boardLabel, classLabel } from './components/common/ui';
import InstallApp from './components/common/InstallApp';
import {
    SunIcon, MoonIcon, LayoutDashboardIcon, UsersIcon, UserIcon, LogOutIcon,
    SchoolIcon, FileTextIcon, ClipboardCheckIcon, GraduationCapIcon, PenSquareIcon, BookOpenIcon, VideoIcon, StethoscopeIcon,
    MenuIcon, XIcon, KeyIcon, TrendingUpIcon, ChevronDownIcon
} from './components/icons';

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
  compact?: boolean;
}> = ({ icon, label, isActive, onClick, compact }) => (
  <button
    onClick={onClick}
    title={label}
    className={`group flex items-center gap-3 w-full ${compact ? 'px-2.5 py-0.5 text-[13px]' : 'px-3 py-1.5 text-sm'} font-medium rounded-xl transition-colors duration-150 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
    }`}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className={`flex-shrink-0 ${compact ? 'w-7 h-7' : 'w-8 h-8'} rounded-lg flex items-center justify-center ${isActive ? 'bg-white/15' : 'bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-300 group-hover:bg-white dark:group-hover:bg-slate-700'}`}>
      {icon}
    </span>
    <span className="truncate">{label}</span>
  </button>
);

/** A titled group of menu items; collapsible ones remember whether they are open. */
const NavGroup: React.FC<{ title: string; icon?: React.ReactNode; collapsible?: boolean; storageKey?: string; forceOpen?: boolean; count?: number; children: React.ReactNode }> = ({
  title, icon, collapsible, storageKey, forceOpen, count, children,
}) => {
  const [open, setOpen] = useState(() => !collapsible || (storageKey ? localStorage.getItem(storageKey) === 'open' : false));
  const shown = !collapsible || open || forceOpen;
  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (storageKey) localStorage.setItem(storageKey, next ? 'open' : 'closed');
  };
  if (!collapsible) {
    return (
      <div>
        <p className="px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">{title}</p>
        <div className="space-y-1">{children}</div>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-500/10 dark:to-indigo-500/10 border border-violet-100 dark:border-violet-500/20 p-1.5">
      <button type="button" onClick={toggle} aria-expanded={!!shown}
        className="flex items-center gap-2.5 w-full px-2 py-2 rounded-xl text-sm font-semibold text-violet-800 dark:text-violet-200 hover:bg-white/70 dark:hover:bg-white/5">
        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white flex items-center justify-center shadow-sm">{icon}</span>
        <span className="flex-1 text-left truncate">{title}</span>
        {count ? <span className="px-1.5 py-0.5 rounded-md bg-white/80 dark:bg-white/10 text-[11px] text-violet-700 dark:text-violet-200">{count}</span> : null}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${shown ? 'rotate-180' : ''}`} />
      </button>
      {shown && <div className="mt-0.5 space-y-0.5">{children}</div>}
    </div>
  );
};

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
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

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

  // Lock body scroll when mobile sidebar drawer is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

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

  const navConfig: Record<Role, { label: string; icon: React.ReactNode; view: string; section?: string }[]> = {
    student: [
      { label: language === 'ta' ? 'முகப்பு' : 'Home', icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: language === 'ta' ? 'என் தேர்வுகள்' : 'My Tests', icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'my-tests' },
      { label: language === 'ta' ? 'பயிற்சி' : 'Practice', icon: <PenSquareIcon className="w-5 h-5" />, view: 'practice' },
      { label: language === 'ta' ? 'என் முன்னேற்றம்' : 'My Progress', icon: <TrendingUpIcon className="w-5 h-5" />, view: 'progress' },
      { label: language === 'ta' ? 'தவறுப் புத்தகம்' : 'Mistake Book', icon: <BookOpenIcon className="w-5 h-5" />, view: 'mistakes' },
      { section: 'NEET / JEE', label: language === 'ta' ? 'NEET/JEE முகப்பு' : 'NEET/JEE Dashboard', icon: <StethoscopeIcon className="w-5 h-5" />, view: 'neet-home' },
      { label: t('practiceMode'), icon: <PenSquareIcon className="w-5 h-5" />, view: 'neet-practice' },
      { label: t('takeAnExam'), icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'exam' },
      { label: t('dailyChallenge'), icon: <FileTextIcon className="w-5 h-5" />, view: 'daily-challenge' },
      { label: language === 'ta' ? 'குறும்படங்கள்' : 'Shorts', icon: <VideoIcon className="w-5 h-5" />, view: 'shorts' },
      { label: language === 'ta' ? 'AR/VR திருப்புதல்' : 'AR/VR Revision', icon: <BookOpenIcon className="w-5 h-5" />, view: 'neet-mistakes' },
      { label: t('liveClasses'), icon: <UsersIcon className="w-5 h-5" />, view: 'classes' },
    ],
    teacher: [
      { label: 'Tests', icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: 'Reports', icon: <TrendingUpIcon className="w-5 h-5" />, view: 'reports' },
      { label: t('questionBank'), icon: <BookOpenIcon className="w-5 h-5" />, view: 'question-bank' },
    ],
    admin: [
      { label: t('dashboard'), icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: t('manageStudents'), icon: <GraduationCapIcon className="w-5 h-5" />, view: 'students' },
      { label: t('manageTeachers'), icon: <UsersIcon className="w-5 h-5" />, view: 'teachers' },
      { label: 'School Admins', icon: <UserIcon className="w-5 h-5" />, view: 'admins' },
      { label: 'Tests', icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'tests' },
      { label: 'Reports', icon: <TrendingUpIcon className="w-5 h-5" />, view: 'reports' },
      { label: t('questionBank'), icon: <BookOpenIcon className="w-5 h-5" />, view: 'question-bank' },
    ],
    owner: [
      { label: t('dashboard'), icon: <LayoutDashboardIcon className="w-5 h-5" />, view: 'dashboard' },
      { label: 'Schools', icon: <SchoolIcon className="w-5 h-5" />, view: 'schools' },
      { label: 'Syllabus', icon: <BookOpenIcon className="w-5 h-5" />, view: 'syllabus' },
      { label: 'Question bank', icon: <FileTextIcon className="w-5 h-5" />, view: 'question-bank' },
      { label: 'Ready-made tests', icon: <ClipboardCheckIcon className="w-5 h-5" />, view: 'tests' },
      { label: 'NEET/JEE questions', icon: <PenSquareIcon className="w-5 h-5" />, view: 'neet-questions' },
    ],
  };

  function handleNavClick(view: string) {
    setActiveView(view);
    setIsSidebarOpen(false);
    document.querySelector('main')?.scrollTo({ top: 0 });
  }

  // Opened from a home-screen shortcut, e.g. /dashboard?view=practice
  useEffect(() => {
    const view = new URLSearchParams(window.location.search).get('view');
    if (view && navConfig[currentUser.role]?.some((item) => item.view === view)) setActiveView(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bottom tab bar on phones: the main screens, plus More for the full menu
  const bottomTabs: Record<Role, string[]> = {
    student: ['dashboard', 'my-tests', 'practice', 'mistakes'],
    teacher: ['dashboard', 'reports', 'question-bank'],
    admin: ['dashboard', 'students', 'tests', 'reports'],
    owner: ['dashboard', 'schools', 'question-bank', 'tests'],
  };
  const shortLabels: Record<string, [string, string]> = {
    dashboard: currentUser.role === 'teacher' ? ['Tests', 'தேர்வுகள்'] : ['Home', 'முகப்பு'],
    'my-tests': ['Tests', 'தேர்வுகள்'], practice: ['Practice', 'பயிற்சி'], mistakes: ['Mistakes', 'தவறுகள்'],
    reports: ['Reports', 'அறிக்கைகள்'], 'question-bank': ['Questions', 'கேள்விகள்'], students: ['Students', 'மாணவர்கள்'],
    tests: ['Tests', 'தேர்வுகள்'], schools: ['Schools', 'பள்ளிகள்'],
  };
  const tabs = (bottomTabs[currentUser.role] || []).map((view) => navConfig[currentUser.role].find((i) => i.view === view)).filter(Boolean) as typeof navConfig.student;
  const moreActive = !tabs.some((tab) => tab.view === activeView);

  const renderContent = () => {
    if (!currentUser) return null;

    if (currentUser.role === 'owner') {
      switch (activeView) {
        case 'schools':
          return <SchoolsManager />;
        case 'syllabus':
          return <SyllabusManager />;
        case 'question-bank':
          return <QuestionBankScreen />;
        case 'tests':
          return <TestsScreen />;
        case 'neet-questions':
          return <QuestionBank />;
        default:
          return <OwnerOverview onNavigate={handleNavClick} />;
      }
    }

    if (currentUser.role === 'admin') {
      switch (activeView) {
        case 'dashboard':
          return <SchoolOverview onNavigate={handleNavClick} />;
        case 'students':
          return <PeopleManager key="students" role="student" />;
        case 'teachers':
          return <PeopleManager key="teachers" role="teacher" />;
        case 'admins':
          return <PeopleManager key="admins" role="admin" />;
        case 'question-bank':
          return <QuestionBankScreen />;
        case 'tests':
          return <TestsScreen />;
        case 'reports':
          return <ReportsScreen />;
        default:
          return <SchoolOverview onNavigate={handleNavClick} />;
      }
    }

    if (currentUser.role === 'teacher') {
      if (activeView === 'question-bank') return <QuestionBankScreen />;
      if (activeView === 'reports') return <ReportsScreen />;
      return <TestsScreen />;
    }

    if (currentUser.role === 'student') {
      switch (activeView) {
        case 'my-tests':
          return <MyTests />;
        case 'practice':
          return <Practice onOpenMistakes={() => setActiveView('mistakes')} />;
        case 'progress':
          return <StudentReport />;
        case 'mistakes':
          return <Mistakes onOpenPractice={() => setActiveView('practice')} />;
        case 'neet-home':
          return <NeetDashboard />;
        case 'neet-practice':
          return <NeetPractice />;
        case 'exam':
          return <NeetExam />;
        case 'daily-challenge':
          return <NeetDailyChallenge />;
        case 'shorts':
          return <NeetShorts />;
        case 'neet-mistakes':
          return <NeetMistakeBook />;
        case 'classes':
          return <NeetLiveClasses />;
        default:
          return <StudentHome onNavigate={handleNavClick} />;
      }
    }

    return null;
  };

  if (!currentUser) return null;

  return (
    <div className="flex h-dvh bg-slate-100 dark:bg-slate-900 font-sans">
      {/* Mobile backdrop overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar — drawer on mobile, static on desktop */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-72 lg:w-64 h-full bg-white dark:bg-slate-800 lg:dark:bg-slate-800/50 px-3 py-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]
          flex flex-col border-r border-slate-200 dark:border-slate-800
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        {/* Logo + close (mobile) */}
        <div className="flex-shrink-0 flex items-center justify-between mb-4 px-1">
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="EduCore Logo"
                className="w-10 h-10"
              />
              <div className="ml-3 flex flex-col">
                <h1 className="text-base lg:text-lg font-bold text-slate-800 dark:text-slate-100">{t('appTitle')}</h1>
                <span className="text-[11px] leading-tight text-indigo-600 dark:text-indigo-400">{t('landing.nav.tagline')}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Close menu"
            >
              <XIcon className="w-5 h-5" />
            </button>
        </div>

        {/* Navigation: main items, then collapsible groups (e.g. NEET / JEE Zone) */}
        <nav className="flex-1 min-h-0 overflow-y-auto space-y-3 pr-0.5 -mr-1 scrollbar-thin">
          {(() => {
            const items = navConfig[currentUser.role];
            const groups: { title: string | null; items: typeof items }[] = [];
            for (const item of items) {
              if (item.section || !groups.length) groups.push({ title: item.section || null, items: [] });
              groups[groups.length - 1].items.push(item);
            }
            return groups.map((group, g) => (
              <NavGroup
                key={group.title || 'main'}
                title={group.title || (language === 'ta' ? 'மெனு' : currentUser.role === 'student' ? 'My learning' : 'Menu')}
                collapsible={!!group.title}
                storageKey={group.title ? `nav-group-${g}` : undefined}
                forceOpen={group.items.some((i) => i.view === activeView)}
                icon={<StethoscopeIcon className="w-4 h-4" />}
                count={group.title ? group.items.length : undefined}
              >
                {group.items.map((item) => (
                  <NavItem key={item.view} icon={item.icon} label={item.label} compact={!!group.title} isActive={activeView === item.view} onClick={() => handleNavClick(item.view)} />
                ))}
              </NavGroup>
            ));
          })()}
        </nav>

        <div className="flex-shrink-0 mt-3">
          <InstallApp />
        </div>

        {/* Who is signed in (on phones also theme, password and sign out) */}
        <div className="flex-shrink-0 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/70 flex items-center gap-3 px-1">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-bold flex items-center justify-center">
            {(currentUser.name || '?').trim().charAt(0).toUpperCase()}
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{currentUser.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {currentUser.role === 'student' && currentUser.classGrade
                ? `${language === 'ta' ? 'வகுப்பு' : 'Class'} ${classLabel(currentUser.classGrade, currentUser.section)}`
                : currentUser.role === 'owner' ? 'Owner' : currentUser.role === 'admin' ? 'School admin' : currentUser.role === 'teacher' ? 'Teacher' : ''}
            </p>
          </div>
          <div className="ml-auto flex items-center gap-0.5 lg:hidden">
            <ThemeToggle theme={theme} setTheme={handleSetTheme} />
            <button onClick={() => { setIsSidebarOpen(false); setShowChangePassword(true); }} aria-label="Change password" className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
              <KeyIcon className="w-5 h-5" />
            </button>
            <button onClick={logout} aria-label="Logout" className="p-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-500/10">
              <LogOutIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto w-full">
        {/* Compact Universal Header */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 px-3 sm:px-5 lg:px-8 pb-2.5 pt-[max(0.625rem,env(safe-area-inset-top))]">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
            {currentUser.role === 'student' ? (
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <img src="/icons/icon-192.png" alt="" className="lg:hidden w-8 h-8 flex-shrink-0" />
                <GraduationCapIcon className="hidden lg:block w-7 h-7 text-indigo-500 flex-shrink-0" />
                <div className="min-w-0">
                  <h1 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 truncate">
                    {language === 'ta' ? 'வருக, ' : 'Welcome, '}
                    <span className="text-indigo-600 dark:text-indigo-400">{currentUser.name}</span>!
                  </h1>
                  <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400 truncate">
                    {currentUser.classGrade
                      ? `${language === 'ta' ? 'வகுப்பு' : 'Class'} ${classLabel(currentUser.classGrade, currentUser.section)} · ${boardLabel(currentUser.board)}${currentUser.schoolName ? ` · ${currentUser.schoolName}` : ''}`
                      : language === 'ta' ? 'இன்று உங்கள் தேர்வுகளை வெல்லலாம்! தொடங்குவோம்.' : "Ready to conquer your exams today? Let's get started."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <UserIcon className="w-8 h-8 p-1.5 text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">{currentUser.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {currentUser.role === 'owner' ? 'Owner' : currentUser.role === 'admin' ? 'School admin' : 'Teacher'}
                    {currentUser.schoolName ? ` · ${currentUser.schoolName}` : ''}
                  </p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
              {currentUser.role === 'student' && (
                <GamificationStats streak={streak} coins={coins} t={{ streak: language === 'ta' ? 'நாள் தொடர்ச்சி' : 'Day Streak', coins: language === 'ta' ? 'நாணயங்கள்' : 'coins' }} />
              )}
              <LanguageSelector />
              <span className="hidden lg:contents">
              <ThemeToggle theme={theme} setTheme={handleSetTheme} />
              <button
                onClick={() => setShowChangePassword(true)}
                aria-label="Change password"
                title="Change password"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <KeyIcon className="w-5 h-5" />
              </button>
              <button
                onClick={logout}
                aria-label="Logout"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <LogOutIcon className="w-5 h-5"/>
              </button>
              </span>
            </div>
          </div>
        </div>

        {showChangePassword && <ChangePasswordModal onClose={() => setShowChangePassword(false)} />}

        {/* Main Content */}
        <div className="px-3 pt-3 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:px-5 sm:pt-4 lg:px-8 lg:py-5">
          <div className="max-w-7xl mx-auto">
            <Suspense fallback={<PageLoading />}>{renderContent()}</Suspense>
          </div>
        </div>
      </main>

      {/* Bottom tab bar (phones and tablets) */}
      <div role="navigation" aria-label="Main screens" className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,23,42,0.06)]">
        <div className="grid h-16 max-w-xl mx-auto" style={{ gridTemplateColumns: `repeat(${tabs.length + 1}, minmax(0, 1fr))` }}>
          {tabs.map((tab) => {
            const on = activeView === tab.view;
            const [en, ta] = shortLabels[tab.view] || [tab.label, tab.label];
            return (
              <button key={tab.view} type="button" onClick={() => handleNavClick(tab.view)} aria-current={on ? 'page' : undefined}
                className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold ${on ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'}`}>
                <span className={`flex items-center justify-center w-14 h-8 rounded-full transition-colors ${on ? 'bg-indigo-100 dark:bg-indigo-500/20' : ''}`}>{tab.icon}</span>
                <span className="truncate max-w-full px-1">{language === 'ta' ? ta : en}</span>
              </button>
            );
          })}
          <button type="button" onClick={() => setIsSidebarOpen(true)} aria-label="Open menu"
            className={`flex flex-col items-center justify-center gap-0.5 text-[11px] font-semibold ${moreActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'}`}>
            <span className={`flex items-center justify-center w-14 h-8 rounded-full ${moreActive ? 'bg-indigo-100 dark:bg-indigo-500/20' : ''}`}>
              <MenuIcon className="w-5 h-5" />
            </span>
            <span>{language === 'ta' ? 'மேலும்' : 'More'}</span>
          </button>
        </div>
      </div>
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

// Super admin (platform owner) sign-in, separate from the school sign-in
const SuperAdminRoute: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  if (isLoading) return null;
  if (currentUser) return <Navigate to="/dashboard" replace />;
  return <SuperAdminLogin />;
};

const PageLoading: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
  </div>
);

const AppContent: React.FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginRoute />} />
      <Route path="/superadmin" element={<SuperAdminRoute />} />
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
    </Suspense>
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
