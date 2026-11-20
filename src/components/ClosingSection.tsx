import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { GaneshMotif, FloralDivider, FloralCorner } from './ui/Ornaments';
import { Heart } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <footer className="relative w-full py-14 sm:py-18 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FCECEF] to-[#F6DDE3] flex flex-col items-center justify-center text-center">
      {/* Decorative floral corners */}
      <FloralCorner position="top-left" className="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-28 sm:h-28 text-[#D4AF78]/30 pointer-events-none" />
      <FloralCorner position="top-right" className="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 h-20 sm:w-28 sm:h-28 text-[#D4AF78]/30 pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 px-4">
        {/* 1. Sacred Ganesh Motif */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-5 sm:mb-6 mx-auto"
        >
          <GaneshMotif size={44} />
        </motion.div>

        {/* 2. Blessings Statement - Prominently Enlarged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          <h2 className="font-cormorant font-semibold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#795044] leading-relaxed text-center">
            "{invitationData.closing.blessingsText}"
          </h2>
        </motion.div>

        <FloralDivider className="my-6 sm:my-8 mx-auto" />

        {/* 3. Love & Regards - Shivi, Mayur (Prominently Enlarged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-6 sm:my-8 flex flex-col items-center justify-center text-center"
        >
          <div className="inline-flex items-center justify-center gap-2.5 mb-3 text-[#C98996]">
            <Heart className="w-4 h-4 fill-current text-[#C98996]" />
            <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold text-[#795044]">
              {invitationData.closing.regardsLabel}
            </span>
            <Heart className="w-4 h-4 fill-current text-[#C98996]" />
          </div>
          <p className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl text-[#795044] tracking-wide text-center">
            {invitationData.closing.hosts.join(', ')}
          </p>
        </motion.div>

        {/* 4. Luxurious Gold R&D Monogram Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-6 sm:my-8 flex justify-center items-center w-full"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/95 border-2 border-[#D4AF78] shadow-md flex items-center justify-center p-1 relative mx-auto overflow-hidden">
            <img
              src="/images/rd-monogram-emblem.png"
              alt="Ritu & Dharmendra — Luxurious Gold R&D Monogram Emblem"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 5. Footer Venue & Date Line */}
        <div className="pt-6 sm:pt-8 pb-2 text-[11px] sm:text-xs font-montserrat text-[#795044]/65 tracking-wider text-center border-t border-[#D4AF78]/25 w-full max-w-md mx-auto mt-4">
          Silver Jubilee Celebration · 26 November 2026 · Le Grande Banquet
        </div>
      </div>
    </footer>
  );
};
