import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { GaneshMotif, FloralDivider, FloralCorner } from './ui/Ornaments';
import { Heart } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <footer className="relative w-full py-14 sm:py-18 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #4A2219 25%, #6B3528 55%, #A0711A 80%, #EDD57A 100%)',
      }}
    >
      {/* Rich ambient layered glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(170deg, #FFF8F2 0%, #4A2219 22%, #6B3528 55%, #8A571A 78%, #C9962F 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.70) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[40%] opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(237,213,122,0.70) 0%, transparent 65%)' }} />
      </div>

      {/* Decorative floral corners */}
      <FloralCorner position="top-left" className="absolute top-4 left-4 sm:top-8 sm:left-8 w-20 h-20 sm:w-28 sm:h-28 pointer-events-none" style={{ color: 'rgba(237,213,122,0.40)' } as React.CSSProperties} />
      <FloralCorner position="top-right" className="absolute top-4 right-4 sm:top-8 sm:right-8 w-20 h-20 sm:w-28 sm:h-28 pointer-events-none" style={{ color: 'rgba(237,213,122,0.40)' } as React.CSSProperties} />
      <FloralCorner position="bottom-left" className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none" style={{ color: 'rgba(242,200,213,0.30)' } as React.CSSProperties} />
      <FloralCorner position="bottom-right" className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 pointer-events-none" style={{ color: 'rgba(242,200,213,0.30)' } as React.CSSProperties} />

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center relative z-10 px-4">
        {/* 1. Sacred Ganesh Motif */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-5 sm:mb-6 mx-auto"
        >
          <GaneshMotif size={52} />
        </motion.div>

        {/* 2. Blessings Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 sm:mb-8 max-w-2xl mx-auto"
        >
          <h2 className="font-cormorant font-semibold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed text-center"
            style={{ color: '#F7E498', textShadow: '0 2px 20px rgba(201,150,47,0.60), 0 4px 40px rgba(201,150,47,0.30)' }}>
            "{invitationData.closing.blessingsText}"
          </h2>
        </motion.div>

        <FloralDivider className="my-6 sm:my-8 mx-auto" />

        {/* 3. Love & Regards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="my-6 sm:my-8 flex flex-col items-center justify-center text-center"
        >
          <div className="inline-flex items-center justify-center gap-2.5 mb-3">
            <Heart className="w-4 h-4 fill-current" style={{ color: '#FAD9E3' }} />
            <span className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold" style={{ color: '#FAD9E3' }}>
              {invitationData.closing.regardsLabel}
            </span>
            <Heart className="w-4 h-4 fill-current" style={{ color: '#FAD9E3' }} />
          </div>
          <p className="font-cormorant font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-center"
            style={{ color: '#F7E498', textShadow: '0 2px 16px rgba(201,150,47,0.55)' }}>
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
          <div className="rounded-full p-1 relative mx-auto overflow-hidden"
            style={{
              width: '130px', height: '130px',
              background: 'linear-gradient(135deg, #EDD57A, #C9962F, #A0711A, #EDD57A)',
              boxShadow: '0 12px 40px rgba(107,53,40,0.55), 0 0 40px rgba(201,150,47,0.50)',
            }}>
            <div className="w-full h-full rounded-full overflow-hidden border border-dashed"
              style={{ borderColor: 'rgba(237,213,122,0.60)', background: 'rgba(255,252,248,0.95)' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/rd-monogram-emblem.png`}
                alt="Ritu & Dharmendra — Luxurious Gold R&D Monogram Emblem"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* 5. Footer Venue & Date Line */}
        <div className="pt-6 sm:pt-8 pb-2 text-[11px] sm:text-xs font-montserrat tracking-wider text-center w-full max-w-md mx-auto mt-4"
          style={{
            color: 'rgba(237,213,122,0.70)',
            borderTop: '1px solid rgba(201,150,47,0.35)',
          }}>
          Silver Jubilee Celebration · 26 November 2026 · Le Grande Banquet
        </div>
      </div>
    </footer>
  );
};

