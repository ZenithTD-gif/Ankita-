import React, { useState, useEffect } from 'react';
import AutonomousAmbientEngine from './components/AutonomousAmbientEngine';
import MusicPlayer from './components/MusicPlayer';
import HeroOpening from './components/HeroOpening';
import ScrapbookGallery from './components/ScrapbookGallery';
import SpecialMemories from './components/SpecialMemories';
import LetterEnvelope3D from './components/LetterEnvelope3D';
import BirthdayCelebration from './components/BirthdayCelebration';
import FinalSurprise from './components/FinalSurprise';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEveningAtmosphere, setIsEveningAtmosphere] = useState(false);

  // Monitor scroll position to adapt ambient atmosphere toward the evening ending
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollPosition / (totalHeight || 1);
      
      // When user enters final 30% of page, activate evening ambient glow
      setIsEveningAtmosphere(scrollPercent > 0.72);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGallery = () => {
    const el = document.getElementById('gallery-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      isEveningAtmosphere ? 'bg-[#fcf5f7]' : 'bg-cream-100'
    } text-[#543b40] relative selection:bg-pastel-pink-hover selection:text-dusty-dark`}>
      
      {/* Autonomous Ambient Particle Engine (Continuous 60FPS Ambient Animation) */}
      <AutonomousAmbientEngine nightMode={isEveningAtmosphere} />

      {/* Floating Minimal Luxury Music Player */}
      <MusicPlayer 
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
      />

      {/* Main Experience Journey */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Website Opening / The First Impression */}
        <HeroOpening 
          onOpenSurprise={scrollToGallery}
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
        />

        {/* 2. Her Photo Gallery / 3D Scrapbook */}
        <ScrapbookGallery />

        {/* 3. Special Memories / Compliments */}
        <div id="memories-section">
          <SpecialMemories />
        </div>

        {/* 4. The Special Birthday Letter / 3D Envelope */}
        <div id="letter-section">
          <LetterEnvelope3D />
        </div>

        {/* 5. Birthday Celebration & Pastel Cake */}
        <div id="celebration-section">
          <BirthdayCelebration />
        </div>

        {/* 6. Final Surprise / Emotional Farewell */}
        <div id="final-section">
          <FinalSurprise />
        </div>
      </main>

      {/* Subtle Bottom Chapter Dock for Smooth Exploration */}
      <nav 
        aria-label="Story chapters"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/75 backdrop-blur-md border border-pastel-pink/60 rounded-full px-4 py-2 shadow-glass flex items-center gap-2 sm:gap-4 transition-all hover:bg-white/90"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Intro"
        >
          🌸 Opening
        </button>
        <span className="text-dusty-light text-xs opacity-50">•</span>
        <button
          onClick={() => scrollToSection('gallery-section')}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Scrapbook"
        >
          📷 Photos
        </button>
        <span className="text-dusty-light text-xs opacity-50">•</span>
        <button
          onClick={() => scrollToSection('memories-section')}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Memories"
        >
          ✨ Memories
        </button>
        <span className="text-dusty-light text-xs opacity-50">•</span>
        <button
          onClick={() => scrollToSection('letter-section')}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Letter"
        >
          💌 Letter
        </button>
        <span className="text-dusty-light text-xs opacity-50">•</span>
        <button
          onClick={() => scrollToSection('celebration-section')}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Celebration"
        >
          🎂 Cake
        </button>
        <span className="text-dusty-light text-xs opacity-50">•</span>
        <button
          onClick={() => scrollToSection('final-section')}
          className="text-xs font-serif text-dusty-deep/75 hover:text-dusty-deep hover:scale-105 transition-all p-1"
          title="Ending"
        >
          🌙 Finale
        </button>
      </nav>
    </div>
  );
}
