"use client";
import { Flex } from "@/once-ui/components";
import React from "react";

const About = () => {

    const aboutContent = (
        <div>
           
            <p style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                Soy <strong>Enrique Ríos Flores</strong>, ingeniero en Inteligencia Artificial y licenciado en Físico-Matemáticas 
                apasionado por convertir problemas complejos en soluciones tecnológicas de alto impacto.
            </p>
            
            <p style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                Mi formación científica me entrenó para pensar de forma rigurosa y modelar el mundo con 
                ecuaciones, mientras que mi experiencia profesional me ha llevado a diseñar y orquestar 
                arquitecturas de microservicios—desde contenedores Docker hasta pipelines CI/CD en 
                Azure—con un enfoque especial en IA generativa y grandes modelos de lenguaje (LLM).
            </p>
            
            <p style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                He liderado proyectos como <strong>MAAe para PEMEX</strong>, donde containericé una plataforma de 
                revisión automática de evidencias; he creado motores de generación de preguntas con LLM 
                para <strong>Ecoems</strong>; e integré Odoo con automatizaciones Python en <strong>TCMC/IRE</strong>, reduciendo 
                tiempos operativos y costos de inferencia. Disfruto combinar mi dominio de Python, FastAPI,
                Spring Boot y Next.js con buenas prácticas de MLOps y DevOps para entregar productos 
                escalables y robustos.
            </p>
            
            <p style={{ marginBottom: "0", textAlign: "center" }}>
                Más allá del código, destaco por mi capacidad para comunicar ideas técnicas de forma clara,
                colaborar en equipos ágiles y anticiparme a los retos de cada proyecto. Hablo español 
                nativo e inglés intermedio-alto (B2). Mi objetivo es seguir impulsando la innovación 
                mediante IA aplicada—ya sea optimizando procesos, creando contenido generativo o 
                construyendo soluciones que transformen datos en valor real para las organizaciones.
            </p>
        </div>
    );

    return (
        <Flex
            id="about"
            direction="column"
            style={{
                padding: "6rem 2rem",
                maxWidth: 1400,
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
                background: "linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.03), transparent)",
            }}
        >
            <div style={{ textAlign: "left", lineHeight: 1.6 }}>
                <h2 style={{ marginBottom: "2rem", fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}>
                    Sobre Mí
                </h2>
                <div style={{ fontSize: "1.1rem", color: "#666", maxWidth: "800px", margin: "0 auto" }}>
                    {aboutContent}
                </div>
            </div>
        </Flex>
    );
};

export default About;
