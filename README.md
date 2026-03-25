# [ASRockAICenter](https://allenintaipei.github.io/ASRockAICenter/)

## 分支說明

| 分支 | 說明 | 狀態 |
|------|------|------|
| `main` | 純 HTML + CSS + JS，無任何框架，直接部署至 GitHub Pages | **主線** |
| `react-vite` | React 18 + Vite 5，需 build 步驟 | 歸檔支線 |

---

## `main` 分支 — 純 HTML + CSS + JS

無需任何 Node.js、build 工具或框架，直接用瀏覽器開啟 `index.html` 即可執行。

GitHub Pages 設定：來源為 `main` branch，根目錄 `/`，不需要 build 指令。

### 專案資料夾結構

```
asrock-ai-center/
├── index.html      # 完整頁面結構 + SEO meta
├── style.css       # 全部樣式（源自 global.css，移除 Starfield canvas 規則）
├── locales.js      # EN 與 zh-TW 語系物件（全域變數 LOCALES）
├── main.js         # 語言切換、捲動動畫、YouTube 取得/快取邏輯
└── public/         # 靜態資源
    ├── favicon.svg
    ├── og-image.png
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

### 專案資料夾結構

```
asrock-ai-center/
├── index.html                # 網頁進入點（React root）
├── package.json              # 專案套件與腳本定義
├── vite.config.js            # Vite 打包配置
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── docs/
│       ├── en/
│       └── zh-TW/
├── src/
│   ├── main.jsx              # React 渲染進入點
│   ├── App.jsx               # 主頁面邏輯與多語系切換
│   ├── assets/
│   │   └── global.css        # 全域樣式
│   ├── components/
│   │   └── Starfield.jsx     # Canvas 2D 星空動畫元件
│   └── locales/
│       ├── en.js
│       └── zh-TW.js
└── .gitignore
```

### 常用指令

```bash
npm install        # 安裝相依套件
npm run dev        # 啟動 Vite 開發伺服器（支援 HMR）
npm run build      # 打包至 dist/
npm run preview    # 預覽打包結果
npm run deploy     # 打包 + 推送至 gh-pages 分支
```

**Windows 首次執行 npm 若遇到 PowerShell 執行原則限制：**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Git 身分識別設定

```bash
git config --global user.email "你的Email"
git config --global user.name "你的GitHub帳號"
```
