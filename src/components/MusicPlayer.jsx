import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { romanticAudio } from '../utils/soundEffects';
import { birthdayData } from '../config/birthdayData';

export default function MusicPlayer({ isMusicPlaying, setIsMusicPlaying }) {
  const [volume, setVolume] = useState(0.65);
  const [showVolume, setShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.65);

  const togglePlay = () => {
    const nextState = !isMusicPlaying;
    if (nextState) {
      romanticAudio.startAmbientMusic(birthdayData.music.audioSrc, setIsMusicPlaying);
    } else {
      romanticAudio.stopAmbientMusic(setIsMusicPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) setIsMuted(false);
    romanticAudio.setVolume(newVol);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setVolume(prevVolume || 0.65);
      romanticAudio.setVolume(prevVolume || 0.65);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      setVolume(0);
      romanticAudio.setVolume(0);
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
      {/* Floating Glass Music Pill */}
      <div 
        className="backdrop-blur-md bg-white/70 border border-pastel-pink/60 shadow-glass rounded-full px-3.5 py-2 flex items-center gap-3 transition-all duration-300 hover:shadow-glass-hover hover:bg-white/85"
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-gradient-to-r from-dusty-rose to-dusty-deep text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform"
          aria-label={isMusicPlaying ? "Pause romantic melody" : "Play romantic melody"}
          title={isMusicPlaying ? "Pause music" : "Play music"}
        >
          {isMusicPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-white" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
          )}
        </button>

        {/* Music Information & Equalizer bars */}
        <div className="flex flex-col cursor-pointer" onClick={togglePlay}>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-dusty-deep tracking-wide font-serif">
              {birthdayData.music.title}
            </span>
            {isMusicPlaying && (
              <span className="inline-flex items-center gap-0.5 h-3">
                <span className="w-0.5 bg-dusty-rose rounded-full animate-[musicBar_1s_ease-in-out_infinite_alternate]" style={{ height: '70%' }} />
                <span className="w-0.5 bg-champagne-gold rounded-full animate-[musicBar_0.8s_ease-in-out_infinite_alternate_0.2s]" style={{ height: '100%' }} />
                <span className="w-0.5 bg-dusty-rose rounded-full animate-[musicBar_1.2s_ease-in-out_infinite_alternate_0.4s]" style={{ height: '50%' }} />
              </span>
            )}
          </div>
          <span className="text-[10px] text-dusty-rose/80 font-sans">
            {isMusicPlaying ? "Playing melody ♡" : "Tap to listen ♡"}
          </span>
        </div>

        {/* Volume controls */}
        <div className="relative flex items-center">
          <button
            onClick={toggleMute}
            className="text-dusty-rose/80 hover:text-dusty-deep p-1 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>

          {/* Volume Slider Dropdown / Expand */}
          {showVolume && (
            <div className="absolute right-0 top-10 bg-white/90 backdrop-blur-md border border-pastel-pink/60 shadow-glass rounded-2xl p-3 flex flex-col items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-[10px] font-medium text-dusty-deep">
                {Math.round(volume * 100)}%
              </span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 accent-dusty-rose h-1.5 bg-pastel-pink rounded-lg cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
