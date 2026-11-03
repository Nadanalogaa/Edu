import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboardIcon } from './icons';

/** Sign-in for the platform owner (super admin), separate from the school sign-in. */
const SuperAdminLogin: React.FC = () => {
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
      await login({ email: email.trim(), password, portal: 'owner' });
    } catch (err: any) {
      const message = err.response?.data?.message;
      setError(!message || message === 'Invalid credentials' ? 'Email or password is wrong.' : message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    'block w-full px-3 py-3 rounded-md border border-slate-600 bg-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm';

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 font-sans p-4">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-xl mb-4">
            <LayoutDashboardIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-100">EduCore Super Admin</h1>
          <p className="mt-2 text-sm text-slate-400">For the platform owner. Schools, teachers and students use the normal sign-in.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="owner-email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input id="owner-email" type="email" autoComplete="username" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="owner-password" className="block text-sm font-medium text-slate-300 mb-1">Password</label>
            <input id="owner-password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
          </div>
          {error && <p role="alert" className="text-sm text-red-400 text-center">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="text-center text-xs text-slate-500">
            <Link to="/login" className="hover:text-slate-300">School sign-in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
