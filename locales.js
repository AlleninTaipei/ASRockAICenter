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
      title: "Pilot Projects",
      subtitle: "Our Pilot Projects represent collaborative efforts to explore cutting-edge solutions in specific industries. Some projects are focused on technical validation and R&D."
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
      },
      {
        icon: "🎨",
        company: "Hardware Brand Team",
        industry: "Consumer Electronics / Marketing & Design",
        quote: "From ideas to visuals in seconds — not weeks",
        metrics: [
          { icon: "⏱", value: "80%", label: "faster visual iteration" },
          { icon: "💰", value: "↓", label: "outsourcing cost" },
          { icon: "🔁", value: "∞", label: "creative variations" }
        ],
        desc: "An AI-powered visual generation and collaboration platform built for internal teams. Enables anyone to instantly create, share, and remix high-quality visuals without design or AI expertise. Combines templated workflows, shared galleries, and parameter-aware remixing to turn individual outputs into reusable team knowledge, accelerating alignment and creative production across departments."
      },
      {
        "icon": "🏭",
        "company": "Digital Media Publisher",
        "industry": "Content Publishing / Localization",
        "quote": "Turning content localization into a real-time production pipeline",
        "metrics": [
          { "icon": "⏱", "value": "80%", "label": "faster subtitle turnaround" },
          { "icon": "💰", "value": "↓60%", "label": "translation cost" },
          { "icon": "🔒", "value": "100%", "label": "on-prem data privacy" }
        ],
        "desc": "Powered by an on-prem AI workstation, the automated subtitle pipeline integrates speech recognition, translation, and timeline alignment into a single streamlined workflow. What once took days of manual effort can now be completed in just a few hours. With built-in context optimization and a fast human-in-the-loop editing interface, teams can maintain high quality while dramatically increasing output speed—turning multilingual publishing into a scalable, repeatable process without exposing sensitive content."
      },
      {
        "icon": "📘",
        "company": "K-12 Test Prep Publisher",
        "industry": "Education / Learning Content",
        "quote": "From static textbooks to personalized learning experiences",
        "metrics": [
          { "icon": "⏱", "value": "70%", "label": "content production time reduced" },
          { "icon": "🎯", "value": "+40%", "label": "student engagement" },
          { "icon": "📈", "value": "↑", "label": "learning outcomes" }
        ],
        "desc": "By integrating AI into their content workflow, the publisher transforms traditional test prep materials into interactive, personalized learning experiences. The system automatically generates explanations, practice variations, and adaptive learning paths based on student performance. What was once static content is now a dynamic learning platform that continuously adapts to each learner’s needs."
      },
      {
        "icon": "⚽",
        "company": "Amateur Football Team",
        "industry": "Sports / Team Performance",
        "quote": "From match footage to real coaching insights — without a full-time analyst",
        "metrics": [
          { "icon": "⏱", "value": "90%", "label": "analysis time reduced" },
          { "icon": "🎯", "value": "+35%", "label": "tactical execution" },
          { "icon": "📊", "value": "Weekly", "label": "player performance reports" }
        ],
        "desc": "Using an AI-powered video analysis system, the team automatically transforms match and training footage into actionable coaching insights. The system detects player positioning, tactical execution, and key mistakes, generating annotated video highlights and concise analysis summaries. What once required hours of manual review is now delivered as fast, continuous feedback — enabling the team to improve with every game."
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
      ]
    },
    coursesSection: {
      title: "Developer Courses"
    },
    courses: [
      {
        title: "Building with the Claude API",
        desc: "Walk through fundamental API operations, advanced prompting techniques, tool integration, and architectural patterns for building AI-powered systems.",
        link: "public/docs/en/Building%20with%20the%20Claude%20API.html",
        type: "html"
      },
      {
        title: "The Anatomy of an Agent Harness",
        desc: "Explore how an agent harness turns a raw LLM into a reliable task-solving machine. Covers the core loop, tool execution, context compression (ACON), self-optimization, and the verification patterns that push benchmark scores from outside top 30 into the top 5.",
        link: "public/docs/en/Course-en/Agent_Harness_Dashboard.html",
        type: "html"
      },
      {
        title: "Inside n8n: How Workflow Automation Really Works",
        desc: "Discover how n8n turns a visual canvas into a live automation engine. Covers the node-and-connection model, trigger types, the execution pipeline, credential management, and the AI Agent node — with interactive demos at every step.",
        link: "public/docs/en/Course-en/n8n-course/index.html",
        type: "html"
      },
      {
        title: "How Claw Works: A Field Guide to AI Coding Agents",
        desc: "An interactive course exploring Claw — an AI coding agent that lives in your terminal and can actually do things. Covers its Rust crate architecture, tool & permission system, and multi-provider AI design.",
        link: "public/docs/en/Course-en/claw-code-course/index.html",
        type: "html"
      },
      {
        title: "How OpenCode Works",
        desc: "Trace what happens under the hood when you type a request in OpenCode — from message to code. Covers the three-agent reasoning loop (Build / Plan / General), tool architecture, memory system, and multi-interface engine.",
        link: "public/docs/en/Course-en/opencode-course/index.html",
        type: "html"
      },
      {
        title: "How OpenClaw Works — An Interactive Course",
        desc: "A deep-dive into OpenClaw, your AI across every channel. Learn how a single brain can reply on WhatsApp, iPhone, and Mac — and how its five core characters, plugin system, and 24/7 health monitoring hold it all together.",
        link: "public/docs/en/Course-en/openclaw-course/index.html",
        type: "html"
      },
      {
        title: "Inside Hermes Agent",
        desc: "Trace exactly what happens the moment you send a message to Hermes — a self-improving AI agent. Covers the six-actor architecture, the learning loop that makes it smarter over time, multi-channel deployment, and the smart tricks behind context management and tool routing.",
        link: "public/docs/en/Course-en/hermes-course/index.html",
        type: "html"
      },
      {
        title: "Autoresearch: How AI Teaches Itself",
        desc: "Discover how an AI agent runs 100 experiments overnight and gets smarter each time. Covers the three-file architecture (train.py, prepare.py, program.md), the automated experiment loop, and how val_bpb drives every decision.",
        link: "public/docs/en/Course-en/autoresearch-course/index.html",
        type: "html"
      }
    ],
    blogsSection: {
      title: "Blogs Worth Reading"
    },
    blogs: [
      {
        title: "Letters from Andrew Ng",
        desc: "Weekly letters on AI trends, research, and the broader impact of machine learning — from one of the field's most respected voices.",
        link: "https://www.deeplearning.ai/the-batch/tag/letters/"
      },
      {
        title: "Andrej Karpathy",
        desc: "Deep dives into LLMs, neural networks, and AI systems from the former Tesla AI director and OpenAI co-founder.",
        link: "https://karpathy.ai/"
      },
      {
        title: "antirez",
        desc: "Software craftsmanship and systems thinking from the creator of Redis — on code quality, design, and the philosophy of building software.",
        link: "https://antirez.com/latest/0"
      },
      {
        title: "Peter Steinberger",
        desc: "Perspectives on Apple platforms, AI integration, and developer tooling from the founder of PSPDFKit.",
        link: "https://steipete.me/"
      }
    ],
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
        "desc": "為每位員工部署專屬 AI 代理，全面運行於企業自有的本地 AI 基礎設施之上。當他人依賴外部 API、按 token 付費時，你運行的是自有算力：可預測、可擴展、完全掌控。無外部依賴，無資料外流。所有任務持續、自主地在你的系統中執行。這不是 SaaS，而是你的 AI 生產體系。"
      }
    ],
    successStoriesSection: {
      title: "領航專案",
      subtitle: "領航專案代表我們與特定產業共同探索前瞻方案的成果，部分專案著重於技術驗證與研發合作。"
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
      },
      {
        icon: "🎨",
        company: "硬體品牌行銷團隊",
        industry: "消費性電子 / 行銷與設計",
        quote: "從想法到視覺，只需幾秒，而不是幾週",
        metrics: [
          { icon: "⏱", value: "80%", label: "視覺迭代速度提升" },
          { icon: "💰", value: "↓", label: "外包成本降低" },
          { icon: "🔁", value: "∞", label: "創意變體產出" }
        ],
        desc: "一套為企業內部打造的 AI 視覺生成與協作平台，讓任何人無需設計或 AI 背景，即可快速產出高品質視覺內容。透過模板化工作流程、共享圖庫與參數可追溯的 Remix 機制，將個人創作轉化為團隊可累積與複用的視覺知識，大幅提升跨部門溝通效率與創意產出速度。"
      },
      {
        "icon": "🏭",
        "company": "數位媒體出版業者",
        "industry": "內容出版 / 多語在地化",
        "quote": "讓每一支內容，都能在最短時間內跨語言觸及更多受眾",
        "metrics": [
          { "icon": "⏱", "value": "80%", "label": "字幕產出時間縮短" },
          { "icon": "💰", "value": "↓60%", "label": "翻譯與製作成本降低" },
          { "icon": "🔒", "value": "100%", "label": "內容全程本地處理" }
        ],
        "desc": "導入本地AI工作站與自動化字幕處理管線，整合語音辨識、機器翻譯與時間軸對齊技術，將原本需多日的人工作業壓縮至數小時內完成。系統支援內容語境優化與快速人工校對介面，確保品質與一致性，同時避免敏感素材外流，打造高效率且可控的多語內容生產流程。"
      },
      {
        "icon": "📘",
        "company": "高中參考書出版業者",
        "industry": "教育 / 學習內容",
        "quote": "讓每一本參考書，都能變成真正因材施教的學習系統",
        "metrics": [
          { "icon": "⏱", "value": "70%", "label": "內容製作時間縮短" },
          { "icon": "🎯", "value": "+40%", "label": "學生學習投入度提升" },
          { "icon": "📈", "value": "↑", "label": "學習成效提升" }
        ],
        "desc": "透過AI技術，將傳統參考書內容轉化為互動式與個人化的學習體驗。系統可自動生成題目解析、延伸練習與分層學習路徑，並依據學生表現動態調整內容難度。讓原本靜態的教材升級為持續進化的學習平台，不僅提升學習效率，也強化學生理解與應用能力。"
      },
      {
        "icon": "⚽",
        "company": "業餘足球隊",
        "industry": "運動 / 球隊表現提升",
        "quote": "沒有專職分析師，也能做出像職業隊一樣的戰術檢討",
        "metrics": [
          { "icon": "⏱", "value": "90%", "label": "影片分析時間縮短" },
          { "icon": "🎯", "value": "+35%", "label": "戰術執行成功率提升" },
          { "icon": "📊", "value": "每週產出", "label": "球員表現報告" }
        ],
        "desc": "透過AI影片分析系統，球隊將比賽與訓練影片自動轉換為可行動的教練洞察。系統能辨識球員跑位、戰術執行情況與關鍵失誤，自動生成標註影片與分析摘要，並產出個人與團隊報告。讓原本需耗費數小時的人工作業，轉變為即時且持續的數據回饋，幫助球隊在每一場比賽中持續進步。"
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
      ]
    },
    coursesSection: {
      title: "開發者課程"
    },
    blogsSection: {
      title: "值得一讀的部落格"
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
