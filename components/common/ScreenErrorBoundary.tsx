import React from 'react';

// Keeps one broken screen from blanking the whole app: shows a message with a
// retry button instead. Reset it by changing `resetKey` (e.g. the open screen).

interface Props { resetKey: string; children: React.ReactNode }
interface State { error: Error | null }

class ScreenErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Screen error:', error, info.componentStack);
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="max-w-md mx-auto mt-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-6 text-center">
        <p className="text-4xl" aria-hidden="true">😕</p>
        <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100">This page could not open</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Please try again. If it keeps happening, tell your teacher.</p>
        <button type="button" onClick={() => this.setState({ error: null })} className="mt-4 px-5 py-2 rounded-xl bg-indigo-600 text-white font-semibold">
          Try again
        </button>
      </div>
    );
  }
}

export default ScreenErrorBoundary;
