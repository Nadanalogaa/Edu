import React, { useState } from 'react';
import { LayoutDashboardIcon } from './icons';
import { useAuth } from '../context/AuthContext';

const inputClass =
    'appearance-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';

type Mode = 'student' | 'staff';

const Login: React.FC = () => {
    const [mode, setMode] = useState<Mode>(() => (localStorage.getItem('loginMode') === 'staff' ? 'staff' : 'student'));
    const [schoolCode, setSchoolCode] = useState(() => localStorage.getItem('loginSchoolCode') || '');
    const [admissionNumber, setAdmissionNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const switchMode = (next: Mode) => {
        setMode(next);
        setError('');
        localStorage.setItem('loginMode', next);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (mode === 'student') {
                // Remember the school code on this device for the next sign-in
                localStorage.setItem('loginSchoolCode', schoolCode.trim());
                await login({ schoolCode: schoolCode.trim(), admissionNumber: admissionNumber.trim(), password });
            } else {
                await login({ email: email.trim(), password });
            }
            // Login successful - AuthContext will update and App will re-render
        } catch (err: any) {
            console.error('Login error:', err);
            const message = err.response?.data?.message;
            setError(
                !message || message === 'Invalid credentials'
                    ? mode === 'student'
                        ? 'School code, admission number or password is wrong. Please try again.'
                        : 'Email or password is wrong. Please try again.'
                    : message
            );
        } finally {
            setIsLoading(false);
        }
    };

    const tabClass = (active: boolean) =>
        `flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
            active ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`;

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900 font-sans p-4">
            <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white dark:bg-slate-800/50 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-xl mb-4">
                        <LayoutDashboardIcon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                        EduCore
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Please sign in to continue
                    </p>
                </div>

                <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg" role="tablist" aria-label="Who is signing in">
                    <button type="button" role="tab" aria-selected={mode === 'student'} className={tabClass(mode === 'student')} onClick={() => switchMode('student')}>
                        Student
                    </button>
                    <button type="button" role="tab" aria-selected={mode === 'staff'} className={tabClass(mode === 'staff')} onClick={() => switchMode('staff')}>
                        School staff / Admin
                    </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {mode === 'student' ? (
                        <>
                            <div>
                                <label htmlFor="school-code" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">School code</label>
                                <input
                                    id="school-code"
                                    name="schoolCode"
                                    autoComplete="organization"
                                    autoCapitalize="characters"
                                    required
                                    value={schoolCode}
                                    onChange={(e) => setSchoolCode(e.target.value)}
                                    className={`${inputClass} uppercase`}
                                    placeholder="Given by your school"
                                />
                            </div>
                            <div>
                                <label htmlFor="admission-number" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Admission number</label>
                                <input
                                    id="admission-number"
                                    name="admissionNumber"
                                    autoComplete="username"
                                    required
                                    value={admissionNumber}
                                    onChange={(e) => setAdmissionNumber(e.target.value)}
                                    className={inputClass}
                                />
                            </div>
                        </>
                    ) : (
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={inputClass}
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="password-for-login" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                        <input
                            id="password-for-login"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClass}
                        />
                    </div>

                    {error && (
                        <p role="alert" className="text-sm text-red-500 text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                    </button>

                    <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                        Forgot your password? Ask your school office to reset it.
                    </p>

                    <div className="text-center text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
                        <p className="font-medium">Demo logins</p>
                        <p>Student: school code TNMS001 · admission no. S001 · student123</p>
                        <p>Staff: admin@school.com / admin123 · teacher@school.com / teacher123</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;