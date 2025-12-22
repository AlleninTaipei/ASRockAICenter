import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const starCount = window.innerWidth < 768 ? 80 : 150;

    // 初始化星空
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2.5 + 0.5;
      Object.assign(star.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      });
      container.appendChild(star);
    }

    // 滑鼠互動位移效果
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const stars = container.querySelectorAll('.star');
      stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 0.3;
        const moveX = (x - 0.5) * speed * 15;
        const moveY = (y - 0.5) * speed * 15;
        star.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="starfield" ref={containerRef} />;
};

export default Starfield;