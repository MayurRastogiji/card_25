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
      accentColor: '#C0607A',
    },
    {
      icon: Calendar,
      label: 'Date',
      title: invitationData.dateTime.date,
      subtitle: `${invitationData.dateTime.dayOfWeek} Evening`,
      detail: 'Save The Date',
      accentColor: '#C9962F',
    },
    {
      icon: Clock,
      label: 'Time',
      title: invitationData.dateTime.time,
      subtitle: 'Evening Celebrations',
      detail: 'Dinner & Warm Hospitality',
      accentColor: '#A0711A',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #FAD9E3 35%, #FFF8F2 65%, #F2C8D5 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.30) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(192,96,122,0.30) 0%, transparent 70%)' }} />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
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
              background: 'linear-gradient(135deg, rgba(201,150,47,0.18), rgba(192,96,122,0.15))',
              border: '1.5px solid rgba(201,150,47,0.55)',
              boxShadow: '0 3px 14px rgba(201,150,47,0.22)',
            }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#C9962F' }} />
            <span className="font-montserrat text-xs uppercase tracking-widest font-semibold" style={{ color: '#6B3528' }}>
              Event Itinerary
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-center w-full mx-auto leading-tight"
            style={{ color: '#6B3528', textShadow: '0 2px 20px rgba(201,150,47,0.25)' }}>
            A Day to Remember
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg mt-2 max-w-lg mx-auto text-center"
            style={{ color: '#C0607A' }}>
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
                className="w-full max-w-sm rounded-3xl p-6 sm:p-7 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,252,248,0.98), rgba(255,236,245,0.94))',
                  border: '1.5px solid rgba(201,150,47,0.55)',
                  boxShadow: '0 20px 50px rgba(107,53,40,0.18), 0 4px 16px rgba(201,150,47,0.18)',
                }}
              >
                {/* Animated decorative background aura */}
                <div className="absolute top-0 inset-x-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.accentColor}, #EDD57A, ${card.accentColor}, transparent)`,
                  }} />
                <div className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at 50% -20%, rgba(201,150,47,0.20) 0%, transparent 60%)`,
                  }} />

                {/* Centered Icon badge — richer */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto relative"
                  style={{
                    background: `linear-gradient(135deg, rgba(201,150,47,0.22), rgba(192,96,122,0.18))`,
                    border: `2px solid rgba(201,150,47,0.60)`,
                    boxShadow: `0 6px 20px ${card.accentColor}40`,
                  }}>
                  <Icon className="w-7 h-7" style={{ color: card.accentColor }} />
                </div>

                <span className="font-montserrat text-[11px] uppercase tracking-[0.22em] font-semibold block mb-1.5 text-center"
                  style={{ color: '#C0607A' }}>
                  {card.label}
                </span>

                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl mb-1.5 leading-snug text-center"
                  style={{ color: '#6B3528' }}>
                  {card.title}
                </h3>

                <p className="font-montserrat text-xs sm:text-sm font-medium text-center"
                  style={{ color: 'rgba(107,53,40,0.80)' }}>
                  {card.subtitle}
                </p>

                <div className="w-10 h-[1px] my-3.5 mx-auto"
                  style={{ background: 'rgba(201,150,47,0.50)' }} />

                <span className="inline-block px-3 py-1 rounded-full font-montserrat text-[10px] sm:text-[11px] tracking-wider"
                  style={{
                    background: 'rgba(201,150,47,0.14)',
                    border: '1px solid rgba(201,150,47,0.40)',
                    color: 'rgba(107,53,40,0.80)',
                  }}>
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

