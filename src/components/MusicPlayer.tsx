import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Pause, Play } from 'lucide-react';
import { romanticAudio } from '../utils/romanticAudio';

interface MusicPlayerProps {
  autoStart?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const autoStartedRef = useRef(false);

  useEffect(() => {
    if (autoStart && !autoStartedRef.current) {
      autoStartedRef.current = true;
      romanticAudio.play();
      setIsPlaying(true);
    }
  }, [autoStart]);

  const togglePlay = () => {
    if (isPlaying) {
      romanticAudio.pause();
      setIsPlaying(false);
    } else {
      romanticAudio.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    romanticAudio.setVolume(newVol);
  };

  const toggleMute = () => {
    if (volume > 0) {
      romanticAudio.setVolume(0);
      setVolume(0);
    } else {
      romanticAudio.setVolume(0.5);
      setVolume(0.5);
    }
  };

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[#D4AF78]/40 shadow-md transition-all duration-300">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FCECEF] hover:bg-[#F6DDE3] text-[#795044] flex items-center justify-center transition-colors cursor-pointer shrink-0"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B88D4E]" />
        ) : (
          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B88D4E] ml-0.5" />
        )}
      </button>

      {/* Label & Animated icon */}
      <div className="flex items-center gap-1.5 px-0.5 select-none">
        <Music className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isPlaying ? 'text-[#D4AF78] animate-pulse' : 'text-[#795044]/50'}`} />
        <span className="font-montserrat text-[9px] sm:text-[10px] uppercase tracking-wider text-[#795044] font-medium hidden xs:inline">
          {isPlaying ? 'Playing' : 'Music'}
        </span>
      </div>

      {/* Toggle volume slider button on mobile */}
      <button
        onClick={() => setShowVolume(!showVolume)}
        className="sm:hidden text-[#795044]/70 hover:text-[#795044] p-1 cursor-pointer"
        aria-label="Toggle volume slider"
      >
        {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
      </button>

      {/* Volume slider (always on desktop, toggleable on mobile) */}
      <div className={`${showVolume ? 'flex' : 'hidden'} sm:flex items-center gap-1.5 pl-1 border-l border-[#D4AF78]/30`}>
        <button
          onClick={toggleMute}
          className="text-[#795044]/70 hover:text-[#795044] transition-colors cursor-pointer hidden sm:inline"
          aria-label={volume === 0 ? 'Unmute' : 'Mute'}
        >
          {volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-12 sm:w-16 h-1 bg-[#F6DDE3] accent-[#D4AF78] rounded-lg cursor-pointer"
          aria-label="Volume slider"
        />
      </div>
    </div>
  );
};

