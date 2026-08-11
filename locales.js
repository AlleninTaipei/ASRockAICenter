const LOCALES = {
  en: {
    header: {
      title:  "ASRock AI Center",
      subtitle: "Enterprise AI Transformation \u2014 on your infrastructure, on your terms.",
      taglines: [
        "In the era of AI, compute is strategy. Own yours \u2014 on-premise or hybrid.",
        "From AI infrastructure to enterprise transformation: we close the gap."
      ],
      statusLine: "ON-PREM AI INFRASTRUCTURE // OPERATIONAL"
    },
    nav: {
      why: "Why",
      services: "Services",
      products: "Products",
      solutions: "Solutions",
      resources: "Resources",
      contact: "Contact",
      official: "Official Site",
      officialUrl: "https://www.asrock.com/microsite/AICenter/index.html",
      officialUrlReady: true,
      comingSoon: "Coming Soon"
    },
    whySection: {
      title: "Enterprise AI, built on infrastructure you own",
      subtitle: "A single team taking AI from strategy to production — without your data ever leaving your perimeter.",
      description: "We pair a structured service model with a growing suite of production-ready AI applications, all designed to run entirely on-premise or in a hybrid environment. From the first requirements interview to ongoing optimization, every step keeps compute and data under your control.",
      stats: [
        { label: "AI Applications" },
        { label: "Pilot Projects" },
        { label: "Step Service Process" }
      ],
      reasonsTitle: "What sets us apart",
      reasons: [
        { title: "Your infrastructure, your rules", desc: "Every application and pilot runs on-premise or hybrid — no data leaves your perimeter, no per-token costs, no external API dependency." },
        { title: "End-to-end, not just a toolkit", desc: "From requirements interview through POC, deployment, and ongoing optimization — one structured process, one team accountable for outcomes." },
        { title: "Proven across industries", desc: "Pilot deployments spanning healthcare, finance, education, media, sports, and consumer electronics — real production workloads, not demos." }
      ]
    },
    processSection: {
      title: "Service Model & Collaboration Process",
      subtitle: "From first conversation to production deployment — a structured path to enterprise AI transformation."
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
        desc: "Architect a tailored AI solution aligned with your hardware configuration, data pipeline, and business objectives."
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
        desc: "Continuously tune performance, update models, and provide strategic consulting to maximize long-term value from your on-premise AI investment."
      }
    ],
    appsSection: {
      title: "Inside the Factory — Precision AI Tools",
      subtitle: "Every application runs on infrastructure you control — on-premise, hybrid, or private cloud. Your data never leaves your perimeter."
    },
    apps: [
      {
        "name": "SquadForge",
        "icon": "🦞",
        "badge": "AI Factory Core",
        "subtitle": "Enterprise AI, Running on Your Own Compute",
        "tagline": "“In the era of AI, compute is strategy. Own yours.”",
        "desc": "Deploys a dedicated AI agent for every employee, running entirely on your on-prem infrastructure. No external APIs, no per-token costs, no data exposure — continuous autonomous execution on compute you own."
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
        tagline: '“Every frame holds a story. MotionScope reads it.”',
        desc: "Transforms any existing video into structured human motion intelligence — tracking every person's position, trajectory, and movement pattern frame by frame. No live feed required. No specialized setup."
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
        tagline: '\u201cLocalization is not just translation; it is understanding.\u201d',
        desc: "Based on RAG + LLM technology, providing high-precision translation and professional academic localization for technical knowledge. Helps multinational teams bridge knowledge gaps and keep technical documentation in sync across every region."
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
        tagline: '“Your model. Your data. Your rules — no code required.”',
        desc: "Full LLM fine-tuning in a no-code interface — no scripts, no terminal. Upload your model and dataset, set parameters, and monitor GPU usage and loss curves in real time."
      },
      {
        name: "PerfScope", icon: "📊",
        subtitle: "The Eye of Performance Visualization",
        tagline: '\u201cData speaks: the ultimate verification of hardware strength.\u201d',
        desc: "Real-time monitoring of multi-concurrent inference, tracking Tokens/sec and GPU resource utilization. Ensures your AI tasks achieve peak performance on AI workstations with visible, measurable speed."
      },
    ],
    successStoriesSection: {
      title: "Pilot Projects",
      subtitle: "Enterprise AI transformation in action — pilots spanning Healthcare, Consumer Electronics, Media & Publishing, Education, Sports, and Finance."
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
        desc: "RagPilot's medical knowledge base and ChatForge's conversational layer both run on-premise, delivering personalized multilingual Q&A without any patient record touching an external API. Summaries are generated locally; compliance and care quality improve together."
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
        desc: "PixelForge runs the entire visual generation workflow on the team's own compute — unreleased imagery and brand concepts never leave the firewall. Anyone can create, share, and remix high-quality visuals without design expertise, NDAs, or per-token fees."
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
        "desc": "ScriptForge handles speech recognition and timeline alignment; RagLingo delivers context-aware translation — both on-premise. A multi-day manual pipeline compresses to hours with no content routed outside the organization."
      },
      {
        "icon": "📘",
        "company": "K-12 Test Prep Publisher",
        "industry": "Education / Learning Content",
        "quote": "Every student gets a personalized tutor — running on our servers, not someone else's cloud.",
        "metrics": [
          { "icon": "⏱", "value": "70%", "label": "content production time reduced" },
          { "icon": "🎯", "value": "+40%", "label": "student engagement" },
          { "icon": "📈", "value": "↑", "label": "learning outcomes" }
        ],
        "modules": ["RagPilot", "ChatForge"],
        "desc": "RagPilot structures the existing curriculum library; ChatForge delivers it as personalized, adaptive Q&A per student — entirely on-premise. Student performance data stays within the institution; static textbooks become a continuously evolving learning platform."
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
        "desc": "MotionScope transforms match and training footage into structured motion intelligence — tracking every player's position, trajectory, and movement across every frame. Fully automated on the team's own server; no clip is ever sent externally."
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
        desc: "RagPilot indexes the manager's private research archive on-premise; RagLingo translates cross-market materials without routing any document externally; ChatForge converts the stack into a natural-language interface for cross-border briefs and thesis summaries. No cloud subscription. No document leaves the workstation."
      }
    ],
    resources: {
      title: "Related Resources",
      subtitle: "Hardware, infrastructure, and ecosystem resources for building enterprise AI — from workstation to rack.",
      items: [
        {
          title: "Master Ai - Your own local AI Workstation",
          desc: "In the arena of AI computing, there is no absolute winner \u2014 only the choice that best fits your needs. Master Ai embodies our team's elite \"Two-Way Player\" expertise, mirroring the versatility of Shohei Ohtani by delivering peak performance across both NVIDIA CUDA and AMD ROCm ecosystems.",
          link: "public/docs/en/MasterAi-en.html",
          type: "html"
        },
        {
          title: "Explore the revolutionary server innovations",
          desc: "ASRock Rack Inc. is specialized in the field of Cloud Computing Server Hardware with Creativity and Reliability.",
          link: "https://www.asrockrack.com/index.asp"
        },
        {
          title: "Industrial Robust Edge AIoT Platform",
          desc: "ASRock Industrial's AI Box Computer features comprehensive hardware solutions and vision technology to bring AI and Edge computing to smart applications.",
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
          desc: "A strategic guide to NVIDIA's GPU lineup, covering the evolution from Hopper (H100) to Blackwell (B200). This document clarifies key terminology (RTX, HGX, DGX) and technical specs to simplify hardware selection.",
          link: "public/docs/en/nvidia-gpu-product-lines-en.html",
          type: "html"
        },
      ]
    },
    coursesSection: {
      title: "Developer Courses",
      subtitle: "Two focused courses — from Claude API fundamentals to the architecture of a production-grade AI agent harness."
    },
    courses: [
      {
        title: "Building with the Claude API",
        desc: "Walk through fundamental API operations, advanced prompting techniques, tool integration, and architectural patterns for building AI-powered systems.",
        link: "public/docs/en/Course-en/Building-with-the-Claude-API.html",
        type: "html"
      },
      {
        title: "The Anatomy of an Agent Harness",
        desc: "Explore how an agent harness turns a raw LLM into a reliable task-solving machine. Covers the core loop, tool execution, context compression (ACON), self-optimization, and the verification patterns that push benchmark scores from outside top 30 into the top 5.",
        link: "public/docs/en/Course-en/Agent-Harness.html",
        type: "html"
      }
    ],
    blogsSection: {
      title: "Blogs Worth Reading",
      subtitle: "Curated perspectives from the builders and thinkers shaping enterprise AI."
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
      title: "Enterprise AI in Action",
      subtitle: "Talks, demos, and case studies on enterprise AI infrastructure and transformation.",
      query: "Enterprise AI infrastructure",
      more: "Watch on YouTube",
      maxResults: 12
    },
    contact: {
      title: "Contact Us",
      linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
      linkedinText: "Contact Allen on LinkedIn",
      people: [
        { name: "Allen Sun", title: "Head of ASRock AI Center", email: "allen1_sun@asrock.com.tw" },
        { name: "Ricardo Hsu", title: "Business Development", email: "Ricardo_Hsu@asrock.com.tw" },
        { name: "Steven Chen", title: "Technical Marketing Manager", email: "Steven2_Chen@asrock.com.tw" }
      ]
    },
    footer: {
      copyright: "© 2025 ASRock AI Center. All rights reserved."
    }
  }
};
