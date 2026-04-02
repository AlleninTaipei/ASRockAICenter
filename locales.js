const LOCALES = {
  en: {
    header: {
      title: "ASRock AI",
      subtitle: "AI Middleware \u2013 Bridging Hardware and Software in AI Workstations",
      taglines: [
        "The Total Solution Enabler for On Premise AI",
        "Bridging the gap between enterprise vision and deployable AI infrastructure"
      ]
    },
    appsSection: {
      title: "AI Fusion Starter - AI Quick Start Solutions"
    },
    apps: [
      {
        name: "ChatForge", icon: "💬",
        subtitle: "Conversational AI Gateway",
        tagline: '\u201cConversation is the first step to understanding AI.\u201d',
        desc: "Demonstrates OpenAI-compatible API calls with millisecond-level real-time response. Provides an enterprise-grade chatbot template, transforming AI into your most reliable first-line customer service or virtual assistant."
      },
      {
        name: "PixelForge", icon: "🎨",
        subtitle: "Visual Creativity Engine",
        tagline: '\u201cTransforming imagination into high-quality imagery.\u201d',
        desc: "A complete Text-to-Image workflow supporting batch production of brand assets and creative visuals. Drastically lowers the barrier to design, enabling one-click automation from copywriting to visual output."
      },
      {
        name: "ScriptForge", icon: "🎙️",
        subtitle: "AI Scripting & Subtitling Factory",
        tagline: '\u201cGiving voice the soul of text; crossing language boundaries.\u201d',
        desc: "Integrates STT with deep LLM contextual awareness to convert video audio into localized scripts and precise subtitles with emotional warmth. Purpose-built for digital media and publishers."
      },
      {
        name: "RagPilot", icon: "🎯",
        subtitle: "Enterprise Knowledge Navigator",
        tagline: '\u201cLetting AI understand your private data.\u201d',
        desc: "Consolidates structured and unstructured data, showcasing OpenAI Function Calling expansion capabilities. Builds a private corporate knowledge base, ensuring every AI-generated answer is grounded in verifiable facts."
      },
      {
        name: "RagLingo", icon: "🌐",
        subtitle: "Global Knowledge Translation",
        tagline: '\u201cLocalization is not just translation; it is comprehension.\u201d',
        desc: "Based on RAG + LLM technology, providing high-precision translation and professional academic localization for technical knowledge. Assists multinational corporations in bridging knowledge gaps, achieving synchronized global technical documentation."
      },
      {
        name: "QuickStack", icon: "🐋",
        subtitle: "Development Environment Orchestrator",
        tagline: '\u201cTurning complex underlying environments into a single click.\u201d',
        desc: "Pre-configured Docker images for second-level deployment of AI model services and development environments. Frees developers from the headache of environment configuration, allowing them to focus on AI model innovation and application logic."
      },
      {
        name: "PerfScope", icon: "📊",
        subtitle: "The Eye of Performance Visualization",
        tagline: '\u201cData speaks: the ultimate verification of hardware strength.\u201d',
        desc: "Real-time monitoring of multi-concurrent inference, tracking Tokens/sec and GPU resource utilization. Ensures your AI tasks achieve peak performance on AI workstations with visible, measurable fluidity."
      },
      {
        name: "SquadForge", icon: "🦞",
        subtitle: "AI Agent Squad Headquarters",
        tagline: '"Every employee deserves an agent that never sleeps."',
        desc: "ForgeSquad deploys a dedicated OpenCode dev agent and OpenClaw task agent for every member of your team—assembling a full AI operative squad across your organization. All missions execute within your private network: code refactoring, workflow automation, cross-platform scheduling. Zero data leaves the building. One infrastructure cost. Infinite operations."
      }
    ],
    resources: {
      title: "Related Resources",
      items: [
        {
          title: "AI Workstation Chassis Thermal Recommendation",
          desc: "Fan Configuration: What Actually Works in Real-World Builds",
          link: "public/docs/en/ai-workstation-thermal-guide-en.html",
          type: "html"
        },
        {
          title: "Master Ai - Your own local AI Workstation",
          desc: "In the arena of AI computing, there is no absolute winner\u2014only the choice that best fits your needs. Master Ai embodies our team's elite \"Two-Way Player\" expertise, mirroring the versatility of Shohei Ohtani by delivering peak performance across both NVIDIA CUDA and AMD ROCm ecosystems.",
          link: "public/docs/en/MasterAi_en.html",
          type: "html"
        },
        {
          title: "Building with the Claude API",
          desc: "Walk through fundamental API operations, advanced prompting techniques, tool integration, and architectural patterns for building AI-powered systems.",
          link: "public/docs/Building%20with%20the%20Claude%20API.html",
          type: "html"
        },
        {
          title: "NVIDIA GPU Product Lines - Hopper to Blackwell",
          desc: "A strategic guide to NVIDIA's GPU lineup, covering the evolution from Hopper (H100) to Blackwell (B200). This document clarifies key terminology (RTX, HGX, DGX) and technical specs to simplify hardware selection.",
          link: "public/docs/en/nvidia_gpu_product_lines_en.html",
          type: "html"
        },
        {
          title: "Explore the revolutionary server innovations",
          desc: "ASRock Rack Inc. is specialized in the field of Cloud Computing Server Hardware with Creativity and Reliability.",
          link: "https://www.asrockrack.com/index.asp"
        },
        {
          title: "Industrial Robust Edge AIoT Platform",
          desc: "ASRock Industrial’s AI Box Computer features comprehensive hardware solutions and vision technology to bring AI and Edge computing to smart applications.",
          link: "https://www.asrockind.com/en-gb/ai-edge-computer-"
        }
      ]
    },
    youtubeSection: {
      title: "On-premise AI Videos",
      query: "On-premise AI",
      more: "Watch on YouTube",
      maxResults: 12
    },
    contact: {
      title: "Contact Us",
      text: "For collaboration or technical inquiries:",
      linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
      linkedinText: "Contact Allen on LinkedIn",
      email: "allen1_sun@asrock.com.tw"
    }
  },
  'zh-TW': {
    header: {
      title: "ASRock AI",
      subtitle: "AI Middleware - 串聯 AI 工作站中的軟硬體整合",
      taglines: [
        "On-Premise AI 全方位解決方案推手",
        "加速從願景到實際部署的無縫落地"
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
        desc: "演示相容 OpenAI API 調用，實現毫秒級的實時對話回應。提供企業級 Chatbot 起始模板，讓 AI 成為您最貼心的第一線客服或助理。"
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
        desc: "整合結構化與非結構化數據，展示 OpenAI Function Calling 擴充能力。構建企業私有的知識庫，確保 AI 回答的每一句話都有據可查。"
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
        desc: "多併發推理模擬，即時監測 Tokens/sec 與 GPU 資源占用率。確保您的 AI 任務在 AI 工作站上發揮極致效能，看得見的流暢。"
      },
      {
        name: "SquadForge", icon: "🦞",
        subtitle: "群體 AI 代理飼育站",
        tagline: "「養一隻龍蝦不稀奇，一次養一群才是本事。」",
        desc: "以地端 LLM 工作站為「龍蝦池」，讓全公司員工同時運行各自的 OpenClaw AI 代理。程式開發、流程自動化、跨平台任務排程，全數在私有網路內閉環執行。雲端按次計費是散養，地端工作站才是規模化飼育——資料不出門，成本一次搞定。"
      }
    ],
    resources: {
      title: "相關資源",
      items: [
        {
          title: "AI 工作站機殼散熱建議",
          desc: "風扇配置：實際可行的實戰方案",
          link: "public/docs/zh-TW/ai-workstation-thermal-guide-zh.html",
          type: "html"
        },
        {
          title: "Master Ai - 您的專屬在地 AI 工作站",
          desc: "在 AI 運算的賽場上，沒有絕對的勝負，只有最適合您的選擇。Master Ai 象徵著我們團隊具備如大谷翔平般的「二刀流」頂尖實力，在 NVIDIA CUDA 與 AMD ROCm 兩大生態系中都能展現極致的運算表現。",
          link: "public/docs/zh-TW/MasterAi_zh.html",
          type: "html"
        },
        {
          title: "使用 Claude API 開發 — 入門指南",
          desc: "涵蓋 API 的基本操作、進階提示技巧、工具整合以及建立 AI 系統的架構模式。",
          link: "public/docs/Building%20with%20the%20Claude%20API.html",
          type: "html"
        },
        {
          title: "NVIDIA GPU 產品線 - Hopper 到 Blackwell",
          desc: "本文件系統化梳理 NVIDIA 從 Hopper (H100) 到 Blackwell (B200) 的產品架構與階層。透過釐清 RTX、HGX、DGX 等核心術語與規格對比，協助您快速掌握硬體選型邏輯。",
          link: "public/docs/zh-TW/nvidia_gpu_product_lines_zh.html",
          type: "html"
        },
        {
          title: "探索永擎革命性的伺服器創新",
          desc: "永擎科技專注於雲端運算伺服器硬體領域，以創新和可靠性著稱。",
          link: "https://www.asrockrack.com/index.tw.asp"
        },
        {
          title: "AI 運算電腦",
          desc: "東擎科技的 AI Box 電腦擁有全面的硬體解決方案和視覺技術，可將人工智慧和邊緣運算引入智慧應用。",
          link: "https://www.asrockind.com/zh-tw/ai-edge-computer-"
        }
      ]
    },
    youtubeSection: {
      title: "本地部署 AI 影片",
      query: "本地AI",
      more: "在 YouTube 上觀看",
      maxResults: 11,
      pinnedVideo: {
        videoId: "EpErrCZ2A2Q"
      }
    },
    contact: {
      title: "聯絡我們",
      text: "商業合作或技術洽詢：",
      linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
      linkedinText: "在 LinkedIn 上聯繫 Allen",
      email: "allen1_sun@asrock.com.tw"
    }
  }
};
