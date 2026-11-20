import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Heart, Sparkles, Image as ImageIcon } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

export default function SaveTheDateCalendar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [imageError, setImageError] = useState(false);

  const { saveTheDate } = eventConfig;

  // Calendar days of November 2026
  // Nov 1, 2026 is Sunday
  // November has 30 days
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const novemberDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <section
      ref={ref}
      id="save-the-date"
      className="relative py-16 px-4 md:px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FCE4EC 0%, #FFF5F8 50%, #FFFFFF 100%)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(248,187,208,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-300 bg-white/80 shadow-sm">
            <Calendar size={14} className="text-[#D48C9E]" />
            <span className="font-inter text-xs tracking-[0.25em] uppercase font-semibold text-[#B76E79]">
              ✦ Save The Date ✦
            </span>
          </div>

          <h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-medium mt-1"
            style={{ color: '#2E2428' }}
          >
            {saveTheDate.heading}
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-[#644D56] max-w-md">
            {saveTheDate.subheading}
          </p>

          <div className="flex items-center gap-4 w-48 mt-2">
            <div className="ornament-line flex-1" />
            <Heart size={14} className="text-[#F48FB1] fill-[#F48FB1]" />
            <div className="ornament-line flex-1" />
          </div>
        </motion.div>

        {/* Dedicated Space for Calendar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full max-w-md relative group"
        >
          {/* Decorative frame shadow */}
          <div
            className="absolute -inset-2 rounded-3xl opacity-70 blur-xl transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, #F8BBD0, #F48FB1, #FFF0F5)',
            }}
          />

          <div
            className="relative bg-white rounded-3xl p-6 md:p-8 border border-pink-200/80 shadow-xl overflow-hidden"
            style={{
              boxShadow: '0 20px 50px -10px rgba(212, 140, 158, 0.25)',
            }}
          >
            {/* If user provided calendar image exists and loads, show it */}
            {!imageError ? (
              <div className="flex flex-col items-center">
                <img
                  src={saveTheDate.calendarImage}
                  alt="Save The Date Calendar - 26 November 2026"
                  onError={() => setImageError(true)}
                  className="w-full rounded-2xl object-contain max-h-[460px] shadow-sm border border-pink-100"
                />
                <p className="font-inter text-xs text-[#B76E79] tracking-wider mt-4 font-medium uppercase">
                  {saveTheDate.markedDateText}
                </p>
              </div>
            ) : (
              /* Fallback: Elegant Styled November 2026 Calendar with 26th circled */
              <div className="flex flex-col items-center">
                {/* Calendar Header */}
                <div className="w-full pb-4 mb-4 border-b border-pink-100 flex items-center justify-between">
                  <div className="text-left">
                    <span className="font-inter text-[11px] font-bold tracking-[0.2em] text-[#B76E79] uppercase block">
                      Save The Date
                    </span>
                    <h3 className="font-playfair text-2xl font-bold text-[#2E2428]">
                      November 2026
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center border border-pink-200">
                    <Sparkles size={18} className="text-[#D48C9E]" />
                  </div>
                </div>

                {/* Day of Week Header */}
                <div className="grid grid-cols-7 gap-1 md:gap-2 w-full text-center mb-2">
                  {daysOfWeek.map((day, idx) => (
                    <div
                      key={idx}
                      className="font-inter text-xs font-bold text-[#B76E79] py-1"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1.5 md:gap-2 w-full text-center">
                  {novemberDays.map((day) => {
                    const isMarkedDate = day === 26;
                    return (
                      <div
                        key={day}
                        className={`relative aspect-square flex items-center justify-center rounded-xl text-sm font-medium transition-all ${
                          isMarkedDate
                            ? 'bg-gradient-to-br from-[#F48FB1] to-[#D48C9E] text-white font-bold shadow-lg scale-110 z-10'
                            : 'text-[#4A3B42] hover:bg-pink-50/60'
                        }`}
                      >
                        {isMarkedDate && (
                          <>
                            {/* Animated ring around 26th */}
                            <motion.span
                              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 rounded-xl border-2 border-[#D48C9E]"
                            />
                            <Heart
                              size={10}
                              className="absolute -top-1.5 -right-1.5 text-white fill-white"
                            />
                          </>
                        )}
                        <span>{day}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Event Marker Footer */}
                <div className="mt-6 pt-4 border-t border-pink-100 w-full flex flex-col items-center gap-1">
                  <div className="flex items-center gap-2 text-[#2E2428]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F48FB1]" />
                    <span className="font-playfair text-base font-semibold">
                      Thursday, 26th November 2026
                    </span>
                  </div>
                  <p className="font-inter text-xs text-[#B76E79] tracking-wider uppercase">
                    25th Silver Jubilee Anniversary Celebration
                  </p>
                </div>

                {/* User insertion hint space */}
                <div className="mt-4 p-2.5 rounded-xl bg-pink-50/80 border border-dashed border-pink-300 w-full flex items-center justify-center gap-2">
                  <ImageIcon size={14} className="text-[#D48C9E]" />
                  <span className="font-inter text-[11px] text-[#644D56]">
                    Photo space ready: Place custom calendar at <code className="text-[#B76E79]">/public/assets/images/save-the-date-calendar.png</code>
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
