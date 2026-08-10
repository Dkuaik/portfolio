import { LINK_KIND, LOCALE, WORK_KIND, type Dictionary } from "./types";

export const es: Dictionary = {
  locale: LOCALE.ES,
  htmlLang: "es",
  profile: {
    name: "Enrique Ríos Flores",
    title: "AI Engineer · Infraestructura y Sistemas LLM",
    location: "Ciudad de México, México",
    summary:
      "Ingeniero de IA con formación cuantitativa en Física y Matemáticas (IPN). Especializado en el ciclo de vida completo de sistemas de IA Generativa: desde la orquestación de arquitecturas multi-agente complejas mediante el Model Context Protocol y automatización con n8n, hasta el despliegue de modelos de pesos abiertos y la administración de infraestructura bare-metal on-premise y clústeres de Kubernetes.",
    focusAreas: [
      "Orquestación Multi-Agente",
      "Model Context Protocol",
      "Agentic RAG",
      "Serving y Optimización de LLM",
      "On-Premise y Kubernetes",
      "Pipelines de Visión por Computadora",
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
        period: "Dic 2025 — Actualidad",
        current: true,
        highlights: [
          {
            title: "Sistemas de Agentes Autónomos",
            description:
              "Diseño y despliegue de sistemas multi-agente autónomos (CrewAI, LangGraph, Hermes, Phi), implementando el Model Context Protocol, tooling estructurado con function calling y máquinas de estado con n8n.",
          },
          {
            title: "Agentic RAG e Integración de Conocimiento",
            description:
              "Integración de flujos Agentic RAG, gestión estratégica del contexto (optimización y harnessing de la ventana de contexto) y conectividad multi-fuente mediante embeddings vectoriales, bases de datos de grafos (Neo4j) y cubos DAX.",
          },
          {
            title: "Serving y Optimización de LLM",
            description:
              "Despliegue y serving de modelos de pesos abiertos (Llama, DeepSeek, Qwen) con vLLM para maximizar throughput, minimizar latencia y optimizar costos operativos.",
          },
          {
            title: "Infraestructura y Gestión de Gateway",
            description:
              "Administración de servidores bare-metal on-premise y clústeres de Kubernetes para cargas de trabajo de IA, gestionando ruteo, rate limiting y seguridad a través de Kong API Gateway.",
          },
          {
            title: "Pipelines de Visión por Computadora",
            description:
              "Arquitectura de pipelines multimodales de visión por computadora (Gemini API + YOLO) para analítica de video en tiempo real y detección de incidentes operativos.",
          },
        ],
      },
      {
        company: "PEMEX",
        role: "Ingeniero de IA e Infraestructura de Sistemas",
        kind: WORK_KIND.INTERNSHIP,
        period: "Ene 2025 — Ago 2025",
        current: false,
        highlights: [
          {
            title: "Despliegue Integral del Sistema",
            description:
              "Lideré el despliegue completo de la plataforma MAAe (Modelo Avanzado de Análisis de Evidencias), abarcando diseño de base de datos, backend, frontend y motores de procesamiento central.",
          },
          {
            title: "Virtualización de Infraestructura",
            description:
              "Orquestación y virtualización de infraestructura con Docker y Docker Swarm, garantizando alta disponibilidad, portabilidad y tolerancia a fallos en servidores locales.",
          },
        ],
      },
      {
        company: "Indava",
        role: "Arquitecto de Sistemas y Líder Técnico de Proyecto",
        kind: WORK_KIND.FULL_TIME,
        period: "Nov 2022 — Dic 2025",
        current: false,
        highlights: [
          {
            title: "Arquitectura Central y Migración de Legado",
            description:
              "Lideré la arquitectura de software y la migración de sistemas legados a Laravel, integrando flujos de automatización a medida con ERPs empresariales (Odoo) en proyectos clave: TAP Terminal, PLMA, IncFile, IRE-TCMC.",
          },
          {
            title: "Integración de LLM y Procesamiento de Datos",
            description:
              "Implementación de pipelines de IA con OpenRouter para la adopción empresarial de LLM, web scraping a gran escala (Selenium, BeautifulSoup) y procesamiento de datos no estructurados asistido por IA.",
          },
          {
            title: "Modelado de Procesos y Bases de Conocimiento",
            description:
              "Diseño de lógica de negocio compleja mediante DMN de 4 niveles y modelado BPMN, además de wikis técnicas automatizadas conectadas a bases de conocimiento internas.",
          },
        ],
      },
    ],
    skills: [
      {
        label: "Orquestación y Agentes",
        items: [
          "CrewAI",
          "LangGraph",
          "Hermes",
          "Phi",
          "Model Context Protocol",
          "Tooling Skills",
          "Gestión de Contexto y Harness",
          "n8n (Máquinas de Estado)",
          "OpenClaw",
          "NemoClaw",
        ],
      },
      {
        label: "Modelos y RAG",
        items: [
          "Llama",
          "DeepSeek",
          "Qwen",
          "Agentic RAG",
          "Embeddings",
          "Neo4j",
          "YOLO",
          "LLM Multimodales",
        ],
      },
      {
        label: "Herramientas e Ingeniería AI-Native",
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
        label: "Infraestructura y Servidores",
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
        label: "Desarrollo y Datos",
        items: [
          "Python (Avanzado)",
          "FastAPI",
          "Flask",
          "SQL",
          "Cubos DAX",
          "APIs REST",
          "Git / GitHub",
          "C",
          "Odoo ERP",
        ],
      },
    ],
    education: [
      {
        degree: "Licenciatura en Física y Matemáticas",
        institution: "Instituto Politécnico Nacional (ESFM)",
        period: "2018 — 2023",
      },
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "B2 Competente" },
    ],
  },
  ui: {
    nav: {
      experience: "Experiencia",
      stack: "Stack",
      background: "Formación",
    },
    sections: {
      experience: "Experiencia",
      stack: "Stack",
      background: "Formación",
      education: "Educación",
      languages: "Idiomas",
    },
    internshipBadge: "Prácticas",
    footerNote: "Abierto a proyectos de sistemas agénticos e infraestructura de IA.",
    switchToLight: "Cambiar a tema claro",
    switchToDark: "Cambiar a tema oscuro",
    switchLanguage: "Switch to English",
    swarmSpawn: "> desplegando {count} agentes...",
    swarmTerminated: "> agentes finalizados",
    documentTitle: "Enrique Ríos Flores — AI Engineer",
    documentDescription:
      "Ingeniero de IA especializado en orquestación multi-agente, Model Context Protocol, Agentic RAG, serving de LLM con vLLM e infraestructura Kubernetes on-premise.",
  },
};
