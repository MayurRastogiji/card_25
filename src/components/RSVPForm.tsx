import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { invitationData } from '../data/invitation';
import { FloralDivider } from './ui/Ornaments';
import { Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface RSVPFormData {
  guestName: string;
  attendance: 'accept' | 'decline';
  guestCount: number;
  message: string;
}

export const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    attendance: 'accept',
    guestCount: 2,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'demo-saved' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if Supabase environment variables are provided
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const isBackendConfigured = Boolean(supabaseUrl && supabaseAnonKey);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.guestName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      if (isBackendConfigured) {
        const res = await fetch(`${supabaseUrl}/rest/v1/rsvps`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            name: formData.guestName,
            attending: formData.attendance === 'accept',
            guest_count: formData.guestCount,
            message: formData.message,
            created_at: new Date().toISOString(),
          }),
        });

        if (!res.ok) {
          throw new Error('Could not record RSVP in the database.');
        }

        setSubmitStatus('success');
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        const existing = JSON.parse(localStorage.getItem('anniversary_rsvps') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('anniversary_rsvps', JSON.stringify(existing));

        setSubmitStatus('demo-saved');
      }
    } catch (err: unknown) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-12 sm:py-20 md:py-24 px-3 xs:px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFF9F5] via-[#FCECEF]/80 to-[#FFF9F5]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF78]/40 mb-2.5 sm:mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
            <span className="font-montserrat text-[11px] sm:text-xs uppercase tracking-widest text-[#795044] font-semibold">
              R. S. V. P.
            </span>
          </div>

          <h2 className="font-cormorant text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold">
            {invitationData.rsvp.heading}
          </h2>

          <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#C98996] mt-1.5 sm:mt-2 max-w-xl mx-auto">
            {invitationData.rsvp.description}
          </p>

          <FloralDivider className="mt-3 sm:mt-4" />
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl sm:rounded-3xl bg-white p-4 xs:p-6 sm:p-10 md:p-12 shadow-card border-2 border-[#D4AF78]/40 relative overflow-hidden"
        >
          <div className="absolute inset-1.5 sm:inset-2.5 rounded-xl sm:rounded-2xl border border-dashed border-[#D4AF78]/25 pointer-events-none" />

          {/* Backend Status Notice */}
          {!isBackendConfigured && (
            <div className="mb-5 sm:mb-6 p-2.5 sm:p-3 rounded-xl bg-[#FFF9F5] border border-[#D4AF78]/30 flex items-center gap-2.5 text-[11px] sm:text-xs text-[#795044]/80">
              <AlertCircle className="w-4 h-4 text-[#D4AF78] shrink-0" />
              <span>
                <strong>Note:</strong> RSVPs are preserved locally in browser session storage if no remote database is configured.
              </span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {submitStatus === 'success' || submitStatus === 'demo-saved' ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4 px-2"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FCECEF] border-2 border-[#D4AF78] flex items-center justify-center mx-auto text-[#D4AF78]">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#795044]">
                  Thank You, {formData.guestName}!
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-[#795044]/80 max-w-md mx-auto">
                  {formData.attendance === 'accept'
                    ? 'We are overjoyed that you will be joining us for this momentous Silver Jubilee celebration!'
                    : 'We will truly miss your presence, but we warmly cherish your loving blessings.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-3 sm:mt-4 px-5 sm:px-6 py-2 rounded-full border border-[#D4AF78] text-[11px] sm:text-xs font-montserrat uppercase tracking-wider text-[#795044] hover:bg-[#FCECEF] transition-colors cursor-pointer"
                >
                  Edit Response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                {/* 1. Guest Name */}
                <div>
                  <label htmlFor="guestName" className="block font-montserrat text-[11px] sm:text-xs uppercase tracking-wider text-[#795044] font-semibold mb-1.5 sm:mb-2">
                    Your Full Name *
                  </label>
                  <input
                    id="guestName"
                    type="text"
                    required
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    placeholder="e.g., Rajesh & Sangeeta Sharma"
                    className="w-full px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-xl bg-[#F6DDE3]/40 border border-[#D4AF78]/40 focus:border-[#D4AF78] focus:bg-white focus:outline-none transition-all duration-200 text-[#795044] font-montserrat text-xs sm:text-sm placeholder:text-[#795044]/40"
                  />
                </div>

                {/* 2. Attendance Options */}
                <div>
                  <label className="block font-montserrat text-[11px] sm:text-xs uppercase tracking-wider text-[#795044] font-semibold mb-1.5 sm:mb-2">
                    Will You Be Joining Us? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <label
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.attendance === 'accept'
                          ? 'border-[#D4AF78] bg-[#FCECEF] shadow-xs'
                          : 'border-[#D4AF78]/30 bg-white hover:bg-[#FFF9F5]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="accept"
                        checked={formData.attendance === 'accept'}
                        onChange={() => setFormData({ ...formData, attendance: 'accept' })}
                        className="accent-[#D4AF78] w-4 h-4 cursor-pointer"
                      />
                      <span className="font-cormorant font-semibold text-base sm:text-lg text-[#795044]">
                        {invitationData.rsvp.options.accept}
                      </span>
                    </label>

                    <label
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border cursor-pointer transition-all ${
                        formData.attendance === 'decline'
                          ? 'border-[#D4AF78] bg-[#FCECEF] shadow-xs'
                          : 'border-[#D4AF78]/30 bg-white hover:bg-[#FFF9F5]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="attendance"
                        value="decline"
                        checked={formData.attendance === 'decline'}
                        onChange={() => setFormData({ ...formData, attendance: 'decline' })}
                        className="accent-[#D4AF78] w-4 h-4 cursor-pointer"
                      />
                      <span className="font-cormorant font-semibold text-base sm:text-lg text-[#795044]">
                        {invitationData.rsvp.options.decline}
                      </span>
                    </label>
                  </div>
                </div>

                {/* 3. Number of Guests */}
                {formData.attendance === 'accept' && (
                  <div>
                    <label htmlFor="guestCount" className="block font-montserrat text-[11px] sm:text-xs uppercase tracking-wider text-[#795044] font-semibold mb-1.5 sm:mb-2">
                      Number of Guests Attending
                    </label>
                    <select
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6DDE3]/40 border border-[#D4AF78]/40 focus:border-[#D4AF78] focus:bg-white focus:outline-none transition-all duration-200 text-[#795044] font-montserrat text-xs sm:text-sm cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* 4. Personal Warm Message */}
                <div>
                  <label htmlFor="message" className="block font-montserrat text-[11px] sm:text-xs uppercase tracking-wider text-[#795044] font-semibold mb-1.5 sm:mb-2">
                    Warm Wishes or Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Leave a heartfelt note or blessings for Ritu & Dharmendra..."
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6DDE3]/40 border border-[#D4AF78]/40 focus:border-[#D4AF78] focus:bg-white focus:outline-none transition-all duration-200 text-[#795044] font-montserrat text-xs sm:text-sm placeholder:text-[#795044]/40"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-rose-600 font-montserrat font-medium">
                    {errorMessage}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#D4AF78] via-[#C59B62] to-[#B88D4E] hover:from-[#B88D4E] hover:to-[#D4AF78] text-white shadow-xs hover:shadow-md transition-all duration-300 font-montserrat text-xs sm:text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting RSVP...</span>
                  ) : (
                    <>
                      <span>Confirm Attendance</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
