import React from 'react';

export const GaneshMotif: React.FC<{ className?: string; size?: number }> = ({
  className = "w-12 h-12 text-[#C9962F]",
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
          <stop offset="0%" stopColor="#EDD57A" />
          <stop offset="50%" stopColor="#C9962F" />
          <stop offset="100%" stopColor="#A0711A" />
        </linearGradient>
        <filter id="ganeshGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {/* Crown / Mukut */}
      <path
        d="M50 12 L56 26 L50 24 L44 26 Z"
        fill="url(#ganeshGold)"
        stroke="#A0711A"
        strokeWidth="1.2"
        filter="url(#ganeshGlow)"
      />
      <circle cx="50" cy="18" r="2.2" fill="#FFF8F2" />
      {/* Forehead & Tilak */}
      <path
        d="M42 28 C42 28 50 32 58 28"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 25 L50 35"
        stroke="#C0607A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="38" r="1.8" fill="#C0607A" />
      {/* Ears */}
      <path
        d="M38 32 C26 32 20 44 26 56 C30 62 38 60 40 54"
        stroke="url(#ganeshGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M62 32 C74 32 80 44 74 56 C70 62 62 60 60 54"
        stroke="url(#ganeshGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Eyes & Brow */}
      <path
        d="M41 42 Q45 40 47 43"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M59 42 Q55 40 53 43"
        stroke="url(#ganeshGold)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Trunk (Sond) curving gracefully to the left/modak */}
      <path
        d="M48 44 C48 52 47 62 43 68 C40 73 35 74 34 70 C33 66 38 64 41 65"
        stroke="url(#ganeshGold)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Modak (sweet in trunk) */}
      <circle cx="34" cy="65" r="3" fill="#C9962F" stroke="#A0711A" strokeWidth="1" />
      {/* Right tusk */}
      <path
        d="M56 50 L60 53"
        stroke="url(#ganeshGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Aura / Halo decorative dots */}
      <circle cx="50" cy="8" r="1.5" fill="#C9962F" opacity="0.9" />
      <circle cx="35" cy="18" r="1.2" fill="#C9962F" opacity="0.7" />
      <circle cx="65" cy="18" r="1.2" fill="#C9962F" opacity="0.7" />
    </svg>
  );
};

export const FloralDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1.5px] flex-1" style={{
        background: 'linear-gradient(to right, transparent, rgba(201,150,47,0.70), #C9962F)',
      }} />
      <div className="flex items-center gap-2" style={{ color: '#C9962F' }}>
        {/* Left mini diamond */}
        <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(201,150,47,0.60)' }} />
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" opacity="0.9" />
          <circle cx="12" cy="10" r="2.8" fill="#FAD9E3" stroke="#C9962F" strokeWidth="1.2" />
        </svg>
        {/* Right mini diamond */}
        <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(201,150,47,0.60)' }} />
      </div>
      <div className="h-[1.5px] flex-1" style={{
        background: 'linear-gradient(to left, transparent, rgba(201,150,47,0.70), #C9962F)',
      }} />
    </div>
  );
};

export const FloralCorner: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  style?: React.CSSProperties;
}> = ({ position, className = "w-16 h-16 text-[#C9962F]/50", style }) => {
  const rotation = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div className={`pointer-events-none transform ${rotation} ${className}`} style={style}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M10 10 L65 10 M10 10 L10 65"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 15 L48 15 M15 15 L15 48"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
          opacity="0.75"
        />
        <circle cx="10" cy="10" r="3.5" fill="currentColor" />
        {/* Floral petal 1 */}
        <path
          d="M20 20 Q37 13 42 32 Q25 37 20 20 Z"
          fill="#FAD9E3"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.80"
        />
        {/* Floral petal 2 */}
        <path
          d="M20 20 Q13 37 32 42 Q37 25 20 20 Z"
          fill="#F2C8D5"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.80"
        />
        {/* Center dot */}
        <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.70" />
        {/* Decorative small dots on lines */}
        <circle cx="38" cy="10" r="1.2" fill="currentColor" opacity="0.50" />
        <circle cx="10" cy="38" r="1.2" fill="currentColor" opacity="0.50" />
      </svg>
    </div>
  );
};

