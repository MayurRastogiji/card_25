import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { HeroSection } from './components/HeroSection';
import { JourneySection } from './components/JourneySection';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { VenueSection } from './components/VenueSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingControls } from './components/FloatingControls';
import { FloatingPetals } from './components/ui/FloatingPetals';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [shouldAutoPlayMusic, setShouldAutoPlayMusic] = useState(false);

  const handleOpenComplete = useCallback(() => {
    setHasOpened(true);
    setShouldAutoPlayMusic(true);
  }, []);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#FFF9F5] text-[#795044] selection:bg-[#F6DDE3] selection:text-[#795044] overflow-x-hidden flex flex-col items-center justify-start">
      {/* 1. Envelope Opening Screen */}
      <AnimatePresence mode="wait">
        {!hasOpened && (
          <motion.div
            key="envelope-layer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center"
          >
            <EnvelopeOpening onOpenComplete={handleOpenComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Invitation Content */}
      {hasOpened && (
        <motion.div
          key="main-invitation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-x-hidden flex flex-col items-center justify-start text-center"
        >
          {/* Subtle floating background petals */}
          <FloatingPetals />

          {/* Symmetrically Centered Luxury Invitation Main Stream */}
          <main className="relative z-20 w-full flex flex-col items-center justify-center text-center">
            <HeroSection />
            <JourneySection />
            <Countdown />
            <EventDetails />
            <VenueSection />
            <ClosingSection />
          </main>

          {/* Floating UI controls: Romantic Music & Back To Top */}
          <FloatingControls autoStartMusic={shouldAutoPlayMusic} />
        </motion.div>
      )}
    </div>
  );
}
