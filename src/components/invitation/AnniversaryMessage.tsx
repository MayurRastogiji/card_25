import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';

export default function AnniversaryMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { husband, wife } = eventConfig.coupleNames;
  const { heading, messageLines } = eventConfig.invitation;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' as const } },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 md:px-12 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAF9F6 0%, #F7F5F0 100%)' }}
    >
      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,170,117,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center gap-8"
        >
          {/* Top ornament */}
          <motion.div variants={item} className="flex items-center gap-4 w-full">
            <div className="ornament-line flex-1" />
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="8" fill="none" stroke="#C6AA75" strokeWidth="1" />
              <path d="M20 10 L22 18 L20 20 L18 18 Z" fill="rgba(198,170,117,0.4)" />
              <path d="M30 20 L22 22 L20 20 L22 18 Z" fill="rgba(198,170,117,0.4)" />
              <path d="M20 30 L18 22 L20 20 L22 22 Z" fill="rgba(198,170,117,0.4)" />
              <path d="M10 20 L18 18 L20 20 L18 22 Z" fill="rgba(198,170,117,0.4)" />
              <circle cx="20" cy="20" r="2" fill="#C6AA75" />
            </svg>
            <div className="ornament-line flex-1" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={item}
            className="font-playfair"
            style={{
              color: '#303238',
              fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
              fontWeight: 500,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            }}
          >
            {heading}
          </motion.h2>

          <motion.div variants={item} className="ornament-line w-24" />

          {/* Message paragraphs */}
          <div className="flex flex-col gap-5">
            {messageLines.map((line, i) => (
              <motion.p
                key={i}
                variants={item}
                className="font-cormorant"
                style={{
                  color: i === 0 ? '#6B6B6B' : '#4A4A4A',
                  fontSize: i === 0
                    ? 'clamp(1rem, 2.5vw, 1.15rem)'
                    : 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontStyle: i === 0 ? 'italic' : 'normal',
                  lineHeight: 1.75,
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Couple signature */}
          <motion.div variants={item} className="mt-6 flex flex-col items-center gap-3">
            <div className="ornament-line w-24" />
            <p
              className="font-script"
              style={{
                color: '#303238',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.3,
              }}
            >
              {husband}
            </p>
            <p className="font-cormorant italic text-lg" style={{ color: '#C6AA75' }}>
              &amp;
            </p>
            <p
              className="font-script"
              style={{
                color: '#303238',
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.3,
              }}
            >
              {wife}
            </p>
            <div className="ornament-line w-24" />
          </motion.div>

          {/* Bottom ornamental rings icon */}
          <motion.div variants={item} className="mt-2">
            <svg width="80" height="40" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
              {/* Two interlocking rings */}
              <circle cx="28" cy="20" r="16" fill="none" stroke="#C6AA75" strokeWidth="2" />
              <circle cx="52" cy="20" r="16" fill="none" stroke="#C6AA75" strokeWidth="2" />
              {/* Overlap fill */}
              <path d="M 40 7.5 Q 48 20 40 32.5 Q 32 20 40 7.5" fill="rgba(198,170,117,0.1)" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
