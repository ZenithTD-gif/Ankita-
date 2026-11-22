/**
 * Web Audio API synthesized sound generator & romantic ambient music engine.
 * Works without external MP3 files, zero latency, pure romantic soundscapes.
 */

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.musicPlaying = false;
    this.musicGain = null;
    this.timer = null;
    this.volume = 0.6;
    this.currentNoteIndex = 0;
    this.audioElement = null;
    this.isUsingExternalAudio = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.musicGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(newVol) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.externalPlayerController && this.externalPlayerController.setVolume) {
      this.externalPlayerController.setVolume(this.volume);
    }
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(this.volume * 0.4, this.ctx.currentTime, 0.1);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  // Play a soft, dreamy chime (for candle wish or opening surprise)
  playChime(type = 'wish') {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Romantic pentatonic notes: F4, A4, C5, E5, G5, C6
      const freqs = type === 'wish' 
        ? [349.23, 440.00, 523.25, 659.25, 783.99, 1046.50]
        : [523.25, 659.25, 783.99, 1046.50];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.25 * this.volume, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 2.0);
      });
    } catch {
      // Audio autoplay or context restrictions handled gracefully
    }
  }

  // Play a soft paper flutter sound for envelope
  playPaperSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.3);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12 * this.volume, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Ignore
    }
  }

  // Continuous dreamy ambient romantic music generator
  startAmbientMusic(customAudioSrc = null, onStateChange = null) {
    if (this.externalPlayerController && this.externalPlayerController.play) {
      this.musicPlaying = true;
      if (onStateChange) onStateChange(true);
      this.externalPlayerController.play();
      return;
    }

    this.initContext();
    this.musicPlaying = true;
    if (onStateChange) onStateChange(true);

    // If an external audio src is provided, try loading it first
    if (customAudioSrc) {
      if (!this.audioElement) {
        this.audioElement = new Audio(customAudioSrc);
        this.audioElement.loop = true;
        this.audioElement.volume = this.volume;
      }
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isUsingExternalAudio = true;
            return;
          })
          .catch(() => {
            // If external file not found or blocked, fall back to procedural synthesis
            this.startProceduralMelody();
          });
        return;
      }
    }

    this.startProceduralMelody();
  }

  startProceduralMelody() {
    if (!this.ctx) return;
    if (this.timer) clearInterval(this.timer);

    // Warm, romantic piano/music box chord progression:
    // Fmaj9 -> Am7 -> Dm9 -> Bbmaj7
    const chords = [
      [174.61, 261.63, 329.63, 349.23, 440.00], // Fmaj9
      [220.00, 261.63, 329.63, 392.00, 523.25], // Am7
      [146.83, 220.00, 293.66, 349.23, 440.00], // Dm9
      [233.08, 293.66, 349.23, 440.00, 523.25], // Bbmaj7
    ];

    let chordIdx = 0;
    let noteInChord = 0;

    const playNextNote = () => {
      if (!this.musicPlaying || !this.ctx) return;

      const currentChord = chords[chordIdx];
      const freq = currentChord[noteInChord];

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Soft warm sine + subtle triangle harmonics for a romantic celeste/rhodes timbre
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(freq * 2, now);

      const amp = (noteInChord === 0 ? 0.16 : 0.11) * this.volume;
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(amp, now + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      osc.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.musicGain);

      osc.start(now);
      osc2.start(now);
      osc.stop(now + 2.4);
      osc2.stop(now + 2.4);

      noteInChord++;
      if (noteInChord >= currentChord.length) {
        noteInChord = 0;
        chordIdx = (chordIdx + 1) % chords.length;
      }
    };

    // Trigger notes in a relaxing arpeggio pattern every 550ms
    playNextNote();
    this.timer = setInterval(playNextNote, 560);
  }

  stopAmbientMusic(onStateChange = null) {
    this.musicPlaying = false;
    if (this.externalPlayerController && this.externalPlayerController.pause) {
      this.externalPlayerController.pause();
    }
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (onStateChange) onStateChange(false);
  }

  toggleMusic(customAudioSrc = null, onStateChange = null) {
    if (this.musicPlaying) {
      this.stopAmbientMusic(onStateChange);
    } else {
      this.startAmbientMusic(customAudioSrc, onStateChange);
    }
    return this.musicPlaying;
  }
}

export const romanticAudio = new RomanticAudioEngine();
