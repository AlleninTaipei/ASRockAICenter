import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import { zhTW } from './locales/zh-TW';
import { en } from './locales/en';
import './assets/global.css';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'zh-TW');
  const t = lang === 'zh-TW' ? zhTW : en;

  const toggleLanguage = () => {
    const next = lang === 'zh-TW' ? 'en' : 'zh-TW';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  // --- 優化後的捲動動畫邏輯 ---
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, observerOptions);

    // 使用 setTimeout 確保 DOM 已經完全渲染完成再進行監控
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.app-card, .link-card, .section');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [lang]); // 監聽 lang 變化，切換語系時重新監控

  return (
    <div className="app-root">
      <Starfield />
      <div className="lang-toggle">
        <button className="lang-btn" onClick={toggleLanguage}>
          <span>{lang === 'zh-TW' ? 'EN' : '中文'}</span>
        </button>
      </div>

      <div className="container">
        <header>
          <h1>{t.header.title}</h1>
          <h2>{t.header.subtitle}</h2>
          {t.header.taglines.map((line, i) => (
            <p key={i} className="tagline">{line}</p>
          ))}
        </header>

        {/* 確保這裡有正確對應到 locales 裡的資料 */}
        <section className="section">
          <h2>AI Fusion Starter</h2>
          <div className="apps-grid">
            {t.apps.map((app, i) => (
              <div key={i} className="app-card">
                <div className="app-icon">{app.icon}</div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-description">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{t.resources.title}</h2>
          <div className="links-grid">
            {t.resources.items.map((item, i) => (
              <a key={i} href={item.link} className="link-card" target="_blank" rel="noreferrer">
                <div className="link-title">{item.title}</div>
                <div className="link-description">{item.desc}</div>
              </a>
            ))}
          </div>
        </section>

        <footer className="section contact-section">
          <h2>{t.contact.title}</h2>
          <div className="contact-content">
            <p className="contact-text">{t.contact.text}</p>
            <a
              href={`mailto:${t.contact.email}`}
              className="contact-email-link"
            >
              {t.contact.email}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;