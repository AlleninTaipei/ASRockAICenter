export const en = {
  header: {
    title: "ASRock AI - AI Center",
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