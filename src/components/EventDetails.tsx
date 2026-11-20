import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider } from './ui/Ornaments';
import { Calendar, Clock, Award, Sparkles } from 'lucide-react';

export const EventDetails: React.FC = () => {
  const cards = [
    {
      icon: Award,
      label: 'Occasion',
      title: invitationData.celebration.tagline,
      subtitle: '25 Years of Togetherness',
      detail: 'Silver Jubilee Milestone',
    },
    {
      icon: Calendar,
      label: 'Date',
      title: invitationData.dateTime.date,
      subtitle: `${invitationData.dateTime.dayOfWeek} Evening`,
      detail: 'Save The Date',
    },
    {
      icon: Clock,
      label: 'Time',
      title: invitationData.dateTime.time,
      subtitle: 'Evening Celebrations',
      detail: 'Dinner & Warm Hospitality',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden luxury-paper-bg flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center text-center mb-8 sm:mb-10 px-2"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-[#FCECEF] border border-[#D4AF78]/40 mb-3 shadow-xs mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#795044] font-semibold">
              Event Itinerary
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold text-center w-full mx-auto leading-tight">
            A Day to Remember
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#C98996] mt-2 max-w-lg mx-auto text-center">
            An evening dedicated to love, togetherness, and cherished memories
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Symmetrically Centered 3-Column Luxury Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 justify-center justify-items-center mb-0">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="w-full max-w-sm rounded-3xl bg-white p-6 sm:p-7 shadow-card border-2 border-[#D4AF78]/40 hover:border-[#D4AF78] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center relative overflow-hidden"
              >
                {/* Decorative background aura */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#D4AF78] via-[#F3E3C3] to-[#B88D4E]" />

                {/* Centered Icon badge */}
                <div className="w-14 h-14 rounded-full bg-[#FCECEF] border-2 border-[#D4AF78]/50 flex items-center justify-center text-[#D4AF78] mb-4 shadow-xs mx-auto">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#C98996] font-semibold block mb-1.5 text-center">
                  {card.label}
                </span>

                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#795044] mb-1.5 leading-snug text-center">
                  {card.title}
                </h3>

                <p className="font-montserrat text-xs sm:text-sm text-[#795044]/80 font-medium text-center">
                  {card.subtitle}
                </p>

                <div className="w-10 h-[1px] bg-[#D4AF78]/40 my-3.5 mx-auto" />

                <span className="inline-block px-3 py-0.5 rounded-full bg-[#FFF9F5] border border-[#D4AF78]/30 text-[10px] sm:text-[11px] font-montserrat text-[#795044]/70 tracking-wider">
                  {card.detail}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
