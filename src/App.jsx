import React, { useState, useEffect, useRef } from 'react';
import AutonomousAmbientEngine from './components/AutonomousAmbientEngine';
import MusicPlayer from './components/MusicPlayer';
import HeroOpening from './components/HeroOpening';
import ScrapbookGallery from './components/ScrapbookGallery';
import SpecialMemories from './components/SpecialMemories';
import LetterEnvelope3D from './components/LetterEnvelope3D';
import BirthdayCelebration from './components/BirthdayCelebration';
import FinalSurprise from './components/FinalSurprise';
import InitialLoadingScreen from './components/InitialLoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingManager } from './utils/loadingManager';
import { birthdayData } from './config/birthdayData';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isEveningAtmosphere, setIsEveningAtmosphere] = useState(false);

  // Progressive Loading State
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStatus, setLoadingStatus] = useState("Preparing Something Special ♡");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const loadingManagerRef = useRef(null);

  // Initialize centralized loading pipeline on mount
  useEffect(() => {
    // Remove static index.html shell immediately once React is active
    const staticLoader = document.getElementById('initial-static-loader');
    if (staticLoader) {
      staticLoader.style.opacity = '0';
      setTimeout(() => staticLoader.remove(), 400);
    }

    const photoList = birthdayData.gallery.photos.map(p => p.src);

    const manager = new LoadingManager(
      (progress, status) => {
        setLoadingProgress(progress);
        setLoadingStatus(status);
      },
      () => {
        // When 100% reached
        setIsLoaderExiting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    );

    loadingManagerRef.current = manager;
    manager.runPreloadPipeline(photoList);

    return () => {
      manager.destroy();
    };
  }, []);

  // Monitor scroll position to adapt ambient atmosphere toward the evening ending
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollPosition / (totalHeight || 1);
      
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
    <ErrorBoundary>
      {/* Premium Initial Loading Screen */}
      {isLoading && (
        <InitialLoadingScreen 
          progress={loadingProgress}
          statusMessage={loadingStatus}
          isExiting={isLoaderExiting}
        />
      )}

      <div className={`min-h-screen transition-colors duration-1000 ${
        isEveningAtmosphere ? 'bg-[#fcf5f7]' : 'bg-cream-100'
      } text-[#543b40] relative selection:bg-pastel-pink-hover selection:text-dusty-dark overflow-x-hidden w-full`}>
        
        {/* Autonomous Ambient Particle Engine (Continuous 60FPS Ambient Animation) */}
        <AutonomousAmbientEngine nightMode={isEveningAtmosphere} />

        {/* Floating Minimal Luxury Music Player */}
        <MusicPlayer 
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
        />

        {/* Main Experience Journey */}
        <main className="relative z-10 flex flex-col w-full overflow-x-hidden">
          {/* 1. Website Opening / The First Impression */}
          <HeroOpening 
            onOpenSurprise={scrollToGallery}
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
          />

          {/* 2. Her Photo Gallery / 3D Scrapbook */}
          <ScrapbookGallery />

          {/* 3. Special Memories / Compliments */}
          <div id="memories-section" className="w-full">
            <SpecialMemories />
          </div>

          {/* 4. The Special Birthday Letter / 3D Envelope */}
          <div id="letter-section" className="w-full">
            <LetterEnvelope3D />
          </div>

          {/* 5. Birthday Celebration & Pastel Cake */}
          <div id="celebration-section" className="w-full">
            <BirthdayCelebration />
          </div>

          {/* 6. Final Surprise / Emotional Farewell */}
          <div id="final-section" className="w-full">
            <FinalSurprise />
          </div>
        </main>

        {/* Touch-Friendly Bottom Chapter Dock for Mobile and Desktop */}
        <nav 
          aria-label="Story chapters"
          className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/85 backdrop-blur-lg border border-pastel-pink/60 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-glass flex items-center gap-1 sm:gap-2.5 max-w-[96vw] overflow-x-auto no-scrollbar whitespace-nowrap transition-all hover:bg-white/95"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Intro"
          >
            🌸 Intro
          </button>
          <span className="text-dusty-light text-xs opacity-40 shrink-0">•</span>
          <button
            onClick={() => scrollToSection('gallery-section')}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Photos"
          >
            📷 Photos
          </button>
          <span className="text-dusty-light text-xs opacity-40 shrink-0">•</span>
          <button
            onClick={() => scrollToSection('memories-section')}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Memories"
          >
            ✨ Notes
          </button>
          <span className="text-dusty-light text-xs opacity-40 shrink-0">•</span>
          <button
            onClick={() => scrollToSection('letter-section')}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Letter"
          >
            💌 Letter
          </button>
          <span className="text-dusty-light text-xs opacity-40 shrink-0">•</span>
          <button
            onClick={() => scrollToSection('celebration-section')}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Cake"
          >
            🎂 Cake
          </button>
          <span className="text-dusty-light text-xs opacity-40 shrink-0">•</span>
          <button
            onClick={() => scrollToSection('final-section')}
            className="min-h-[44px] px-2 sm:px-2.5 py-1 text-xs font-serif text-dusty-deep/80 hover:text-dusty-deep active:scale-95 transition-all flex items-center justify-center shrink-0"
            title="Ending"
          >
            🌙 Finale
          </button>
        </nav>
      </div>
    </ErrorBoundary>
  );
}
