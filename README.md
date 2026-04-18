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

### OG Image 生成技術指引

`public/og-image.html` 是一張 1200 x 630 的 HTML 模板，不只方便預覽，也可以直接透過 Chrome DevTools 輸出成高品質靜態 PNG。這種做法比單純用繪圖軟體更適合本專案：品牌色、字體、網格、漸層與發光效果都能用程式碼精準控制；日後如果要調整標題、配色或版面，也只需要修改幾行 HTML/CSS，就能快速重新產出。

製作流程如下：

1. 用 Chrome 開啟 `public/og-image.html`
2. 按下 `F12` 或 `Ctrl + Shift + I` 開啟 DevTools
3. 按下 `Ctrl + Shift + M` 開啟裝置模擬器（Device Toolbar）
4. 在上方工具列將尺寸設定為 `1200` x `630`
5. 將模式保持在 `Responsive`
6. 開啟工具列右側的 `⋮`，勾選 **Add device pixel ratio**
7. 將 DPR（Device Pixel Ratio）設定為 `1`
8. 在尺寸輸入框右側的百分比選單中選擇 **Fit to window**
9. 在 DevTools 內按下 `Ctrl + Shift + P`
10. 輸入 `screenshot`，選擇 **Capture screenshot**

這裡最容易踩到的是 DPR。高解析度螢幕（例如 Retina）預設 DPR 可能是 `2` 或 `3`，截圖會被放大成 `2400 x 1260` 或更高解析度；若要取得剛好的 OG Image 尺寸，請務必設為 `1`。`Fit to window` 則只是把 1200px 寬的畫面縮小到視窗內方便檢查構圖，不會影響實際輸出的 `1200 x 630`。

設計 OG Image 時，重要內容如 Logo、標題應放在 CSS 定義的 bracket（角括號）安全區域內，避免社群平台預覽時被裁切。背景可使用多層 `radial-gradient` 堆疊發光層次，增加科技感與立體度；底部網域文字建議不低於 `18px`，確保在手機端預覽仍然清楚。

快速操作檢查表：

- [ ] 開啟 `public/og-image.html`
- [ ] `Ctrl + Shift + M` 開啟裝置模擬器
- [ ] 設定尺寸為 `1200 x 630`
- [ ] 設定 DPR = `1`
- [ ] 設定 **Fit to window**
- [ ] `Ctrl + Shift + P` → **Capture screenshot**

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
