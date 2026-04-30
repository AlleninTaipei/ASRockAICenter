// ── State ──────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';
let selectedAudience = localStorage.getItem('audience') || null;

const AUDIENCE_SECTIONS = {
  decision: ['apps', 'process', 'success-stories', 'resources'],
  developer: ['academy', 'courses', 'blogs', 'youtube-section']
};

// ── DOM helpers ─────────────────────────────────────────────────────────────
function getLocale() {
  return LOCALES[currentLang] || LOCALES['en'];
}

// ── Render dynamic sections ─────────────────────────────────────────────────
function renderApps(t) {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;
  grid.innerHTML = t.apps.map((app, i) => {
    const isHero = i === 0 && app.badge;
    return `
      <div class="app-card${isHero ? ' app-card--hero' : ''}">
        ${isHero ? `<span class="hero-factory-badge">${app.badge}</span>` : ''}
        <div class="app-header">
          <div class="app-icon">${app.icon}</div>
          <div class="app-title-group">
            <h3 class="app-name">${app.name}</h3>
            <span class="app-subtitle">${app.subtitle}</span>
          </div>
        </div>
        <p class="app-tagline">${app.tagline}</p>
        <p class="app-description">${app.desc}</p>
      </div>
    `;
  }).join('');
}

function renderAudienceNav(t) {
  const grid = document.getElementById('audience-nav-grid');
  if (!grid || !t.audienceNav) return;
  const nav = t.audienceNav;
  grid.innerHTML = `
    <button onclick="selectAudience('decision')" class="audience-card audience-card--decision${selectedAudience === 'decision' ? ' audience-card--active' : ''}">
      <span class="audience-badge">${nav.decisionMaker.badge}</span>
      <div class="audience-title">${nav.decisionMaker.title}</div>
      <p class="audience-desc">${nav.decisionMaker.desc}</p>
      <span class="audience-cta">${nav.decisionMaker.cta}</span>
    </button>
    <button onclick="selectAudience('developer')" class="audience-card audience-card--developer${selectedAudience === 'developer' ? ' audience-card--active' : ''}">
      <span class="audience-badge">${nav.developer.badge}</span>
      <div class="audience-title">${nav.developer.title}</div>
      <p class="audience-desc">${nav.developer.desc}</p>
      <span class="audience-cta">${nav.developer.cta}</span>
    </button>
  `;
}

function renderProcess(t) {
  const container = document.getElementById('process-steps');
  if (!container || !t.process) return;
  container.innerHTML = t.process.map((step, i) => `
    <div class="process-step">
      <div class="step-circle">
        <span class="step-num">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <div class="step-content">
        <h3 class="step-title"><span class="step-icon">${step.icon}</span>${step.title}</h3>
        <p class="step-desc">${step.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderSuccessStories(t) {
  const grid = document.getElementById('success-stories-grid');
  if (!grid || !t.successStories) return;
  grid.innerHTML = t.successStories.map(story => `
    <div class="success-story-card">
      <div class="app-header">
        <div class="app-icon">${story.icon}</div>
        <div class="app-title-group">
          <h3 class="app-name">${story.company}</h3>
          <span class="app-subtitle">${story.industry}</span>
        </div>
      </div>
      <p class="story-quote">"${story.quote}"</p>
      <div class="story-metrics">
        ${story.metrics.map(m => `
          <div class="story-metric-item">
            <span class="story-metric-icon">${m.icon}</span>
            <span class="story-metric-value">${m.value}</span>
            <span class="story-metric-label">${m.label}</span>
          </div>
        `).join('')}
      </div>
      <p class="app-description">${story.desc}</p>
    </div>
  `).join('');
}

function renderResources(t) {
  const grid = document.getElementById('resources-grid');
  if (!grid) return;
  grid.innerHTML = t.resources.items.map(item => `
    <a href="${item.link}" class="link-card" data-type="${item.type || 'external'}" target="_blank" rel="noreferrer">
      <div class="link-title">${item.title}</div>
      <div class="link-description">${item.desc}</div>
    </a>
  `).join('');
}

function renderCourses(t) {
  const grid = document.getElementById('courses-grid');
  if (!grid) return;
  // Always use English content and links regardless of language
  const items = LOCALES['en'].courses;
  grid.innerHTML = items.map(item => `
    <a href="${item.link}" class="link-card" data-type="${item.type || 'external'}" target="_blank" rel="noreferrer">
      <div class="link-title">${item.title}</div>
      <div class="link-description">${item.desc}</div>
    </a>
  `).join('');
}

function renderBlogs() {
  const grid = document.getElementById('blogs-grid');
  if (!grid) return;
  const items = LOCALES['en'].blogs;
  grid.innerHTML = items.map(item => `
    <a href="${item.link}" class="link-card" data-type="external" target="_blank" rel="noopener noreferrer">
      <div class="link-title">${item.title}</div>
      <div class="link-description">${item.desc}</div>
    </a>
  `).join('');
}

function renderContact(t) {
  const container = document.getElementById('contact-cards');
  if (!container) return;
  const c = t.contact;
  container.innerHTML = `
    <a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="contact-card contact-card--linkedin">
      <div class="contact-card-icon">🔗</div>
      <div class="contact-card-body">
        <span class="contact-card-platform">LinkedIn</span>
        <span class="contact-card-label">${c.linkedinText}</span>
      </div>
      <span class="contact-card-arrow">&#8599;</span>
    </a>
    <a href="mailto:${c.email}" class="contact-card contact-card--email">
      <div class="contact-card-icon">📧</div>
      <div class="contact-card-body">
        <span class="contact-card-platform">Email</span>
        <span class="contact-card-label">${c.email}</span>
      </div>
      <span class="contact-card-arrow">&#8599;</span>
    </a>
  `;
}

// ── Audience selection ──────────────────────────────────────────────────────
function selectAudience(type, scroll = true) {
  selectedAudience = type;
  localStorage.setItem('audience', type);

  const allIds = [...AUDIENCE_SECTIONS.decision, ...AUDIENCE_SECTIONS.developer];
  const showIds = AUDIENCE_SECTIONS[type];

  allIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (showIds.includes(id)) {
      el.classList.remove('audience-hidden');
      el.classList.remove('section-entering');
      void el.offsetWidth;
      el.classList.add('section-entering');
    } else {
      el.classList.add('audience-hidden');
    }
  });

  document.querySelectorAll('.audience-card').forEach(c => c.classList.remove('audience-card--active'));
  const activeCard = document.querySelector(`.audience-card--${type}`);
  if (activeCard) activeCard.classList.add('audience-card--active');

  attachScrollReveal();

  if (type === 'developer') fetchVideos();

  if (scroll) {
    const firstEl = document.getElementById(showIds[0]);
    if (firstEl) setTimeout(() => firstEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }
}

// ── Apply locale ────────────────────────────────────────────────────────────
function applyLocale(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const t = getLocale();

  // Static text via data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = resolveKey(t, key);
    if (value !== undefined) el.textContent = value;
  });

  // Dynamic grids
  renderAudienceNav(t);
  renderProcess(t);
  renderApps(t);
  renderSuccessStories(t);
  renderResources(t);
  renderCourses(t);
  renderBlogs();
  renderContact(t);

  // Language toggle button label
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.querySelector('span').textContent = lang === 'zh-TW' ? 'EN' : '中文';

  // Re-attach scroll reveal to newly rendered cards
  attachScrollReveal();

  // Fetch/display YouTube videos for new lang
  fetchVideos();
}

// Resolve a dot-separated key path against an object
function resolveKey(obj, keyPath) {
  return keyPath.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
}

// ── Scroll Reveal ───────────────────────────────────────────────────────────
function attachScrollReveal() {
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

  setTimeout(() => {
    document.querySelectorAll('.app-card, .success-story-card, .link-card, .process-step, .section').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

// ── YouTube ─────────────────────────────────────────────────────────────────
async function fetchVideos() {
  const apiKeyMeta = document.querySelector('meta[name="youtube-api-key"]');
  const API_KEY = apiKeyMeta ? apiKeyMeta.getAttribute('content') : '';
  const youtubeSection = document.getElementById('youtube-section');

  if (!API_KEY) {
    if (youtubeSection) youtubeSection.classList.add('hidden');
    return;
  }
  if (youtubeSection) youtubeSection.classList.remove('hidden');

  const t = getLocale();
  const searchQuery = (t.youtubeSection && t.youtubeSection.query) || 'Enterprise AI trends';
  const cacheKey = 'yt_cache_' + currentLang + '_' + searchQuery.replace(/\s+/g, '_');
  const cachedData = localStorage.getItem(cacheKey);
  const now = new Date().getTime();

  if (cachedData) {
    try {
      const { timestamp, data } = JSON.parse(cachedData);
      if (now - timestamp < 24 * 60 * 60 * 1000) {
        renderVideos(data, t);
        return;
      }
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  const timeFrame = new Date();
  timeFrame.setMonth(timeFrame.getMonth() - 3);
  const publishedAfter = timeFrame.toISOString();

  const maxResults = (t.youtubeSection && t.youtubeSection.maxResults) || 8;
  const pinnedVideoId = t.youtubeSection && t.youtubeSection.pinnedVideo && t.youtubeSection.pinnedVideo.videoId;

  try {
    let finalVideos = [];

    if (pinnedVideoId && pinnedVideoId !== 'YOUR_VIDEO_ID_HERE') {
      try {
        const videoParams = new URLSearchParams({
          part: 'snippet',
          id: pinnedVideoId,
          key: API_KEY
        });
        const videoResponse = await fetch('https://www.googleapis.com/youtube/v3/videos?' + videoParams.toString());
        const videoData = await videoResponse.json();
        if (videoData.items && videoData.items.length > 0) {
          finalVideos.push({
            id: { videoId: pinnedVideoId },
            snippet: videoData.items[0].snippet
          });
        }
      } catch (err) {
        console.error('Failed to fetch pinned video:', err);
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
      relevanceLanguage: currentLang === 'zh-TW' ? 'zh-Hant' : 'en',
      regionCode: currentLang === 'zh-TW' ? 'TW' : 'US',
      key: API_KEY
    });

    const response = await fetch('https://www.googleapis.com/youtube/v3/search?' + params.toString());
    const data = await response.json();

    if (data.items) {
      finalVideos = [...finalVideos, ...data.items];
      renderVideos(finalVideos, t);
      localStorage.setItem(cacheKey, JSON.stringify({ timestamp: now, data: finalVideos }));
    }
  } catch (err) {
    console.error('YouTube API Error:', err);
  }
}

function renderVideos(videos, t) {
  const grid = document.getElementById('videos-grid');
  const moreLink = document.getElementById('videos-more');
  if (!grid) return;

  const maxResults = (t.youtubeSection && t.youtubeSection.maxResults) || 8;
  const pinnedId = t.youtubeSection && t.youtubeSection.pinnedVideo && t.youtubeSection.pinnedVideo.videoId;
  const limit = maxResults + (pinnedId ? 1 : 0);

  grid.innerHTML = videos.slice(0, limit).map(video => `
    <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" rel="noreferrer" class="video-card">
      <div class="video-thumbnail">
        <img src="${video.snippet.thumbnails.high.url}" alt="${escapeHtml(video.snippet.title)}" loading="lazy" />
      </div>
      <div class="video-info">
        <h3 class="video-title">${escapeHtml(video.snippet.title)}</h3>
        <p class="video-channel">${escapeHtml(video.snippet.channelTitle)}</p>
      </div>
    </a>
  `).join('');

  if (moreLink && t.youtubeSection) {
    const query = encodeURIComponent(t.youtubeSection.query || '');
    moreLink.href = 'https://www.youtube.com/results?search_query=' + query;
    moreLink.textContent = t.youtubeSection.more || 'Watch on YouTube';
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Language toggle button
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
      localStorage.setItem('lang', next);
      applyLocale(next);
    });
  }

  // Apply initial locale
  applyLocale(currentLang);

  // Restore previously selected audience (no scroll jump)
  if (selectedAudience) {
    selectAudience(selectedAudience, false);
  }
});
