import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function CouplePortrait() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax: image moves smoothly with scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-4"
      style={{ minHeight: 'clamp(460px, 75vw, 680px)' }}
    >
      {/* Parallax image container - clean without text on front */}
      <motion.div
        className="absolute inset-0 w-full h-[112%] top-[-6%]"
        style={{ y: imageY }}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/couple-portrait.png`}
          alt="Couple portrait"
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {/* Soft baby pink & rose vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,240,245,0.4) 0%, transparent 20%, transparent 75%, rgba(255,240,245,0.85) 100%)',
          }}
        />
        {/* Subtle romantic glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 60%, rgba(248,187,208,0.25) 100%)',
          }}
        />
      </motion.div>

      {/* Top delicate ornamental border */}
      <div className="relative z-10 pt-6 flex justify-center">
        <svg width="220" height="30" viewBox="0 0 220 30" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="15" x2="85" y2="15" stroke="rgba(212,140,158,0.6)" strokeWidth="0.8" />
          <circle cx="110" cy="15" r="7" fill="none" stroke="#D48C9E" strokeWidth="1" />
          <circle cx="110" cy="15" r="2.5" fill="#F48FB1" />
          <line x1="135" y1="15" x2="210" y2="15" stroke="rgba(212,140,158,0.6)" strokeWidth="0.8" />
          <circle cx="95" cy="15" r="2" fill="rgba(212,140,158,0.5)" />
          <circle cx="125" cy="15" r="2" fill="rgba(212,140,158,0.5)" />
        </svg>
      </div>

      {/* Illustrative disclaimer */}
      <div className="absolute bottom-3 right-4 z-20">
        <span
          className="font-inter px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            fontSize: '0.65rem',
            color: 'rgba(100,77,86,0.8)',
            background: 'rgba(255,255,255,0.6)',
            border: '1px solid rgba(244,143,177,0.3)',
          }}
        >
          Couple Portrait
        </span>
      </div>
    </section>
  );
}
