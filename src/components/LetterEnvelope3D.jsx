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
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pastel-pink/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-pink/60 border border-pastel-rose/30 text-dusty-deep text-xs uppercase tracking-widest font-medium mb-3">
          <Feather className="w-3.5 h-3.5 text-dusty-rose" />
          <span>{letter.badge}</span>
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-dusty-dark font-medium mb-3">
          {letter.envelopeTitle}
        </h2>
        <p className="font-sans text-base text-dusty-deep/80 font-light">
          {letter.envelopeSubtitle}
        </p>
      </div>

      {/* 3D Envelope Container */}
      <div className="relative w-full max-w-lg min-h-[380px] sm:min-h-[420px] flex items-center justify-center perspective-[1200px]">
        {!isOpen ? (
          /* Sealed Envelope (Interactive 3D Card) */
          <div 
            onClick={handleOpenEnvelope}
            className="group relative w-full max-w-md bg-cream-200 border-2 border-champagne-gold/40 rounded-2xl shadow-envelope p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl animate-float-slow"
          >
            {/* Gold foil decorative edge border */}
            <div className="absolute inset-2 border border-dashed border-champagne-gold/50 rounded-xl pointer-events-none" />

            {/* Envelope Flap Fold Lines */}
            <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-cream-300 to-cream-200 clip-envelope-flap shadow-md border-b border-champagne-gold/30 flex items-center justify-center" />

            {/* Center Wax Seal */}
            <div className="relative z-20 flex flex-col items-center justify-center py-10">
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-dusty-rose via-dusty-deep to-dusty-dark shadow-lg border-2 border-champagne-gold/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {/* Wax seal ring impression */}
                <div className="w-14 h-14 rounded-full border border-champagne-gold/40 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-champagne-light fill-champagne-light" />
                </div>
                {/* Wax seal glimmer */}
                <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-champagne-gold animate-sparkle" />
              </div>

              {/* Envelope Call to Action */}
              <div className="mt-8 text-center">
                <span className="font-serif text-xl sm:text-2xl text-dusty-dark font-medium block mb-2">
                  To: {birthdayData.recipient.name} ♡
                </span>
                <span className="inline-block px-6 py-2.5 rounded-full bg-dusty-rose text-white text-sm font-medium shadow-md group-hover:bg-dusty-deep transition-colors">
                  {letter.openButtonText}
                </span>
              </div>
            </div>

            {/* Floral botanical stamps in corners */}
            <div className="absolute top-4 right-4 pointer-events-none text-xl opacity-60">
              💌
            </div>
            <div className="absolute bottom-4 left-4 pointer-events-none text-xl opacity-60">
              🌸
            </div>
          </div>
        ) : (
          /* Opened Unfolded Letter Modal */
          <div className="relative z-30 w-full max-w-2xl bg-[#fffdf9] border border-champagne-gold/50 rounded-3xl p-8 sm:p-12 shadow-2xl animate-in zoom-in-95 duration-500">
            {/* Close Button */}
            <button
              onClick={handleCloseEnvelope}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-200 hover:bg-cream-300 text-dusty-deep flex items-center justify-center transition-colors"
              title={letter.closeButtonText}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Paper Texture and Delicate Borders */}
            <div className="absolute inset-3 border border-dusty-light/20 rounded-2xl pointer-events-none" />

            {/* Letter Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-pastel-pink/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌹</span>
                <span className="font-script text-2xl text-dusty-deep">A Birthday Keepsake</span>
              </div>
              <span className="font-serif italic text-xs text-dusty-light">
                {birthdayData.recipient.birthdate}
              </span>
            </div>

            {/* Letter Body - Handwritten Line by Line */}
            <div className="space-y-4 text-dusty-dark">
              <p className="font-script text-3xl sm:text-4xl text-dusty-deep mb-4">
                {letter.salutation}
              </p>

              {letter.paragraphs.map((paragraph, idx) => (
                <p 
                  key={idx}
                  className="font-handwritten text-xl sm:text-2xl text-dusty-deep/90 leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-700"
                  style={{ animationDelay: `${idx * 200 + 200}ms` }}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-6 mt-6 border-t border-pastel-pink/40">
                <p className="font-handwritten text-xl text-dusty-rose mb-1">
                  {letter.closing}
                </p>
                <p className="font-script text-3xl sm:text-4xl text-dusty-deep">
                  {letter.signature}
                </p>
              </div>
            </div>

            {/* Fold & Close Button */}
            <div className="mt-8 pt-4 flex justify-center">
              <button
                onClick={handleCloseEnvelope}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-cream-300 hover:bg-cream-400 text-dusty-deep text-xs uppercase tracking-wider font-medium transition-all"
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
