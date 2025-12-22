# ASRockAICenter

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