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
      particleCount: 40,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#f4a5ae', '#e6ca65', '#ffffff'],
      shapes: ['circle'],
    });

    setTimeout(() => setHeartPulsed(false), 800);
  };

  return (
    <section className="relative min-h-screen py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Evening Sky Atmosphere Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5d9df]/40 to-[#eec1cc]/60 pointer-events-none" />

      {/* Gentle Crescent Moon & Night Star Accents */}
      <div className="absolute top-16 right-10 sm:right-24 w-20 h-20 pointer-events-none animate-float-slow">
        <div className="relative w-full h-full">
          <Moon className="w-16 h-16 text-champagne-light drop-shadow-gold-glow fill-champagne-light/30" />
          <Stars className="absolute -top-2 -right-2 w-6 h-6 text-champagne-gold animate-sparkle" />
        </div>
      </div>

      {/* Dreamy Cloud Silhouettes */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cream-100 to-transparent pointer-events-none opacity-80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Soft Glowing Heart Seal */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={handleHeartClick}
            className={`group relative p-5 rounded-full bg-white/80 backdrop-blur-xl border border-pastel-pink shadow-rose-glow hover:shadow-glass-hover transition-all duration-300 ${
              heartPulsed ? 'scale-125' : 'hover:scale-110 active:scale-95'
            }`}
            title="Tap for a heartbeat of love ♡"
          >
            <Heart 
              className={`w-12 h-12 text-dusty-rose fill-dusty-rose transition-all duration-300 ${
                heartPulsed ? 'fill-dusty-deep text-dusty-deep' : 'animate-pulse-subtle'
              }`} 
            />
            <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-champagne-gold animate-sparkle" />
          </button>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl text-dusty-dark font-medium mb-8 tracking-tight">
          {title}
        </h2>

        {/* Emotional Final Card */}
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl p-8 sm:p-14 shadow-glass mb-12 text-left sm:text-center">
          <div className="space-y-6 text-dusty-deep font-sans text-lg sm:text-xl font-light leading-relaxed">
            <p className="animate-in fade-in duration-1000">
              {messageParagraph1}
            </p>

            <p className="font-medium text-dusty-dark italic font-serif text-xl sm:text-2xl animate-in fade-in duration-1000 delay-300">
              {messageParagraph2}
            </p>

            <p className="font-handwritten text-2xl sm:text-3xl text-dusty-rose font-medium animate-in fade-in duration-1000 delay-500">
              {messageParagraph3}
            </p>
          </div>

          {/* Delicate divider */}
          <div className="my-8 flex items-center justify-center gap-4 text-dusty-light opacity-60">
            <span className="w-12 h-[1px] bg-dusty-light" />
            <Heart className="w-4 h-4 fill-current" />
            <span className="w-12 h-[1px] bg-dusty-light" />
          </div>

          <div className="font-script text-3xl sm:text-4xl text-dusty-deep">
            {footerQuote}
          </div>
        </div>

        {/* Closing Seal */}
        <div className="inline-flex items-center gap-2 text-xs font-serif italic text-dusty-deep/70">
          <span>🌸</span>
          <span>{sealText} — {birthdayData.recipient.name}</span>
          <span>🌸</span>
        </div>
      </div>
    </section>
  );
}
