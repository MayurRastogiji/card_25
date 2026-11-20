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
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FCECEF]/80 to-[#FFF9F5] flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center mb-8 sm:mb-10 px-2"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF78]/40 mb-3 shadow-xs mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#795044] font-semibold">
              Save The Date
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold text-center w-full mx-auto leading-tight">
            The Celebration Begins In
          </h2>

          <p className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C98996] mt-2 sm:mt-3 text-center w-full mx-auto">
            26 November 2026 · 7:00 PM IST
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Countdown Grid or Completion Message */}
        {isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white shadow-card border border-[#D4AF78]/40 inline-flex flex-col items-center justify-center text-center mx-auto"
          >
            <p className="font-script text-3xl sm:text-4xl text-[#795044] mb-2 text-center">The Celebration Has Begun!</p>
            <p className="font-cormorant text-base sm:text-lg text-[#C98996] text-center max-w-md mx-auto">
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
                className="w-full max-w-[170px] sm:max-w-none rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 md:p-7 shadow-card border-2 border-[#D4AF78]/35 hover:border-[#D4AF78] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center mx-auto relative group"
              >
                {/* Decorative corner dots */}
                <div className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-[#D4AF78]/50" />
                <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#D4AF78]/50" />

                <div className="flex flex-col items-center justify-center text-center w-full">
                  <span className="font-cormorant font-bold text-4xl xs:text-5xl sm:text-5xl text-[#D4AF78] leading-none tracking-tight text-center block group-hover:scale-105 transition-transform">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <div className="w-8 sm:w-10 h-[1px] bg-[#D4AF78]/40 my-2 sm:my-2.5 mx-auto" />
                  <span className="font-montserrat text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#795044] font-semibold text-center block">
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
