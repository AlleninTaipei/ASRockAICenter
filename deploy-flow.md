# GitHub Pages 部署流程

## 正常流程

1. 開發者 push 到 main branch
2. 觸發 "Deploy to GitHub Pages" workflow
3. Workflow Step 1: Checkout main branch 程式碼
4. Workflow Step 2: sed 把 index.html 的 YOUR_API_KEY_HERE 替換成 GitHub Secret YOUTUBE_API_KEY
5. Workflow Step 3: peaceiris/actions-gh-pages 把修改後檔案 push 到 gh-pages branch
6. gh-pages branch 更新觸發 pages-build-deployment
7. pages-build-deployment 部署 gh-pages 內容到 GitHub Pages CDN
8. 使用者瀏覽器訪問網站，拿到有真實 API key 的頁面
9. 瀏覽器用真實 API key 呼叫 YouTube Data API v3，成功回傳影片

## 今天發生的問題

- Pages 來源原本設在 main branch
- pages-build-deployment 直接從 main 部署
- main branch 的 index.html 含有 YOUR_API_KEY_HERE（未替換）
- YouTube API 收到無效 key，回傳 400 API_KEY_INVALID

## 修復方式

- 把 GitHub Pages 來源從 main 改為 gh-pages branch
- 手動觸發 pages-build-deployment 重建
- 瀏覽器拿到 gh-pages 上已注入真實 key 的版本
