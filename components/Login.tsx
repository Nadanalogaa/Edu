import React, { useState } from 'react';
import { LayoutDashboardIcon } from './icons';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            await login({ email, password });
            // Login successful - AuthContext will update and App will re-render
        } catch (err: any) {
            console.error('Login error:', err);
            const errorMessage = err.response?.data?.message || 'Invalid email or password. Please try again.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900 font-sans">
            <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-slate-800/50 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-xl mb-4">
                        <LayoutDashboardIcon className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                        Educational Intelligence
                    </h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Please sign in to continue
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password-for-login" className="sr-only">Password</label>
                            <input
                                id="password-for-login"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 placeholder-slate-500 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    
                    {error && (
                        <p className="text-sm text-red-500 text-center">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>

                    <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                        <p>Use one of the following to log in:</p>
                        <p>student@school.com / student123</p>
                        <p>teacher@school.com / teacher123</p>
                        <p>admin@school.com / admin123</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;