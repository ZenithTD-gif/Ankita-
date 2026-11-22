import React, { useState } from 'react';
import { Sparkles, Heart, Gift, Award } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { romanticAudio } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export default function BirthdayCelebration() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWishMessage, setShowWishMessage] = useState(false);
  const [balloonsRising, setBalloonsRising] = useState(false);
  const { title, subtitle, wishButtonText, wishDoneText, wishMessage, candleHint } = birthdayData.celebration;

  const handleMakeWish = () => {
    if (candlesBlown) return;

    setCandlesBlown(true);
    setBalloonsRising(true);
    romanticAudio.playChime('wish');

    // Luxurious celebratory confetti
    const count = window.innerWidth < 640 ? 120 : 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1000,
      ticks: 260,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 50,
      colors: ['#e6ca65', '#f4a5ae', '#ffffff'],
    });
    fire(0.2, {
      spread: 60,
      colors: ['#fbcfe8', '#e2a9b0', '#c5a059'],
    });
    fire(0.35, {
      spread: 90,
      decay: 0.91,
      scalar: 1.1,
      colors: ['#e6ca65', '#fce7f0', '#ffffff'],
    });
    fire(0.1, {
      spread: 110,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#c08081', '#fdf8f0'],
    });

    setTimeout(() => {
      setShowWishMessage(true);
    }, 600);
  };

  return (
    <section className="relative py-16 sm:py-28 px-3.5 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full overflow-hidden">
      {/* Floating Balloons Animation (rises when wish is made) */}
      {balloonsRising && (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute -bottom-20 animate-in fade-in"
              style={{
                left: `${(i * 9.5) + 2}%`,
                animation: `floatUp ${5.5 + (i % 4)}s ease-out forwards`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div 
                className="w-10 sm:w-12 h-14 sm:h-16 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] shadow-md flex items-center justify-center relative"
                style={{
                  backgroundColor: ['#fbcfe8', '#e6ca65', '#f4a5ae', '#fce7f0', '#fed7aa'][i % 5],
                  opacity: 0.85,
                }}
              >
                {/* Balloon shine reflection */}
                <div className="absolute top-2 left-2 w-1.5 sm:w-2 h-3 sm:h-4 rounded-full bg-white/60 -rotate-12" />
                {/* Balloon string */}
                <div className="absolute -bottom-7 left-1/2 w-[1px] h-7 bg-dusty-rose/40" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 relative z-10 px-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-pastel-pink/70 border border-pastel-rose/30 text-dusty-deep text-[11px] sm:text-xs uppercase tracking-widest font-medium mb-2.5 sm:mb-3 shadow-sm">
          <Gift className="w-3.5 h-3.5 text-dusty-rose" />
          <span>The Birthday Moment</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-dusty-dark font-medium mb-3 sm:mb-4">
          {title}
        </h2>
        <p className="font-sans text-xs sm:text-base md:text-lg text-dusty-deep/80 font-light leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* 3D Pastel Birthday Cake Display */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-10 sm:mb-12 w-full">
        
        {/* Glow halo behind cake */}
        <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-tr from-champagne-gold/20 via-pastel-pink/30 to-cream-200 blur-2xl pointer-events-none" />

        {/* Cake Container */}
        <div 
          onClick={handleMakeWish}
          className="relative cursor-pointer group flex flex-col items-center transition-transform duration-500 hover:scale-105 active:scale-98"
          title="Click to blow out candles and make a wish!"
        >
          {/* Candle & Animated Flame */}
          <div className="relative z-20 flex flex-col items-center mb-[-4px]">
            {/* The Flame */}
            {!candlesBlown ? (
              <div className="relative w-4 sm:w-5 h-7 sm:h-8 flex items-center justify-center animate-pulse-subtle">
                {/* Outer flame glow */}
                <div className="absolute w-7 sm:w-8 h-9 sm:h-10 rounded-full bg-champagne-gold/40 blur-[4px] animate-ping" />
                {/* Outer yellow flame */}
                <div className="w-3.5 sm:w-4 h-6 sm:h-7 rounded-[50%_50%_35%_35%] bg-gradient-to-t from-champagne-gold via-[#ffe79a] to-white shadow-gold-glow animate-[flicker_1.5s_infinite_alternate]" />
                {/* Inner blue/white core */}
                <div className="absolute bottom-1 w-1 sm:w-1.5 h-2 sm:h-2.5 rounded-full bg-white opacity-90" />
              </div>
            ) : (
              // Smoke puff after blow-out
              <div className="w-3 h-6 flex flex-col items-center opacity-70">
                <span className="text-xs text-dusty-rose font-handwritten animate-bounce whitespace-nowrap">✨ Wish Made ✨</span>
              </div>
            )}

            {/* Candle Stick */}
            <div className="w-2.5 sm:w-3 h-10 sm:h-12 bg-gradient-to-r from-champagne-light via-white to-champagne-gold rounded-t-sm shadow-sm relative overflow-hidden">
              {/* Spiral decorative stripes on candle */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,#f4a5ae_3px,#f4a5ae_6px)] opacity-50" />
            </div>
          </div>

          {/* Tier 1 (Top Tier) */}
          <div className="relative z-10 w-36 min-[380px]:w-44 sm:w-52 h-14 sm:h-16 rounded-2xl bg-gradient-to-r from-cream-100 via-white to-cream-200 shadow-md border border-pastel-pink/40 flex items-center justify-center overflow-hidden">
            {/* Frosting drips */}
            <div className="absolute -top-1 inset-x-0 h-3.5 bg-pastel-pink rounded-b-xl opacity-80" />
            <div className="flex items-center gap-2 sm:gap-3 px-2">
              <span className="text-xs sm:text-sm">🍓</span>
              <span className="font-serif italic text-[11px] sm:text-xs text-dusty-rose truncate">Happy Birthday</span>
              <span className="text-xs sm:text-sm">🌸</span>
            </div>
          </div>

          {/* Tier 2 (Bottom Tier) */}
          <div className="relative z-0 w-52 min-[380px]:w-64 sm:w-72 h-18 sm:h-20 -mt-2 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-pastel-pink/90 via-cream-200 to-pastel-pink shadow-lg border border-pastel-rose/30 flex items-center justify-center overflow-hidden">
            {/* Swirled cream accents */}
            <div className="absolute inset-x-2 sm:inset-x-4 top-1.5 flex justify-between px-2 text-[10px] sm:text-xs opacity-75">
              <span>🌸</span>
              <span>✨</span>
              <span>🌸</span>
              <span>✨</span>
              <span>🌸</span>
            </div>
            <span className="font-script text-2xl sm:text-3xl text-dusty-deep mt-2">
              {birthdayData.recipient.name}
            </span>
          </div>

          {/* Cake Stand / Plate */}
          <div className="w-60 min-[380px]:w-72 sm:w-84 h-4 sm:h-5 -mt-1 rounded-full bg-gradient-to-r from-champagne-gold/60 via-cream-100 to-champagne-gold/60 border border-champagne-gold/50 shadow-md" />
          <div className="w-20 sm:w-24 h-3 sm:h-4 bg-gradient-to-b from-champagne-gold/40 to-transparent rounded-b-xl shadow-inner" />
        </div>

        {/* Hint under cake */}
        <p className="mt-5 sm:mt-6 text-[11px] sm:text-xs text-dusty-deep/70 font-sans tracking-wide text-center px-2">
          {!candlesBlown ? candleHint : "Your birthday wish has ascended to the cosmos ✨"}
        </p>

        {/* Make a Wish Button with min 48px height */}
        <div className="mt-6 sm:mt-8 w-full sm:w-auto px-4 flex justify-center">
          <button
            onClick={handleMakeWish}
            disabled={candlesBlown}
            className={`group inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-serif text-base sm:text-lg tracking-wide shadow-rose-glow transition-all duration-300 min-h-[48px] w-full sm:w-auto ${
              candlesBlown
                ? 'bg-cream-300 text-dusty-rose cursor-default'
                : 'bg-gradient-to-r from-dusty-rose via-dusty-deep to-dusty-rose text-white hover:scale-105 active:scale-95 hover:shadow-glass-hover'
            }`}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-champagne-gold" />
            <span className="font-medium">
              {candlesBlown ? wishDoneText : wishButtonText}
            </span>
            <Heart className="w-4 h-4 fill-current" />
          </button>
        </div>
      </div>

      {/* Birthday Wish Revealed Message Card */}
      {showWishMessage && (
        <div className="relative z-20 max-w-2xl mx-auto mt-6 bg-white/95 backdrop-blur-xl border border-champagne-gold/60 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl text-center animate-in zoom-in-95 duration-400">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pastel-pink mx-auto mb-3 sm:mb-4 flex items-center justify-center text-dusty-deep shadow-sm">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-dusty-rose" />
          </div>
          <h3 className="font-serif text-xl sm:text-3xl text-dusty-dark mb-3 sm:mb-4 font-medium">
            A Blessing For Your Year Ahead
          </h3>
          <p className="font-sans text-xs sm:text-base md:text-lg text-dusty-deep/90 leading-relaxed font-light mb-4 sm:mb-6">
            {wishMessage}
          </p>
          <div className="font-script text-2xl sm:text-3xl text-dusty-rose">
            May this be your happiest year yet ♡
          </div>
        </div>
      )}
    </section>
  );
}
