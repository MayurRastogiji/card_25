import { useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { eventConfig } from '../../config/eventConfig';
import WaxSeal from './WaxSeal';

interface IntroEnvelopeProps {
  onOpen: () => void;
}

// Floating particle data
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  type: 'circle' | 'star' | 'diamond';
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 8,
    type: (['circle', 'star', 'diamond'] as const)[Math.floor(Math.random() * 3)],
  }));
}

const particles = generateParticles(60);

export default function IntroEnvelope({ onOpen }: IntroEnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [sealBreaking, setSealBreaking] = useState(false);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const { envelopeText } = eventConfig;

  const handleOpen = useCallback(() => {
    if (isOpening) return;
    setIsOpening(true);
    setSealBreaking(true);
  }, [isOpening]);

  const handleSealBroken = useCallback(() => {
    if (!envelopeRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onOpen, 400);
      },
    });

    // Flap opens (perspective flip)
    tl.to('.envelope-flap-gsap', {
      rotateX: -180,
      duration: 0.9,
      ease: 'power2.inOut',
      transformOrigin: 'top center',
      transformPerspective: 800,
    })
    // Card rises from envelope
    .to('.card-emerging', {
      y: -120,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.3')
    // Envelope fades
    .to(envelopeRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.6,
      ease: 'power2.inOut',
    }, '-=0.2');
  }, [onOpen]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #0F1014 0%, #1A1B1F 40%, #252830 70%, #1A1B1F 100%)' }}>

      {/* Ambient gradient rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(198,170,117,0.05) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(191,195,199,0.04) 0%, transparent 60%)' }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0,
            }}
            animate={{
              y: [-20, -80 - Math.random() * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0, p.opacity, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          >
            {p.type === 'circle' && (
              <div className="w-full h-full rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(198,170,117,0.9), rgba(198,170,117,0.2))' }} />
            )}
            {p.type === 'star' && (
              <div style={{ color: 'rgba(198,170,117,0.8)', fontSize: p.size * 2.5, lineHeight: 1 }}>✦</div>
            )}
            {p.type === 'diamond' && (
              <div className="w-full h-full"
                style={{
                  background: 'rgba(191,195,199,0.6)',
                  transform: 'rotate(45deg)',
                }} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Top text */}
      <div className="absolute inset-x-0 top-[12%] flex flex-col items-center gap-3 px-6 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-inter text-xs tracking-[0.4em] uppercase"
          style={{ color: 'rgba(198,170,117,0.7)' }}
        >
          ✦ &nbsp; {eventConfig.occasion} &nbsp; ✦
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-playfair text-center"
          style={{
            color: '#FAF9F6',
            fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
            fontWeight: 400,
            letterSpacing: '0.08em',
            textShadow: '0 2px 20px rgba(198,170,117,0.3)',
          }}
        >
          {envelopeText.headline}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="ornament-line w-32"
        />
      </div>

      {/* Envelope */}
      <motion.div
        ref={envelopeRef}
        className="relative z-10 envelope-scene"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        style={{ width: 'clamp(300px, 80vw, 480px)' }}
      >
        {/* Floating animation wrapper */}
        <motion.div
          animate={!isOpening ? { y: [0, -10, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Envelope SVG */}
          <div
            className="relative"
            style={{
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5)) drop-shadow(0 4px 12px rgba(198,170,117,0.2))',
            }}
          >
            <svg
              viewBox="0 0 480 320"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              <defs>
                <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FAF9F6" />
                  <stop offset="50%" stopColor="#F0EEE8" />
                  <stop offset="100%" stopColor="#E5E4E2" />
                </linearGradient>
                <linearGradient id="envBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#E8E6E0" />
                  <stop offset="100%" stopColor="#D8D6D0" />
                </linearGradient>
                <linearGradient id="flapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5F3ED" />
                  <stop offset="100%" stopColor="#E8E5DE" />
                </linearGradient>
              </defs>

              {/* Envelope body */}
              <rect x="0" y="0" width="480" height="320" rx="8" fill="url(#envGrad)" />

              {/* Inner shadow */}
              <rect x="0" y="0" width="480" height="320" rx="8" fill="none"
                stroke="rgba(198,170,117,0.4)" strokeWidth="1.5" />

              {/* Silver floral corner - top left */}
              <g opacity="0.6">
                <path d="M 20 20 Q 40 10 55 30 Q 65 45 50 55 Q 35 65 25 50 Q 10 35 20 20"
                  fill="none" stroke="#C6AA75" strokeWidth="1" />
                <circle cx="38" cy="38" r="4" fill="none" stroke="#C6AA75" strokeWidth="0.8" />
                <path d="M 10 10 Q 25 5 30 20" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
                <path d="M 10 10 Q 5 25 20 30" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
              </g>

              {/* Silver floral corner - top right */}
              <g opacity="0.6" transform="scale(-1,1) translate(-480,0)">
                <path d="M 20 20 Q 40 10 55 30 Q 65 45 50 55 Q 35 65 25 50 Q 10 35 20 20"
                  fill="none" stroke="#C6AA75" strokeWidth="1" />
                <circle cx="38" cy="38" r="4" fill="none" stroke="#C6AA75" strokeWidth="0.8" />
                <path d="M 10 10 Q 25 5 30 20" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
                <path d="M 10 10 Q 5 25 20 30" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
              </g>

              {/* Silver floral corner - bottom left */}
              <g opacity="0.6" transform="scale(1,-1) translate(0,-320)">
                <path d="M 20 20 Q 40 10 55 30 Q 65 45 50 55 Q 35 65 25 50 Q 10 35 20 20"
                  fill="none" stroke="#C6AA75" strokeWidth="1" />
                <circle cx="38" cy="38" r="4" fill="none" stroke="#C6AA75" strokeWidth="0.8" />
                <path d="M 10 10 Q 25 5 30 20" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
                <path d="M 10 10 Q 5 25 20 30" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
              </g>

              {/* Silver floral corner - bottom right */}
              <g opacity="0.6" transform="scale(-1,-1) translate(-480,-320)">
                <path d="M 20 20 Q 40 10 55 30 Q 65 45 50 55 Q 35 65 25 50 Q 10 35 20 20"
                  fill="none" stroke="#C6AA75" strokeWidth="1" />
                <circle cx="38" cy="38" r="4" fill="none" stroke="#C6AA75" strokeWidth="0.8" />
                <path d="M 10 10 Q 25 5 30 20" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
                <path d="M 10 10 Q 5 25 20 30" fill="none" stroke="#BFC3C7" strokeWidth="0.6" />
              </g>

              {/* Decorative border lines */}
              <rect x="12" y="12" width="456" height="296" rx="5" fill="none"
                stroke="rgba(198,170,117,0.25)" strokeWidth="0.8" />

              {/* Envelope flap (top triangle) - will be animated by GSAP */}
              <polygon
                className="envelope-flap-gsap"
                points="0,0 480,0 240,165"
                fill="url(#flapGrad)"
                style={{
                  transformOrigin: '240px 0px',
                  transformBox: 'fill-box',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                }}
              />
              {/* Flap border */}
              <polyline
                points="0,0 240,165 480,0"
                fill="none"
                stroke="rgba(198,170,117,0.3)"
                strokeWidth="1"
              />

              {/* Bottom V crease */}
              <polyline
                points="0,320 240,155 480,320"
                fill="none"
                stroke="rgba(198,170,117,0.2)"
                strokeWidth="0.8"
              />

              {/* Side creases */}
              <line x1="0" y1="320" x2="240" y2="155" stroke="rgba(198,170,117,0.15)" strokeWidth="0.5" />
              <line x1="480" y1="320" x2="240" y2="155" stroke="rgba(198,170,117,0.15)" strokeWidth="0.5" />
            </svg>

            {/* Wax seal overlay */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -40%)',
                zIndex: 10,
              }}
            >
              <WaxSeal isBreaking={sealBreaking} onBroken={handleSealBroken} />
            </div>

            {/* Emerging card (hidden until animation) */}
            <div
              className="card-emerging absolute inset-x-6 bottom-6 opacity-0"
              style={{
                height: '70%',
                background: 'linear-gradient(180deg, rgba(250,249,246,0.95), rgba(229,228,226,0.9))',
                borderRadius: 4,
                border: '1px solid rgba(198,170,117,0.3)',
                zIndex: 5,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom text + button */}
      <div className="absolute inset-x-0 bottom-[12%] flex flex-col items-center gap-5 px-6">
        <AnimatePresence>
          {!isOpening && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="font-cormorant text-center text-lg italic"
              style={{ color: 'rgba(229,228,226,0.7)', maxWidth: 360 }}
            >
              {envelopeText.subline}
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!isOpening && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpen}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="btn-primary px-10 py-4 text-sm rounded-sm relative overflow-hidden"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                minWidth: 240,
              }}
            >
              <span className="relative z-10">{envelopeText.ctaButton}</span>
              {isHovered && (
                <motion.span
                  className="absolute inset-0"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
                />
              )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
