import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';

interface WaxSealProps {
  isBreaking: boolean;
  onBroken?: () => void;
}

export default function WaxSeal({ isBreaking, onBroken }: WaxSealProps) {
  const sealRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (isBreaking && sealRef.current) {
      const tl = gsap.timeline({ onComplete: onBroken });
      tl.to(sealRef.current, {
        scale: 1.2,
        duration: 0.15,
        ease: 'power2.in',
      })
        .to(sealRef.current, {
          scale: 0,
          opacity: 0,
          rotation: 20,
          duration: 0.5,
          ease: 'power3.in',
        });
    }
  }, [isBreaking, onBroken]);

  const { husband, wife } = eventConfig.coupleNames;
  const h = husband[0] || '♥';
  const w = wife[0] || '♥';

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{ width: 110, height: 110 }}
      animate={!isBreaking ? {
        scale: [1, 1.03, 1],
        filter: ['drop-shadow(0 0 8px rgba(198,170,117,0.4))', 'drop-shadow(0 0 16px rgba(198,170,117,0.7))', 'drop-shadow(0 0 8px rgba(198,170,117,0.4))'],
      } : {}}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        ref={sealRef}
        viewBox="0 0 110 110"
        width="110"
        height="110"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer decorative ring */}
        <circle cx="55" cy="55" r="52" fill="none" stroke="#C6AA75" strokeWidth="1" strokeDasharray="4 3" />
        
        {/* Wax base */}
        <circle cx="55" cy="55" r="46" fill="url(#waxGrad)" />
        
        {/* Inner ornament ring */}
        <circle cx="55" cy="55" r="40" fill="none" stroke="rgba(250,249,246,0.3)" strokeWidth="0.8" />
        <circle cx="55" cy="55" r="35" fill="none" stroke="rgba(250,249,246,0.2)" strokeWidth="0.5" />

        {/* Floral petal decorations */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx={55 + 36 * Math.cos((angle * Math.PI) / 180)}
            cy={55 + 36 * Math.sin((angle * Math.PI) / 180)}
            rx="4" ry="2.5"
            fill="rgba(250,249,246,0.25)"
            transform={`rotate(${angle} ${55 + 36 * Math.cos((angle * Math.PI) / 180)} ${55 + 36 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}

        {/* Couple initials */}
        <text
          x="55" y="52"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FAF9F6"
          fontSize="20"
          fontFamily="'Great Vibes', cursive"
          fontWeight="400"
          letterSpacing="2"
        >
          {h}
        </text>
        <text
          x="55" y="68"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(250,249,246,0.6)"
          fontSize="10"
          fontFamily="'Inter', sans-serif"
          fontWeight="400"
          letterSpacing="4"
        >
          &amp;
        </text>
        <text
          x="55" y="80"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FAF9F6"
          fontSize="20"
          fontFamily="'Great Vibes', cursive"
          fontWeight="400"
          letterSpacing="2"
        >
          {w}
        </text>

        {/* Gradient definitions */}
        <defs>
          <radialGradient id="waxGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#8B6B4A" />
            <stop offset="40%" stopColor="#6B4F35" />
            <stop offset="100%" stopColor="#4A3525" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
