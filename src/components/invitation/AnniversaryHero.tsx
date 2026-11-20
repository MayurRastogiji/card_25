import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { eventConfig } from '../../config/eventConfig';

// Ornamental frame SVG for the 25 emblem with baby pink and rose gold gradients
function OrnamentalFrame() {
  return (
    <svg viewBox="0 0 320 180" width="320" height="180" xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: '100%' }}>
      <defs>
        <linearGradient id="frameRoseGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D48C9E" />
          <stop offset="50%" stopColor="#F5CBD3" />
          <stop offset="100%" stopColor="#B76E79" />
        </linearGradient>
      </defs>
      {/* Outer rectangle frame */}
      <rect x="10" y="10" width="300" height="160" rx="6" fill="#FFFFFF" fillOpacity="0.8"
        stroke="url(#frameRoseGold)" strokeWidth="1.2" />
      <rect x="16" y="16" width="288" height="148" rx="4" fill="none"
        stroke="rgba(244,143,177,0.4)" strokeWidth="0.8" />

      {/* Corner flourishes */}
      {/* Top-left */}
      <g>
        <path d="M 10 40 Q 10 10 40 10" fill="none" stroke="url(#frameRoseGold)" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" fill="#D48C9E" />
        <path d="M 25 10 Q 32 18 25 26 Q 18 18 25 10" fill="rgba(244,143,177,0.35)" />
      </g>
      {/* Top-right */}
      <g transform="scale(-1,1) translate(-320,0)">
        <path d="M 10 40 Q 10 10 40 10" fill="none" stroke="url(#frameRoseGold)" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" fill="#D48C9E" />
        <path d="M 25 10 Q 32 18 25 26 Q 18 18 25 10" fill="rgba(244,143,177,0.35)" />
      </g>
      {/* Bottom-left */}
      <g transform="scale(1,-1) translate(0,-180)">
        <path d="M 10 40 Q 10 10 40 10" fill="none" stroke="url(#frameRoseGold)" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" fill="#D48C9E" />
        <path d="M 25 10 Q 32 18 25 26 Q 18 18 25 10" fill="rgba(244,143,177,0.35)" />
      </g>
      {/* Bottom-right */}
      <g transform="scale(-1,-1) translate(-320,-180)">
        <path d="M 10 40 Q 10 10 40 10" fill="none" stroke="url(#frameRoseGold)" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="3" fill="#D48C9E" />
        <path d="M 25 10 Q 32 18 25 26 Q 18 18 25 10" fill="rgba(244,143,177,0.35)" />
      </g>

      {/* Side ornaments */}
      <circle cx="10" cy="90" r="2.5" fill="#D48C9E" />
      <circle cx="310" cy="90" r="2.5" fill="#D48C9E" />
      <circle cx="160" cy="10" r="2.5" fill="#D48C9E" />
      <circle cx="160" cy="170" r="2.5" fill="#D48C9E" />
    </svg>
  );
}

export default function AnniversaryHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { husband, wife } = eventConfig.coupleNames;
  const { hosts } = eventConfig;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 px-6 flex flex-col items-center text-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5F8 50%, #FCE4EC 100%)' }}
    >
      {/* Background delicate dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #B76E79 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 flex flex-col items-center gap-5 max-w-xl mx-auto"
      >
        {/* Hosted By Announcement Badge */}
        <motion.div
          variants={item}
          className="px-6 py-3 rounded-2xl border backdrop-blur-sm shadow-sm"
          style={{
            borderColor: 'rgba(244,143,177,0.4)',
            background: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <p
            className="font-inter text-xs tracking-[0.25em] uppercase font-semibold mb-1"
            style={{ color: '#B76E79' }}
          >
            ✦ &nbsp; {hosts.title} &nbsp; ✦
          </p>
          <p
            className="font-playfair text-lg md:text-xl font-medium"
            style={{ color: '#2E2428', letterSpacing: '0.02em' }}
          >
            {hosts.names}
          </p>
        </motion.div>

        {/* Cordial Invitation Line */}
        <motion.p
          variants={item}
          className="font-cormorant italic text-sm md:text-base"
          style={{ color: '#644D56', letterSpacing: '0.04em' }}
        >
          cordially invite you to celebrate the Silver Jubilee milestone of their beloved parents
        </motion.p>

        {/* Frame with 25 Emblem */}
        <motion.div variants={item} className="relative mt-2">
          <OrnamentalFrame />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <span
              className="font-playfair shimmer-text"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)', fontWeight: 700, lineHeight: 1 }}
            >
              25
            </span>
            <span
              className="font-inter tracking-widest uppercase font-medium"
              style={{ fontSize: '0.65rem', color: '#B76E79', letterSpacing: '0.3em' }}
            >
              YEARS
            </span>
          </div>
        </motion.div>

        {/* Couple Names Headline */}
        <motion.div variants={item} className="flex flex-col items-center gap-1 mt-1">
          <h1
            className="font-script text-4xl md:text-5xl lg:text-6xl"
            style={{
              color: '#2E2428',
              lineHeight: 1.25,
              textShadow: '0 2px 16px rgba(244,143,177,0.3)',
            }}
          >
            {husband}
          </h1>
          <span className="font-cormorant italic text-xl md:text-2xl" style={{ color: '#D48C9E' }}>
            &amp;
          </span>
          <h1
            className="font-script text-4xl md:text-5xl lg:text-6xl"
            style={{
              color: '#2E2428',
              lineHeight: 1.25,
              textShadow: '0 2px 16px rgba(244,143,177,0.3)',
            }}
          >
            {wife}
          </h1>
        </motion.div>

        {/* Ornament line */}
        <motion.div variants={item} className="flex items-center gap-4 w-full max-w-xs mt-1">
          <div className="ornament-line flex-1" />
          <span style={{ color: '#D48C9E', fontSize: 14 }}>✦</span>
          <div className="ornament-line flex-1" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="font-cormorant italic"
          style={{
            color: '#644D56',
            fontSize: 'clamp(1rem, 3vw, 1.35rem)',
            letterSpacing: '0.08em',
          }}
        >
          {eventConfig.invitation.preSubheading}
        </motion.p>

        {/* Silver Jubilee anniversary badge */}
        <motion.div
          variants={item}
          className="mt-1 px-6 py-2 rounded-full border shadow-sm"
          style={{
            borderColor: 'rgba(212,140,158,0.4)',
            background: 'rgba(255,255,255,0.9)',
          }}
        >
          <span className="font-inter text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: '#B76E79' }}>
            ✦ &nbsp; 25th Silver Jubilee Celebration &nbsp; ✦
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
