import React from 'react';

export const GaneshMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-[#D4AF78]",
  size = 48,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lord Ganesha Motif"
    >
      <defs>
        <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E3C3" />
          <stop offset="50%" stopColor="#D4AF78" />
          <stop offset="100%" stopColor="#B88D4E" />
        </linearGradient>
      </defs>
      {/* Crown / Mukut */}
      <path
        d="M50 12 L56 26 L50 24 L44 26 Z"
        fill="url(#ganeshGold)"
        stroke="#B88D4E"
        strokeWidth="1.2"
      />
      <circle cx="50" cy="18" r="2" fill="#FFF9F5" />
      {/* Forehead & Tilak */}
      <path
        d="M42 28 C42 28 50 32 58 28"
        stroke="url(#ganeshGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M50 25 L50 35"
        stroke="#C98996"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="38" r="1.5" fill="#C98996" />
      {/* Ears */}
      <path
        d="M38 32 C26 32 20 44 26 56 C30 62 38 60 40 54"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 32 C74 32 80 44 74 56 C70 62 62 60 60 54"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyes & Brow */}
      <path
        d="M41 42 Q45 40 47 43"
        stroke="url(#ganeshGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M59 42 Q55 40 53 43"
        stroke="url(#ganeshGold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Trunk (Sond) curving gracefully to the left/modak */}
      <path
        d="M48 44 C48 52 47 62 43 68 C40 73 35 74 34 70 C33 66 38 64 41 65"
        stroke="url(#ganeshGold)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Modak (sweet in trunk) */}
      <circle cx="34" cy="65" r="2.5" fill="#D4AF78" stroke="#B88D4E" strokeWidth="1" />
      {/* Right tusk */}
      <path
        d="M56 50 L60 53"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Aura / Halo decorative dots */}
      <circle cx="50" cy="8" r="1.2" fill="#D4AF78" opacity="0.8" />
      <circle cx="35" cy="18" r="1" fill="#D4AF78" opacity="0.6" />
      <circle cx="65" cy="18" r="1" fill="#D4AF78" opacity="0.6" />
    </svg>
  );
};

export const FloralDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF78]/60 to-[#D4AF78]" />
      <div className="flex items-center gap-1.5 text-[#D4AF78]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" opacity="0.8" />
          <circle cx="12" cy="10" r="2.5" fill="#FCECEF" stroke="#D4AF78" strokeWidth="1" />
        </svg>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF78]/60 to-[#D4AF78]" />
    </div>
  );
};

export const FloralCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position, className = "w-16 h-16 text-[#D4AF78]/40" }) => {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`pointer-events-none transform ${rotation} ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M10 10 L60 10 M10 10 L10 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M15 15 L45 15 M15 15 L15 45"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 3"
        />
        <circle cx="10" cy="10" r="3" fill="#D4AF78" />
        <path
          d="M20 20 Q35 15 40 30 Q25 35 20 20 Z"
          fill="#F6DDE3"
          stroke="#D4AF78"
          strokeWidth="0.8"
          opacity="0.7"
        />
        <path
          d="M20 20 Q15 35 30 40 Q35 25 20 20 Z"
          fill="#FCECEF"
          stroke="#D4AF78"
          strokeWidth="0.8"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};
