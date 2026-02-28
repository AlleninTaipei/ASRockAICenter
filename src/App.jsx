import { useState, useEffect } from 'react';
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
      const fetchVideos = async () => {
        if (!API_KEY) return;

        const searchQuery = t.youtubeSection?.query || "Enterprise AI trends";
        const cacheKey = `yt_cache_${lang}_${searchQuery.replace(/\s+/g, '_')}`;
        const cachedData = localStorage.getItem(cacheKey);
        const now = new Date().getTime();

        if (cachedData) {
          try {
            const { timestamp, data } = JSON.parse(cachedData);
            if (now - timestamp < 24 * 60 * 60 * 1000) {
              setVideos(data);
              return;
            }
          } catch (e) {
            localStorage.removeItem(cacheKey);
          }
        }

        const timeFrame = new Date();
        timeFrame.setMonth(timeFrame.getMonth() - 3);
        const publishedAfter = timeFrame.toISOString();

        const maxResults = t.youtubeSection?.maxResults || 8;
        const pinnedVideoId = t.youtubeSection?.pinnedVideo?.videoId;

        try {
          let finalVideos = [];

          if (pinnedVideoId && pinnedVideoId !== 'YOUR_VIDEO_ID_HERE') {
            try {
              const videoParams = new URLSearchParams({
                part: 'snippet',
                id: pinnedVideoId,
                key: API_KEY
              });

              const videoUrl = `https://www.googleapis.com/youtube/v3/videos?${videoParams.toString()}`;
              const videoResponse = await fetch(videoUrl);
              const videoData = await videoResponse.json();

              if (videoData.items && videoData.items.length > 0) {
                const pinnedItem = {
                  id: { videoId: pinnedVideoId },
                  snippet: videoData.items[0].snippet
                };
                finalVideos.push(pinnedItem);
              }
            } catch (error) {
              console.error("Failed to fetch pinned video:", error);
            }
          }

          const params = new URLSearchParams({
            part: 'snippet',
            q: searchQuery,
            order: 'relevance',
            type: 'video',
            videoEmbeddable: 'true',
            maxResults: maxResults,
            publishedAfter: publishedAfter,
            relevanceLanguage: lang === 'zh-TW' ? 'zh-Hant' : 'en',
            regionCode: lang === 'zh-TW' ? 'TW' : 'US',
            key: API_KEY
          });

          const url = `https://www.googleapis.com/youtube/v3/search?${params.toString()}`;
          const response = await fetch(url);
          const data = await response.json();

          if (data.items) {
            finalVideos = [...finalVideos, ...data.items];

            setVideos(finalVideos);
            localStorage.setItem(cacheKey, JSON.stringify({
              timestamp: now,
              data: finalVideos
            }));
          }
        } catch (error) {
          console.error("YouTube API Error:", error);
        }
      };

      fetchVideos();
    }, [lang, API_KEY, t.youtubeSection?.query, t.youtubeSection?.maxResults]);


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

        <section className="section youtube-section">
          <h2>{t.youtubeSection?.title || "Enterprise AI Insights"}</h2>
          <div className="videos-grid">
            {videos.slice(0, 12).map((video) => (
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

      </div>
    </div>
  );
}

export default App;
