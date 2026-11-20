import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { eventConfig } from '../../config/eventConfig';

interface LightboxProps {
  src: string;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ src, index, total, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-inter text-xs tracking-widest uppercase z-20"
          style={{ color: 'rgba(198,170,117,0.7)' }}
        >
          ✕ CLOSE
        </button>

        {/* Image */}
        <motion.div
          key={src}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="polaroid-frame mx-auto"
          style={{ maxWidth: '90vw' }}
        >
          <img
            src={src}
            alt={`Memory ${index + 1}`}
            className="w-full block"
            style={{ maxHeight: '70vh', objectFit: 'contain' }}
          />
          <div className="text-center mt-2">
            <span className="font-script" style={{ color: '#8A8A8A', fontSize: '1.1rem' }}>
              Memory {index + 1} of {total}
            </span>
          </div>
        </motion.div>

        {/* Prev / Next */}
        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 btn-outline w-10 h-10 rounded-full flex items-center justify-center text-lg"
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 btn-outline w-10 h-10 rounded-full flex items-center justify-center text-lg"
              aria-label="Next photo"
            >
              ›
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

// Placeholder gradient colors for empty slots
const placeholderGradients = [
  'linear-gradient(135deg, #FAF9F6, #E5E4E2)',
  'linear-gradient(135deg, #F0EEE8, #D8D8D8)',
  'linear-gradient(135deg, #E8E6DF, #BFC3C7)',
  'linear-gradient(135deg, #F5F3ED, #E5E4E2)',
  'linear-gradient(135deg, #EBE8E1, #D0CEC9)',
  'linear-gradient(135deg, #F8F6F1, #DDDBD5)',
];

function GalleryCard({
  src,
  index,
  tilt,
  onClick,
}: {
  src: string;
  index: number;
  tilt: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const isPlaceholder = src.startsWith('/assets/images/photo-');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: tilt * 0.5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: tilt } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 10, transition: { duration: 0.2 } }}
      className="polaroid-frame cursor-pointer flex-shrink-0"
      style={{ width: 'clamp(160px, 40vw, 220px)' }}
      onClick={onClick}
    >
      {isPlaceholder ? (
        // Placeholder for missing photos
        <div
          style={{
            width: '100%',
            paddingBottom: '75%',
            background: placeholderGradients[index % placeholderGradients.length],
            position: 'relative',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
            <span style={{ color: 'rgba(198,170,117,0.4)', fontSize: 32 }}>✿</span>
            <p className="font-cormorant italic text-xs" style={{ color: '#8A8A8A', fontSize: '0.75rem' }}>
              Your memory here
            </p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={`Memory ${index + 1}`}
          loading="lazy"
          style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
        />
      )}
      <div className="text-center pt-2 pb-1">
        <span className="font-script" style={{ color: '#8A8A8A', fontSize: '1rem' }}>
          Memory #{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

// Pre-calculate tilts for consistent rendering
const GALLERY_TILTS = Array.from({ length: 50 }, (_, i) =>
  ((i % 7) - 3) * 1.2
);

export default function MemoryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { gallery } = eventConfig;

  // Infinite loop: duplicate items for seamless scroll
  const loopedGallery = [...gallery, ...gallery, ...gallery];

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));
  }, [gallery.length]);

  // Auto-scroll the gallery
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const scroll = () => {
      pos += speed;
      // Reset to start of second copy for seamless loop
      const singleWidth = el.scrollWidth / 3;
      if (pos >= singleWidth * 2) pos = singleWidth;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(scroll); };
    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #FAF9F6 0%, #F5F3ED 100%)' }}
      >
        {/* Background decorative pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #303238 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 flex flex-col gap-10">
          {/* Section heading */}
          <div className="px-6 flex flex-col items-center gap-4 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="font-inter text-xs tracking-[0.4em] uppercase"
              style={{ color: 'rgba(198,170,117,0.8)' }}
            >
              ✦ &nbsp; Cherished Moments &nbsp; ✦
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-playfair"
              style={{ color: '#303238', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 500 }}
            >
              23 Years, A Thousand Beautiful Memories
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="ornament-line w-32"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-cormorant italic"
              style={{ color: '#8A8A8A', fontSize: '1rem', maxWidth: 420 }}
            >
              Every photograph holds a story. Every smile, a lifetime of love.
            </motion.p>
          </div>

          {/* Auto-scrolling infinite gallery */}
          <div
            ref={scrollRef}
            className="flex gap-5 px-8 overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: 'grab',
            }}
          >
            {loopedGallery.map((src, i) => (
              <GalleryCard
                key={`${src}-${i}`}
                src={src}
                index={i % gallery.length}
                tilt={GALLERY_TILTS[i % GALLERY_TILTS.length]}
                onClick={() => setLightboxIndex(i % gallery.length)}
              />
            ))}
          </div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center font-inter px-6"
            style={{ color: '#8A8A8A', fontSize: '0.75rem' }}
          >
            Click any photo to view · Add your photos to{' '}
            <code style={{ color: '#C6AA75' }}>public/assets/images/</code>
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            src={gallery[lightboxIndex]}
            index={lightboxIndex}
            total={gallery.length}
            onClose={() => setLightboxIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
