import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  delay: number;
  isInView: boolean;
}

function DetailCard({ icon, label, value, sub, delay, isInView }: DetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card-light flex flex-col items-center gap-4 p-8 text-center flex-1 min-w-[200px] max-w-[280px] relative overflow-hidden group"
    >
      {/* Top shimmer on hover */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, transparent, #C6AA75, transparent)' }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(198,170,117,0.12), rgba(198,170,117,0.06))',
          border: '1px solid rgba(198,170,117,0.3)',
        }}
      >
        <span style={{ color: '#C6AA75' }}>{icon}</span>
      </div>

      {/* Label */}
      <p className="font-inter text-xs tracking-widest uppercase" style={{ color: '#BFC3C7', letterSpacing: '0.3em' }}>
        {label}
      </p>

      {/* Value */}
      <p
        className="font-playfair"
        style={{
          color: '#303238',
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
          fontWeight: 500,
          lineHeight: 1.3,
        }}
      >
        {value}
      </p>

      {/* Sub text */}
      {sub && (
        <p className="font-cormorant italic text-sm" style={{ color: '#8A8A8A' }}>
          {sub}
        </p>
      )}
    </motion.div>
  );
}

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { date, venue } = eventConfig;

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1A1B1F 0%, #252830 50%, #1A1B1F 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(198,170,117,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Section heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-inter text-xs tracking-[0.4em] uppercase"
            style={{ color: 'rgba(198,170,117,0.7)' }}
          >
            ✦ &nbsp; Join Us &nbsp; ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-playfair"
            style={{
              color: '#FAF9F6',
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 400,
            }}
          >
            Celebration Details
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ornament-line w-32"
          />
        </div>

        {/* Detail cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <DetailCard
            icon={<Calendar size={22} />}
            label="Date"
            value={date.formatted}
            sub={date.day}
            delay={0.2}
            isInView={isInView}
          />
          <DetailCard
            icon={<Clock size={22} />}
            label="Time"
            value={date.time}
            sub="IST"
            delay={0.35}
            isInView={isInView}
          />
          <DetailCard
            icon={<MapPin size={22} />}
            label="Venue"
            value={venue.name}
            sub={venue.address !== `Le Grande, [Add full venue address here]` ? venue.address : undefined}
            delay={0.5}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
