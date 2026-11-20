import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Volume2 } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

interface MusicControllerProps {
  isEnabled: boolean;
}

export default function MusicController({ isEnabled }: MusicControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { music } = eventConfig;

  useEffect(() => {
    if (!isEnabled || !audioRef.current) return;
    const audio = audioRef.current;
    audio.volume = music.volume;
    audio.loop = true;
    audio.preload = 'auto';

    const handleLoaded = () => setIsLoaded(true);
    const handleError = () => setHasError(true);

    audio.addEventListener('canplaythrough', handleLoaded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplaythrough', handleLoaded);
      audio.removeEventListener('error', handleError);
    };
  }, [isEnabled, music.volume]);

  const toggleMusic = useCallback(async () => {
    if (!audioRef.current || hasError) return;

    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio play failed:', err);
      }
    }
  }, [isPlaying, hasError]);

  if (!isEnabled || hasError) return null;

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={music.source} />

      {/* Floating music control */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {/* First interaction hint */}
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="absolute right-16 bottom-2 glass-card px-3 py-2 rounded-lg whitespace-nowrap"
            >
              <p className="font-inter text-xs" style={{ color: 'rgba(198,170,117,0.9)' }}>
                🎵 Background music
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          id="music-controller-btn"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5, type: 'spring', stiffness: 200 }}
          onClick={toggleMusic}
          className="music-btn relative w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #C6AA75, #9A8055)',
            border: '1px solid rgba(198,170,117,0.4)',
          }}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
        >
          {/* Vinyl spinning ring */}
          {isPlaying && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                border: '2px solid transparent',
                borderTopColor: 'rgba(250,249,246,0.5)',
                borderRightColor: 'rgba(250,249,246,0.2)',
              }}
            />
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isPlaying ? 'playing' : 'paused'}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isPlaying ? (
                <Volume2 size={22} color="#FAF9F6" />
              ) : (
                <VolumeX size={22} color="#FAF9F6" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
