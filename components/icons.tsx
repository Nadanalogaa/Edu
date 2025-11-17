import React from 'react';
import { LuStethoscope } from 'react-icons/lu';

type IconProps = {
  className?: string;
};

export const LayoutDashboardIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const SunIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const MoonIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const ChevronUpIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m18 15-6-6-6 6" />
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
);

export const AwardIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

export const TrendingUpIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

export const ZapIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
);

// Multimedia Learning Icons
export const VideoIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M8 5.14v14.72c0 .83.9 1.34 1.62.94l11.48-6.36a1.1 1.1 0 0 0 0-1.88L9.62 6.2C8.9 5.8 8 6.31 8 7.14z"/>
    </svg>
);

export const AudioIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
    </svg>
);

export const ReadIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M8 7h8" />
        <path d="M8 11h8" />
    </svg>
);

export const ARIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M18 5.5V4a2 2 0 0 0-2-2h-1.5" />
        <path d="M22 9.5V11a2 2 0 0 1-2 2h-1.5" />
        <path d="M6 18.5V20a2 2 0 0 0 2 2h1.5" />
        <path d="M2 14.5V13a2 2 0 0 1 2-2h1.5" />
    </svg>
);

export const VRIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        <path d="M7 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z" />
        <path d="M17 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z" />
        <path d="M7 16h.01" />
        <path d="M17 16h.01" />
    </svg>
);

export const PhysicsIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 6h16" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 6l2.5 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8.5" cy="15" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" fill="rgba(251, 146, 60, 0.3)"/>
        <path d="M9 6l2.5 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11.5" cy="15" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" fill="rgba(251, 191, 36, 0.3)"/>
        <path d="M12 6l2.5 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14.5" cy="15" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" fill="rgba(250, 204, 21, 0.3)"/>
        <path d="M15 6l2.5 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17.5" cy="15" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" fill="rgba(163, 230, 53, 0.3)"/>
        <path d="M18 6l2.5 6" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20.5" cy="15" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" fill="rgba(96, 165, 250, 0.3)"/>
    </svg>
);

export const MathIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5.5 19H18.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 5H18.5L10 12L18.5 19" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.5 3L19 4.5M19 3L17.5 4.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1" strokeLinecap="round"/>
        <path d="M16 2.5a.5.5 0 101 0 .5.5 0 00-1 0z" fill="currentColor" fillOpacity="0.8" />
        <path d="M4 14l1.5 1.5m-1.5 0l1.5-1.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1" strokeLinecap="round"/>
        <path d="M4 17.5a.5.5 0 101 0 .5.5 0 00-1 0z" fill="currentColor" fillOpacity="0.8"/>
    </svg>
);

export const ChemistryIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M8 20.3333C8 21.2538 7.25381 22 6.33333 22C5.41285 22 4.66667 21.2538 4.66667 20.3333V10.5H8V20.3333Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5"/>
        <path d="M8 11.5C9.65685 11.5 11 10.1569 11 8.5C11 6.84315 9.65685 5.5 8 5.5H4.5C2.84315 5.5 1.5 6.84315 1.5 8.5C1.5 10.1569 2.84315 11.5 4.5 11.5H8Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5"/>
        <path d="M21 16.5L18 8.5H14L11 16.5H21Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 8.5V4.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 2.5H17" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="19.5" r="2.5" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5"/>
    </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
);

export const FlameIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
);

// Alias for FireIcon
export const FireIcon = FlameIcon;

export const CoinIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 18V6" />
        <path d="M16 14c-1.5 0-3-1.03-3-2.5 0-1.62 1.5-2.5 3-2.5" />
        <path d="M8 10c1.5 0 3 1.03 3 2.5 0 1.62-1.5 2.5-3 2.5" />
    </svg>
);

export const LogOutIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
);

export const SchoolIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14 22v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" /><path d="M18 10v12" /><path d="M22 10v12" /><path d="m2 10 10-7 10 7" /><path d="M12 2v2.3l.1.1" />
    </svg>
);

export const FileTextIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
    </svg>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
    </svg>
);

export const GraduationCapIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5" />
    </svg>
);

export const PenSquareIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

export const XCircleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9"x2="15" y2="15"/>
    </svg>
);

export const StethoscopeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <LuStethoscope className={className} />
);

export const BiologyIcon: React.FC<IconProps> = ({ className = 'w-8 h-8' }) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M4 14.47V9.53C4 5.92 6.92 3 10.53 3h2.94C17.08 3 20 5.92 20 9.53v4.94C20 18.08 17.08 21 13.47 21h-2.94C6.92 21 4 18.08 4 14.47Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 3V21" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 3V21" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 12H20" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 9H7" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 15H7" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 9H20" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 15H20" stroke="currentColor" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
);

export const DoctorIcon: React.FC<IconProps> = ({ className = 'w-24 h-24' }) => (
    <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className={className}>
        <style>{`.dr-hair{fill:#231f20}.dr-skin{fill:#c78d5c}.dr-coat{fill:#fff;stroke:#e6e7e8;stroke-miterlimit:10;stroke-width:4px}.dr-steth{fill:none;stroke:#78909c;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px}.dr-steth-metal{fill:#b0bec5}`}</style>
        <g id="doctor-illustration">
            <path className="dr-coat" d="M198.5,141.5v52a4,4,0,0,1-4,4h-137a4,4,0,0,1-4-4v-52Z" />
            <path className="dr-coat" d="M125,98.5,198.5,141.5h-147Z" />
            <path style={{ fill: '#4dc9e6' }} d="M141.5,141.5v-27a4,4,0,0,0-4-4h-25a4,4,0,0,0-4,4v27Z" />
            <circle className="dr-skin" cx="125" cy="73.5" r="35" />
            <path className="dr-hair" d="M152.87,88.63A35,35,0,0,1,90,44.5a34.81,34.81,0,0,1,6.58-19.9,40,40,0,0,0-9,23.32,40.34,40.34,0,0,0,40.33,40.33,39.73,39.73,0,0,0,24.81-8.31Z" />
            <path className="dr-hair" d="M127.42,88.33c16.35.23,28.79-13,29.3-29.35a35,35,0,0,0-29.3,29.35Z" />
            <g id="stethoscope">
                <path className="dr-steth" d="M146,75.5a15,15,0,0,0-15-15h-12a15,15,0,0,0-15,15v18" />
                <circle className="dr-steth-metal" cx="146" cy="70.5" r="5" />
                <circle className="dr-steth-metal" cx="104" cy="70.5" r="5" />
                <path className="dr-steth" d="M104,93.5v30a21,21,0,0,0,21,21h0a21,21,0,0,0,21-21v-30" />
                <circle className="dr-steth" cx="125" cy="144.5" r="12" />
                <circle style={{ fill: '#455a64' }} cx="125" cy="144.5" r="7" />
            </g>
        </g>
    </svg>
);
