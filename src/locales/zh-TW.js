export const zhTW = {
  header: {
    title: "華擎科技 AI 研發中心",
    subtitle: "AI Middleware - AI 工作站中介層藍圖",
    taglines: [
      "硬體效能 × AI 引擎 × 開放 API",
      "一站式 AI 導入陪跑，跨越技術與成本門檻，實現軟硬整合的在地解決方案",
      "讓 AI 能力像電力一樣即插即用"
    ]
  },
  appsSection: {
    title: "AI Fusion Starter - 快速入門解決方案"
  },
  apps: [
    { name: "ChatForge", icon: "💬", desc: "Chatbot 起手式：展示 OpenAI 相容 API 調用與即時對話生成。" },
    { name: "RagPilot", icon: "🎯", desc: "RAG 企業應用：整合結構化與非結構化資料，展示 Function Call + MCP。" },
    { name: "PixelForge", icon: "🎨", desc: "視覺內容生成：文字轉圖像工作流，支援品牌素材批量產出。" },
    { name: "QuickStack", icon: "🐋", desc: "開發環境管理平台：一鍵部署預配置 Docker 映像檔。" },
    { name: "PerfScope", icon: "📊", desc: "性能可視化：模擬多併發推論，評估 Tokens/sec、GPU 效能。" },
    { name: "RagLingo", icon: "🌐", desc: "AI 翻譯：RAG + LLM 的多語知識翻譯與本地化。" }
  ],
  resources: {
    title: "相關資源",
    items: [
      {
        title: "AI 工作站機殼散熱建議",
        desc: "風扇配置：實際可行的實戰方案",
        link: `${import.meta.env.BASE_URL}docs/zh-TW/ai-workstation-thermal-guide-zh.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "Master Ai - 您的專屬在地 AI 工作站",
        desc: "在 AI 運算的賽場上，沒有絕對的勝負，只有最適合您的選擇。Master Ai 象徵著我們團隊具備如大谷翔平般的「二刀流」頂尖實力，在 NVIDIA CUDA 與 AMD ROCm 兩大生態系中都能展現極致的運算表現。",
        link: `${import.meta.env.BASE_URL}docs/zh-TW/MasterAi_zh.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "NVIDIA GPU 產品線 - Hopper 到 Blackwell",
        desc: "本文件系統化梳理 NVIDIA 從 Hopper (H100) 到 Blackwell (B200) 的產品架構與階層。透過釐清 RTX、HGX、DGX 等核心術語與規格對比，協助您快速掌握硬體選型邏輯。",
        link: `${import.meta.env.BASE_URL}docs/zh-TW/nvidia_gpu_product_lines_zh.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "AMD Radeon™ AI PRO R9700 Creator 32GB",
        desc: "提供適合本機 AI 推論、開發和其他記憶體密集型工作負載的絕佳功能。",
        link: "https://www.asrock.com/Graphics-Card/AMD/Radeon%20AI%20PRO%20R9700%20Creator%2032GB/"
      },
      {
        title: "ASRock GAI4G-R9700 多卡工作站系統",
        desc: "商用多 GPU 解決方案，支援 Threadripper PRO 與 2500W 電源。",
        link: "https://www.asrock.com/Graphics-Card/spec/product.asp?Model=GAI4G-R9700"
      },
      {
        title: "探索永擎革命性的伺服器創新",
        desc: "永擎科技專注於雲端運算伺服器硬體領域，以創新和可靠性著稱。",
        link: "https://www.asrockrack.com/index.tw.asp"
      },
      {
        title: "工業級強固邊緣AIoT系統平台",
        desc: "東擎科技致力於打造新世代高效能邊緣 AI 平台，融合 AI 加速引擎、工業物聯網與即時資料處理，為智慧製造與產業應用賦能。",
        link: "https://www.asrockind.com/zh-tw/robust-edge-aIoT-platform"
      }
    ]
  },
  youtubeSection: {
    title: "本地部署 AI 影片",
    query: "本地AI", // 中文關鍵字
    more: "在 YouTube 上觀看",
    maxResults: 11,
    pinnedVideo: {
      // 只需要填入影片 ID 即可，其他資訊會自動從 YouTube API 獲取
      videoId: "EpErrCZ2A2Q"  // 替換成實際的影片 ID，例如："dQw4w9WgXcQ"
    },
  },
  contact: {
    title: "聯絡我們",
    text: "商業合作或技術洽詢：",
    linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
    linkedinText: "在 LinkedIn 上聯繫 Allen",
    email: "allen1_sun@asrock.com.tw"
  }
};