import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { GaneshMotif, FloralDivider, FloralCorner } from './ui/Ornaments';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #FAD9E3 35%, #FFF8F2 60%, #F2C8D5 100%)',
      }}
    >
      {/* Rich ambient radial glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[90%] h-[55%] rounded-full opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.22) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[55%] h-[45%] rounded-full opacity-35"
          style={{ background: 'radial-gradient(ellipse, rgba(192,96,122,0.20) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[50%] h-[40%] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(237,213,122,0.18) 0%, transparent 70%)' }} />
      </div>

      {/* Decorative floral background corners */}
      <FloralCorner position="top-left" className="absolute top-4 left-4 sm:top-10 sm:left-10 w-28 h-28 sm:w-44 sm:h-44 text-[#C9962F]/45 pointer-events-none" />
      <FloralCorner position="top-right" className="absolute top-4 right-4 sm:top-10 sm:right-10 w-28 h-28 sm:w-44 sm:h-44 text-[#C9962F]/45 pointer-events-none" />
      <FloralCorner position="bottom-left" className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 text-[#C0607A]/30 pointer-events-none" />
      <FloralCorner position="bottom-right" className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 text-[#C0607A]/30 pointer-events-none" />

      {/* Main Luxury Invitation Card Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-14 overflow-hidden flex flex-col items-center justify-center text-center"
        style={{
          background: 'linear-gradient(145deg, rgba(255,252,248,0.97) 0%, rgba(255,232,240,0.95) 50%, rgba(255,248,242,0.97) 100%)',
          boxShadow: '0 32px 80px -12px rgba(107,53,40,0.28), 0 8px 32px rgba(192,96,122,0.20), inset 0 1px 0 rgba(201,150,47,0.30)',
          border: '2px solid rgba(201,150,47,0.55)',
        }}
      >
        {/* Animated gold shimmer top bar */}
        <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-3xl"
          style={{
            background: 'linear-gradient(90deg, #A0711A, #EDD57A, #F7E498, #C9962F, #A0711A)',
            backgroundSize: '200% auto',
            animation: 'goldShimmer 4s linear infinite',
          }} />
        {/* Bottom bar too */}
        <div className="absolute bottom-0 inset-x-0 h-[3px] rounded-b-3xl"
          style={{
            background: 'linear-gradient(90deg, #A0711A, #EDD57A, #F7E498, #C9962F, #A0711A)',
            backgroundSize: '200% auto',
            animation: 'goldShimmer 4s linear infinite reverse',
          }} />

        {/* Inner ornamental hairline border */}
        <div className="absolute inset-3 sm:inset-5 rounded-2xl sm:rounded-3xl border border-dashed pointer-events-none"
          style={{ borderColor: 'rgba(201,150,47,0.45)' }} />

        {/* 1. Sacred Blessings Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-6 px-2 flex flex-col items-center justify-center w-full"
        >
          <div className="flex justify-center mb-2.5">
            <GaneshMotif size={48} />
          </div>
          <p className="font-cormorant font-bold text-xl sm:text-2xl md:text-3xl tracking-wider mb-1.5 leading-snug"
            style={{ color: '#6B3528', textShadow: '0 1px 8px rgba(107,53,40,0.15)' }}>
            {invitationData.blessings.shloka}
          </p>
          <p className="font-cormorant italic text-sm sm:text-base mt-0.5" style={{ color: '#C0607A' }}>
            {invitationData.blessings.subtext}
          </p>
          <p className="font-cormorant font-semibold text-base sm:text-lg md:text-xl tracking-wide mt-1" style={{ color: '#6B3528' }}>
            {invitationData.blessings.elder}
          </p>
        </motion.div>

        <FloralDivider className="my-5 sm:my-6 mx-auto" />

        {/* 2. Milestone Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-4 sm:mb-6 px-2 flex flex-col items-center justify-center w-full"
        >
          <span className="inline-block px-5 py-1.5 rounded-full font-montserrat text-xs uppercase tracking-[0.25em] font-semibold mb-2.5 sm:mb-3"
            style={{
              background: 'linear-gradient(135deg, rgba(201,150,47,0.18), rgba(192,96,122,0.15))',
              border: '1px solid rgba(201,150,47,0.55)',
              color: '#6B3528',
              boxShadow: '0 2px 10px rgba(201,150,47,0.20)',
            }}>
            {invitationData.celebration.tagline}
          </span>
          <h2 className="font-cormorant uppercase tracking-[0.18em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center"
            style={{ color: '#6B3528', textShadow: '0 2px 20px rgba(201,150,47,0.25)' }}>
            {invitationData.celebration.title}
          </h2>
        </motion.div>

        {/* 3. Hero Couple Portrait with Luxury Gold Arch Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative my-6 sm:my-8 flex justify-center items-center w-full px-1 mx-auto"
        >
          <div className="relative group w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[400px] mx-auto">
            {/* Rich decorative aura */}
            <div className="absolute -inset-4 rounded-t-full rounded-b-3xl blur-xl opacity-70 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(242,200,213,0.8), rgba(201,150,47,0.5), rgba(192,96,122,0.5))' }} />

            {/* Animated gold ring */}
            <div className="absolute -inset-1.5 rounded-t-full rounded-b-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #EDD57A, #C9962F, #A0711A, #EDD57A)',
                opacity: 0.75,
              }} />

            {/* Arch-shaped picture frame */}
            <div className="relative overflow-hidden rounded-t-full rounded-b-3xl p-[3px] mx-auto"
              style={{
                background: 'linear-gradient(135deg, #EDD57A, #F7E498, #C9962F, #A0711A, #EDD57A)',
                boxShadow: '0 20px 50px rgba(107,53,40,0.30), 0 0 30px rgba(201,150,47,0.30)',
              }}>
              <div className="relative overflow-hidden rounded-t-full rounded-b-2xl bg-[#FFF8F2] p-1.5">
                <div className="relative overflow-hidden rounded-t-full rounded-b-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}images/couple-portrait.png`}
                    alt={`${invitationData.couple.shortNames} celebrating their Silver Jubilee`}
                    className="w-full h-[320px] xs:h-[360px] sm:h-[400px] md:h-[440px] object-cover object-top filter brightness-[1.04] contrast-[1.04] saturate-[1.08] transform transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Romantic bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 flex items-end justify-center pb-4 px-2 text-center"
                    style={{ background: 'linear-gradient(to top, rgba(107,53,40,0.90), rgba(107,53,40,0.35), transparent)' }}>
                    <span className="font-script text-2xl sm:text-3xl drop-shadow-lg" style={{ color: '#FFF8F2' }}>
                      25 Years of Love
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Gold Emblem Badge — richer */}
            <div className="absolute -bottom-4 right-0 sm:-bottom-5 sm:-right-4 w-18 h-18 sm:w-22 sm:h-22 rounded-full p-1 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform"
              style={{
                background: 'linear-gradient(135deg, #A0711A, #EDD57A, #F7E498, #C9962F)',
                boxShadow: '0 8px 24px rgba(107,53,40,0.40), 0 0 20px rgba(201,150,47,0.50)',
                width: '70px', height: '70px',
              }}>
              <div className="w-full h-full rounded-full border border-dashed flex flex-col items-center justify-center text-center p-1"
                style={{ background: 'rgba(255,248,242,0.95)', borderColor: 'rgba(201,150,47,0.70)' }}>
                <span className="text-[8px] font-montserrat uppercase tracking-wider font-bold" style={{ color: '#C0607A' }}>Silver</span>
                <span className="font-cormorant font-bold text-sm sm:text-base leading-none" style={{ color: '#6B3528' }}>Jubilee</span>
                <span className="text-[8px] font-montserrat tracking-widest" style={{ color: '#A0711A' }}>25 YRS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Couple Names in Romantic Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8 px-2 flex flex-col items-center justify-center w-full"
        >
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2.5 leading-snug break-words text-center"
            style={{ color: '#6B3528', textShadow: '0 2px 20px rgba(201,150,47,0.35), 0 4px 12px rgba(107,53,40,0.15)' }}>
            {invitationData.couple.shortNames}
          </h1>
          <p className="font-cormorant text-base sm:text-lg md:text-xl max-w-lg mx-auto font-medium px-2 leading-relaxed text-center mt-2"
            style={{ color: '#C0607A' }}>
            {invitationData.celebration.wording}
          </p>
        </motion.div>

        <FloralDivider className="my-5 sm:my-6 mx-auto" />

        {/* 5. Date, Time & Venue Key Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mt-4 sm:mt-6 text-center px-1"
        >
          {/* Date Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,252,248,0.95), rgba(255,236,245,0.90))',
              border: '1.5px solid rgba(201,150,47,0.50)',
              boxShadow: '0 4px 16px rgba(201,150,47,0.18), 0 2px 8px rgba(107,53,40,0.08)',
            }}>
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: '#C9962F' }} />
              <span className="font-montserrat text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#C0607A' }}>Date</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg block" style={{ color: '#6B3528' }}>{invitationData.dateTime.date}</span>
              <span className="text-[11px] sm:text-xs font-medium block" style={{ color: 'rgba(107,53,40,0.70)' }}>{invitationData.dateTime.dayOfWeek}</span>
            </div>
          </div>

          {/* Time Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,252,248,0.95), rgba(255,236,245,0.90))',
              border: '1.5px solid rgba(201,150,47,0.50)',
              boxShadow: '0 4px 16px rgba(201,150,47,0.18), 0 2px 8px rgba(107,53,40,0.08)',
            }}>
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: '#C9962F' }} />
              <span className="font-montserrat text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#C0607A' }}>Time</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg block" style={{ color: '#6B3528' }}>{invitationData.dateTime.time}</span>
              <span className="text-[11px] sm:text-xs font-medium block" style={{ color: 'rgba(107,53,40,0.70)' }}>IST</span>
            </div>
          </div>

          {/* Venue Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, rgba(255,252,248,0.95), rgba(255,236,245,0.90))',
              border: '1.5px solid rgba(201,150,47,0.50)',
              boxShadow: '0 4px 16px rgba(201,150,47,0.18), 0 2px 8px rgba(107,53,40,0.08)',
            }}>
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: '#C9962F' }} />
              <span className="font-montserrat text-[10px] uppercase tracking-widest font-semibold" style={{ color: '#C0607A' }}>Venue</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg block" style={{ color: '#6B3528' }}>{invitationData.venue.name}</span>
              <span className="text-[11px] sm:text-xs font-medium block" style={{ color: 'rgba(107,53,40,0.70)' }}>{invitationData.venue.addressLine2}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gentle Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-2 text-center z-10 mx-auto"
      >
        <span className="font-montserrat text-[10px] uppercase tracking-[0.28em] font-medium" style={{ color: '#C0607A' }}>
          Scroll to explore our journey
        </span>
        <div className="w-5 h-9 rounded-full border-2 flex items-start justify-center p-1.5 mx-auto"
          style={{ borderColor: 'rgba(201,150,47,0.70)' }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'linear-gradient(180deg, #EDD57A, #C9962F)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

