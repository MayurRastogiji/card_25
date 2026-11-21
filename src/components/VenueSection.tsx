import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider } from './ui/Ornaments';
import { MapPin, Navigation, Sparkles, Building2 } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center"
      style={{
        background: 'linear-gradient(170deg, #FFF8F2 0%, #3D2318 30%, #6B3528 65%, #FFF8F2 100%)',
      }}
    >
      {/* Dark rich background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(170deg, #FFF8F2 0%, #4A2219 20%, #6B3528 65%, #FFF8F2 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(201,150,47,0.70) 0%, transparent 65%)' }} />
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
              background: 'rgba(255,248,242,0.12)',
              border: '1.5px solid rgba(201,150,47,0.70)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(201,150,47,0.30)',
            }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#EDD57A' }} />
            <span className="font-montserrat text-xs uppercase tracking-widest font-semibold" style={{ color: '#EDD57A' }}>
              Location & Directions
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-center w-full mx-auto leading-tight"
            style={{ color: '#F7E498', textShadow: '0 2px 20px rgba(201,150,47,0.50)' }}>
            Join Us for the Celebration
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg mt-2 max-w-lg mx-auto text-center"
            style={{ color: 'rgba(242,200,213,0.90)' }}>
            We eagerly await your gracious presence
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Symmetrical 2-Column Balanced Venue Card & Interactive Map */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch justify-items-center mb-0">
          {/* Venue Details Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-3xl p-5 sm:p-7 flex flex-col justify-between items-center text-center group transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'linear-gradient(145deg, rgba(255,252,248,0.14), rgba(255,236,245,0.10))',
              border: '1.5px solid rgba(201,150,47,0.65)',
              boxShadow: '0 20px 50px rgba(107,53,40,0.45), 0 0 30px rgba(201,150,47,0.20)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <div className="flex flex-col items-center justify-center text-center w-full">
              {/* Venue Photograph */}
              <div className="relative w-full h-44 sm:h-50 rounded-2xl overflow-hidden mb-4 shadow-sm"
                style={{
                  border: '2px solid rgba(201,150,47,0.60)',
                  background: '#FFF8F2',
                  boxShadow: '0 8px 24px rgba(107,53,40,0.40)',
                }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/venue-le-grande.jpg`}
                  alt="Le Grande Banquet Meerut"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[1.04] saturate-[1.08]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-between p-3.5 text-white"
                  style={{ background: 'linear-gradient(to top, rgba(61,35,24,0.90), transparent)' }}>
                  <div className="flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-0.5 rounded-full border shadow-xs"
                    style={{
                      background: 'rgba(255,248,242,0.92)',
                      borderColor: 'rgba(201,150,47,0.60)',
                      color: '#6B3528',
                    }}>
                    <Building2 className="w-3 h-3" style={{ color: '#C9962F' }} />
                    <span className="font-montserrat text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                      Grand Banquet Hall
                    </span>
                  </div>
                  <span className="font-cormorant italic text-xs sm:text-sm drop-shadow-sm" style={{ color: '#F7E498' }}>
                    Meerut, UP
                  </span>
                </div>
              </div>

              {/* Venue Info */}
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <MapPin className="w-4 h-4" style={{ color: '#EDD57A' }} />
                <span className="font-montserrat text-[11px] uppercase tracking-[0.25em] font-semibold" style={{ color: '#FAD9E3' }}>
                  Official Venue
                </span>
              </div>

              <h3 className="font-cormorant font-bold text-2xl sm:text-3xl mb-1.5 leading-tight text-center"
                style={{ color: '#F7E498', textShadow: '0 2px 10px rgba(201,150,47,0.50)' }}>
                {invitationData.venue.name}
              </h3>

              <div className="space-y-0.5 text-xs sm:text-sm mb-3.5 font-medium text-center"
                style={{ color: 'rgba(255,248,242,0.85)' }}>
                <p>{invitationData.venue.addressLine1}</p>
                <p>{invitationData.venue.addressLine2}</p>
              </div>

              <div className="w-full p-2.5 rounded-xl mb-4 text-center"
                style={{
                  background: 'rgba(255,248,242,0.10)',
                  border: '1px solid rgba(201,150,47,0.40)',
                }}>
                <p className="font-montserrat text-[11px] sm:text-xs leading-relaxed text-center"
                  style={{ color: 'rgba(255,248,242,0.80)' }}>
                  Valet parking and warm hospitality await all our esteemed family and friends.
                </p>
              </div>
            </div>

            {/* Directions Button — golden */}
            <a
              href={invitationData.venue.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl font-montserrat text-xs uppercase tracking-widest font-semibold cursor-pointer mx-auto transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #EDD57A, #C9962F)',
                color: '#3D2318',
                boxShadow: '0 6px 20px rgba(201,150,47,0.50)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #F7E498, #EDD57A)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #EDD57A, #C9962F)')}
            >
              <Navigation className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              <span>Get Directions</span>
            </a>
          </motion.div>

          {/* Interactive Google Map Preview Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-3xl p-3 sm:p-4 overflow-hidden flex flex-col min-h-[400px] sm:min-h-[440px]"
            style={{
              background: 'rgba(255,248,242,0.10)',
              border: '1.5px solid rgba(201,150,47,0.65)',
              boxShadow: '0 20px 50px rgba(107,53,40,0.45)',
              backdropFilter: 'blur(14px)',
            }}
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden"
              style={{ background: '#FAD9E3' }}>
              <iframe
                title="Le Grande Banquet Location Map"
                src={invitationData.venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl filter saturate-[1.1] contrast-[1.02]"
              />

              {/* Floating Map Pin Overlay Banner */}
              <div className="absolute top-3 left-3 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border flex items-center gap-2 max-w-[90%]"
                style={{
                  background: 'rgba(255,252,248,0.95)',
                  borderColor: 'rgba(201,150,47,0.55)',
                  boxShadow: '0 4px 14px rgba(107,53,40,0.25)',
                }}>
                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: '#C9962F' }} />
                <span className="font-cormorant font-bold text-xs sm:text-sm truncate" style={{ color: '#6B3528' }}>
                  Le Grande Banquet · Rithani
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

