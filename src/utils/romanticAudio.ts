// Romantic ambient Web Audio synthesizer & audio controller

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private volume: number = 0.4;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Plays a warm, gentle bell/harp note
  private playNote(freq: number, duration: number = 2.5, velocity: number = 0.3) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm sound design
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + duration);

    noteGain.gain.setValueAtTime(0, this.ctx.currentTime);
    noteGain.gain.linearRampToValueAtTime(velocity * this.volume, this.ctx.currentTime + 0.08);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  // Gentle romantic chord arpeggios (Key: F Major / D Minor romantic progression)
  private playSequence() {
    // F - A - C - E, C - E - G - B, D - F - A - C, Bb - D - F - A
    const chords = [
      [349.23, 440.0, 523.25, 659.25], // Fmaj7
      [261.63, 329.63, 392.0, 493.88], // Cmaj7
      [293.66, 349.23, 440.0, 523.25], // Dm7
      [233.08, 293.66, 349.23, 440.0], // Bbmaj7
    ];

    let chordIndex = 0;
    const playNextChord = () => {
      if (!this.isPlaying) return;
      const notes = chords[chordIndex % chords.length];
      chordIndex++;

      // Arpeggiate notes gracefully
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          if (this.isPlaying) {
            this.playNote(freq, 3.2, 0.28);
          }
        }, idx * 600);
      });
    };

    playNextChord();
    this.intervalId = window.setInterval(playNextChord, 4200);
  }

  public play() {
    this.initContext();
    this.isPlaying = true;
    this.playSequence();
  }

  public pause() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volume;
  }
}

export const romanticAudio = new RomanticAudioEngine();
