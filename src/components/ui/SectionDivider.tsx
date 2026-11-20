interface SectionDividerProps {
  variant?: 'dark' | 'light';
}

export default function SectionDivider({ variant = 'dark' }: SectionDividerProps) {
  const bgColor = variant === 'dark' ? '#1A1B1F' : '#FAF9F6';
  const lineColor = variant === 'dark' ? 'rgba(198,170,117,0.2)' : 'rgba(198,170,117,0.3)';
  const dotColor = variant === 'dark' ? 'rgba(198,170,117,0.4)' : '#C6AA75';

  return (
    <div
      className="relative flex items-center justify-center py-2"
      style={{ background: bgColor }}
    >
      <div className="flex items-center gap-3 w-full max-w-sm px-6">
        <div className="flex-1 h-px" style={{ background: lineColor }} />
        <div className="flex gap-2 items-center">
          <div className="w-1 h-1 rounded-full" style={{ background: dotColor }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: dotColor }} />
          <div className="w-1 h-1 rounded-full" style={{ background: dotColor }} />
        </div>
        <div className="flex-1 h-px" style={{ background: lineColor }} />
      </div>
    </div>
  );
}
