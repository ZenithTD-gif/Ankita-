/**
 * Magical Flying & Falling Flower Animation Engine
 * Creates realistic blooming flowers, rose petals, pink lilies, and golden sparkles
 * that burst upward, swirl in 3D, float across the screen, and gently drift downward.
 */

class FlowerAnimationEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.animationId = null;
    this.isRunning = false;
  }

  initCanvas() {
    if (!this.canvas) {
      this.canvas = document.createElement('canvas');
      this.canvas.id = 'flower-burst-canvas';
      this.canvas.style.position = 'fixed';
      this.canvas.style.top = '0';
      this.canvas.style.left = '0';
      this.canvas.style.width = '100vw';
      this.canvas.style.height = '100vh';
      this.canvas.style.pointerEvents = 'none';
      this.canvas.style.zIndex = '99999';
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
    }

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  trigger(originX = null, originY = null) {
    this.initCanvas();

    const startX = originX !== null ? originX : window.innerWidth / 2;
    const startY = originY !== null ? originY : window.innerHeight * 0.75;

    const count = window.innerWidth < 640 ? 32 : 55;

    // Palette: Pink, white, burgundy rose petals, and champagne gold sparkles
    const flowerTypes = ['rose_petal', 'lily_petal', 'cherry_blossom', 'white_petal', 'gold_sparkle'];

    for (let i = 0; i < count; i++) {
      const type = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      this.particles.push(new FlowerParticle(startX, startY, type));
    }

    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
  }

  loop() {
    if (!this.ctx || !this.canvas) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.update();
      p.draw(this.ctx);

      if (p.isDead(this.canvas.height)) {
        this.particles.splice(i, 1);
      }
    }

    if (this.particles.length > 0) {
      this.animationId = requestAnimationFrame(() => this.loop());
    } else {
      this.isRunning = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

class FlowerParticle {
  constructor(originX, originY, type) {
    this.x = originX + (Math.random() - 0.5) * 60;
    this.y = originY + (Math.random() - 0.5) * 30;
    this.type = type;

    // Phase 1: Burst upward with randomized high velocity
    const angle = (Math.random() * 0.6 + 0.2) * -Math.PI; // Upward arc (-140 to -40 deg)
    const speed = Math.random() * 9 + 8;
    this.vx = Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1) * 0.85;
    this.vy = Math.sin(angle) * speed;

    this.gravity = 0.22;
    this.drag = 0.985;
    this.wind = (Math.random() - 0.5) * 0.6;

    this.size = Math.random() * 14 + 10;
    this.rotX = Math.random() * Math.PI;
    this.rotY = Math.random() * Math.PI;
    this.rotZ = Math.random() * Math.PI;
    this.rotSpeedX = (Math.random() - 0.5) * 0.08;
    this.rotSpeedY = (Math.random() - 0.5) * 0.08;
    this.rotSpeedZ = (Math.random() - 0.5) * 0.05;

    this.opacity = 1;
    this.fadeStart = false;

    // Floral color definitions
    if (type === 'rose_petal') {
      // Deep burgundy / dusty rose
      this.color = ['#9c5963', '#b4656f', '#7e424c'][Math.floor(Math.random() * 3)];
    } else if (type === 'lily_petal') {
      // Soft blush pink
      this.color = ['#f4a5ae', '#fbcfe8', '#f8b4bc'][Math.floor(Math.random() * 3)];
    } else if (type === 'white_petal') {
      // Ivory white
      this.color = '#fffdfa';
    } else if (type === 'gold_sparkle') {
      // Champagne gold sparkle
      this.color = '#e6ca65';
      this.size = Math.random() * 6 + 4;
      this.vy *= 1.2;
    } else {
      // Cherry blossom
      this.color = '#fce7f0';
    }
  }

  update() {
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.vy += this.gravity;
    this.vx += this.wind;

    this.x += this.vx;
    this.y += this.vy;

    this.rotX += this.rotSpeedX;
    this.rotY += this.rotSpeedY;
    this.rotZ += this.rotSpeedZ;

    // Fade out as it falls deep
    if (this.vy > 2) {
      this.fadeStart = true;
    }
    if (this.fadeStart) {
      this.opacity -= 0.003;
    }
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotZ);
    ctx.scale(Math.cos(this.rotX), Math.sin(this.rotY));
    ctx.globalAlpha = Math.max(0, Math.min(1, this.opacity));

    if (this.type === 'gold_sparkle') {
      // Draw 4-point star sparkle
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#e6ca65';
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Draw curved romantic botanical petal
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(156, 89, 99, 0.2)';
      ctx.beginPath();
      ctx.moveTo(0, -this.size / 2);
      ctx.bezierCurveTo(this.size * 0.7, -this.size / 3, this.size * 0.7, this.size / 3, 0, this.size / 2);
      ctx.bezierCurveTo(-this.size * 0.7, this.size / 3, -this.size * 0.7, -this.size / 3, 0, -this.size / 2);
      ctx.fill();
    }

    ctx.restore();
  }

  isDead(canvasHeight) {
    return this.y > canvasHeight + 40 || this.opacity <= 0;
  }
}

export const flowerAnimation = new FlowerAnimationEngine();
