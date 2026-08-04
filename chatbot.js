// ── Chatbot widget (local demo only, calls local server's /api/chat) ────────
(function () {
  function getChatbotLocale() {
    const t = (typeof getLocale === 'function') ? getLocale() : null;
    return (t && t.chatbot) ? t.chatbot : (LOCALES.en && LOCALES.en.chatbot) || {};
  }

  const SESSION_KEY = 'asrockaicenter-chat-session-id';
  function getSessionId() {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
  }

  let rootEl = null;

  function buildWidget() {
    const i18n = getChatbotLocale();
    const root = document.createElement('div');
    root.className = 'chatbot';
    root.innerHTML = `
      <div class="chatbot-panel" role="dialog" aria-label="${i18n.title || ''}">
        <div class="chatbot-header">
          <div class="chatbot-header-mark">AI</div>
          <div class="chatbot-header-text">
            <strong id="chatbot-title">${i18n.title || ''}</strong>
            <span id="chatbot-subtitle">${i18n.subtitle || ''}</span>
          </div>
        </div>
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <form class="chatbot-form" id="chatbot-form">
          <textarea class="chatbot-input" id="chatbot-input" rows="1" placeholder="${i18n.placeholder || ''}"></textarea>
          <button type="submit" class="chatbot-send" id="chatbot-send">${i18n.send || ''}</button>
        </form>
      </div>
      <button type="button" class="chatbot-launcher" id="chatbot-launcher-btn" aria-label="${i18n.launcherLabel || ''}">
        <svg class="icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    `;
    document.body.appendChild(root);
    return root;
  }

  function appendMessage(container, role, text) {
    const el = document.createElement('div');
    el.className = `chatbot-msg is-${role}`;
    el.textContent = text;
    container.appendChild(el);
    container.scrollTop = container.scrollHeight;
    return el;
  }

  window.updateChatbotTexts = function updateChatbotTexts() {
    if (!rootEl) return;
    const i18n = getChatbotLocale();
    const title = rootEl.querySelector('#chatbot-title');
    const subtitle = rootEl.querySelector('#chatbot-subtitle');
    const input = rootEl.querySelector('#chatbot-input');
    const sendBtn = rootEl.querySelector('#chatbot-send');
    const launcher = rootEl.querySelector('#chatbot-launcher-btn');
    const panel = rootEl.querySelector('.chatbot-panel');
    if (title) title.textContent = i18n.title || '';
    if (subtitle) subtitle.textContent = i18n.subtitle || '';
    if (input) input.placeholder = i18n.placeholder || '';
    if (sendBtn) sendBtn.textContent = i18n.send || '';
    if (launcher) launcher.setAttribute('aria-label', i18n.launcherLabel || '');
    if (panel) panel.setAttribute('aria-label', i18n.title || '');
  };

  function init() {
    const root = buildWidget();
    rootEl = root;
    const launcher = root.querySelector('.chatbot-launcher');
    const messages = root.querySelector('#chatbot-messages');
    const form = root.querySelector('#chatbot-form');
    const input = root.querySelector('#chatbot-input');
    const sendBtn = root.querySelector('#chatbot-send');
    const sessionId = getSessionId();

    let greeted = false;
    launcher.addEventListener('click', () => {
      root.classList.toggle('is-open');
      if (root.classList.contains('is-open')) {
        if (!greeted) {
          appendMessage(messages, 'bot', getChatbotLocale().greeting || '');
          greeted = true;
        }
        input.focus();
      }
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const message = input.value.trim();
      if (!message) return;

      const i18n = getChatbotLocale();
      appendMessage(messages, 'user', message);
      input.value = '';
      input.style.height = 'auto';
      input.disabled = true;
      sendBtn.disabled = true;
      const pending = appendMessage(messages, 'pending', i18n.pending || '');

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId, message }),
        });
        const data = await res.json();
        pending.remove();
        if (!res.ok) {
          appendMessage(messages, 'error', data.error || i18n.error || '');
        } else {
          appendMessage(messages, 'bot', data.reply);
        }
      } catch (err) {
        pending.remove();
        appendMessage(messages, 'error', getChatbotLocale().error || '');
      } finally {
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      }
    });

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = `${Math.min(input.scrollHeight, 96)}px`;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
