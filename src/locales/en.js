export const en = {
  header: {
    title: "ASRock AI Center",
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
    { name: "ChatForge", icon: "💬", desc: "Chatbot Starter：Demonstrates OpenAI-compatible API calls and real-time conversation generation." },
    { name: "RagPilot", icon: "🎯", desc: "RAG Enterprise Application：Integrates structured and unstructured data, showcasing Function Call + MCP." },
    { name: "PixelForge", icon: "🎨", desc: "Visual Content Generation：Text-to-image workflow supporting batch brand material production." },
    { name: "QuickStack", icon: "🐋", desc: "Development Environment Orchestrator：One-click deployment of pre-configured Docker images for rapid AI model service and development environment setup." },
    { name: "PerfScope", icon: "📊", desc: "Performance Visualization：Simulates multi-concurrent inference, evaluats Tokens/sec, GPU performance." },
    { name: "RagLingo", icon: "🌐", desc: "AI Translation：Multi-language knowledge translation and localization with RAG + LLM." }
  ],
  resources: {
    title: "Related Resources",
    items: [
      {
        title: "AI Workstation Chassis Thermal Recommendation",
        desc: "Fan Configuration: What Actually Works in Real-World Builds",
        link: `${import.meta.env.BASE_URL}docs/zh-TW/ai-workstation-thermal-guide-zh.pdf`,  // ← 用反引號
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
      }
    ]
  },
  youtubeSection: {
    title: "Popular Enterprise AI Videos",
    query: "Enterprise On-premise AI", // 英文關鍵字
    more: "Watch on YouTube",
    maxResults: 8 // English version queries 8 videos
    // No pinnedVideo for English version
  },
  contact: {
    title: "Contact Us",
    text: "For collaboration or technical inquiries, please email:",
    email: "allen1_sun@asrock.com.tw"
  }
};