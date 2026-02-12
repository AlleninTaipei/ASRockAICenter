import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let mouseX = -1000;
    let mouseY = -1000;
    let ripples = [];
    let shootingStars = [];
    let lastShootingStarTime = 0;
    let nextShootingStarDelay = 3000 + Math.random() * 5000;

    // --- Canvas sizing ---
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // --- Star colors ---
    const pickColor = (rand) => {
      if (rand < 0.70) return '#FFFFFF';
      if (rand < 0.85) return '#B8D4FF';
      if (rand < 0.95) return '#FFE4B5';
      return '#00D4FF';
    };

    // --- Generate stars ---
    const isMobile = window.innerWidth < 768;
    const mobileFactor = isMobile ? 0.6 : 1;

    const farCount = Math.round(120 * mobileFactor);
    const midCount = Math.round(60 * mobileFactor);
    const nearCount = Math.round(20 * mobileFactor);

    const createStars = (count, layer) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        const colorRand = Math.random();
        let size, opacity;
        if (layer === 'far') {
          size = 0.5 + Math.random() * 0.5;
          opacity = 0.3 + Math.random() * 0.3;
        } else if (layer === 'mid') {
          size = 1 + Math.random() * 1;
          opacity = 0.5 + Math.random() * 0.3;
        } else {
          size = 2 + Math.random() * 1.5;
          opacity = 0.7 + Math.random() * 0.3;
        }
        // Bigger stars get more colorful picks
        const color = layer === 'far'
          ? (Math.random() < 0.85 ? '#FFFFFF' : pickColor(colorRand))
          : pickColor(colorRand);

        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          baseSize: size,
          size,
          baseOpacity: opacity,
          opacity,
          color,
          layer,
          twinkleSpeed: 2 + Math.random() * 3,
          twinklePhase: Math.random() * Math.PI * 2,
          parallaxFactor: layer === 'far' ? 0.3 : layer === 'mid' ? 0.6 : 1.0,
          // For click ripple push-back
          pushX: 0,
          pushY: 0,
        });
      }
      return stars;
    };

    const allStars = [
      ...createStars(farCount, 'far'),
      ...createStars(midCount, 'mid'),
      ...createStars(nearCount, 'near'),
    ];

    // --- Nebula blobs ---
    const nebulae = [
      { x: 0.2, y: 0.3, radius: 350, color: [74, 158, 255], alpha: 0.03, dx: 0.02, dy: 0.01 },
      { x: 0.7, y: 0.6, radius: 400, color: [118, 75, 162], alpha: 0.02, dx: -0.015, dy: 0.012 },
      { x: 0.5, y: 0.8, radius: 300, color: [74, 158, 255], alpha: 0.025, dx: 0.01, dy: -0.018 },
    ];

    // --- Shooting star factory ---
    const createShootingStar = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const angle = (30 + Math.random() * 30) * (Math.PI / 180);
      const speed = 600 + Math.random() * 400;
      const startX = Math.random() * w * 0.8 + w * 0.1;
      const startY = -10;
      return {
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.5 + Math.random() * 1.0,
        tailLength: 80 + Math.random() * 120,
        size: 1.5 + Math.random() * 1,
      };
    };

    // --- Mouse handlers ---
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 200,
        opacity: 0.6,
        life: 0,
        maxLife: 1.0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // --- Draw background gradient ---
    const drawBackground = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const gradient = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, Math.max(w, h));
      gradient.addColorStop(0, '#1B2735');
      gradient.addColorStop(1, '#090A0F');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    // --- Draw nebulae ---
    const drawNebulae = (time) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      for (const neb of nebulae) {
        const cx = (neb.x + Math.sin(time * 0.001 * neb.dx) * 0.05) * w;
        const cy = (neb.y + Math.cos(time * 0.001 * neb.dy) * 0.05) * h;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, neb.radius);
        grad.addColorStop(0, `rgba(${neb.color[0]}, ${neb.color[1]}, ${neb.color[2]}, ${neb.alpha})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(cx - neb.radius, cy - neb.radius, neb.radius * 2, neb.radius * 2);
      }
    };

    // --- Draw stars ---
    const drawStars = (time) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const normMouseX = mouseX / w - 0.5;
      const normMouseY = mouseY / h - 0.5;

      for (const star of allStars) {
        // Twinkle
        const twinkle = Math.sin(time * 0.001 * (Math.PI * 2 / star.twinkleSpeed) + star.twinklePhase);
        const twinkleOpacity = 0.2 + (twinkle + 1) * 0.4; // maps sin to 0.2 ~ 1.0

        // Parallax offset
        const offsetX = normMouseX * star.parallaxFactor * 15;
        const offsetY = normMouseY * star.parallaxFactor * 15;

        // Push from ripple
        let px = star.x + offsetX + star.pushX;
        let py = star.y + offsetY + star.pushY;

        // Decay push
        star.pushX *= 0.95;
        star.pushY *= 0.95;

        // Wrap around edges
        const drawX = ((px % w) + w) % w;
        const drawY = ((py % h) + h) % h;

        // Mouse proximity glow
        const dx = mouseX - drawX;
        const dy = mouseY - drawY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximityRadius = 150;
        let sizeMult = 1;
        let brightnessMult = 1;
        if (dist < proximityRadius) {
          const factor = 1 - dist / proximityRadius;
          sizeMult = 1 + factor * 0.5;
          brightnessMult = 1 + factor * 0.5;
        }

        const finalOpacity = Math.min(1, star.baseOpacity * twinkleOpacity * brightnessMult);
        const finalSize = star.baseSize * sizeMult;

        ctx.beginPath();
        ctx.arc(drawX, drawY, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = finalOpacity;
        ctx.fill();

        // Glow for near-layer stars
        if (star.layer === 'near') {
          ctx.beginPath();
          ctx.arc(drawX, drawY, finalSize * 3, 0, Math.PI * 2);
          const glowGrad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, finalSize * 3);
          glowGrad.addColorStop(0, star.color);
          glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glowGrad;
          ctx.globalAlpha = finalOpacity * 0.25;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    // --- Draw shooting stars ---
    const drawShootingStars = (time, dt) => {
      // Spawn new ones
      if (time - lastShootingStarTime > nextShootingStarDelay) {
        shootingStars.push(createShootingStar());
        lastShootingStarTime = time;
        nextShootingStarDelay = 3000 + Math.random() * 5000;
      }

      shootingStars = shootingStars.filter((s) => {
        s.life += dt;
        if (s.life > s.maxLife) return false;

        s.x += s.vx * dt;
        s.y += s.vy * dt;

        const progress = s.life / s.maxLife;
        // Fade in quickly, fade out at end
        let alpha = 1;
        if (progress < 0.1) alpha = progress / 0.1;
        else if (progress > 0.7) alpha = (1 - progress) / 0.3;

        // Draw tail
        const tailX = s.x - (s.vx * dt * s.tailLength * 0.05);
        const tailY = s.y - (s.vy * dt * s.tailLength * 0.05);

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        grad.addColorStop(0.3, `rgba(184, 212, 255, ${alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(184, 212, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Bright head
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        return true;
      });
    };

    // --- Draw ripples ---
    const drawRipples = (dt) => {
      ripples = ripples.filter((r) => {
        r.life += dt;
        if (r.life > r.maxLife) return false;

        const progress = r.life / r.maxLife;
        r.radius = r.maxRadius * progress;
        const alpha = r.opacity * (1 - progress);

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(74, 158, 255, ${alpha})`;
        ctx.lineWidth = 2 * (1 - progress);
        ctx.stroke();

        // Inner glow ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Push nearby stars
        for (const star of allStars) {
          const sdx = star.x - r.x;
          const sdy = star.y - r.y;
          const sDist = Math.sqrt(sdx * sdx + sdy * sdy);
          if (sDist < r.radius + 30 && sDist > r.radius - 30 && sDist > 0) {
            const pushForce = (1 - progress) * 3;
            star.pushX += (sdx / sDist) * pushForce;
            star.pushY += (sdy / sDist) * pushForce;
          }
        }

        return true;
      });
    };

    // --- Animation loop ---
    let lastTime = performance.now();

    const animate = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1); // cap dt to avoid jumps
      lastTime = now;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      drawBackground();
      drawNebulae(now);
      drawStars(now);
      drawShootingStars(now, dt);
      drawRipples(dt);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default Starfield;
