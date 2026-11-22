import React, { useState } from 'react';
import { Mail, Heart, Sparkles, Feather, X } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';
import { romanticAudio } from '../utils/soundEffects';

export default function LetterEnvelope3D() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullLetter, setShowFullLetter] = useState(false);
  const letter = birthdayData.letter;

  const handleOpenEnvelope = () => {
    romanticAudio.playPaperSound();
    romanticAudio.playChime('wish');
    setIsOpen(true);
    setTimeout(() => {
      setShowFullLetter(true);
    }, 900);
  };

  const handleCloseEnvelope = () => {
    romanticAudio.playPaperSound();
    setShowFullLetter(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 400);
  };

  return (
    <section className="relative py-16 sm:py-28 px-3.5 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-pastel-pink/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 relative z-10 px-2">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-pastel-pink/60 border border-pastel-rose/30 text-dusty-deep text-[11px] sm:text-xs uppercase tracking-widest font-medium mb-2.5 sm:mb-3 shadow-sm">
          <Feather className="w-3.5 h-3.5 text-dusty-rose" />
          <span>{letter.badge}</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
        </div>
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-dusty-dark font-medium mb-2.5 sm:mb-3">
          {letter.envelopeTitle}
        </h2>
        <p className="font-sans text-xs sm:text-base text-dusty-deep/80 font-light leading-relaxed">
          {letter.envelopeSubtitle}
        </p>
      </div>

      {/* 3D Envelope Container */}
      <div className="relative w-full max-w-md min-h-[340px] sm:min-h-[420px] flex items-center justify-center perspective-[1200px] px-1">
        {!isOpen ? (
          /* Sealed Envelope (Interactive 3D Card) */
          <div 
            onClick={handleOpenEnvelope}
            className="group relative w-full bg-cream-200 border-2 border-champagne-gold/40 rounded-2xl shadow-envelope p-4 sm:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.02] active:scale-98 hover:shadow-2xl animate-float-slow"
          >
            {/* Gold foil decorative edge border */}
            <div className="absolute inset-1.5 sm:inset-2 border border-dashed border-champagne-gold/50 rounded-xl pointer-events-none" />

            {/* Envelope Flap Fold Lines */}
            <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-cream-300 to-cream-200 clip-envelope-flap shadow-md border-b border-champagne-gold/30 flex items-center justify-center" />

            {/* Center Wax Seal */}
            <div className="relative z-20 flex flex-col items-center justify-center py-7 sm:py-10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-dusty-rose via-dusty-deep to-dusty-dark shadow-lg border-2 border-champagne-gold/60 flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform duration-300">
                {/* Wax seal ring impression */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-champagne-gold/40 flex items-center justify-center">
                  <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-champagne-light fill-champagne-light" />
                </div>
                {/* Wax seal glimmer */}
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 text-champagne-gold animate-sparkle" />
              </div>

              {/* Envelope Call to Action */}
              <div className="mt-6 sm:mt-8 text-center px-2">
                <span className="font-serif text-lg sm:text-2xl text-dusty-dark font-medium block mb-2">
                  To: {birthdayData.recipient.name} ♡
                </span>
                <span className="inline-block px-5 sm:px-6 py-2.5 rounded-full bg-dusty-rose text-white text-xs sm:text-sm font-medium shadow-md group-hover:bg-dusty-deep transition-colors min-h-[44px] flex items-center justify-center">
                  {letter.openButtonText}
                </span>
              </div>
            </div>

            {/* Floral botanical stamps in corners */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none text-base sm:text-xl opacity-60">
              💌
            </div>
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 pointer-events-none text-base sm:text-xl opacity-60">
              🌸
            </div>
          </div>
        ) : (
          /* Opened Unfolded Letter Modal */
          <div className="relative z-30 w-full max-w-2xl bg-[#fffdf9] border border-champagne-gold/50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-12 shadow-2xl animate-in zoom-in-95 duration-400">
            {/* Close Button with 44px touch target */}
            <button
              onClick={handleCloseEnvelope}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 min-w-[44px] min-h-[44px] rounded-full bg-cream-200 hover:bg-cream-300 active:scale-95 text-dusty-deep flex items-center justify-center transition-colors"
              title={letter.closeButtonText}
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Paper Texture and Delicate Borders */}
            <div className="absolute inset-2 sm:inset-3 border border-dusty-light/20 rounded-xl sm:rounded-2xl pointer-events-none" />

            {/* Letter Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-pastel-pink/60 pr-8 sm:pr-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl">🌹</span>
                <span className="font-script text-xl sm:text-2xl text-dusty-deep">A Birthday Keepsake</span>
              </div>
              <span className="font-serif italic text-[11px] sm:text-xs text-dusty-light shrink-0">
                {birthdayData.recipient.birthdate}
              </span>
            </div>

            {/* Letter Body - Handwritten Line by Line */}
            <div className="space-y-3.5 sm:space-y-4 text-dusty-dark">
              <p className="font-script text-2xl sm:text-3xl md:text-4xl text-dusty-deep mb-3 sm:mb-4">
                {letter.salutation}
              </p>

              {letter.paragraphs.map((paragraph, idx) => (
                <p 
                  key={idx}
                  className="font-handwritten text-lg sm:text-xl md:text-2xl text-dusty-deep/90 leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-700"
                  style={{ animationDelay: `${idx * 180 + 150}ms` }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-pastel-pink/40">
                <p className="font-handwritten text-lg sm:text-xl text-dusty-rose mb-1">
                  {letter.closing}
                </p>
                <p className="font-script text-2xl sm:text-3xl md:text-4xl text-dusty-deep">
                  {letter.signature}
                </p>
              </div>
            </div>

            {/* Fold & Close Button with 44px min height */}
            <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 flex justify-center">
              <button
                onClick={handleCloseEnvelope}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream-300 hover:bg-cream-400 active:scale-95 text-dusty-deep text-[11px] sm:text-xs uppercase tracking-wider font-medium transition-all min-h-[44px]"
              >
                <span>{letter.closeButtonText}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
