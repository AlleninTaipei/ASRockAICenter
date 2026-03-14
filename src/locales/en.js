export const en = {
  header: {
    title: "ASRock AI",
    subtitle: "AI Middleware – Bridging Hardware and Software in AI Workstations",
    taglines: [
      "Hardware Performance × AI Engine × Open API",
      "Comprehensive AI Support：Eliminating technical and cost barriers with seamlessly integrated hardware and software solutions",
      "Making AI Capabilities as Ready-to-Use as Electricity"
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
      desc: "Integrates STT with deep LLM contextual awareness to convert video audio into localized scripts and precise subtitles with emotional warmth. Purpose-built for digital media and publishers (proven by our PoC for Japanese-to-Chinese video translation), increasing content distribution efficiency by over 80%."
    },
    {
      name: "RagPilot", icon: "🎯",
      subtitle: "Enterprise Knowledge Navigator",
      tagline: '\u201cLetting AI understand your private data.\u201d',
      desc: "Consolidates structured and unstructured data, showcasing powerful Function Call and MCP (Model Context Protocol) expansion capabilities. Builds a private corporate knowledge base, ensuring every AI-generated answer is grounded in verifiable facts."
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
      desc: "Real-time monitoring of multi-concurrent inference, tracking Tokens/sec and GPU resource utilization. Ensures your AI tasks achieve peak performance on ASRock workstations with visible, measurable fluidity."
    }
  ],
  resources: {
    title: "Related Resources",
    items: [
      {
        title: "AI Workstation Chassis Thermal Recommendation",
        desc: "Fan Configuration: What Actually Works in Real-World Builds",
        link: `${import.meta.env.BASE_URL}docs/en/ai-workstation-thermal-guide-en.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "Master Ai - Your own local AI Workstation",
        desc: "In the arena of AI computing, there is no absolute winner—only the choice that best fits your needs. Master Ai embodies our team’s elite \"Two-Way Player\" expertise, mirroring the versatility of Shohei Ohtani by delivering peak performance across both NVIDIA CUDA and AMD ROCm ecosystems.",
        link: `${import.meta.env.BASE_URL}docs/en/MasterAi_en.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "NVIDIA GPU Product Lines - Hopper to Blackwell",
        desc: "A strategic guide to NVIDIA’s GPU lineup, covering the evolution from Hopper (H100) to Blackwell (B200). This document clarifies key terminology (RTX, HGX, DGX) and technical specs to simplify hardware selection.",
        link: `${import.meta.env.BASE_URL}docs/en/nvidia_gpu_product_lines_en.pdf`,  // ← 用反引號
        type: "pdf"
      },
      {
        title: "AMD Radeon™ AI PRO R9700 Creator 32GB",
        desc: "Great capabilities for local AI inference, development, and other memory-intensive workloads with the latest AMD RDNA™ 4 architecture and 32GB of video memory.",
        link: "https://www.asrock.com/Graphics-Card/AMD/Radeon%20AI%20PRO%20R9700%20Creator%2032GB/"
      },
      {
        title: "ASRock GAI4G-R9700 Multi-GPU Workstation",
        desc: " A commercial multi-GPU system (ships with 4 × Radeon AI PRO R9700 32GB) — supports Threadripper PRO CPUs, 8-channel DDR5 ECC, PCIe 5.0 and a 2500W PSU. Ideal for high-end AI training/inference, rendering and compute tasks.",
        link: "https://www.asrock.com/Graphics-Card/spec/product.asp?Model=GAI4G-R9700"
      },
      {
        title: "Explore the revolutionary server innovations",
        desc: "ASRock Rack Inc. is specialized in the field of Cloud Computing Server Hardware with Creativity and Reliability.",
        link: "https://www.asrockrack.com/index.asp"
      },
      {
        title: "Industrial Robust Edge AIoT Platform",
        desc: "ASRock Industrial Computer - Innoband is dedicated to building next-generation high-performance Edge AI platforms, integrating AI acceleration, industrial IoT, and real-time data processing to empower smart manufacturing and industrial applications.",
        link: "https://www.asrockind.com/en-gb/robust-edge-aIoT-platform"
      }
    ]
  },
  youtubeSection: {
    title: "On-premise AI Videos",
    query: "On-premise AI", // 英文關鍵字
    more: "Watch on YouTube",
    maxResults: 12 // English version queries 12 videos
    // No pinnedVideo for English version
  },
  contact: {
    title: "Contact Us",
    text: "For collaboration or technical inquiries:",
    linkedinUrl: "https://www.linkedin.com/in/allen-sun-67738b38a",
    linkedinText: "Contact Allen on LinkedIn",
    email: "allen1_sun@asrock.com.tw"
  }
};