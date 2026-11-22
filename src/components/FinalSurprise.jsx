import React, { useState } from 'react';
import { Heart, Sparkles, Moon, Stars } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { romanticAudio } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function FinalSurprise() {
  const [heartPulsed, setHeartPulsed] = useState(false);
  const { title, messageParagraph1, messageParagraph2, messageParagraph3, footerQuote, sealText } = birthdayData.final;

  const handleHeartClick = () => {
    setHeartPulsed(true);
    romanticAudio.playChime('wish');

    confetti({
      particleCount: window.innerWidth < 640 ? 25 : 40,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f4a5ae', '#e6ca65', '#ffffff'],
      shapes: ['circle'],
    });

    setTimeout(() => setHeartPulsed(false), 800);
  };

  return (
    <section className="relative min-h-[100svh] py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden w-full">
      
      {/* Evening Sky Atmosphere Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5d9df]/40 to-[#eec1cc]/60 pointer-events-none" />

      {/* Gentle Crescent Moon & Night Star Accents */}
      <div className="absolute top-8 right-4 sm:top-16 sm:right-24 w-14 sm:w-20 h-14 sm:h-20 pointer-events-none animate-float-slow">
        <div className="relative w-full h-full">
          <Moon className="w-12 sm:w-16 h-12 sm:h-16 text-champagne-light drop-shadow-gold-glow fill-champagne-light/30" />
          <Stars className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 text-champagne-gold animate-sparkle" />
        </div>
      </div>

      {/* Dreamy Cloud Silhouettes */}
      <div className="absolute bottom-0 inset-x-0 h-32 sm:h-40 bg-gradient-to-t from-cream-100 to-transparent pointer-events-none opacity-80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto w-full px-2">
        
        {/* Soft Glowing Heart Seal with 48px touch target */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <button
            onClick={handleHeartClick}
            className={`group relative min-w-[48px] min-h-[48px] p-4 sm:p-5 rounded-full bg-white/80 backdrop-blur-xl border border-pastel-pink shadow-rose-glow hover:shadow-glass-hover transition-all duration-300 ${
              heartPulsed ? 'scale-125' : 'hover:scale-110 active:scale-95'
            }`}
            title="Tap for a heartbeat of love ♡"
            aria-label="Tap glowing heart"
          >
            <Heart 
              className={`w-9 h-9 sm:w-12 sm:h-12 text-dusty-rose fill-dusty-rose transition-all duration-300 ${
                heartPulsed ? 'fill-dusty-deep text-dusty-deep' : 'animate-pulse-subtle'
              }`} 
            />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-champagne-gold animate-sparkle" />
          </button>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-dusty-dark font-medium mb-6 sm:mb-8 tracking-tight">
          {title}
        </h2>

        {/* Emotional Final Card */}
        <div className="relative bg-white/75 backdrop-blur-xl border border-white/90 rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-glass mb-8 sm:mb-12 text-center">
          <div className="space-y-4 sm:space-y-6 text-dusty-deep font-sans text-sm sm:text-lg md:text-xl font-light leading-relaxed">
            <p className="animate-in fade-in duration-1000">
              {messageParagraph1}
            </p>

            <p className="font-medium text-dusty-dark italic font-serif text-base sm:text-xl md:text-2xl animate-in fade-in duration-1000 delay-300">
              {messageParagraph2}
            </p>

            <p className="font-handwritten text-xl sm:text-2xl md:text-3xl text-dusty-rose font-medium animate-in fade-in duration-1000 delay-500">
              {messageParagraph3}
            </p>
          </div>

          {/* Delicate divider */}
          <div className="my-6 sm:my-8 flex items-center justify-center gap-3 sm:gap-4 text-dusty-light opacity-60">
            <span className="w-8 sm:w-12 h-[1px] bg-dusty-light" />
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            <span className="w-8 sm:w-12 h-[1px] bg-dusty-light" />
          </div>

          <div className="font-script text-2xl sm:text-3xl md:text-4xl text-dusty-deep">
            {footerQuote}
          </div>
        </div>

        {/* Closing Seal */}
        <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-serif italic text-dusty-deep/70 pb-12 sm:pb-8">
          <span>🌸</span>
          <span>{sealText}</span>
          <span>🌸</span>
        </div>
      </div>
    </section>
  );
}
