import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { eventConfig } from '../config/eventConfig';
import FloralDecoration from '../components/ui/FloralDecoration';

// Floating petals for closing section
const closingPetals = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 6 + Math.random() * 4,
  size: 10 + Math.random() * 14,
}));

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { husband, wife } = eventConfig.coupleNames;
  const { closing } = eventConfig.invitation;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1A1B1F 0%, #0F1014 100%)' }}
    >
      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {closingPetals.map((p) => (
          <motion.div
            key={p.id}
            className="absolute top-0"
            style={{ left: `${p.x}%` }}
            animate={{
              y: ['0vh', '110vh'],
              rotate: [0, 360, 720],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width={p.size} height={p.size} viewBox="0 0 20 20">
              <ellipse cx="10" cy="10" rx="5" ry="10" fill="rgba(250,249,246,0.5)" transform="rotate(20 10 10)" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Top floral border */}
      <FloralDecoration position="top" variant="silver" />

      {/* Content */}
      <div className="relative z-10 py-20 px-6 max-w-2xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Ornament */}
          <motion.div variants={item}>
            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(198,170,117,0.3)" strokeWidth="1" strokeDasharray="4 3" />
              <circle cx="40" cy="40" r="26" fill="none" stroke="rgba(198,170,117,0.2)" strokeWidth="0.8" />
              {/* Heart shape */}
              <path
                d="M 40 55 C 40 55 20 44 20 32 C 20 24 28 20 34 25 C 36 27 38 29 40 32 C 42 29 44 27 46 25 C 52 20 60 24 60 32 C 60 44 40 55 40 55 Z"
                fill="none"
                stroke="#C6AA75"
                strokeWidth="1.2"
                opacity="0.6"
              />
              <circle cx="40" cy="40" r="3" fill="rgba(198,170,117,0.4)" />
            </svg>
          </motion.div>

          {/* Closing messages */}
          <div className="flex flex-col items-center gap-4">
            {closing.map((line, i) => (
              <motion.p
                key={i}
                variants={item}
                className="font-playfair"
                style={{
                  color: i === 0
                    ? '#FAF9F6'
                    : i === 1
                    ? '#E5E4E2'
                    : 'rgba(229,228,226,0.7)',
                  fontSize: i === 1
                    ? 'clamp(1.1rem, 3.5vw, 1.5rem)'
                    : 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  fontWeight: i === 1 ? 500 : 400,
                  fontStyle: i === 0 ? 'italic' : 'normal',
                  lineHeight: 1.6,
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Divider */}
          <motion.div variants={item} className="flex items-center gap-4 w-full max-w-xs">
            <div className="ornament-line flex-1" />
            <span style={{ color: '#C6AA75', fontSize: 18 }}>✦</span>
            <div className="ornament-line flex-1" />
          </motion.div>

          {/* Sign-off */}
          <motion.div variants={item} className="flex flex-col items-center gap-3">
            <p className="font-inter text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(191,195,199,0.5)', letterSpacing: '0.3em' }}>
              WITH LOVE,
            </p>
            <p
              className="font-script"
              style={{
                color: '#FAF9F6',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.3,
                textShadow: '0 2px 20px rgba(198,170,117,0.3)',
              }}
            >
              {husband}
            </p>
            <p className="font-cormorant italic text-xl" style={{ color: 'rgba(198,170,117,0.7)' }}>
              &amp;
            </p>
            <p
              className="font-script"
              style={{
                color: '#FAF9F6',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.3,
                textShadow: '0 2px 20px rgba(198,170,117,0.3)',
              }}
            >
              {wife}
            </p>
          </motion.div>

          {/* Final ornament line */}
          <motion.div variants={item} className="ornament-line w-32" />

          {/* Footer note */}
          <motion.p
            variants={item}
            className="font-inter"
            style={{ color: 'rgba(191,195,199,0.3)', fontSize: '0.65rem', letterSpacing: '0.15em' }}
          >
            {eventConfig.occasion} · {eventConfig.date.formatted} · {eventConfig.venue.name}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom floral border */}
      <FloralDecoration position="bottom" variant="silver" />
    </section>
  );
}
