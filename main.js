// ── State ──────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'zh-TW';

const NAV_SECTIONS = ['why', 'services', 'products', 'solutions', 'resources', 'contact'];

// ── DOM helpers ─────────────────────────────────────────────────────────────
function getLocale() {
  return LOCALES[currentLang] || LOCALES['en'];
}

function revealAttrs(i) {
  return `data-reveal data-reveal-delay="${(i % 5) + 1}"`;
}

// ── Render dynamic sections ─────────────────────────────────────────────────
function renderNavLinks(t) {
  const list = document.getElementById('nav-links');
  if (!list || !t.nav) return;
  list.innerHTML = NAV_SECTIONS.map(id => `<li><a href="#${id}">${t.nav[id] || id}</a></li>`).join('');
}

function renderWhy(t) {
  const grid = document.getElementById('why-grid');
  if (!grid || !t.whySection) return;
  const w = t.whySection;
  const statValues = [t.apps.length, t.successStories.length, t.process.length];
  const statsHtml = w.stats.map((s, i) => `
    <div>
      <div class="why-stat-num" data-count="${statValues[i]}">0</div>
      <div class="why-stat-label">${s.label}</div>
    </div>
  `).join('');
  const reasonsHtml = w.reasons.map(r => `
    <div class="why-reason">
      <div class="why-reason-title">${r.title}</div>
      <p class="why-reason-desc">${r.desc}</p>
    </div>
  `).join('');
  grid.innerHTML = `
    <div class="bento-cell col-span-7 is-tint-green" ${revealAttrs(0)}>
      <p class="why-description">${w.description}</p>
      <div class="why-stats">${statsHtml}</div>
    </div>
    <div class="bento-cell col-span-5 is-alt" ${revealAttrs(1)}>
      <div class="why-reasons-title">${w.reasonsTitle}</div>
      ${reasonsHtml}
    </div>
  `;
}

function renderProcess(t) {
  const container = document.getElementById('process-steps');
  if (!container || !t.process) return;
  container.innerHTML = t.process.map((step, i) => `
    <div class="process-step" ${revealAttrs(i)}>
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

function renderApps(t) {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;
  grid.innerHTML = t.apps.map((app, i) => {
    return `
      <div class="bento-cell is-interactive card-product col-span-4" ${revealAttrs(i)}>
        ${app.badge ? `<span class="card-badge">${app.badge}</span>` : ''}
        <div class="card-header">
          <div class="card-icon">${app.icon}</div>
          <div class="card-title-group">
            <h3 class="card-name">${app.name}</h3>
            <span class="card-subtitle">${app.subtitle}</span>
          </div>
        </div>
        <p class="card-tagline">${app.tagline}</p>
        <p class="card-description">${app.desc}</p>
      </div>
    `;
  }).join('');
}

function renderSuccessStories(t) {
  const grid = document.getElementById('success-stories-grid');
  if (!grid || !t.successStories) return;
  grid.innerHTML = t.successStories.map((story, i) => `
    <div class="bento-cell is-interactive card-solution col-span-4" ${revealAttrs(i)}>
      <div class="card-header">
        <div class="card-icon">${story.icon}</div>
        <div class="card-title-group">
          <h3 class="card-name">${story.company}</h3>
          <span class="card-subtitle">${story.industry}</span>
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
      ${story.modules ? `<div class="story-modules">${story.modules.map(mod => `<span class="story-module-tag">${mod}</span>`).join('')}</div>` : ''}
      <p class="card-description">${story.desc}</p>
    </div>
  `).join('');
}

function renderResources(t) {
  const grid = document.getElementById('resources-grid');
  if (!grid) return;
  grid.innerHTML = t.resources.items.map((item, i) => `
    <a href="${item.link}" class="bento-cell is-interactive link-card" data-type="${item.type || 'external'}" target="_blank" rel="noreferrer" ${revealAttrs(i)}>
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
  const langBadge = currentLang !== 'en' ? '<span class="link-lang-badge">English</span>' : '';
  grid.innerHTML = items.map((item, i) => `
    <a href="${item.link}" class="bento-cell is-interactive link-card" data-type="${item.type || 'external'}" target="_blank" rel="noreferrer" ${revealAttrs(i)}>
      <div class="link-title">${item.title}${langBadge}</div>
      <div class="link-description">${item.desc}</div>
    </a>
  `).join('');
}

function renderBlogs() {
  const grid = document.getElementById('blogs-grid');
  if (!grid) return;
  const items = LOCALES['en'].blogs;
  grid.innerHTML = items.map((item, i) => `
    <a href="${item.link}" class="bento-cell is-interactive link-card" data-type="external" target="_blank" rel="noopener noreferrer" ${revealAttrs(i)}>
      <div class="link-title">${item.title}</div>
      <div class="link-description">${item.desc}</div>
    </a>
  `).join('');
}

function renderContact(t) {
  const container = document.getElementById('contact-cards');
  if (!container) return;
  const c = t.contact;
  const peopleCards = c.people.map((p, i) => `
    <a href="mailto:${p.email}" class="bento-cell is-interactive contact-card contact-card--email" ${revealAttrs(i + 1)}>
      <div class="contact-card-body">
        <span class="contact-card-platform">${p.name}, ${p.title}</span>
        <span class="contact-card-label">${p.email}</span>
      </div>
      <span class="contact-card-arrow">&#8599;</span>
    </a>
  `).join('');
  container.innerHTML = `
    <a href="${c.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="bento-cell is-interactive contact-card contact-card--linkedin" ${revealAttrs(0)}>
      <div class="contact-card-body">
        <span class="contact-card-platform">LinkedIn</span>
        <span class="contact-card-label">${c.linkedinText}</span>
      </div>
      <span class="contact-card-arrow">&#8599;</span>
    </a>
    ${peopleCards}
  `;
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
  renderNavLinks(t);
  renderWhy(t);
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

  // Re-attach scroll reveal / count-up to newly rendered cards
  attachScrollReveal();
  attachCountUp();

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
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  setTimeout(() => {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

// ── Count-up stats ──────────────────────────────────────────────────────────
function attachCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      observer.unobserve(el);
      const target = parseInt(el.getAttribute('data-count'), 10) || 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
}

// ── Header scroll state ─────────────────────────────────────────────────────
function attachHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
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

  grid.innerHTML = videos.slice(0, limit).map((video, i) => `
    <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" rel="noreferrer" class="video-card" ${revealAttrs(i)}>
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

  attachScrollReveal();
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

  attachHeaderScroll();

  // Apply initial locale
  applyLocale(currentLang);
});
