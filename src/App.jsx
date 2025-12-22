import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import { zhTW } from './locales/zh-TW';
import { en } from './locales/en';
import './assets/global.css';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'zh-TW');
  const t = lang === 'zh-TW' ? zhTW : en;

  const toggleLang = () => {
    const newLang = lang === 'zh-TW' ? 'en' : 'zh-TW';
    setLang(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className="app-container">
      <Starfield />
      
      <div className="lang-toggle">
        <button className="lang-btn" onClick={toggleLang}>
          {lang === 'zh-TW' ? 'EN' : '中文'}
        </button>
      </div>

      <main className="container">
        <header>
          <h1>{t.header.title}</h1>
          <h2>{t.header.subtitle}</h2>
          {t.header.taglines.map((text, i) => (
            <p key={i} className="tagline">{text}</p>
          ))}
        </header>

        <section className="section">
          <h2>AI Fusion Starter</h2>
          <div className="apps-grid">
            {t.apps.map(app => (
              <div key={app.id} className="app-card">
                <div className="app-icon">{app.icon}</div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-description">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;