const LOCALES = {
  en: {
    header: {
      title: "ASRock AI",
      subtitle: "This is not SaaS. This is your AI factory.",
      taglines: [
        "In the era of AI, compute is strategy. Own yours.",
        "Every agent, every workflow, every inference \u2014 on your infrastructure."
      ]
    },
    audienceNav: {
      decisionMaker: {
        badge: "For Decision Makers",
        title: "Business Value & ROI",
        desc: "Explore AI solutions built for enterprise outcomes — quick-start demos, pilot projects with proven results, and a structured collaboration process.",
        cta: "Explore Solutions →",
        anchor: "#apps"
      },
      developer: {
        badge: "ASRock AI Developer Academy",
        title: "Developer Enablement",
        desc: "Courses, architecture deep-dives, and curated resources for engineers building on on-premise AI infrastructure.",
        cta: "Enter Academy →",
        anchor: "#academy"
      }
    },
    academy: {
      badge: "ASRock AI Developer Academy",
      title: "Developer Enablement Hub",
      subtitle: "Deep-dive courses, architecture breakdowns, and curated blogs — built for engineers who build."
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
      title: "Inside the Factory — Precision AI Tools",
      subtitle: "Every application runs on your own compute — your data never leaves your infrastructure."
    },
    apps: [
      {
        "name": "SquadForge",
        "icon": "🦞",
        "badge": "AI Factory Core",
        "subtitle": "Enterprise AI, Running on Your Own Compute",
        "tagline": "\"In the era of AI, compute is strategy. Own yours.\"",
        "desc": "SquadForge transforms your organization into an AI-native workforce by deploying dedicated agents for every employee—running entirely on your on-prem AI infrastructure. While others depend on external APIs and pay per token, you operate on owned compute: predictable, scalable, and fully under your control. No external dependencies. No data exposure. Just continuous, autonomous execution powered by your own systems. This is not SaaS. This is your AI factory."
      },
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
        name: "MotionScope", icon: "🎬",
        subtitle: "Human Motion Intelligence from Any Footage",
        tagline: '"Every frame holds a story. MotionScope reads it."',
        desc: "Upload any video — dashcam recordings, retail surveillance, public space footage, sports training films, or news reels — and MotionScope transforms it into structured human motion intelligence. Every person's position, trajectory, and movement pattern is tracked, quantified, and visualized across every frame. No live feed required. No specialized setup. Just deep, frame-by-frame insight from the footage you already have."
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
        name: "DeepTuner", icon: "🎛️",
        subtitle: "No-Code LLM Fine-Tuning Studio",
        tagline: '"Your model. Your data. Your rules — no code required."',
        desc: "DeepTuner puts the full power of LLM fine-tuning into a clean, intuitive interface — no scripts, no terminal, no engineering overhead. Upload your base model and dataset, configure training parameters including batch size, epochs, optimizer, gradient checkpointing, and PEFT mode, then let DeepTuner handle the rest. Every training run is fully observable: real-time GPU utilization, memory consumption, and temperature trends keep you in control from first epoch to last. When training completes, loss curves and performance summaries are right there — clear, visual, and ready to inform your next iteration. Fine-tuning a language model has never been this accessible."
      },
      {
        name: "PerfScope", icon: "📊",
        subtitle: "The Eye of Performance Visualization",
        tagline: '\u201cData speaks: the ultimate verification of hardware strength.\u201d',
        desc: "Real-time monitoring of multi-concurrent inference, tracking Tokens/sec and GPU resource utilization. Ensures your AI tasks achieve peak performance on AI workstations with visible, measurable fluidity."
      },
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
        quote: "Patient data never leaves our network — and care quality has never been higher.",
        metrics: [
          { icon: "⏱", value: "30hrs", label: "saved per nurse/month" },
          { icon: "✅", value: "Consistent", label: "education delivery" },
          { icon: "📈", value: "↑", label: "care adherence" }
        ],
        modules: ["RagPilot", "ChatForge"],
        desc: "Built on RagPilot's medical knowledge base and ChatForge's conversational layer — both running on-premise — the system delivers personalized patient education without a single patient record touching an external API. Multilingual Q&A adapts to each patient's literacy level; take-home summaries are generated locally. Clinical teams gain compliance confidence alongside measurable care improvements: 30 hours saved per nurse per month, zero sensitive health data exposed."
      },
      {
        icon: "🎨",
        company: "Hardware Brand Team",
        industry: "Consumer Electronics / Marketing & Design",
        quote: "From product concept to visual in seconds — with zero IP exposure risk.",
        metrics: [
          { icon: "⏱", value: "80%", label: "faster visual iteration" },
          { icon: "💰", value: "↓", label: "outsourcing cost" },
          { icon: "🔁", value: "∞", label: "creative variations" }
        ],
        modules: ["PixelForge"],
        desc: "PixelForge runs the entire visual generation workflow on the team's own compute — meaning unreleased product imagery and brand concepts never leave the firewall. Anyone can instantly create, share, and remix high-quality visuals without design expertise or NDAs. No per-token fees to external AI providers. No IP leakage risk. Parameter-aware remixing turns individual outputs into reusable team knowledge, accelerating creative production without surrendering control."
      },
      {
        "icon": "🏭",
        "company": "Digital Media Publisher",
        "industry": "Content Publishing / Localization",
        "quote": "ScriptForge + RagLingo on our own compute: 80% faster, 60% cheaper, zero data exposure.",
        "metrics": [
          { "icon": "⏱", "value": "80%", "label": "faster subtitle turnaround" },
          { "icon": "💰", "value": "↓60%", "label": "translation cost" },
          { "icon": "🔒", "value": "100%", "label": "on-prem data privacy" }
        ],
        "modules": ["ScriptForge", "RagLingo"],
        "desc": "ScriptForge handles speech recognition and timeline alignment; RagLingo delivers high-precision, context-aware translation — both running on an on-premise AI workstation. The result: no per-token fees to external APIs, no content sent outside the organization, and a multi-day manual workflow compressed to hours. Every frame of sensitive content remains under the publisher's direct control, making multilingual publishing a scalable, repeatable pipeline without sacrificing data sovereignty."
      },
      {
        "icon": "📘",
        "company": "K-12 Test Prep Publisher",
        "industry": "Education / Learning Content",
        "quote": "Every student gets a personalized tutor — running on our servers, not someone else’s cloud.",
        "metrics": [
          { "icon": "⏱", "value": "70%", "label": "content production time reduced" },
          { "icon": "🎯", "value": "+40%", "label": "student engagement" },
          { "icon": "📈", "value": "↑", "label": "learning outcomes" }
        ],
        "modules": ["RagPilot", "ChatForge"],
        "desc": "RagPilot transforms the publisher’s existing curriculum library into a structured knowledge base; ChatForge delivers that knowledge as personalized, adaptive Q&A for each student. Running on-premise means student performance data — a compliance-sensitive asset — stays entirely within the institution. Static textbooks become a living, continuously adapting learning platform: 70% faster content production, 40% higher engagement, and full data sovereignty maintained throughout."
      },
      {
        "icon": "⚽",
        "company": "Amateur Football Team",
        "industry": "Sports / Team Performance",
        "quote": "From match footage to coaching insights overnight — no analyst, no cloud subscription.",
        "metrics": [
          { "icon": "⏱", "value": "90%", "label": "analysis time reduced" },
          { "icon": "🎯", "value": "+35%", "label": "tactical execution" },
          { "icon": "📊", "value": "Weekly", "label": "player performance reports" }
        ],
        "modules": ["MotionScope"],
        "desc": "MotionScope ingests match and training footage and transforms it into structured motion intelligence — tracking every player's position, trajectory, and movement pattern across every frame. Running entirely on the team's own server, no clip is ever sent to an external service. What previously demanded a professional analyst working through hours of footage is now a fully automated process: annotated movement visualizations, player reports, and tactical pattern summaries delivered overnight. 90% of analysis time eliminated. Zero footage sent to third parties."
      },
      {
        icon: "🔭",
        company: "Independent Asset Manager",
        industry: "Finance / Cross-Market Equity Research",
        quote: "Institutional-grade analysis without institutional overhead.",
        metrics: [
          { icon: "⏱", value: "80%", label: "research time per thesis" },
          { icon: "🌐", value: "Multi", label: "markets in one workflow" },
          { icon: "🔒", value: "0", label: "portfolio exposure to cloud" }
        ],
        modules: ["RagPilot", "RagLingo", "ChatForge"],
        desc: "RagPilot ingests and indexes the manager's private research archive — earnings transcripts, broker reports, macroeconomic data across regions — into a structured, queryable knowledge base running entirely on-premise. RagLingo dissolves language barriers across global markets, translating and contextualizing research from any region or language into actionable insights without routing a single document through an external API. ChatForge sits at the top of the stack as the conversational interface: natural-language queries generate cross-border investment briefs, thesis summaries, and position rationales drawn from the manager's own curated data. No cloud subscription. No document ever leaves the workstation. 80% of per-thesis research time eliminated."
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
        link: "public/docs/en/Course-en/Building%20with%20the%20Claude%20API.html",
        type: "html"
      },
      {
        title: "The Anatomy of an Agent Harness",
        desc: "Explore how an agent harness turns a raw LLM into a reliable task-solving machine. Covers the core loop, tool execution, context compression (ACON), self-optimization, and the verification patterns that push benchmark scores from outside top 30 into the top 5.",
        link: "public/docs/en/Course-en/Agent_Harness.html",
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
      subtitle: "這不是 SaaS。這是你的 AI 工廠。",
      taglines: [
        "在 AI 時代，算力就是戰略。掌握它。",
        "每一個代理、每一條工作流、每一次推理——都在您的基礎設施上執行。"
      ]
    },
    audienceNav: {
      decisionMaker: {
        badge: "寫給決策者",
        title: "商業價值與投資回報",
        desc: "探索企業級 AI 解決方案——涵蓋快速入門展示、具備驗證成果的領航專案，以及完整的合作流程。",
        cta: "探索解決方案 →",
        anchor: "#apps"
      },
      developer: {
        badge: "ASRock AI 開發者學院",
        title: "開發者賦能專區",
        desc: "課程、架構深度解析，以及專為工程師精選的技術資源，助您在本地 AI 基礎設施上快速建構。",
        cta: "進入學院 →",
        anchor: "#academy"
      }
    },
    academy: {
      badge: "ASRock AI 開發者學院",
      title: "開發者賦能中心",
      subtitle: "深度課程、架構解析，以及精選技術部落格——專為致力建構 AI 的工程師而設。"
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
      title: "工廠內部：精密 AI 工具",
      subtitle: "每一項應用都在您自有的算力上運行——數據永遠不會離開您的基礎設施。"
    },
    apps: [
      {
        "name": "SquadForge", "icon": "🦞",
        "badge": "AI 工廠核心",
        "subtitle": "企業級 AI，在你的算力上運行",
        "tagline": "「在 AI 時代，算力就是戰略。掌握它。」",
        "desc": "為每位員工部署專屬 AI 代理，全面運行於企業自有的本地 AI 基礎設施之上。當他人依賴外部 API、按 token 付費時，你運行的是自有算力：可預測、可擴展、完全掌控。無外部依賴，無資料外流。所有任務持續、自主地在你的系統中執行。這不是 SaaS，而是你的 AI 生產體系。"
      },
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
        name: "MotionScope", icon: "🎬",
        subtitle: "從任何影片提取人體動態智慧",
        tagline: "「每一幀影像，都藏著一個故事。MotionScope 讀懂它。」",
        desc: "上傳任何影片——行車紀錄器畫面、零售監控錄像、公共空間影像、運動訓練影片或新聞素材——MotionScope 將其轉化為結構化的人體動態情報。每個人的位置、軌跡與動作模式，皆在每一幀中被追蹤、量化並可視化呈現。無需即時串流，無需特殊設備。只需將您手中現有的影像，轉化為深度的逐幀洞察。"
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
        name: "DeepTuner", icon: "🎛️",
        subtitle: "無程式碼 LLM 微調工作室",
        tagline: "「你的模型，你的數據，你的規則——無需任何程式碼。」",
        desc: "DeepTuner 將 LLM 微調的完整能力，濃縮進一個直覺、簡潔的操作介面——無需任何程式碼、無需終端機、無需工程背景。上傳基礎模型與資料集，設定 batch size、Epoch、optimizer、Gradient Checkpoint、PEFT 模式等訓練參數，其餘交給 DeepTuner 全權處理。整個訓練過程完全可視：即時 GPU 使用率、記憶體消耗與溫度走勢，讓你從第一個 Epoch 到最後一步都掌握全局。訓練結束後，loss 曲線與效能摘要一目了然，清晰呈現，直接支援你的下一輪決策。微調一個語言模型，從未如此平易近人。"
      },
      {
        name: "PerfScope", icon: "📊",
        subtitle: "性能觀測之眼",
        tagline: "「數據說話，硬體實力的終極驗證。」",
        desc: "多併發推理模擬，即時監測 Tokens/sec 與 GPU 資源占用率。確保您的 AI 任務在 AI 工作站上發揮極致效能，看得見的流暢。"
      },
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
        quote: "病患資料從未離開院內網絡——照護品質卻達到前所未有的高度。",
        metrics: [
          { icon: "⏱", value: "30hrs", label: "護理師每月節省" },
          { icon: "✅", value: "一致性", label: "衛教內容標準化" },
          { icon: "📈", value: "↑", label: "照護依從性提升" }
        ],
        modules: ["RagPilot", "ChatForge"],
        desc: "以 RagPilot 建構醫療知識庫，透過 ChatForge 提供病患對話介面——兩者皆在院內地端運行，確保每一筆敏感健康資料不觸及外部 API。系統依病患理解程度自動調整內容、支援多語語音問答，並在本地生成個人化帶回資料。臨床團隊同時兼顧合規要求與可量化的照護提升：每位護理師每月節省 30 小時，且無任何患者資料外流風險。"
      },
      {
        icon: "🎨",
        company: "硬體品牌行銷團隊",
        industry: "消費性電子 / 行銷與設計",
        quote: "從產品概念到視覺成品，只需幾秒——且零 IP 外洩風險。",
        metrics: [
          { icon: "⏱", value: "80%", label: "視覺迭代速度提升" },
          { icon: "💰", value: "↓", label: "外包成本降低" },
          { icon: "🔁", value: "∞", label: "創意變體產出" }
        ],
        modules: ["PixelForge"],
        desc: "PixelForge 在團隊自有算力上執行完整視覺生成工作流——尚未發布的產品影像與品牌概念始終保存在防火牆內。任何人無需設計背景或保密協議，即可即時產出、共享並 Remix 高品質視覺內容。無外部 AI 服務商的按次計費，無 IP 外洩風險。參數可追溯的 Remix 機制將個人創作轉化為團隊可複用的視覺知識資產，在不失去掌控的前提下加速創意產出。"
      },
      {
        "icon": "🏭",
        "company": "數位媒體出版業者",
        "industry": "內容出版 / 多語在地化",
        "quote": "ScriptForge + RagLingo 在自有算力上運行：快 80%、省 60%、零資料外流。",
        "metrics": [
          { "icon": "⏱", "value": "80%", "label": "字幕產出時間縮短" },
          { "icon": "💰", "value": "↓60%", "label": "翻譯與製作成本降低" },
          { "icon": "🔒", "value": "100%", "label": "內容全程本地處理" }
        ],
        "modules": ["ScriptForge", "RagLingo"],
        "desc": "ScriptForge 負責語音辨識與時間軸對齊，RagLingo 提供高精度語境感知翻譯——兩者皆運行於地端 AI 工作站之上。結果：零外部 API 按次計費，敏感內容不流出組織，多日人工作業壓縮至數小時。每一幀影像版權資產都在出版商的直接掌控之下，多語內容製作從此成為可擴展、可重複的生產管線，且完整維護數位主權。"
      },
      {
        "icon": "📘",
        "company": "K12 課程內容出版業者",
        "industry": "教育 / 學習內容",
        "quote": "每位學生都有專屬家教——運行在自己的伺服器，而非他人的雲端。",
        "metrics": [
          { "icon": "⏱", "value": "70%", "label": "內容製作時間縮短" },
          { "icon": "🎯", "value": "+40%", "label": "學生學習投入度提升" },
          { "icon": "📈", "value": "↑", "label": "學習成效提升" }
        ],
        "modules": ["RagPilot", "ChatForge"],
        "desc": "RagPilot 將出版商現有課程素材轉化為結構化知識庫；ChatForge 以此為基礎，為每位學生提供個人化、自適應的問答互動。地端運行確保學生表現數據——一項高度合規敏感的資產——完整保存於機構內部。靜態教材因此蛻變為持續進化的學習平台：內容製作時間縮短 70%、學習投入度提升 40%，且全程維護完整的數位主權。"
      },
      {
        "icon": "⚽",
        "company": "業餘足球隊",
        "industry": "運動 / 球隊表現提升",
        "quote": "不需要專職分析師，也不需要雲端訂閱——從比賽影片到教練洞察，一夜之間。",
        "metrics": [
          { "icon": "⏱", "value": "90%", "label": "影片分析時間縮短" },
          { "icon": "🎯", "value": "+35%", "label": "戰術執行成功率提升" },
          { "icon": "📊", "value": "每週產出", "label": "球員表現報告" }
        ],
        "modules": ["MotionScope"],
        "desc": "MotionScope 將比賽與訓練影片轉化為結構化的人體動態情報——追蹤每位球員在每一幀中的位置、軌跡與動作模式。系統全程在球隊自有伺服器上運行，影片片段不外流至任何第三方服務。原本需要專職分析師逐格審視的工作，如今完全自動化：動作軌跡視覺化標註、球員報告與戰術模式摘要一夜生成。影片分析時間縮短 90%，零資料傳送至第三方。"
      },
      {
        "icon": "🔭",
        "company": "自主資產管理者",
        "industry": "金融 / 跨市場股票研究",
        "quote": "機構級分析，不需要機構級開銷。",
        "metrics": [
          { "icon": "⏱", "value": "80%", "label": "每筆研究時間縮短" },
          { "icon": "🌐", "value": "跨境", "label": "單一工作流整合" },
          { "icon": "🔒", "value": "0", "label": "投資組合不外流" }
        ],
        "modules": ["RagPilot", "RagLingo", "ChatForge"],
        "desc": "RagPilot 將管理者的私有研究資料庫——跨地區的財報逐字稿、券商報告與總體經濟數據——轉化為全程在地端運行的結構化可查詢知識庫。RagLingo 打破全球市場的語言壁壘，將任何語種的研究報告與資訊翻譯、語境化為可執行的投資洞察，全程不將任何文件路由至外部 API。ChatForge 作為最上層的對話介面：以自然語言查詢，即可從管理者自有的精選資料中生成跨境投資摘要、論點總結與持倉依據。無雲端訂閱費用，無文件流出工作站，每筆研究時間縮短 80%。"
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
