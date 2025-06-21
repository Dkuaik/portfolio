"use client";
import { Flex } from "@/once-ui/components";
import ProjectList from "@/once-ui/components/ProjectList";
import React from "react";

const Portfolio = ({ isLoaded }: { isLoaded: boolean }) => {
    return (
        <Flex
            id="portfolio"
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
                padding: "4rem 2rem",
                maxWidth: 1400,
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out 0.6s",
            }}
        >
            <ProjectList
                projects={[
                    {
                        title: "Asistente IA para análisis de datos",
                        description: "Desarrollo de un asistente inteligente para el análisis y visualización automática de datos empresariales.",
                        tags: ["Python", "IA", "Análisis de Datos"],
                        image: "/images/project1.jpg"
                    },
                    {
                        title: "Sistema de automatización de procesos",
                        description: "Implementación de flujos de trabajo automatizados para optimizar procesos comerciales mediante tecnologías de IA.",
                        tags: ["Automatización", "APIs", "Cloud"],
                        image: "/images/project2.jpg"
                    },
                    {
                        title: "Plataforma de integración de servicios",
                        description: "Desarrollo de una solución que conecta diferentes herramientas empresariales mediante APIs y webhooks.",
                        tags: ["Integración", "APIs", "Backend"],
                        image: "/images/project3.jpg"
                    },
                ]}
            />
        </Flex>
    );
};

export default Portfolio;
