import React, { useState, useEffect } from 'react';
import Starfield from './components/Starfield';
import { zhTW } from './locales/zh-TW';
import { en } from './locales/en';
import './assets/global.css';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'zh-TW');
  const [videos, setVideos] = useState([]);
  // 不要用引號包裹，這是 JavaScript 的環境變數物件調用
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  // 測試是否成功讀取 (正式部署前可刪除)
  // console.log('API Key Loaded:', API_KEY ? 'Yes' : 'No');
  const t = lang === 'zh-TW' ? zhTW : en;
  const toggleLanguage = () => {
    const next = lang === 'zh-TW' ? 'en' : 'zh-TW';
    setLang(next);
    localStorage.setItem('lang', next);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      if (!API_KEY) return;

      // 1. 先定義搜尋字串 (移動到最前面)
      const searchQuery = (t.youtubeSection?.query || "Enterprise AI") + " trends";

      // 2. 定義快取名稱
      const cacheKey = `yt_cache_${lang}_${searchQuery.replace(/\s+/g, '_')}`;
      const cachedData = localStorage.getItem(cacheKey);
      const now = new Date().getTime();

      // 3. 快取檢查邏輯
      if (cachedData) {
        try {
          const { timestamp, data } = JSON.parse(cachedData);
          // 如果 24 小時內有抓過，就直接使用並跳出
          if (now - timestamp < 24 * 60 * 60 * 1000) {
            setVideos(data);
            return;
          }
        } catch (e) {
          localStorage.removeItem(cacheKey); // 如果 JSON 解析失敗則清除
        }
      }

      // 4. 計算時間過濾器
      const lastYear = new Date();
      lastYear.setFullYear(lastYear.getFullYear() - 1);
      const publishedAfter = lastYear.toISOString();

      try {
        const params = new URLSearchParams({
          part: 'snippet',
          q: searchQuery,
          order: 'relevance',
          type: 'video',
          videoEmbeddable: 'true',
          maxResults: 8,
          publishedAfter: publishedAfter,
          relevanceLanguage: lang === 'zh-TW' ? 'zh-Hant' : 'en',
          key: API_KEY
        });

        const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.items) {
          setVideos(data.items);
          // 5. 存入快取
          localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: now,
            data: data.items
          }));
        }
      } catch (error) {
        console.error("YouTube API Error:", error);
      }
    };

    fetchVideos();
  }, [lang, API_KEY, t.youtubeSection?.query]);

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
              <a key={i} href={item.link} className="link-card" target="_blank" rel="noreferrer">
                <div className="link-title">{item.title}</div>
                <div className="link-description">{item.desc}</div>
              </a>
            ))}
          </div>
        </section>

        {/* --- 新增：YouTube 影片區塊 --- */}
        <section className="section youtube-section">
          <h2>{t.youtubeSection?.title || "Enterprise AI Insights"}</h2>
          <div className="videos-grid">
            {videos.map((video) => (
              <a
                key={video.id.videoId}
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="video-card"
              >
                <div className="video-thumbnail">
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.snippet.title}</h3>
                  <p className="video-channel">{video.snippet.channelTitle}</p>
                </div>
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