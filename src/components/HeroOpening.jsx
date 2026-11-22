import React, { useState } from 'react';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { romanticAudio } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function HeroOpening({ onOpenSurprise, isMusicPlaying, setIsMusicPlaying }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isOpening, setIsOpening] = useState(false);

  // Parallax tilt only on devices with hover/mouse pointer
  const handleMouseMove = (e) => {
    if (window.matchMedia('(hover: hover)').matches) {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 14;
      const y = (clientY / innerHeight - 0.5) * 14;
      setMousePos({ x, y });
    }
  };

  const handleOpenClick = () => {
    setIsOpening(true);
    romanticAudio.playChime('wish');

    // If music is not playing yet, gently start it on this user interaction
    if (!isMusicPlaying) {
      romanticAudio.startAmbientMusic(birthdayData.music.audioSrc, setIsMusicPlaying);
    }

    // Gentle burst of pastel confetti & petals
    confetti({
      particleCount: window.innerWidth < 640 ? 35 : 55,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#fbcfe8', '#f4a5ae', '#e6ca65', '#ffffff', '#e2a9b0'],
      shapes: ['circle'],
      scalar: 1.1,
      ticks: 180,
    });

    setTimeout(() => {
      onOpenSurprise();
      setIsOpening(false);
    }, 700);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-3.5 sm:px-6 py-12 sm:py-16 overflow-hidden perspective-1000 w-full"
    >
      {/* Soft Ambient Floating Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-pastel-pink/40 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />

      {/* Main 3D Glassmorphism Floating Card */}
      <div 
        className="relative z-10 w-full max-w-lg md:max-w-xl mx-auto transition-transform duration-700 ease-out will-change-transform animate-float-slow"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
        }}
      >
        {/* Glowing Champagne/Rose Outer Aura */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pastel-rose via-champagne-gold/60 to-pastel-pink rounded-[28px] sm:rounded-[32px] blur-lg sm:blur-xl opacity-60 animate-shimmer" />

        {/* The Glass Card */}
        <div className="relative rounded-[24px] sm:rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/90 p-5 sm:p-10 md:p-12 shadow-glass text-center overflow-hidden">
          
          {/* Subtle moving light reflection sheen */}
          <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 pointer-events-none animate-[shimmer_7s_infinite]" />

          {/* Delicate Top Floral Wreath Ornament */}
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pastel-pink/60 border border-pastel-rose/40 shadow-inner">
              <span className="text-xl sm:text-2xl animate-float-medium">🌸</span>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-champagne-gold animate-sparkle" />
              <Heart className="absolute -bottom-1 -left-1 w-3.5 h-3.5 sm:w-4 sm:h-4 text-dusty-rose fill-dusty-rose/40 animate-pulse-subtle" />
            </div>
          </div>

          {/* Elegant Badge */}
          <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-pastel-peach/90 border border-dusty-light/40 text-dusty-deep text-[11px] sm:text-xs uppercase tracking-widest font-medium mb-3 sm:mb-4 shadow-sm max-w-full truncate">
            {birthdayData.opening.badge}
          </div>

          {/* Prominent Recipient Name */}
          <h2 className="font-script text-3xl sm:text-4xl md:text-5xl text-dusty-deep mb-1.5 sm:mb-2 font-normal drop-shadow-sm">
            {birthdayData.recipient.name}
          </h2>

          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-dusty-dark font-medium leading-snug sm:leading-tight mb-3 sm:mb-4 tracking-tight">
            {birthdayData.opening.title}
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs sm:text-base md:text-lg text-dusty-deep/85 font-light max-w-md mx-auto mb-6 sm:mb-8 leading-relaxed px-1">
            {birthdayData.opening.subtitle}
          </p>

          {/* Action Button: "Open Your Surprise ♡" */}
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-serif text-base sm:text-lg tracking-wide text-white bg-gradient-to-r from-dusty-rose via-dusty-deep to-dusty-rose bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-rose-glow hover:shadow-glass-hover active:scale-95 disabled:opacity-80 min-h-[48px] w-full sm:w-auto"
          >
            <span className="relative z-10 font-medium">
              {birthdayData.opening.buttonText}
            </span>
            <Heart className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 text-champagne-light fill-champagne-light transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
            
            {/* Shimmer overlay */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </span>
          </button>

          {/* Delicate border accents */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-pastel-pink/60 flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-dusty-deep/60 font-sans">
            <span className="inline-block w-6 sm:w-8 h-[1px] bg-dusty-light/40" />
            <span>Curated with endless warmth</span>
            <span className="inline-block w-6 sm:w-8 h-[1px] bg-dusty-light/40" />
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button
        onClick={handleOpenClick}
        className="relative z-10 mt-8 sm:mt-12 flex flex-col items-center gap-1.5 sm:gap-2 text-dusty-deep/70 hover:text-dusty-deep transition-colors group cursor-pointer min-h-[44px] justify-center"
        aria-label="Scroll down to explore"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-widest font-sans font-light">
          {birthdayData.opening.scrollHint}
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-dusty-rose animate-bounce" />
      </button>
    </section>
  );
}
