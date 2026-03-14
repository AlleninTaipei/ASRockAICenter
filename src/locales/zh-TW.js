export const zhTW = {
  header: {
    title: "ASRock AI",
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
    {
      name: "ChatForge", icon: "💬",
      subtitle: "智慧對話門戶",
      tagline: "「對話，是理解 AI 的第一步。」",
      desc: "演示相容 OpenAI 的 API 調用，實現毫秒級的實時對話回應。提供企業級 Chatbot 起始模板，讓 AI 成為您最貼心的第一線客服或助理。"
    },
    {
      name: "PixelForge", icon: "🎨",
      subtitle: "視覺創意引擎",
      tagline: "「將想像力轉化為高品質影像。」",
      desc: "完整的 Text-to-Image 工作流，支援批次品牌素材與創意圖像生產。大幅降低設計門檻，實現從文案到視覺的一鍵自動化產出。"
    },
    {
      name: "ScriptForge", icon: "🎙️",
      subtitle: "影音劇本工廠",
      tagline: "「賦予聲音文字的靈魂，跨越語言的邊界。」",
      desc: "結合 STT 與 LLM 深度語境理解，將影片語音轉化為具備「情緒溫度」的在地化劇本與精確字幕。專為數位媒體與影視出版業者打造。"
    },
    {
      name: "RagPilot", icon: "🎯",
      subtitle: "企業知識導航",
      tagline: "「讓 AI 讀懂您的私有數據。」",
      desc: "整合結構化與非結構化數據，展示強大的 Function Call 與 MCP 擴充能力。構建企業私有的知識庫，確保 AI 回答的每一句話都有據可查。"
    },
    {
      name: "RagLingo", icon: "🌐",
      subtitle: "全球知識翻譯",
      tagline: "「在地化，不只是翻譯，更是理解。」",
      desc: "基於 RAG + LLM 技術，進行多語言知識的精準對譯與專業學術在地化。協助跨國企業消除知識鴻溝，實現全球化的技術文件同步。"
    },
    {
      name: "QuickStack", icon: "🐋",
      subtitle: "環境部署專家",
      tagline: "「把複雜的底層環境，變回一鍵點擊。」",
      desc: "預配置 Docker 鏡像，實現 AI 模型服務與開發環境的秒級部署。讓開發者不再為環境配置煩惱，專注於 AI 模型與應用邏輯的創新。"
    },
    {
      name: "PerfScope", icon: "📊",
      subtitle: "性能觀測之眼",
      tagline: "「數據說話，硬體實力的終極驗證。」",
      desc: "多併發推理模擬，即時監測 Tokens/sec 與 GPU 資源占用率。確保您的 AI 任務在 ASRock 工作站上發揮極致效能，看得見的流暢。"
    }
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