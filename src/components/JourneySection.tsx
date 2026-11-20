import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider, FloralCorner } from './ui/Ornaments';
import { Heart, Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden luxury-paper-bg flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 px-2 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCECEF] border border-[#D4AF78]/40 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#795044] font-semibold">
              Our Story
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold max-w-2xl mx-auto leading-tight text-center">
            Two Hearts. One Journey.
            <br />
            25 Beautiful Years.
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#C98996] mt-1.5 sm:mt-2 text-center">
            {invitationData.journey.subheading}
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Balanced 2-Column Editorial Storytelling */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center mb-0">
          {/* Left: Framed Couple Portrait Keepsake */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full flex justify-center items-center"
          >
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] mx-auto">
              <div className="rounded-3xl bg-white p-4 sm:p-5 shadow-xl border-2 border-[#D4AF78]/40 relative overflow-hidden">
                <FloralCorner position="top-left" className="absolute top-2 left-2 w-8 h-8 text-[#D4AF78]/60" />
                <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8 text-[#D4AF78]/60" />

                <div className="overflow-hidden rounded-2xl bg-[#FFF9F5]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/couple-portrait.png`}
                    alt="Ritu and Dharmendra Rastogi 25 Years Journey"
                    className="w-full h-[300px] xs:h-[340px] sm:h-[380px] object-cover object-top filter saturate-[1.05] hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="text-center pt-3 pb-1">
                  <p className="font-script text-2xl sm:text-3xl text-[#795044]">
                    Ritu & Dharmendra
                  </p>
                  <p className="font-montserrat text-[11px] sm:text-xs uppercase tracking-widest text-[#C98996] font-medium mt-0.5">
                    2001 — 2026 · 25 Golden Years
                  </p>
                </div>
              </div>

              {/* Decorative Heart Badge */}
              <div className="absolute top-3 right-3 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFF9F5] border-2 border-[#D4AF78] shadow-md flex items-center justify-center text-[#C98996] z-10">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Story & Milestone Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full flex flex-col justify-center items-center space-y-4 sm:space-y-5 px-2 text-center"
          >
            <div className="space-y-3 sm:space-y-4 text-[#795044]/90 font-cormorant text-base sm:text-lg md:text-xl leading-relaxed text-center">
              {invitationData.journey.paragraphs.map((para, idx) => (
                <p key={idx} className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-script first-letter:text-[#D4AF78] first-letter:mr-1 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Romantic Quote Box */}
            <div className="w-full p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FCECEF] via-[#FFF9F5] to-[#FCECEF] border border-[#D4AF78]/40 shadow-xs text-center my-2">
              <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#795044] text-center leading-relaxed">
                {invitationData.journey.quote}
              </p>
            </div>

            {/* 25 Years Milestone Metric Pills */}
            <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 text-center">
              <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#D4AF78]/35 shadow-xs">
                <span className="block font-cormorant font-bold text-2xl sm:text-3xl text-[#D4AF78] leading-tight">25</span>
                <span className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-wider text-[#795044]/80 mt-0.5 block">Years of Love</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#D4AF78]/35 shadow-xs">
                <span className="block font-cormorant font-bold text-2xl sm:text-3xl text-[#D4AF78] leading-tight">300</span>
                <span className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-wider text-[#795044]/80 mt-0.5 block">Months of Grace</span>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl bg-white/90 border border-[#D4AF78]/35 shadow-xs">
                <span className="block font-cormorant font-bold text-2xl sm:text-3xl text-[#D4AF78] leading-tight">9,131</span>
                <span className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-wider text-[#795044]/80 mt-0.5 block">Days Together</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
