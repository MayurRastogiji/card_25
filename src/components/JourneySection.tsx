import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider, FloralCorner } from './ui/Ornaments';
import { Heart, Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #F2C8D5 30%, #FAD9E3 60%, #FFF8F2 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[50%] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.20) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[55%] h-[50%] opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(192,96,122,0.22) 0%, transparent 70%)' }} />
      </div>

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 px-2 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3"
            style={{
              background: 'linear-gradient(135deg, rgba(201,150,47,0.18), rgba(192,96,122,0.15))',
              border: '1.5px solid rgba(201,150,47,0.55)',
              boxShadow: '0 3px 14px rgba(201,150,47,0.22)',
            }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#C9962F' }} />
            <span className="font-montserrat text-xs uppercase tracking-widest font-semibold" style={{ color: '#6B3528' }}>
              Our Story
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight text-center"
            style={{ color: '#6B3528', textShadow: '0 2px 20px rgba(201,150,47,0.25)' }}>
            Two Hearts. One Journey.
            <br />
            25 Beautiful Years.
          </h2>

          <p className="font-script text-2xl sm:text-3xl mt-1.5 sm:mt-2 text-center" style={{ color: '#C0607A' }}>
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
              {/* Outer glow halo */}
              <div className="absolute -inset-3 rounded-3xl blur-lg opacity-50 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(201,150,47,0.40), rgba(192,96,122,0.35))' }} />

              <div className="relative rounded-3xl p-4 sm:p-5 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,252,248,0.98), rgba(255,236,245,0.95))',
                  border: '2px solid rgba(201,150,47,0.55)',
                  boxShadow: '0 20px 50px rgba(107,53,40,0.25), 0 0 30px rgba(201,150,47,0.20)',
                }}>
                <FloralCorner position="top-left" className="absolute top-2 left-2 w-8 h-8" style={{ color: 'rgba(201,150,47,0.70)' } as React.CSSProperties} />
                <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 w-8 h-8" style={{ color: 'rgba(201,150,47,0.70)' } as React.CSSProperties} />

                <div className="overflow-hidden rounded-2xl"
                  style={{ background: '#FFF8F2' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/couple-portrait.png`}
                    alt="Ritu and Dharmendra Rastogi 25 Years Journey"
                    className="w-full h-[300px] xs:h-[340px] sm:h-[380px] object-cover object-top filter saturate-[1.10] brightness-[1.03] hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="text-center pt-3 pb-1">
                  <p className="font-script text-2xl sm:text-3xl" style={{ color: '#6B3528' }}>
                    Ritu & Dharmendra
                  </p>
                  <p className="font-montserrat text-[11px] sm:text-xs uppercase tracking-widest font-medium mt-0.5" style={{ color: '#C0607A' }}>
                    2001 — 2026 · 25 Golden Years
                  </p>
                </div>
              </div>

              {/* Decorative Heart Badge */}
              <div className="absolute top-3 right-3 w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 shadow-md flex items-center justify-center z-10"
                style={{
                  background: 'linear-gradient(135deg, #FFF8F2, #FAD9E3)',
                  borderColor: 'rgba(201,150,47,0.70)',
                  boxShadow: '0 4px 14px rgba(192,96,122,0.35)',
                }}>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" style={{ color: '#C0607A' }} />
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
            <div className="space-y-3 sm:space-y-4 font-cormorant text-base sm:text-lg md:text-xl leading-relaxed text-center"
              style={{ color: 'rgba(107,53,40,0.92)' }}>
              {invitationData.journey.paragraphs.map((para, idx) => (
                <p key={idx} className="first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-script first-letter:mr-1 leading-relaxed"
                  style={{ '--tw-first-letter-color': '#C9962F' } as React.CSSProperties}>
                  {para}
                </p>
              ))}
            </div>

            {/* Romantic Quote Box — richer */}
            <div className="w-full p-5 sm:p-6 rounded-2xl text-center my-2 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(250,217,227,0.80), rgba(255,252,248,0.90), rgba(250,217,227,0.80))',
                border: '1.5px solid rgba(201,150,47,0.50)',
                boxShadow: '0 6px 24px rgba(192,96,122,0.18), inset 0 1px 0 rgba(201,150,47,0.20)',
              }}>
              {/* Decorative quote marks */}
              <span className="absolute top-1 left-3 font-script text-5xl opacity-20 leading-none select-none"
                style={{ color: '#C9962F' }}>"</span>
              <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-center leading-relaxed relative z-10"
                style={{ color: '#6B3528' }}>
                {invitationData.journey.quote}
              </p>
              <span className="absolute bottom-0 right-3 font-script text-5xl opacity-20 leading-none select-none"
                style={{ color: '#C9962F' }}>"</span>
            </div>

            {/* 25 Years Milestone Metric Pills — richer */}
            <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-4 pt-2 text-center">
              {[
                { value: '25', label: 'Years of Love' },
                { value: '300', label: 'Months of Grace' },
                { value: '9,131', label: 'Days Together' },
              ].map((m) => (
                <div key={m.label} className="p-3 sm:p-4 rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,252,248,0.97), rgba(255,232,240,0.90))',
                    border: '1.5px solid rgba(201,150,47,0.50)',
                    boxShadow: '0 4px 16px rgba(201,150,47,0.18)',
                  }}>
                  <div className="absolute inset-0 opacity-20"
                    style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,150,47,0.40) 0%, transparent 70%)' }} />
                  <span className="block font-cormorant font-bold text-2xl sm:text-3xl leading-tight relative z-10"
                    style={{ color: '#C9962F' }}>{m.value}</span>
                  <span className="font-montserrat text-[9px] sm:text-[11px] uppercase tracking-wider mt-0.5 block relative z-10"
                    style={{ color: 'rgba(107,53,40,0.85)' }}>{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
