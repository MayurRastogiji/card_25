import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { invitationData } from '../data/invitation';
import { FloralDivider } from './ui/Ornaments';
import { Sparkles } from 'lucide-react';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(invitationData.dateTime.isoTarget);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #3D2318 40%, #6B3528 70%, #FFF8F2 100%)',
      }}
    >
      {/* Rich dark background overlay with gold shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(170deg, #FFF8F2 0%, #4A2219 25%, #6B3528 65%, #FFF8F2 100%)' }} />
        {/* Gold glow spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[60%] opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.70) 0%, transparent 65%)' }} />
        <div className="absolute top-1/2 left-0 w-[40%] h-[60%] opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(237,213,122,0.60) 0%, transparent 65%)' }} />
        <div className="absolute top-1/2 right-0 w-[40%] h-[60%] opacity-15"
          style={{ background: 'radial-gradient(ellipse, rgba(237,213,122,0.60) 0%, transparent 65%)' }} />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center mb-8 sm:mb-10 px-2"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full mb-3 mx-auto"
            style={{
              background: 'rgba(255,248,242,0.12)',
              border: '1.5px solid rgba(201,150,47,0.70)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(201,150,47,0.30)',
            }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#EDD57A' }} />
            <span className="font-montserrat text-xs uppercase tracking-widest font-semibold" style={{ color: '#EDD57A' }}>
              Save The Date
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-center w-full mx-auto leading-tight"
            style={{ color: '#F7E498', textShadow: '0 2px 20px rgba(201,150,47,0.50)' }}>
            The Celebration Begins In
          </h2>

          <p className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.25em] mt-2 sm:mt-3 text-center w-full mx-auto"
            style={{ color: 'rgba(242,200,213,0.90)' }}>
            26 November 2026 · 7:00 PM IST
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Countdown Grid or Completion Message */}
        {isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-3xl inline-flex flex-col items-center justify-center text-center mx-auto"
            style={{
              background: 'rgba(255,248,242,0.12)',
              border: '1.5px solid rgba(201,150,47,0.70)',
              boxShadow: '0 20px 50px rgba(107,53,40,0.50), 0 0 40px rgba(201,150,47,0.30)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="font-script text-3xl sm:text-4xl mb-2 text-center" style={{ color: '#F7E498' }}>The Celebration Has Begun!</p>
            <p className="font-cormorant text-base sm:text-lg text-center max-w-md mx-auto" style={{ color: 'rgba(242,200,213,0.90)' }}>
              Warmest blessings as we celebrate 25 years of love and togetherness.
            </p>
          </motion.div>
        ) : (
          <div className="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-6 justify-center justify-items-center px-1 mb-0">
            {units.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="w-full max-w-[170px] sm:max-w-none rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center mx-auto relative group transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,252,248,0.14), rgba(255,236,245,0.10))',
                  border: '1.5px solid rgba(201,150,47,0.65)',
                  boxShadow: '0 10px 30px rgba(107,53,40,0.40), 0 0 20px rgba(201,150,47,0.20), inset 0 1px 0 rgba(201,150,47,0.30)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Animated gold top bar */}
                <div className="absolute top-0 inset-x-0 h-[2px] rounded-t-3xl"
                  style={{
                    background: 'linear-gradient(90deg, transparent, #EDD57A, #F7E498, #EDD57A, transparent)',
                  }} />

                {/* Decorative corner dots */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(237,213,122,0.70)' }} />
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(237,213,122,0.70)' }} />

                <div className="flex flex-col items-center justify-center text-center w-full">
                  <span className="font-cormorant font-bold text-4xl xs:text-5xl sm:text-5xl leading-none tracking-tight text-center block group-hover:scale-105 transition-transform"
                    style={{ color: '#F7E498', textShadow: '0 0 20px rgba(201,150,47,0.60)' }}>
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <div className="w-8 sm:w-10 h-[1px] my-2 sm:my-2.5 mx-auto"
                    style={{ background: 'rgba(201,150,47,0.55)' }} />
                  <span className="font-montserrat text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-center block"
                    style={{ color: 'rgba(242,200,213,0.90)' }}>
                    {unit.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

