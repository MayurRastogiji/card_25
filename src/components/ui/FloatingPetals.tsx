import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'petal' | 'sparkle';
}

export const FloatingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      'rgba(255,160,180,0.90)', // Vibrant cherry blossom pink
      'rgba(255,140,165,0.80)', // Deep pink
      'rgba(255,182,196,0.75)', // Medium pink
      'rgba(255,207,219,0.65)', // Soft pink
      'rgba(242,180,100,0.60)', // Gold petal
      'rgba(255,222,89,0.50)',  // Gold shimmer
    ];

    const petalCount = window.innerWidth < 768 ? 30 : 55;
    const petals: Petal[] = Array.from({ length: petalCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 11 + 5,
      speedY: Math.random() * 0.8 + 0.30,
      speedX: Math.random() * 0.7 - 0.35,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.4,
      opacity: Math.random() * 0.55 + 0.35,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      type: i < petalCount * 0.85 ? 'petal' : 'sparkle',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.007) * 0.7 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'sparkle') {
          // Draw a 4-pointed star sparkle
          const s = p.size * 0.7;
          ctx.beginPath();
          for (let k = 0; k < 4; k++) {
            const angle = (k * Math.PI) / 2;
            const outerX = Math.cos(angle) * s;
            const outerY = Math.sin(angle) * s;
            const innerX = Math.cos(angle + Math.PI / 4) * s * 0.3;
            const innerY = Math.sin(angle + Math.PI / 4) * s * 0.3;
            if (k === 0) {
              ctx.moveTo(outerX, outerY);
            } else {
              ctx.lineTo(innerX, innerY);
              ctx.lineTo(outerX, outerY);
            }
            ctx.lineTo(innerX, innerY);
          }
          ctx.closePath();
          ctx.fillStyle = 'rgba(237,213,122,0.80)';
          ctx.fill();
        } else {
          // Draw delicate organic petal shape
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(p.size * 0.75, -p.size * 0.55, p.size, 0);
          ctx.quadraticCurveTo(p.size * 0.75, p.size * 0.55, 0, 0);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Inner vein highlight
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.quadraticCurveTo(p.size * 0.5, 0, p.size * 0.85, 0);
          ctx.strokeStyle = 'rgba(255,255,255,0.35)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.92 }}
    />
  );
};

