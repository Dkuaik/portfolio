"use client";
import { Flex } from "@/once-ui/components";
import ProjectList from "@/once-ui/components/ProjectList";
import React from "react";

const Portfolio = ({ isLoaded }: { isLoaded: boolean }) => {
    
    // Datos de los proyectos
    const projectsData = [
        {
            title: "GUÍA ECOEMS - Banco de Reactivos con IA",
            description: "Diseñé y desarrollé un sistema completo de generación y enriquecimiento de preguntas para preparación de exámenes ECOEMS. Incluye scrapers especializados, normalización de datos con IA, y generación de reactivos sintéticos con LLMs.",
            tags: ["Python", "IA", "Web Scraping", "PostgreSQL", "OpenRouter", "GPT-4"],
            image: "/images/guia_eecoems.jpg",
            link: "https://app.guiaecoems.com/login",
            repository:"#",
        },
        {
            title: "MAAe - Plataforma de Auditoría Automatizada",
            description: "Lideré el desarrollo de una plataforma integral para auditorías PEMEX con arquitectura hexagonal. Incluye APIs REST, servicios de IA, integración con OpenRouter y contenedorización completa con Docker. Lo que se muestra es un demo por tenmas de seguridad",
            tags: ["Java", "Spring Boot", "Python", "FastAPI", "Docker", "PostgreSQL", "IA"],
            image: "/images/pemex.webp",
            repository:"https://github.com/Dkuaik/maae_demo",
        },
        {
            title: "TCMC/IRE - Sistema CRM Inmobiliario",
            description: "Implementé un ERP completo en Odoo para gestión inmobiliaria con automatización de procesos, integración con APIs externas, y módulos de IA para análisis de leads y optimización de comisiones.",
            tags: ["Odoo", "Python", "API Integration", "CRM", "Automatización", "IA"],
            image: "/images/indava_re.jpg",
            link: "https://www.indavarealestate.com/",
        },
        {
            title: "NeuraTask - Gestor de Tareas con IA",
            description: "Desarrollo de una plataforma de gestión de tareas con IA nativa que automatiza priorización, genera resúmenes contextuales y proporciona asistencia proactiva para optimizar la productividad personal.",
            tags: ["Node.js", "NestJS", "Next.js", "PostgreSQL", "OpenRouter", "IA"],
            image: "/images/neuratask.png",
           
        },
        {
            title: "TAP Terminal - Modernización Portuaria",
            description: "Lideré como Project Manager la modernización de Refis 360 en el Puerto de Manzanillo. Incluye análisis de procesos portuarios, gestión de backlog de 600h/231 story-points, implementación de CI/CD y governance ágil con stakeholders C-level.",
            tags: ["Project Management", "Laravel", "Kubernetes", "CI/CD", "Business Analysis", "Agile"],
            image: "/images/tap.png",
            link: "https://refis360movil.tapterminal.com/",
        },
    ];

    // Estilos del contenedor
    const containerStyles = {
        padding: "4rem 2rem",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative" as const,
        zIndex: 1,
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(-10px)",
        transition: "all 0.8s ease-out 0.6s",
    };

    return (
        <Flex
            id="portfolio"
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={containerStyles}
        >
            <ProjectList
                projects={projectsData}
            />
        </Flex>
    );
};

export default Portfolio;
