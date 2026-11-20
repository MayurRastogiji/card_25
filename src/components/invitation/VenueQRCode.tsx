import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Navigation2 } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig';

export default function VenueQRCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { venue } = eventConfig;

  const hasMapsUrl = venue.mapsUrl && venue.mapsUrl.trim().length > 0;

  return (
    <section
      ref={ref}
      className="relative py-20 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF9F6 0%, #F5F3ED 100%)' }}
    >
      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center gap-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="font-inter text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(198,170,117,0.8)' }}>
            ✦ &nbsp; Find Us &nbsp; ✦
          </p>
          <h2
            className="font-playfair"
            style={{ color: '#303238', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 500 }}
          >
            Venue Location
          </h2>
          <p className="font-cormorant italic" style={{ color: '#6B6B6B', fontSize: '1.05rem' }}>
            {venue.name}
          </p>
          <div className="ornament-line w-24" />
        </motion.div>

        {/* QR Code panel */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-card-light p-8 w-full max-w-xs flex flex-col items-center gap-5"
        >
          {/* QR image */}
          <div
            className="relative p-3 bg-white rounded-lg"
            style={{
              border: '2px solid rgba(198,170,117,0.3)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={venue.qrImage}
              alt="Venue QR Code — Scan to find Le Grande on Google Maps"
              width={200}
              height={200}
              style={{
                display: 'block',
                width: 200,
                height: 200,
                objectFit: 'contain',
              }}
              onError={(e) => {
                // Show placeholder if QR not found
                const target = e.currentTarget;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            {/* QR placeholder (shown if image fails) */}
            <div
              className="w-[200px] h-[200px] items-center justify-center flex-col gap-3 text-center"
              style={{ display: 'none' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'rgba(198,170,117,0.1)',
                  border: '1px dashed rgba(198,170,117,0.4)',
                }}
              >
                <Navigation2 size={24} style={{ color: '#C6AA75' }} />
              </div>
              <p className="font-inter text-xs" style={{ color: '#8A8A8A' }}>
                Add QR image to<br />
                <code style={{ fontSize: '0.65rem', color: '#C6AA75' }}>public/assets/qr/venue-qr.png</code>
              </p>
            </div>
          </div>

          {/* Caption */}
          <p
            className="font-inter tracking-widest uppercase"
            style={{ color: '#8A8A8A', fontSize: '0.65rem', letterSpacing: '0.3em' }}
          >
            SCAN TO FIND THE VENUE
          </p>

          {/* Get Directions button */}
          {hasMapsUrl ? (
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 rounded-sm w-full flex items-center justify-center gap-2 no-underline"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em' }}
            >
              <Navigation2 size={14} />
              GET DIRECTIONS
            </a>
          ) : (
            <div className="w-full flex flex-col items-center gap-2">
              <button
                disabled
                className="btn-outline px-8 py-3 rounded-sm w-full flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                style={{ fontSize: '0.7rem', letterSpacing: '0.25em' }}
              >
                <Navigation2 size={14} />
                GET DIRECTIONS
              </button>
              <p className="font-inter" style={{ fontSize: '0.65rem', color: '#8A8A8A' }}>
                Add Maps URL in <code style={{ color: '#C6AA75' }}>eventConfig.ts → venue.mapsUrl</code>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
