import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryItems, type GalleryItem } from '../data/gallery';
import { FloralDivider, FloralCorner } from './ui/Ornaments';
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const PhotoGallery: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const tags = ['All', 'Portraits', 'Moments', 'Keepsakes'];

  const filteredItems = selectedTag === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.tag === selectedTag);

  const activePhoto: GalleryItem | null =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activePhotoIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activePhotoIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCECEF] border border-[#D4AF78]/40 mb-3 shadow-xs mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF78]" />
            <span className="font-montserrat text-xs uppercase tracking-widest text-[#795044] font-semibold">
              Treasured Memories
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#795044] font-semibold text-center leading-tight">
            Moments Worth Celebrating
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-[#C98996] mt-2 max-w-lg mx-auto text-center">
            A visual reflection of twenty-five years of love, companionship, and blessings
          </p>

          <FloralDivider className="my-4 sm:my-5 mx-auto" />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setActivePhotoIndex(null);
                }}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-montserrat text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-[#D4AF78] to-[#B88D4E] text-white shadow-xs scale-105'
                    : 'bg-white/85 hover:bg-white text-[#795044]/80 border border-[#D4AF78]/35 hover:border-[#D4AF78]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid - Symmetrically Centered & Balanced */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center mb-0">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActivePhotoIndex(index)}
                className="group relative w-full max-w-sm rounded-3xl bg-white p-4 sm:p-5 shadow-card border-2 border-[#D4AF78]/35 hover:border-[#D4AF78] hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
              >
                <FloralCorner position="top-left" className="absolute top-2 left-2 w-9 h-9 text-[#D4AF78]/40 z-10 pointer-events-none" />
                <FloralCorner position="bottom-right" className="absolute bottom-2 right-2 w-9 h-9 text-[#D4AF78]/40 z-10 pointer-events-none" />

                <div className="relative overflow-hidden rounded-2xl h-[300px] xs:h-[340px] sm:h-[360px] bg-[#FFF9F5] flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 filter contrast-[1.02]"
                    loading="lazy"
                  />

                  {/* Elegant Golden Hover Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#795044]/85 via-[#795044]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-1.5">
                      <ZoomIn className="w-4 h-4 text-[#F3E3C3]" />
                      <span className="font-montserrat text-[10px] uppercase tracking-widest text-[#FCECEF]">
                        Tap to enlarge
                      </span>
                    </div>
                    <h4 className="font-cormorant font-bold text-xl leading-tight drop-shadow">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FFF9F5]/90 font-montserrat mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4 pb-2">
                  <h3 className="font-cormorant font-bold text-xl sm:text-2xl text-[#795044] truncate">
                    {item.title}
                  </h3>
                  <p className="font-montserrat text-xs text-[#C98996] mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#251A1E]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhotoIndex(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-3 sm:left-8 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-8 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Lightbox Center Card */}
            <motion.div
              key={activePhoto.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full max-h-[85vh] rounded-3xl bg-[#FFF9F5] p-4 sm:p-6 shadow-2xl border-2 border-[#D4AF78] overflow-hidden flex flex-col items-center text-center"
            >
              <div className="relative w-full max-h-[58vh] sm:max-h-[64vh] rounded-2xl overflow-hidden bg-[#FCECEF] flex items-center justify-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="max-h-[58vh] sm:max-h-[64vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="text-center pt-4 pb-2 px-3">
                <h3 className="font-cormorant font-bold text-2xl sm:text-3xl text-[#795044]">
                  {activePhoto.title}
                </h3>
                <p className="font-montserrat text-xs sm:text-sm text-[#795044]/80 mt-1 max-w-md mx-auto">
                  {activePhoto.caption}
                </p>
                <span className="font-montserrat text-xs text-[#C98996] mt-2 block font-medium">
                  {activePhotoIndex! + 1} of {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
