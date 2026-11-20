interface FloralDecorationProps {
  position?: 'top' | 'bottom';
  variant?: 'gold' | 'silver';
  className?: string;
}

export default function FloralDecoration({
  position = 'top',
  variant = 'gold',
  className = '',
}: FloralDecorationProps) {
  const color = variant === 'gold' ? '#C6AA75' : '#BFC3C7';
  const colorFaint = variant === 'gold' ? 'rgba(198,170,117,0.3)' : 'rgba(191,195,199,0.3)';

  return (
    <div
      className={`w-full flex justify-center pointer-events-none ${className}`}
      style={{ transform: position === 'bottom' ? 'scaleY(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 600 60"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', maxWidth: 600, height: 60, display: 'block' }}
      >
        {/* Center ornament */}
        <circle cx="300" cy="30" r="6" fill="none" stroke={color} strokeWidth="1" />
        <circle cx="300" cy="30" r="2" fill={color} />

        {/* Main horizontal lines */}
        <line x1="50" y1="30" x2="260" y2="30" stroke={colorFaint} strokeWidth="0.8" />
        <line x1="340" y1="30" x2="550" y2="30" stroke={colorFaint} strokeWidth="0.8" />

        {/* Left side decorations */}
        <circle cx="250" cy="30" r="3" fill={colorFaint} />
        <circle cx="230" cy="30" r="2" fill={colorFaint} />
        <circle cx="210" cy="30" r="1.5" fill={colorFaint} />

        {/* Left floral motif */}
        <g opacity="0.7">
          <ellipse cx="140" cy="30" rx="12" ry="6" fill="none" stroke={color} strokeWidth="0.8" />
          <ellipse cx="140" cy="30" rx="6" ry="12" fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="140" cy="30" r="2.5" fill={color} opacity="0.4" />
        </g>

        {/* Right side decorations */}
        <circle cx="350" cy="30" r="3" fill={colorFaint} />
        <circle cx="370" cy="30" r="2" fill={colorFaint} />
        <circle cx="390" cy="30" r="1.5" fill={colorFaint} />

        {/* Right floral motif */}
        <g opacity="0.7">
          <ellipse cx="460" cy="30" rx="12" ry="6" fill="none" stroke={color} strokeWidth="0.8" />
          <ellipse cx="460" cy="30" rx="6" ry="12" fill="none" stroke={color} strokeWidth="0.8" />
          <circle cx="460" cy="30" r="2.5" fill={color} opacity="0.4" />
        </g>

        {/* Far ends */}
        <circle cx="60" cy="30" r="3" fill={colorFaint} />
        <circle cx="540" cy="30" r="3" fill={colorFaint} />

        {/* Small leaf accents */}
        <path d="M 80 30 Q 90 20 100 30 Q 90 40 80 30" fill={colorFaint} />
        <path d="M 500 30 Q 510 20 520 30 Q 510 40 500 30" fill={colorFaint} />

        {/* Diamond accents */}
        <rect x="171" y="27" width="6" height="6" fill={colorFaint} transform="rotate(45 174 30)" />
        <rect x="421" y="27" width="6" height="6" fill={colorFaint} transform="rotate(45 424 30)" />
      </svg>
    </div>
  );
}
