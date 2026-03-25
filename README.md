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
