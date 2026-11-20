import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function getTimeLeft(): TimeLeft {
  const targetDate = new Date(eventConfig.date.iso);
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isPast: false };
}

function pad(n: number): string {
  return n.toString().padStart(2, '0');
}

interface DigitProps {
  value: string;
}

function FlipDigit({ value }: DigitProps) {
  return (
    <div className="relative overflow-hidden" style={{ width: '1.1em', height: '1.2em', display: 'inline-block' }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center' }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

interface UnitBlockProps {
  value: number;
  label: string;
  delay: number;
  isInView: boolean;
}

function UnitBlock({ value, label, delay, isInView }: UnitBlockProps) {
  const digits = pad(value).split('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className="countdown-unit glass-card flex flex-col items-center gap-3 px-6 py-7 min-w-[90px] rounded-xl"
    >
      <div
        className="countdown-digit flex font-playfair"
        style={{ fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', fontWeight: 600, lineHeight: 1 }}
      >
        {digits.map((d, i) => (
          <FlipDigit key={i} value={d} />
        ))}
      </div>
      <p
        className="font-inter tracking-widest uppercase"
        style={{ color: 'rgba(191,195,199,0.6)', fontSize: '0.6rem', letterSpacing: '0.3em' }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #252830 0%, #1A1B1F 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(198,170,117,0.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-10 text-center max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-inter text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(198,170,117,0.7)' }}>
            ✦ &nbsp; Counting Every Moment &nbsp; ✦
          </p>
          <h2
            className="font-playfair"
            style={{ color: '#FAF9F6', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 400 }}
          >
            {timeLeft.isPast ? '✨ The Celebration Has Begun!' : 'The Celebration Begins In'}
          </h2>
          <div className="ornament-line w-32" />
        </motion.div>

        {/* Timer blocks */}
        {!timeLeft.isPast && (
          <div className="flex flex-wrap justify-center gap-4">
            <UnitBlock value={timeLeft.days} label="Days" delay={0.1} isInView={isInView} />
            <UnitBlock value={timeLeft.hours} label="Hours" delay={0.2} isInView={isInView} />
            <UnitBlock value={timeLeft.minutes} label="Minutes" delay={0.3} isInView={isInView} />
            <UnitBlock value={timeLeft.seconds} label="Seconds" delay={0.4} isInView={isInView} />
          </div>
        )}

        {timeLeft.isPast && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className="glass-card px-10 py-8 text-center rounded-2xl"
          >
            <p className="font-script" style={{ color: '#C6AA75', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
              We're celebrating!
            </p>
            <p className="font-cormorant italic mt-2" style={{ color: 'rgba(229,228,226,0.7)', fontSize: '1.1rem' }}>
              Thank you for being a part of this beautiful journey.
            </p>
          </motion.div>
        )}

        {/* Date reminder */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-cormorant italic"
          style={{ color: 'rgba(191,195,199,0.5)', fontSize: '1rem' }}
        >
          {eventConfig.date.formatted} · {eventConfig.date.time} · {eventConfig.venue.name}
        </motion.p>
      </div>
    </section>
  );
}
