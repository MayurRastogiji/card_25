import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloatingPetals } from './ui/FloatingPetals';
import { GaneshMotif, FloralCorner } from './ui/Ornaments';

interface EnvelopeOpeningProps {
  onOpenComplete: () => void;
}

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onOpenComplete }) => {
  const [animationStep, setAnimationStep] = useState<'idle' | 'breaking' | 'opening' | 'rising' | 'done'>('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleStartOpen = useCallback(() => {
    if (animationStep !== 'idle') return;

    // Step 1: Seal breaks with golden burst
    setAnimationStep('breaking');

    // Step 2: 3D flap opens
    setTimeout(() => {
      setAnimationStep('opening');
    }, 450);

    // Step 3: Card glides up gracefully
    setTimeout(() => {
      setAnimationStep('rising');
    }, 1150);

    // Step 4: Cinematic transition into main invitation
    setTimeout(() => {
      setAnimationStep('done');
      onOpenComplete();
    }, 2250);
  }, [animationStep, onOpenComplete]);

  const handleSkip = useCallback(() => {
    setAnimationStep('done');
    onOpenComplete();
  }, [onOpenComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-[100dvh] w-full overflow-hidden bg-[#FFF9F5] luxury-paper-bg px-4 select-none text-center">
      {/* Add cherry blossom background to the envelope opening screen */}
      <FloatingPetals />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[350px] h-[350px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#F6DDE3]/45 via-[#FCECEF]/65 to-[#D4AF78]/25 blur-3xl"
        />
      </div>

      {/* Floating golden sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 22 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${(i * 17) % 92}%`,
              left: `${(i * 31) % 94}%`,
              width: `${(i % 3) * 2 + 2.5}px`,
              height: `${(i % 3) * 2 + 2.5}px`,
              background: i % 2 === 0 ? '#D4AF78' : '#C98996',
              opacity: (i % 5 + 3) / 10,
              filter: 'blur(0.5px)',
              animation: `floatParticle ${6 + (i % 5) * 2}s ease-in-out infinite`,
              animationDelay: `${(i * 0.35) % 4}s`,
            }}
          />
        ))}
      </div>

      {/* Skip button for immediate access */}
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 text-[11px] sm:text-xs font-montserrat uppercase tracking-wider text-[#795044]/80 hover:text-[#795044] bg-white/85 hover:bg-white px-4 py-1.5 sm:py-2 rounded-full border border-[#D4AF78]/35 transition-all duration-300 shadow-xs cursor-pointer"
        aria-label="Skip envelope animation"
      >
        {invitationData.envelope.skipText}
      </button>

      {/* Top sacred motif & teaser text - Perfectly Centered */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-center mb-6 sm:mb-8 z-20 px-2 flex flex-col items-center justify-center max-w-sm mx-auto"
      >
        <div className="flex items-center justify-center mb-2">
          <GaneshMotif size={36} />
        </div>
        <p className="font-cormorant font-bold text-lg sm:text-xl text-[#795044] tracking-wider leading-snug">
          {invitationData.blessings.shloka}
        </p>
        <h1 className="font-montserrat text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#C98996] font-medium mt-1">
          {invitationData.envelope.teaser}
        </h1>
      </motion.div>

      {/* 3D Envelope Container - Horizontally & Vertically Centered */}
      <div className="relative flex items-center justify-center w-full max-w-sm sm:max-w-md mx-auto">
        <div
          className="relative w-full max-w-[290px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[450px] h-[200px] xs:h-[220px] sm:h-[270px] md:h-[300px] perspective-1000 cursor-pointer mx-auto"
          onClick={handleStartOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Warm Radiant Golden Emergent Light inside envelope */}
          <AnimatePresence>
            {(animationStep === 'opening' || animationStep === 'rising') && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
              >
                <div className="w-full h-full bg-radial from-[#FFF9F5] via-[#F3E3C3]/85 to-transparent blur-2xl" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* The Emerging Invitation Card */}
          <motion.div
            initial={{ y: 0, scale: 0.94, opacity: 0.7 }}
            animate={
              animationStep === 'rising'
                ? { y: -135, scale: 1.02, opacity: 1, zIndex: 35 }
                : animationStep === 'opening'
                ? { y: -25, opacity: 0.9, zIndex: 25 }
                : { y: 0, opacity: 0.6 }
            }
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="absolute inset-x-3 sm:inset-x-6 top-2 sm:top-3 bottom-2 sm:bottom-3 rounded-2xl bg-gradient-to-b from-[#FFF9F5] to-[#FCECEF] p-4 sm:p-6 shadow-2xl border border-[#D4AF78]/45 flex flex-col items-center justify-center text-center overflow-hidden"
            style={{ zIndex: animationStep === 'rising' ? 35 : 15 }}
          >
            {/* Card inner floral corners */}
            <FloralCorner position="top-left" className="absolute top-1.5 left-1.5 w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF78]/50" />
            <FloralCorner position="top-right" className="absolute top-1.5 right-1.5 w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF78]/50" />

            <p className="font-cormorant text-[11px] sm:text-xs text-[#795044] tracking-widest uppercase font-semibold">
              {invitationData.celebration.title}
            </p>
            <div className="w-6 h-[1px] bg-[#D4AF78] my-1" />
            <h2 className="font-script text-2xl sm:text-3xl md:text-4xl text-[#795044] my-0.5 leading-snug">
              {invitationData.couple.shortNames}
            </h2>
            <p className="font-cormorant italic text-[11px] sm:text-xs text-[#C98996]">
              {invitationData.celebration.tagline}
            </p>
            <p className="font-montserrat text-[9px] sm:text-[11px] text-[#795044]/80 mt-1.5 font-medium tracking-wider">
              {invitationData.dateTime.date} · {invitationData.dateTime.time}
            </p>
          </motion.div>

          {/* Envelope Base Body (Back and Sides) */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#F6DDE3] via-[#FCECEF] to-[#E9C4CC] border-2 border-[#D4AF78]/40 shadow-envelope overflow-hidden z-10">
            {/* Subtle gold foil border frame */}
            <div className="absolute inset-1.5 sm:inset-2 rounded-xl border border-[#D4AF78]/35 pointer-events-none" />

            {/* Left fold triangle */}
            <div
              className="absolute top-0 bottom-0 left-0 w-1/2 pointer-events-none"
              style={{
                clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                background: 'linear-gradient(135deg, #F8CBD5 0%, #F6DDE3 100%)',
                boxShadow: 'inset -2px 0 6px rgba(121, 80, 68, 0.08)',
              }}
            />

            {/* Right fold triangle */}
            <div
              className="absolute top-0 bottom-0 right-0 w-1/2 pointer-events-none"
              style={{
                clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                background: 'linear-gradient(225deg, #F8CBD5 0%, #F6DDE3 100%)',
                boxShadow: 'inset 2px 0 6px rgba(121, 80, 68, 0.08)',
              }}
            />

            {/* Bottom fold triangle */}
            <div
              className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none"
              style={{
                clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                background: 'linear-gradient(0deg, #F1C1CB 0%, #F6DDE3 100%)',
                boxShadow: '0 -3px 8px rgba(121, 80, 68, 0.06)',
              }}
            />
          </div>

          {/* 3D Top Flap that flips open */}
          <motion.div
            animate={
              animationStep === 'opening' || animationStep === 'rising' || animationStep === 'done'
                ? { rotateX: 180, zIndex: 5 }
                : { rotateX: 0, zIndex: 30 }
            }
            transition={{ duration: 0.85, ease: 'easeInOut' }}
            className="absolute top-0 inset-x-0 h-1/2 origin-top transform-style-3d pointer-events-none"
          >
            {/* Front of the flap */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                background: 'linear-gradient(180deg, #F9D5DD 0%, #F6DDE3 70%, #E8B9C3 100%)',
                boxShadow: '0 6px 14px rgba(121, 80, 68, 0.15)',
                borderTop: '2px solid rgba(212, 175, 120, 0.5)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(4px 2px, calc(100% - 4px) 2px, 50% calc(100% - 4px))',
                  border: '1px dashed rgba(212, 175, 120, 0.45)',
                }}
              />
            </div>
          </motion.div>

          {/* Circular Champagne Gold Wax Seal */}
          <AnimatePresence>
            {animationStep === 'idle' && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{
                  scale: isHovered ? 1.06 : 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 1.35,
                  opacity: 0,
                  filter: 'brightness(1.6)',
                  transition: { duration: 0.4 },
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-transform duration-300">
                  {/* Wax seal outer rim with organic seal edge texture */}
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B88D4E] via-[#D4AF78] to-[#F3E3C3] p-[2.5px] shadow-lg"
                    style={{
                      boxShadow: '0 6px 20px rgba(184, 141, 78, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#D4AF78] via-[#C59B62] to-[#A2773B] flex flex-col items-center justify-center p-1.5 text-center border border-[#F3E3C3]/40">
                      <div className="w-full h-full rounded-full border border-dashed border-[#F3E3C3]/60 flex flex-col items-center justify-center">
                        <span className="font-cormorant font-bold text-xs sm:text-sm text-[#FFF9F5] tracking-widest drop-shadow">
                          {invitationData.couple.initials}
                        </span>
                        <span className="text-[8px] sm:text-[9px] font-montserrat uppercase tracking-wider text-[#FCECEF] font-semibold">
                          25 YRS
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pulsing glow aura around wax seal */}
                  <div className="absolute -inset-2 rounded-full border border-[#D4AF78]/40 animate-pulse-glow pointer-events-none" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tap to Open CTA instruction - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 sm:mt-8 text-center z-20 cursor-pointer flex justify-center"
        onClick={handleStartOpen}
      >
        <button
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-[#F6DDE3] via-[#FFF9F5] to-[#F6DDE3] border border-[#D4AF78]/60 shadow-xs hover:shadow-md transition-all duration-300 mx-auto"
          aria-label="Open wedding anniversary invitation"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF78] animate-ping" />
          <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.2em] text-[#795044] font-semibold group-hover:text-[#B88D4E] transition-colors">
            {invitationData.envelope.cta}
          </span>
          <span className="text-[#D4AF78] text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
            ✦
          </span>
        </button>
      </motion.div>
    </div>
  );
};
