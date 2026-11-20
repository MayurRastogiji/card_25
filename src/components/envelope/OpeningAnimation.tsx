import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface OpeningAnimationProps {
  onComplete: () => void;
}

// Sparkle positions
const sparkles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: 30 + Math.random() * 40,
  y: 20 + Math.random() * 60,
  size: Math.random() * 20 + 8,
  delay: Math.random() * 0.8,
  color: i % 3 === 0 ? '#C6AA75' : i % 3 === 1 ? '#BFC3C7' : '#FAF9F6',
}));

// Petal positions
const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  startX: Math.random() * 100,
  delay: Math.random() * 1.5,
  duration: 2 + Math.random() * 2,
  size: 8 + Math.random() * 12,
}));

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      },
    });

    tl
      // Initial pause - display the opening moment
      .to({}, { duration: 0.5 })
      
      // Card glows then slides to center
      .fromTo(cardRef.current, 
        { opacity: 0, scale: 0.6, y: 80, rotateX: 25 },
        { 
          opacity: 1, scale: 1, y: 0, rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
          transformPerspective: 800,
        }
      )
      
      // Brief hold
      .to({}, { duration: 0.4 })
      
      // Fade out into main
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      });

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0F1014 0%, #1A1B1F 50%, #252830 100%)' }}
    >
      {/* Sparkles burst */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 1.5, delay: s.delay, ease: 'easeOut' }}
        >
          <svg width={s.size} height={s.size} viewBox="0 0 24 24">
            <path
              d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
              fill={s.color}
              opacity={0.8}
            />
          </svg>
        </motion.div>
      ))}

      {/* Falling petals */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute pointer-events-none top-0"
          style={{ left: `${p.startX}%` }}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{ y: '110vh', opacity: [0, 0.9, 0.7, 0], rotate: [0, 180, 360, 540] }}
          transition={{ duration: p.duration, delay: p.delay, ease: 'linear' }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20">
            <ellipse cx="10" cy="10" rx="6" ry="10" fill="rgba(250,249,246,0.7)"
              transform="rotate(30 10 10)" />
          </svg>
        </motion.div>
      ))}

      {/* Card reveal */}
      <div
        ref={cardRef}
        className="relative"
        style={{
          width: 'clamp(280px, 85vw, 460px)',
          opacity: 0,
        }}
      >
        {/* Glow behind card */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(198,170,117,0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'scale(1.3)',
          }}
        />

        {/* Card face */}
        <div
          className="relative invitation-card rounded-lg p-10 text-center"
          style={{ background: 'linear-gradient(145deg, #FAF9F6, #F0EEE8)' }}
        >
          {/* Top ornament */}
          <div className="flex items-center gap-3 mb-6">
            <div className="ornament-line flex-1" />
            <span style={{ color: '#C6AA75', fontSize: 20 }}>✦</span>
            <div className="ornament-line flex-1" />
          </div>

          <p className="font-script mb-2" style={{ color: '#C6AA75', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}>
            23 Years
          </p>
          <p className="font-cormorant tracking-widest text-xs uppercase" style={{ color: '#BFC3C7', letterSpacing: '0.3em' }}>
            of Love, Laughter & Togetherness
          </p>

          <div className="my-5 ornament-line" />

          <p className="font-playfair" style={{ color: '#303238', fontSize: 'clamp(1rem, 3vw, 1.3rem)', fontWeight: 500 }}>
            Together Through Every Season of Life
          </p>

          {/* Bottom ornament */}
          <div className="flex items-center gap-3 mt-6">
            <div className="ornament-line flex-1" />
            <span style={{ color: '#C6AA75', fontSize: 20 }}>✦</span>
            <div className="ornament-line flex-1" />
          </div>
        </div>
      </div>

      {/* Loading text */}
      <motion.p
        className="absolute bottom-10 font-inter text-xs tracking-widest uppercase"
        style={{ color: 'rgba(198,170,117,0.5)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Opening your invitation...
      </motion.p>
    </div>
  );
}
