import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { MusicPlayer } from './MusicPlayer';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface FloatingControlsProps {
  autoStartMusic?: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ autoStartMusic = false }) => {
  const scrollProgress = useScrollProgress();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF78] via-[#F3E3C3] to-[#B88D4E] transition-all duration-150 ease-out shadow-xs"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Bottom Left: Romantic Music Controller */}
      <div className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40 max-w-[calc(100vw-80px)]">
        <MusicPlayer autoStart={autoStartMusic} />
      </div>

      {/* Floating Bottom Right: Back To Top Button */}
      <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex items-center">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md text-[#795044] border border-[#D4AF78]/50 shadow-md hover:bg-[#FCECEF] flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#B88D4E]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
