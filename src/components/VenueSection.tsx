import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider } from './ui/Ornaments';
import { MapPin, Navigation, Sparkles, Building2 } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FCECEF]/60 to-[#FFF9F5] flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
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
              Location & Directions
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold text-center w-full mx-auto leading-tight">
            Join Us for the Celebration
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#C98996] mt-2 max-w-lg mx-auto text-center">
            We eagerly await your gracious presence
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />
        </motion.div>

        {/* Symmetrical 2-Column Balanced Venue Card & Interactive Map */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch justify-items-center mb-0">
          {/* Venue Details Left Card - Rich with Venue Photo */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-3xl bg-white p-5 sm:p-7 shadow-card border-2 border-[#D4AF78]/40 flex flex-col justify-between items-center text-center group"
          >
            <div className="flex flex-col items-center justify-center text-center w-full">
              {/* Venue Photograph with Luxury Gold Border & Tag */}
              <div className="relative w-full h-44 sm:h-50 rounded-2xl overflow-hidden mb-4 border-2 border-[#D4AF78]/40 shadow-sm bg-[#FFF9F5]">
                <img
                  src="/images/venue-le-grande.jpg"
                  alt="Le Grande Banquet Meerut"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#795044]/80 via-transparent to-transparent flex items-end justify-between p-3.5 text-white">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[#795044] border border-[#D4AF78]/50 shadow-xs">
                    <Building2 className="w-3 h-3 text-[#D4AF78]" />
                    <span className="font-montserrat text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                      Grand Banquet Hall
                    </span>
                  </div>
                  <span className="font-cormorant italic text-xs sm:text-sm text-[#FFF9F5] drop-shadow-sm">
                    Meerut, UP
                  </span>
                </div>
              </div>

              {/* Venue Info */}
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <MapPin className="w-4 h-4 text-[#D4AF78]" />
                <span className="font-montserrat text-[11px] uppercase tracking-[0.25em] text-[#C98996] font-semibold">
                  Official Venue
                </span>
              </div>

              <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#795044] mb-1.5 leading-tight text-center">
                {invitationData.venue.name}
              </h3>

              <div className="space-y-0.5 text-[#795044]/90 text-xs sm:text-sm mb-3.5 font-medium text-center">
                <p>{invitationData.venue.addressLine1}</p>
                <p>{invitationData.venue.addressLine2}</p>
              </div>

              <div className="w-full p-2.5 rounded-xl bg-[#FFF9F5] border border-[#D4AF78]/30 mb-4 text-center">
                <p className="font-montserrat text-[11px] sm:text-xs text-[#795044]/80 leading-relaxed text-center">
                  Valet parking and warm hospitality await all our esteemed family and friends.
                </p>
              </div>
            </div>

            {/* Direct Google Maps Directions Button */}
            <a
              href={invitationData.venue.mapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF78] to-[#B88D4E] hover:from-[#B88D4E] hover:to-[#D4AF78] text-[#FFF9F5] shadow-xs hover:shadow-md transition-all duration-300 font-montserrat text-xs uppercase tracking-widest font-semibold cursor-pointer mx-auto"
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
            className="w-full rounded-3xl bg-white p-3 sm:p-4 shadow-card border-2 border-[#D4AF78]/40 overflow-hidden flex flex-col min-h-[400px] sm:min-h-[440px]"
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#FCECEF]">
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
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-[#D4AF78]/40 shadow-xs flex items-center gap-2 max-w-[90%]">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF78] shrink-0" />
                <span className="font-cormorant font-bold text-xs sm:text-sm text-[#795044] truncate">
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
