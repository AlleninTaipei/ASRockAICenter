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
    processSection: {
      title: "Service Model & Collaboration Process"
    },
    process: [
      {
        icon: "🔍",
        title: "Requirements Interview & Assessment",
        desc: "Deep-dive into your AI goals, existing infrastructure, and core pain points to define a clear project scope and measurable success criteria."
      },
      {
        icon: "🎯",
        title: "Customized Solution Design",
        desc: "Architect a tailored AI middleware plan aligned with your hardware configuration, data pipeline, and business objectives."
      },
      {
        icon: "🧪",
        title: "POC Development & Testing",
        desc: "Build and validate a working proof-of-concept to verify technical feasibility, performance benchmarks, and quantifiable outcomes before full commitment."
      },
      {
        icon: "🚀",
        title: "System Integration & Deployment",
        desc: "Seamlessly integrate the solution into your production environment with end-to-end technical support across the full stack."
      },
      {
        icon: "🤝",
        title: "Ongoing Optimization & Advisory",
        desc: "Continuous performance tuning, model updates, and strategic consulting to ensure long-term value from your on-premise AI investment."
      }
    ],
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
        "name": "SquadForge",
        "icon": "🦞",
        "subtitle": "Enterprise AI, Running on Your Own Compute",
        "tagline": "\"In the era of AI, compute is strategy. Own yours.\"",
        "desc": "SquadForge transforms your organization into an AI-native workforce by deploying dedicated agents for every employee—running entirely on your on-prem AI infrastructure. While others depend on external APIs and pay per token, you operate on owned compute: predictable, scalable, and fully under your control. No external dependencies. No data exposure. Just continuous, autonomous execution powered by your own systems. This is not SaaS. This is your AI factory."
      }
    ],
    successStoriesSection: {
      title: "Success Stories"
    },
    successStories: [
      {
        icon: "🏥",
        company: "Healthcare Provider",
        industry: "Medical / Patient Education",
        quote: "Turning patient education into true understanding",
        metrics: [
          { icon: "⏱", value: "30hrs", label: "saved per nurse/month" },
          { icon: "✅", value: "Consistent", label: "education delivery" },
          { icon: "📈", value: "↑", label: "care adherence" }
        ],
        desc: "An AI-powered personalized education system built on a medical knowledge base. Adapts content to each patient's literacy level, supports multilingual Q&A, and generates take-home materials."
      }
    ],
    resources: {
      title: "Related Resources",
      items: [
        {
          title: "Master Ai - Your own local AI Workstation",
          desc: "In the arena of AI computing, there is no absolute winner\u2014only the choice that best fits your needs. Master Ai embodies our team’s elite \"Two-Way Player\" expertise, mirroring the versatility of Shohei Ohtani by delivering peak performance across both NVIDIA CUDA and AMD ROCm ecosystems.",
          link: "public/docs/en/MasterAi_en.html",
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
        },
        {
          title: "AI Workstation Chassis Thermal Recommendation",
          desc: "Fan Configuration: What Actually Works in Real-World Builds",
          link: "public/docs/en/ai-workstation-thermal-guide-en.html",
          type: "html"
        },
        {
          title: "NVIDIA GPU Product Lines - Hopper to Blackwell",
          desc: "A strategic guide to NVIDIA’s GPU lineup, covering the evolution from Hopper (H100) to Blackwell (B200). This document clarifies key terminology (RTX, HGX, DGX) and technical specs to simplify hardware selection.",
          link: "public/docs/en/nvidia_gpu_product_lines_en.html",
          type: "html"
        },
        {
          title: "Building with the Claude API",
          desc: "Walk through fundamental API operations, advanced prompting techniques, tool integration, and architectural patterns for building AI-powered systems.",
          link: "public/docs/en/Building%20with%20the%20Claude%20API.html",
          type: "html"
        },
        {
          title: "How Claw Works: A Field Guide to AI Coding Agents",
          desc: "An interactive course exploring Claw — an AI coding agent that lives in your terminal and can actually do things. Covers its Rust crate architecture, tool & permission system, and multi-provider AI design.",
          link: "public/docs/en/Course-en/claw-code-course/index.html",
          type: "html"
        },
        {
          title: "How OpenClaw Works — An Interactive Course",
          desc: "A deep-dive into OpenClaw, your AI across every channel. Learn how a single brain can reply on WhatsApp, iPhone, and Mac — and how its five core characters, plugin system, and 24/7 health monitoring hold it all together.",
          link: "public/docs/en/Course-en/openclaw-course/index.html",
          type: "html"
        },
        {
          title: "How OpenCode Works",
          desc: "Trace what happens under the hood when you type a request in OpenCode — from message to code. Covers the three-agent reasoning loop (Build / Plan / General), tool architecture, memory system, and multi-interface engine.",
          link: "public/docs/en/Course-en/opencode-course/index.html",
          type: "html"
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
    processSection: {
      title: "服務模式與合作流程"
    },
    process: [
      {
        icon: "🔍",
        title: "需求訪談與評估",
        desc: "深入了解您的 AI 目標、現有基礎設施與核心痛點，定義清晰的專案範疇與可量化的成功指標。"
      },
      {
        icon: "🎯",
        title: "客製化方案設計",
        desc: "依據您的硬體配置、資料管線與業務目標，量身打造最適合的 AI Middleware 架構方案。"
      },
      {
        icon: "🧪",
        title: "POC 開發與測試",
        desc: "建構可運行的概念驗證，在正式投入前確認技術可行性、效能表現與可量化成果。"
      },
      {
        icon: "🚀",
        title: "系統整合與正式部署",
        desc: "提供全端技術支援，將解決方案無縫整合至您的正式生產環境，確保穩定上線。"
      },
      {
        icon: "🤝",
        title: "後續優化與顧問支持",
        desc: "持續調校效能、更新模型，並提供策略性顧問諮詢，最大化您的 On-Premise AI 長期投資價值。"
      }
    ],
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
        "name": "SquadForge", "icon": "🦞",
        "subtitle": "企業級 AI，在你的算力上運行",
        "tagline": "「在 AI 時代，算力就是戰略。掌握它。」",
        "desc": "SquadForge 讓你的組織轉型為 AI 原生團隊，為每位員工部署專屬 AI 代理，全面運行於企業自有的本地 AI 基礎設施之上。當他人依賴外部 API、按 token 付費時，你運行的是自有算力：可預測、可擴展、完全掌控。無外部依賴，無資料外流。所有任務持續、自主地在你的系統中執行。這不是 SaaS，而是你的 AI 生產體系。"
      }
    ],
    successStoriesSection: {
      title: "成功案例"
    },
    successStories: [
      {
        icon: "🏥",
        company: "醫療院所",
        industry: "醫療 / 病患衛教",
        quote: "讓每一位病患，都能真正「聽懂」自己的病情",
        metrics: [
          { icon: "⏱", value: "30hrs", label: "護理師每月節省" },
          { icon: "✅", value: "一致性", label: "衛教內容標準化" },
          { icon: "📈", value: "↑", label: "照護依從性提升" }
        ],
        desc: "AI 驅動的個人化衛教系統，整合醫療知識庫，依病患理解程度自動調整內容，支援多語語音問答，並產出個人化帶回資料。"
      }
    ],
    resources: {
      title: "相關資源",
      items: [
        {
          title: "Master Ai - 您的專屬在地 AI 工作站",
          desc: "在 AI 運算的賽場上，沒有絕對的勝負，只有最適合您的選擇。Master Ai 象徵著我們團隊具備如大谷翔平般的「二刀流」頂尖實力，在 NVIDIA CUDA 與 AMD ROCm 兩大生態系中都能展現極致的運算表現。",
          link: "public/docs/zh-TW/MasterAi_zh.html",
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
        },
        {
          title: "AI 工作站機殼散熱建議",
          desc: "風扇配置：實際可行的實戰方案",
          link: "public/docs/zh-TW/ai-workstation-thermal-guide-zh.html",
          type: "html"
        },
        {
          title: "NVIDIA GPU 產品線 - Hopper 到 Blackwell",
          desc: "本文件系統化梳理 NVIDIA 從 Hopper (H100) 到 Blackwell (B200) 的產品架構與階層。透過釐清 RTX、HGX、DGX 等核心術語與規格對比，協助您快速掌握硬體選型邏輯。",
          link: "public/docs/zh-TW/nvidia_gpu_product_lines_zh.html",
          type: "html"
        },
        {
          title: "使用 Claude API 開發 — 入門指南",
          desc: "涵蓋 API 的基本操作、進階提示技巧、工具整合以及建立 AI 系統的架構模式。",
          link: "public/docs/zh-TW/Building%20with%20the%20Claude%20API.html",
          type: "html"
        },
        {
          title: "Claw 如何運作：AI Coding Agent 實地指南",
          desc: "互動式課程，深入探索住在 terminal 裡的 AI coding agent — Claw。涵蓋其 Rust crate 架構、工具與權限系統，以及多 AI provider 設計原理。",
          link: "public/docs/zh-TW/Course-zh/claw-code-course/index.html",
          type: "html"
        },
        {
          title: "OpenClaw 如何運作 — 互動式課程",
          desc: "深度解析 OpenClaw — 你的 AI 無所不在。了解同一個 brain 如何跨 WhatsApp、iPhone 與 Mac 回覆，以及五大核心角色、plugin system 與 24/7 健康監控如何協同運作。",
          link: "public/docs/zh-TW/Course-zh/openclaw-course/index.html",
          type: "html"
        },
        {
          title: "OpenCode 如何運作",
          desc: "追蹤你在 OpenCode 輸入 request 後底層發生的一切。涵蓋三種 agent 推理迴圈（Build / Plan / General）、工具架構、記憶體系統與多介面引擎。",
          link: "public/docs/zh-TW/Course-zh/opencode-course/index.html",
          type: "html"
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
      linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
      linkedinText: "在 LinkedIn 上聯繫 Allen",
      email: "allen1_sun@asrock.com.tw"
    }
  }
};
