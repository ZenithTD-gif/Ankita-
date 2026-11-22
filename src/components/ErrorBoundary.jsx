import React from 'react';
import { RotateCw, Heart } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-cream-100 p-4 text-center">
          <div className="max-w-md w-full bg-white/85 backdrop-blur-xl border border-white/95 rounded-3xl p-6 sm:p-10 shadow-glass">
            <div className="w-16 h-16 rounded-full bg-pastel-pink mx-auto mb-4 flex items-center justify-center text-dusty-deep">
              <Heart className="w-8 h-8 text-dusty-rose fill-dusty-rose/40 animate-pulse-subtle" />
            </div>
            <h2 className="font-serif text-2xl text-dusty-dark font-medium mb-3">
              Something is taking a little longer than expected ♡
            </h2>
            <p className="font-sans text-sm text-dusty-deep/80 font-light mb-6">
              Let's try loading your surprise again.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-dusty-rose to-dusty-deep text-white font-serif text-sm font-medium shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <RotateCw className="w-4 h-4" />
              <span>Retry Surprise</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
