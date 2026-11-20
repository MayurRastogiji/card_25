import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { GaneshMotif, FloralDivider, FloralCorner } from './ui/Ornaments';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 overflow-hidden luxury-paper-bg text-center">
      {/* Decorative floral background corners */}
      <FloralCorner position="top-left" className="absolute top-4 left-4 sm:top-10 sm:left-10 w-24 h-24 sm:w-36 sm:h-36 text-[#D4AF78]/30 pointer-events-none" />
      <FloralCorner position="top-right" className="absolute top-4 right-4 sm:top-10 sm:right-10 w-24 h-24 sm:w-36 sm:h-36 text-[#D4AF78]/30 pointer-events-none" />

      {/* Main Luxury Invitation Card Container - Spacious & Symmetrically Centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white/95 via-[#FFF9F5]/95 to-[#FCECEF]/85 p-6 sm:p-10 md:p-14 shadow-card border-2 border-[#D4AF78]/40 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Inner ornamental hairline border */}
        <div className="absolute inset-2 sm:inset-4 rounded-2xl sm:rounded-3xl border border-dashed border-[#D4AF78]/30 pointer-events-none" />

        {/* 1. Sacred Blessings Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 sm:mb-6 px-2 flex flex-col items-center justify-center w-full"
        >
          <div className="flex justify-center mb-2.5">
            <GaneshMotif size={40} />
          </div>
          <p className="font-cormorant font-bold text-xl sm:text-2xl md:text-3xl text-[#795044] tracking-wider mb-1.5 leading-snug">
            {invitationData.blessings.shloka}
          </p>
          <p className="font-cormorant italic text-sm sm:text-base text-[#C98996] mt-0.5">
            {invitationData.blessings.subtext}
          </p>
          <p className="font-cormorant font-semibold text-base sm:text-lg md:text-xl text-[#795044] tracking-wide mt-1">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F6DDE3]/80 border border-[#D4AF78]/40 text-[#795044] font-montserrat text-xs uppercase tracking-[0.25em] font-semibold mb-2.5 sm:mb-3">
            {invitationData.celebration.tagline}
          </span>
          <h2 className="font-cormorant uppercase tracking-[0.18em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#795044] font-semibold text-center">
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
            {/* Soft decorative shadow and background floral aura */}
            <div className="absolute -inset-3 rounded-t-full rounded-b-3xl bg-gradient-to-tr from-[#F6DDE3] via-[#FCECEF] to-[#D4AF78]/30 blur-md opacity-80 pointer-events-none" />

            {/* Arch-shaped picture frame */}
            <div className="relative overflow-hidden rounded-t-full rounded-b-3xl border-4 border-[#D4AF78] shadow-2xl bg-[#FFF9F5] p-2 mx-auto">
              <div className="relative overflow-hidden rounded-t-full rounded-b-2xl">
                <img
                  src="/images/couple-portrait.png"
                  alt={`${invitationData.couple.shortNames} celebrating their Silver Jubilee`}
                  className="w-full h-[320px] xs:h-[360px] sm:h-[400px] md:h-[440px] object-cover object-top filter brightness-[1.02] contrast-[1.02] transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Romantic bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#795044]/80 via-[#795044]/30 to-transparent flex items-end justify-center pb-3 px-2 text-center">
                  <span className="font-script text-2xl sm:text-3xl text-[#FFF9F5] drop-shadow-md">
                    25 Years of Love
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Gold Emblem Badge */}
            <div className="absolute -bottom-3 right-1 sm:-bottom-4 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#B88D4E] via-[#D4AF78] to-[#F3E3C3] p-1 shadow-xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
              <div className="w-full h-full rounded-full bg-[#FFF9F5] border border-dashed border-[#D4AF78] flex flex-col items-center justify-center text-center p-1">
                <span className="text-[8px] font-montserrat uppercase tracking-wider text-[#C98996] font-bold">Silver</span>
                <span className="font-cormorant font-bold text-sm sm:text-base text-[#795044] leading-none">Jubilee</span>
                <span className="text-[8px] font-montserrat tracking-widest text-[#B88D4E]">25 YRS</span>
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
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#795044] mb-2.5 leading-snug break-words text-center">
            {invitationData.couple.shortNames}
          </h1>
          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#C98996] max-w-lg mx-auto font-medium px-2 leading-relaxed text-center mt-2">
            {invitationData.celebration.wording}
          </p>
        </motion.div>

        <FloralDivider className="my-5 sm:my-6 mx-auto" />

        {/* 5. Date, Time & Venue Key Badges - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mt-4 sm:mt-6 text-center px-1"
        >
          {/* Date Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl bg-white/85 border border-[#D4AF78]/35 shadow-xs">
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF78] shrink-0" />
              <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#C98996] font-semibold">Date</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg text-[#795044] block">{invitationData.dateTime.date}</span>
              <span className="text-[11px] sm:text-xs text-[#795044]/70 font-medium block">{invitationData.dateTime.dayOfWeek}</span>
            </div>
          </div>

          {/* Time Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl bg-white/85 border border-[#D4AF78]/35 shadow-xs">
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF78] shrink-0" />
              <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#C98996] font-semibold">Time</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg text-[#795044] block">{invitationData.dateTime.time}</span>
              <span className="text-[11px] sm:text-xs text-[#795044]/70 font-medium block">IST</span>
            </div>
          </div>

          {/* Venue Badge */}
          <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center p-3.5 sm:p-4 rounded-2xl bg-white/85 border border-[#D4AF78]/35 shadow-xs">
            <div className="flex items-center sm:flex-col gap-2 sm:gap-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF78] shrink-0" />
              <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#C98996] font-semibold">Venue</span>
            </div>
            <div className="text-right sm:text-center mt-0 sm:mt-1">
              <span className="font-cormorant font-bold text-base sm:text-lg text-[#795044] block">{invitationData.venue.name}</span>
              <span className="text-[11px] sm:text-xs text-[#795044]/70 font-medium block">{invitationData.venue.addressLine2}</span>
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
        <span className="font-montserrat text-[10px] uppercase tracking-[0.28em] text-[#C98996] font-medium">
          Scroll to explore our journey
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#D4AF78]/60 flex items-start justify-center p-1.5 mx-auto">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#D4AF78]"
          />
        </div>
      </motion.div>
    </section>
  );
};
