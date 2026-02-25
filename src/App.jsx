import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import { zhTW } from './locales/zh-TW';
import { en } from './locales/en';
import './assets/global.css';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const t = lang === 'zh-TW' ? zhTW : en;
  const toggleLanguage = () => {
    const next = lang === 'zh-TW' ? 'en' : 'zh-TW';
    setLang(next);
    localStorage.setItem('lang', next);
  };

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

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.app-card, .link-card, .section');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [lang]);

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

        <section className="section">
          <h2>{t.appsSection.title}</h2>
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
              <a
                key={i}
                href={item.link}
                className="link-card"
                data-type={item.type || "external"}
                target="_blank"
                rel="noreferrer"
              >
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
              href={t.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email-btn"
            >
              <span className="icon">🔗</span> {t.contact.linkedinText}
            </a>
            <a
              href={`mailto:${t.contact.email}`}
              className="contact-email-btn"
            >
              📧 {t.contact.email}
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
