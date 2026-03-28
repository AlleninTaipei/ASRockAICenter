# [ASRockAICenter](https://allenintaipei.github.io/ASRockAICenter/)

## 分支說明

| 分支 | 說明 | 狀態 |
|------|------|------|
| `main` | 純 HTML + CSS + JS，無任何框架，直接部署至 GitHub Pages | **主線** |
| `react-vite` | React 18 + Vite 5，需 build 步驟 | 歸檔 |

---

## `main` 分支 — 純 HTML + CSS + JS

無需任何 Node.js、build 工具或框架，直接用瀏覽器開啟 `index.html` 即可執行。

GitHub Pages 設定：來源為 `main` branch，根目錄 `/`，不需要 build 指令。

### 專案資料夾結構

```
.
├── index.html      # 完整頁面結構 + SEO meta
├── style.css       # 全部樣式
├── locales.js      # EN 與 zh-TW 語系物件（全域變數 LOCALES）
├── main.js         # 語言切換、捲動動畫、YouTube 取得/快取邏輯
└── public/
    ├── favicon.svg
    ├── og-image.png
    ├── og-image.html
    ├── robots.txt
    ├── sitemap.xml
    └── docs/
        ├── en/
        └── zh-TW/
```

### 啟用 YouTube 影片區塊

在 `index.html` 找到以下 meta tag，填入你的 YouTube Data API v3 金鑰：

```html
<meta name="youtube-api-key" content="YOUR_API_KEY_HERE" />
```

留空則自動隱藏影片區塊，不會產生錯誤。

#### 消除 API Key 暴露的憂慮

本專案是純靜態頁面，無 build 步驟，無法在伺服器端隱藏金鑰。正確的應對方式分兩層：

**第一層（必做）：在 Google Cloud Console 限制金鑰用途**

這是最關鍵的一步。即使金鑰被人看到，限制後也無法在其他地方使用：

1. 前往 [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**
2. 點選你的 API 金鑰 → **Application restrictions** 選 **HTTP referrers (websites)**
3. 加入允許的來源，例如：
   ```
   https://allenintaipei.github.io/*
   ```
4. **API restrictions** 選 **Restrict key**，只勾選 **YouTube Data API v3**

完成後，這把金鑰只能從你的 GitHub Pages 網域發出請求，拿走也沒用。

**第二層（建議）：不要把金鑰 commit 進版本庫**

透過 GitHub Actions 在部署時注入，讓 repo 原始碼永遠只有佔位符：

1. 在 GitHub repo 的 **Settings → Secrets and variables → Actions** 新增 secret，名稱例如 `YOUTUBE_API_KEY`
2. 在 `.github/workflows/deploy.yml` 加入替換步驟：

```yaml
- name: Inject YouTube API key
  run: |
    sed -i "s|YOUR_API_KEY_HERE|${{ secrets.YOUTUBE_API_KEY }}|g" index.html
```

3. 把 `index.html` 裡的 `content` 保持為 `YOUR_API_KEY_HERE`（佔位符），永不填入真實金鑰

> **小結：** 第一層限制金鑰用途，確保洩漏後無害；第二層避免金鑰進入 git 歷史，兩者搭配使用最為穩健。若只能選一，優先做第一層。

---

## `react-vite` 分支 — React + Vite（歸檔）

以 React 18 + Vite 5 開發的前身版本，需要 build 步驟才能部署。
目前已停止維護，僅作歷史保留。

---

## Git 身分識別設定

```bash
git config --global user.email "你的Email"
git config --global user.name "你的GitHub帳號"
```
