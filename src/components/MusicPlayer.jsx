import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';
import { romanticAudio } from '../utils/soundEffects';
import { birthdayData } from '../config/birthdayData';

export default function MusicPlayer({ isMusicPlaying, setIsMusicPlaying }) {
  const [volume, setVolume] = useState(birthdayData.music.defaultVolume || 0.75);
  const [showVolume, setShowVolume] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.75);
  const [ytReady, setYtReady] = useState(false);
  const ytPlayerRef = useRef(null);

  // Initialize YouTube IFrame Player for "Taylor Swift - Lover Remix Feat. Shawn Mendes"
  useEffect(() => {
    const videoId = birthdayData.music.youtubeId || "b5Zay_Hd_7Q";

    // Load YouTube API script if not loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      try {
        if (window.YT && window.YT.Player) {
          ytPlayerRef.current = new window.YT.Player('yt-bg-audio-container', {
            height: '2',
            width: '2',
            videoId: videoId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              loop: 1,
              playlist: videoId,
              playsinline: 1,
              modestbranding: 1,
              origin: window.location.origin,
            },
            events: {
              onReady: (event) => {
                setYtReady(true);
                event.target.setVolume(Math.round(volume * 100));
              },
              onStateChange: (event) => {
                // YT.PlayerState.PLAYING === 1, PAUSED === 2, ENDED === 0
                if (event.data === 1) {
                  setIsMusicPlaying(true);
                } else if (event.data === 2 || event.data === 0) {
                  setIsMusicPlaying(false);
                }
              },
              onError: () => {
                // On any YouTube embed restriction, fall back to procedural audio
                setYtReady(false);
              }
            }
          });
        }
      } catch (err) {
        console.warn("YouTube player init fallback:", err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    // Register external controller on romanticAudio so calls from HeroOpening or other components trigger Lover (Remix)
    romanticAudio.externalPlayerController = {
      play: () => {
        if (ytPlayerRef.current && ytPlayerRef.current.playVideo) {
          try {
            ytPlayerRef.current.playVideo();
            setIsMusicPlaying(true);
            return;
          } catch (e) {
            console.warn("YT play error, fallback to audio:", e);
          }
        }
        romanticAudio.startProceduralMelody();
      },
      pause: () => {
        if (ytPlayerRef.current && ytPlayerRef.current.pauseVideo) {
          try {
            ytPlayerRef.current.pauseVideo();
            setIsMusicPlaying(false);
          } catch {}
        }
      },
      setVolume: (val) => {
        if (ytPlayerRef.current && ytPlayerRef.current.setVolume) {
          try {
            ytPlayerRef.current.setVolume(Math.round(val * 100));
          } catch {}
        }
      }
    };

    return () => {
      romanticAudio.externalPlayerController = null;
    };
  }, []);

  const togglePlay = () => {
    const nextState = !isMusicPlaying;
    if (nextState) {
      if (ytPlayerRef.current && ytPlayerRef.current.playVideo) {
        try {
          ytPlayerRef.current.playVideo();
          setIsMusicPlaying(true);
          return;
        } catch (e) {
          console.warn("YT play error:", e);
        }
      }
      romanticAudio.startAmbientMusic(birthdayData.music.audioSrc, setIsMusicPlaying);
    } else {
      if (ytPlayerRef.current && ytPlayerRef.current.pauseVideo) {
        try {
          ytPlayerRef.current.pauseVideo();
          setIsMusicPlaying(false);
        } catch {}
      }
      romanticAudio.stopAmbientMusic(setIsMusicPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) setIsMuted(false);
    romanticAudio.setVolume(newVol);
    if (ytPlayerRef.current && ytPlayerRef.current.setVolume) {
      try {
        ytPlayerRef.current.setVolume(Math.round(newVol * 100));
      } catch {}
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      const targetVol = prevVolume || 0.75;
      setVolume(targetVol);
      romanticAudio.setVolume(targetVol);
      if (ytPlayerRef.current && ytPlayerRef.current.setVolume) {
        try {
          ytPlayerRef.current.setVolume(Math.round(targetVol * 100));
        } catch {}
      }
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      setVolume(0);
      romanticAudio.setVolume(0);
      if (ytPlayerRef.current && ytPlayerRef.current.setVolume) {
        try {
          ytPlayerRef.current.setVolume(0);
        } catch {}
      }
    }
  };

  return (
    <>
      {/* Hidden offscreen YouTube Audio Container */}
      <div 
        id="yt-bg-audio-container" 
        className="fixed -bottom-10 left-0 w-1 h-1 opacity-0 pointer-events-none z-[-1]" 
        aria-hidden="true" 
      />

      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        {/* Floating Glass Music Pill */}
        <div 
          className="backdrop-blur-md bg-white/75 border border-pastel-pink/60 shadow-glass rounded-full px-3.5 py-2 flex items-center gap-3 transition-all duration-300 hover:shadow-glass-hover hover:bg-white/90"
          onMouseEnter={() => setShowVolume(true)}
          onMouseLeave={() => setShowVolume(false)}
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-gradient-to-r from-dusty-rose to-dusty-deep text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform"
            aria-label={isMusicPlaying ? "Pause Lover (Remix)" : "Play Lover (Remix)"}
            title={isMusicPlaying ? "Pause Lover (Remix)" : "Play Taylor Swift - Lover (Remix)"}
          >
            {isMusicPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-white" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
            )}
          </button>

          {/* Music Information & Equalizer bars */}
          <div className="flex flex-col cursor-pointer max-w-[170px] sm:max-w-[210px]" onClick={togglePlay}>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-dusty-deep tracking-wide font-serif truncate">
                {birthdayData.music.title}
              </span>
              {isMusicPlaying && (
                <span className="inline-flex items-center gap-0.5 h-3 shrink-0">
                  <span className="w-0.5 bg-dusty-rose rounded-full animate-[musicBar_1s_ease-in-out_infinite_alternate]" style={{ height: '70%' }} />
                  <span className="w-0.5 bg-champagne-gold rounded-full animate-[musicBar_0.8s_ease-in-out_infinite_alternate_0.2s]" style={{ height: '100%' }} />
                  <span className="w-0.5 bg-dusty-rose rounded-full animate-[musicBar_1.2s_ease-in-out_infinite_alternate_0.4s]" style={{ height: '50%' }} />
                </span>
              )}
            </div>
            <span className="text-[10px] text-dusty-rose/85 font-sans truncate">
              {isMusicPlaying ? "Taylor Swift ft. Shawn Mendes ♡" : "Tap to play Lover ♡"}
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
              <div className="absolute right-0 top-10 bg-white/95 backdrop-blur-md border border-pastel-pink/60 shadow-glass rounded-2xl p-3 flex flex-col items-center gap-2 animate-in fade-in zoom-in-95 duration-200">
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
    </>
  );
}
