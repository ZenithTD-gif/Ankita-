import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function InitialLoadingScreen({ progress, statusMessage, isExiting }) {
  return (
    <div 
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-gradient-to-br from-[#fff7fa] via-cream-100 to-[#fdeef2] px-4 transition-opacity duration-700 ease-out ${
        isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-pastel-pink/50 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-champagne-light/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating flower petals decoration */}
      <div className="absolute top-10 left-10 pointer-events-none text-2xl opacity-40 animate-float-slow">🌸</div>
      <div className="absolute bottom-12 right-12 pointer-events-none text-2xl opacity-40 animate-float-reverse">🌷</div>
      <div className="absolute top-1/3 right-10 pointer-events-none text-xl opacity-30 animate-float-medium">✨</div>

      {/* Glassmorphic Central Loader Card */}
      <div className="relative z-10 w-full max-w-md bg-white/85 backdrop-blur-xl border border-white/95 rounded-3xl p-6 sm:p-10 shadow-glass text-center">
        
        {/* Animated Floral Icon */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pastel-pink/60 border border-pastel-rose/40 shadow-inner mx-auto mb-5 sm:mb-6 flex items-center justify-center">
          <span className="text-2xl sm:text-3xl animate-float-medium">🌸</span>
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-champagne-gold animate-sparkle" />
          <Heart className="absolute -bottom-1 -left-1 w-4 h-4 text-dusty-rose fill-dusty-rose/40 animate-pulse-subtle" />
        </div>

        {/* Headings */}
        <h1 className="font-serif text-2xl sm:text-3xl text-dusty-dark font-medium mb-2 tracking-tight">
          Preparing Something Special ♡
        </h1>
        <p className="font-sans text-xs sm:text-sm text-dusty-deep/80 font-light mb-6 sm:mb-8 leading-relaxed">
          Creating a little world just for you...
        </p>

        {/* Progress Bar Container */}
        <div className="relative w-full bg-pastel-pink/50 h-3 rounded-full overflow-hidden p-0.5 border border-pastel-rose/30 shadow-inner mb-4">
          <div 
            className="h-full bg-gradient-to-r from-dusty-rose via-champagne-gold to-dusty-deep rounded-full transition-all duration-300 ease-out relative shadow-gold-glow"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer light bar */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </div>
        </div>

        {/* Percentage Counter and Status text */}
        <div className="flex items-center justify-between text-xs sm:text-sm font-serif text-dusty-deep px-1">
          <span className="font-sans text-[11px] sm:text-xs text-dusty-deep/70 truncate max-w-[220px] text-left">
            {statusMessage}
          </span>
          <span className="font-medium text-dusty-deep ml-2 tabular-nums">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
