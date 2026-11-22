import React, { useEffect, useRef } from 'react';

/**
 * Autonomous Ambient 3D Engine
 * Runs continuously in the background without needing user hover.
 * Renders floating petals, glowing stardust particles, floating hearts,
 * light rays, and rotating decorative flowers.
 */
export default function AutonomousAmbientEngine({ nightMode = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle types
    // 1. Petals (Soft pink/dusty rose floral petals)
    // 2. Sparkles/Stardust (Champagne gold)
    // 3. Floating Hearts (Blush & dusty rose)

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) return;

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;

    const petalCount = isMobile ? 15 : isTablet ? 25 : 45;
    const sparkleCount = isMobile ? 22 : isTablet ? 40 : 70;
    const heartCount = isMobile ? 7 : isTablet ? 12 : 20;

    class Petal {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 0.9 + 0.6;
        this.speedX = Math.random() * 1.2 - 0.4;
        this.angle = Math.random() * 360;
        this.angularSpeed = (Math.random() - 0.5) * 1.2;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = Math.random() * 0.03 + 0.01;
        this.color = nightMode 
          ? ['rgba(244, 165, 174, 0.5)', 'rgba(230, 202, 101, 0.4)', 'rgba(254, 205, 211, 0.4)'][Math.floor(Math.random() * 3)]
          : ['rgba(244, 165, 174, 0.65)', 'rgba(251, 207, 232, 0.7)', 'rgba(226, 169, 176, 0.6)'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.angle * 0.02) * 0.8 + this.speedX * 0.4;
        this.angle += this.angularSpeed;
        this.flip += this.flipSpeed;
        if (this.y > height + 20 || this.x > width + 30 || this.x < -30) {
          this.reset(false);
        }
      }
      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate((this.angle * Math.PI) / 180);
        c.scale(1, Math.sin(this.flip));
        c.beginPath();
        c.moveTo(0, 0);
        c.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
        c.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
      }
    }

    class Sparkle {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.radius = Math.random() * 2.2 + 0.8;
        this.speedY = -(Math.random() * 0.7 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.alphaSpeed = Math.random() * 0.02 + 0.008;
        this.color = nightMode ? '255, 240, 180' : '230, 202, 101';
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.alpha += this.alphaSpeed;
        if (this.alpha > 0.95 || this.alpha < 0.15) {
          this.alphaSpeed = -this.alphaSpeed;
        }
        if (this.y < -10) {
          this.reset(false);
        }
      }
      draw(c) {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = `rgba(${this.color}, ${Math.max(0, this.alpha)})`;
        c.shadowBlur = 8;
        c.shadowColor = `rgba(${this.color}, 0.8)`;
        c.fill();
        c.restore();
      }
    }

    class FloatingHeart {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.size = Math.random() * 10 + 6;
        this.speedY = -(Math.random() * 0.8 + 0.4);
        this.speedX = Math.random() * 0.6 - 0.3;
        this.angle = (Math.random() - 0.5) * 20;
        this.alpha = Math.random() * 0.4 + 0.25;
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.02) * 0.5 + this.speedX;
        if (this.y < -30) {
          this.reset(false);
        }
      }
      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate((this.angle * Math.PI) / 180);
        c.scale(this.size / 15, this.size / 15);
        c.beginPath();
        c.moveTo(0, 0);
        c.bezierCurveTo(-5, -5, -10, 0, 0, 10);
        c.bezierCurveTo(10, 0, 5, -5, 0, 0);
        c.fillStyle = nightMode ? `rgba(244, 165, 174, ${this.alpha})` : `rgba(226, 169, 176, ${this.alpha})`;
        c.fill();
        c.restore();
      }
    }

    const petals = Array.from({ length: petalCount }, () => new Petal());
    const sparkles = Array.from({ length: sparkleCount }, () => new Sparkle());
    const hearts = Array.from({ length: heartCount }, () => new FloatingHeart());

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Render ambient particles
        sparkles.forEach((s) => {
          s.update();
          s.draw(ctx);
        });
        hearts.forEach((h) => {
          h.update();
          h.draw(ctx);
        });
        petals.forEach((p) => {
          p.update();
          p.draw(ctx);
        });
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [nightMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic light rays */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-40 animate-pulse-subtle"
        style={{
          background: nightMode 
            ? 'radial-gradient(circle, rgba(230, 202, 101, 0.25) 0%, rgba(192, 128, 129, 0.1) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(251, 207, 232, 0.6) 0%, rgba(243, 229, 171, 0.3) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none opacity-30"
        style={{
          background: nightMode
            ? 'radial-gradient(circle, rgba(192, 128, 129, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(254, 205, 211, 0.5) 0%, rgba(230, 202, 101, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Floating rotating floral watermark accents in corners */}
      <div className="absolute -top-12 -right-12 w-64 h-64 opacity-25 pointer-events-none animate-float-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-dusty-light animate-[spin_60s_linear_infinite]">
          <path d="M50 0 C55 25 75 25 100 25 C75 35 75 55 75 80 C65 60 45 65 35 85 C35 60 15 55 0 50 C25 45 25 25 25 0 C35 25 45 25 50 0 Z" />
        </svg>
      </div>

      <div className="absolute bottom-10 -left-16 w-72 h-72 opacity-20 pointer-events-none animate-float-reverse">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-pastel-rose animate-[spin_75s_linear_infinite]">
          <path d="M50 15 C60 28 85 20 85 35 C85 55 65 55 65 75 C45 65 35 78 25 65 C15 55 35 45 20 35 C35 25 40 15 50 15 Z" />
        </svg>
      </div>

      {/* Main autonomous particle canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
