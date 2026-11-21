// Real audio player for the romantic background music

class RomanticAudioEngine {
  private audio: HTMLAudioElement | null = null;
  private volume: number = 0.5;
  private isPlaying: boolean = false;

  private initAudio() {
    if (this.audio) return;

    this.audio = new Audio();

    // Try mpeg first (the actual file format), then mp3 as fallback alias
    this.audio.src = `${import.meta.env.BASE_URL}audio/romantic-background.mpeg`;
    this.audio.loop = true;
    this.audio.volume = this.volume;
    this.audio.preload = 'metadata';

    this.audio.addEventListener('error', () => {
      console.warn('RomanticAudio: Failed to load audio file.');
    });
  }

  public play() {
    this.initAudio();
    if (!this.audio) return;
    this.audio.volume = this.volume;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
        })
        .catch(() => {
          // Autoplay blocked — user will need to click play manually
          this.isPlaying = false;
        });
    }
  }

  public pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying && this.audio !== null && !this.audio.paused;
  }

  public getVolume(): number {
    return this.volume;
  }
}

export const romanticAudio = new RomanticAudioEngine();

