import { LINK_KIND, LOCALE, WORK_KIND, type Dictionary } from "./types";

export const en: Dictionary = {
  locale: LOCALE.EN,
  htmlLang: "en",
  profile: {
    name: "Enrique Ríos Flores",
    title: "AI Engineer · Infrastructure & LLM Systems",
    location: "Mexico City, Mexico",
    summary:
      "AI Engineer with a quantitative background in Physics and Mathematics (IPN). Specialized in the end-to-end lifecycle of Generative AI systems: from orchestrating complex multi-agent architectures using the Model Context Protocol and n8n automation, to deploying open-weight models and managing on-premise bare-metal infrastructure and Kubernetes clusters.",
    focusAreas: [
      "Multi-Agent Orchestration",
      "Model Context Protocol",
      "Agentic RAG",
      "LLM Serving & Optimization",
      "On-Premise & Kubernetes",
      "Computer Vision Pipelines",
    ],
    links: [
      {
        kind: LINK_KIND.EMAIL,
        label: "enrq.rios.f@gmail.com",
        href: "mailto:enrq.rios.f@gmail.com",
      },
      {
        kind: LINK_KIND.GITHUB,
        label: "github.com/Dkuaik",
        href: "https://github.com/Dkuaik",
      },
      {
        kind: LINK_KIND.LINKEDIN,
        label: "linkedin.com/in/enrqriosf",
        href: "https://linkedin.com/in/enrqriosf",
      },
    ],
    positions: [
      {
        company: "MOBO",
        role: "AI Engineer",
        kind: WORK_KIND.FULL_TIME,
        period: "Dec 2025 — Present",
        current: true,
        highlights: [
          {
            title: "Autonomous Agent Systems",
            description:
              "Designed and deployed autonomous multi-agent systems (CrewAI, LangGraph, Hermes, Phi), implementing the Model Context Protocol, structured tooling and function calling, and state machines with n8n.",
          },
          {
            title: "Agentic RAG & Knowledge Integration",
            description:
              "Integrated Agentic RAG workflows, strategic context management (context window optimization and harnessing), and multi-source connectivity using vector embeddings, graph databases (Neo4j), and DAX cubes.",
          },
          {
            title: "LLM Serving & Optimization",
            description:
              "Deployed and served open-weight models (Llama, DeepSeek, Qwen) using vLLM to maximize throughput, minimize latency, and optimize operational costs.",
          },
          {
            title: "Infrastructure & Gateway Management",
            description:
              "Administered on-premise bare-metal servers and Kubernetes clusters for AI workloads, managing routing, rate limiting, and security via Kong API Gateway.",
          },
          {
            title: "Computer Vision Pipelines",
            description:
              "Architected multimodal computer vision pipelines (Gemini API + YOLO) for real-time video analytics and operational incident detection.",
          },
        ],
      },
      {
        company: "PEMEX",
        role: "AI & Systems Infrastructure Engineer",
        kind: WORK_KIND.INTERNSHIP,
        period: "Jan 2025 — Aug 2025",
        current: false,
        highlights: [
          {
            title: "End-to-End System Deployment",
            description:
              "Led the complete deployment of the MAAe platform (Advanced Model for Evidence Analysis), covering database design, backend, frontend, and core processing engines.",
          },
          {
            title: "Infrastructure Virtualization",
            description:
              "Orchestrated and virtualized infrastructure using Docker and Docker Swarm, ensuring high availability, portability, and fault tolerance across local servers.",
          },
        ],
      },
      {
        company: "Indava",
        role: "Systems Architect & Technical Project Lead",
        kind: WORK_KIND.FULL_TIME,
        period: "Nov 2022 — Dec 2025",
        current: false,
        highlights: [
          {
            title: "Core Architecture & Legacy Migration",
            description:
              "Led software architecture and legacy system migrations to Laravel, integrating custom automation workflows with enterprise ERPs (Odoo) across key projects: TAP Terminal, PLMA, IncFile, IRE-TCMC.",
          },
          {
            title: "LLM & Data Processing Integration",
            description:
              "Implemented AI pipelines with OpenRouter for enterprise LLM adoption, large-scale web scraping (Selenium, BeautifulSoup), and AI-driven unstructured data processing.",
          },
          {
            title: "Process Modeling & Knowledge Bases",
            description:
              "Designed complex business logic using 4-level DMNs and BPMN modeling, and automated technical wikis connected to internal knowledge bases.",
          },
        ],
      },
    ],
    skills: [
      {
        label: "Orchestration & Agents",
        items: [
          "CrewAI",
          "LangGraph",
          "Hermes",
          "Phi",
          "Model Context Protocol",
          "Tooling Skills",
          "Context Management & Harness",
          "n8n (State Machines)",
          "OpenClaw",
          "NemoClaw",
        ],
      },
      {
        label: "Models & RAG",
        items: [
          "Llama",
          "DeepSeek",
          "Qwen",
          "Agentic RAG",
          "Embeddings",
          "Neo4j",
          "YOLO",
          "Multimodal LLMs",
        ],
      },
      {
        label: "DevTools & AI-Native Engineering",
        items: [
          "Claude Code",
          "OpenCode",
          "OpenRouter",
          "vLLM",
          "Function Calling (Pydantic / Instructor)",
          "Structured Outputs",
        ],
      },
      {
        label: "Infrastructure & Servers",
        items: [
          "On-Premise / Bare-Metal",
          "Kubernetes",
          "Docker",
          "Docker Swarm",
          "Kong API Gateway",
          "Linux / Bash",
          "CI/CD",
        ],
      },
      {
        label: "Development & Data",
        items: [
          "Python (Advanced)",
          "FastAPI",
          "Flask",
          "SQL",
          "DAX Cubes",
          "REST APIs",
          "Git / GitHub",
          "C",
          "Odoo ERP",
        ],
      },
    ],
    education: [
      {
        degree: "B.S. in Physics and Mathematics",
        institution: "Instituto Politécnico Nacional (ESFM)",
        period: "2018 — 2023",
      },
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "B2 Proficient" },
    ],
  },
  ui: {
    nav: {
      experience: "Experience",
      stack: "Stack",
      background: "Background",
    },
    sections: {
      experience: "Experience",
      stack: "Stack",
      background: "Background",
      education: "Education",
      languages: "Languages",
    },
    internshipBadge: "Internship",
    footerNote: "Open to work on agentic systems and AI infrastructure.",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    switchLanguage: "Cambiar a español",
    swarmSpawn: "> spawning {count} agents...",
    swarmTerminated: "> all agents terminated",
    documentTitle: "Enrique Ríos Flores — AI Engineer",
    documentDescription:
      "AI Engineer specialized in multi-agent orchestration, Model Context Protocol, agentic RAG, LLM serving with vLLM, and on-premise Kubernetes infrastructure.",
  },
};
