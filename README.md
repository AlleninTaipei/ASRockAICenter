# ASRockAICenter

## 專案資料夾結構

```bash
asrock-ai-center/
├── index.html                # 網頁進入點
├── package.json              # 專案套件與腳本定義
├── vite.config.js            # Vite 打包配置
├── src/
│   ├── main.jsx              # React 渲染進入點
│   ├── App.jsx               # 主頁面邏輯與多語系切換
│   ├── assets/
│   │   └── global.css        # 全域樣式 (提取自原 HTML)
│   ├── components/
│   │   └── Starfield.jsx     # 星空動畫元件
│   └── locales/              # 語系資料夾
│       ├── en.js             # 英文文本
│       └── zh-TW.js          # 中文文本
└── .gitignore                # 忽略不必要的檔案上傳至 Git
```

* 環境設定：package.json, vite.config.js, .gitignore
* 入口結構：index.html, src/main.jsx
* 核心邏輯：src/App.jsx, src/locales/ (多語系)
* 視覺資源：src/assets/global.css, src/components/Starfield.jsx

##　觀念確認

將原本的單一 index.html 轉換為現代前端開發架構（React + Vite），不僅能提升開發效率，更能解決維護性問題。

* CSS 維護性：全域 CSS 轉向 React 後，可以使用 CSS Modules 或 Tailwind CSS，確保樣式只作用於特定組件。
* 多語系架構：**「資料與結構分離」**：建立語系 JSON 檔，由 React 根據目前語言抽換文字內容。
* 效能與開發：使用 Vite 提供的 HMR（熱更新）可以讓你修改程式碼後即時看到結果，且打包後的檔案會經過壓縮優化。

## 部署準備

* install Node.js

```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 部署至 Github Pages 指令

```bash
npm install
```

## 本地開發測試

```bash
npm run dev
```

## 部署至 GitHub Pages

首先確保你的專案已經關聯至 Github 遠端倉庫。 執行以下指令，它會自動打包並推送到 gh-pages 分支：

```bash
npm run deploy
```

## 重點回顧

* 環境建置：從完全沒有 Node.js 到成功配置開發環境。
* 安全性突破：手動修改了 Windows 的 PowerShell 執行策略。
* 架構轉型：將傳統的單一 HTML 檔案，拆解成現代化的 React 元件化架構。
* 邏輯開發：實作了 JavaScript 的多語系切換邏輯與 IntersectionObserver 捲動動畫。
* Debug 與優化：修復了 CSS 語法錯誤、Git 身分識別問題，並優化了 UI 視覺層次。
* 正式部署：成功透過 Vite 打包並自動化部署到 GitHub Pages。