"use client";
import { Flex, Avatar, Button, Icon, RevealFx } from "@/once-ui/components";
import { SOCIALS } from "@/app/constants";
import React, { useEffect, useRef } from "react";
import Image from 'next/image';

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
    const profileContainerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    // Efecto para el glow que sigue al mouse en todo el hero
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                // Calcular posición relativa del mouse
                const x = (clientX / innerWidth) * 100;
                const y = (clientY / innerHeight) * 100;
                
                // Crear el efecto glow en todo el hero
                heroRef.current.style.background = 
                    `radial-gradient(circle at ${x}% ${y}%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)`;
            }
        };

        // Efecto hover para la imagen del perfil
        const profileContainer = profileContainerRef.current;
        const handleProfileMouseMove = (e: MouseEvent) => {
            if (profileContainer) {
                const { left, top, width, height } = profileContainer.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;
                
                profileContainer.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.03)`;
            }
        };

        const handleProfileMouseLeave = () => {
            if (profileContainer) {
                profileContainer.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale(1)';
            }
        };

        // Agregar event listeners
        document.addEventListener('mousemove', handleMouseMove);
        if (profileContainer) {
            profileContainer.addEventListener('mousemove', handleProfileMouseMove);
            profileContainer.addEventListener('mouseleave', handleProfileMouseLeave);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (profileContainer) {
                profileContainer.removeEventListener('mousemove', handleProfileMouseMove);
                profileContainer.removeEventListener('mouseleave', handleProfileMouseLeave);
            }
        };
    }, []);
    // Sección Izquierda - Información principal
    const LeftSection = () => (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            style={{
                flex: 2,
                padding: "2rem",
                maxWidth: 700,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out",
            }}
        >
            <RevealFx>
                <span style={{ 
                    display: "block", 
                    width: 80, 
                    height: 4, 
                    background: "linear-gradient(90deg, #3b82f6, #60a5fa)", 
                    borderRadius: 4, 
                    marginBottom: 32 
                }} />
            </RevealFx>
            <RevealFx delay={0.1}>
                <span style={{ 
                    fontWeight: 600, 
                    color: "#60a5fa", 
                    fontSize: "1.1rem", 
                    marginBottom: "1rem", 
                    letterSpacing: "0.5px", 
                    display: "block" 
                }}>
                    Hola, soy
                </span>
            </RevealFx>
            <RevealFx delay={0.2}>
                <h1 style={{ 
                    fontSize: "4rem", 
                    fontWeight: 800, 
                    color: "#fff", 
                    marginBottom: 24, 
                    lineHeight: 1.1 
                }}>
                    Enrique Ríos
                    <div style={{ 
                        color: "#60a5fa", 
                        marginTop: "0.5rem", 
                        fontSize: "3rem" 
                    }}>
                        Espacialista en IA
                    </div>
                </h1>
            </RevealFx>
            <RevealFx delay={0.3}>
                <p style={{ 
                    color: "#b0b6be", 
                    fontSize: "1.2rem", 
                    marginBottom: 32, 
                    maxWidth: 500, 
                    lineHeight: 1.6 
                }}>
                    Entusiasta de la tecnología y la inteligencia artificial, con experiencia en automatización de procesos, integración de APIs y desarrollo de soluciones innovadoras con IA.
                </p>
            </RevealFx>
            <RevealFx delay={0.5}>
                <Button 
                    className="cta-button" 
                    style={{ 
                        marginTop: 10, 
                        background: "linear-gradient(45deg, #3b82f6, #60a5fa)", 
                        backgroundSize: "200% 200%", 
                        color: "#fff", 
                        fontWeight: 700, 
                        fontSize: "1.1rem", 
                        borderRadius: 12, 
                        padding: "1.1rem 2.3rem", 
                        border: "none", 
                        transition: "all 0.4s ease", 
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.35)", 
                        position: "relative", 
                        overflow: "hidden" 
                    }} 
                    href="#portfolio" 
                    prefixIcon="chevronDown" 
                    variant="primary"
                >
                    <span>Ver mi trabajo</span>
                    <div className="cta-button-effect"></div>
                </Button>
            </RevealFx>
        </Flex>
    );

    // Sección Centro - Avatar y redes sociales
    const CenterSection = () => (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
                flex: 2,
                position: "relative",
                minWidth: 320,
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out 0.2s",
            }}
        >
            <div 
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    animation: "pulse 4s ease-in-out infinite"
                }}
            ></div>
            <div className="profile-frame">
                <div className="profile-border">
                    <div 
                        ref={profileContainerRef}
                        className="profile-image-container"
                        style={{
                            transition: "transform 0.3s ease"
                        }}
                    >
                        {/* Imagen clickable: abre portafolio en nueva pestaña */}
                        <a
                            href="https://github.com/Dkuaik/portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: '100%', height: '100%', display: 'block' }}
                        >
                            <Image
                                src="/images/cover.png"
                                alt="Imagen representativa IA"
                                width={320}
                                height={320}
                                quality={100}
                                priority
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%"
                                }}
                            />
                        </a>
                        <div className="profile-image-shine"></div>
                    </div>
                </div>
            </div>
            
            {/* Redes sociales flotantes */}
            <a 
                href={SOCIALS[0].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="floating-bubble bubble-1 floating-social" 
                title={SOCIALS[0].label}
            >
                <div className="floating-element-content">
                    <Icon name="github" size="m" style={{ color: "#60a5fa" }} />
                </div>
            </a>
            
            <a 
                href={SOCIALS[1].href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="floating-bubble bubble-2 floating-social" 
                title={SOCIALS[1].label}
            >
                <div className="floating-element-content">
                    <Icon name="linkedin" size="m" style={{ color: "#60a5fa" }} />
                </div>
            </a>
            
            <a 
                href={SOCIALS[2].href} 
                className="floating-bubble bubble-3 floating-social" 
                title={SOCIALS[2].label}
            >
                <div className="floating-element-content">
                    <Icon name="email" size="m" style={{ color: "#60a5fa" }} />
                </div>
            </a>
        </Flex>
    );

    // Sección Derecha - Stack Tecnológico
    const RightSection = () => {
        const techStack = [
            { 
                category: "IA & ML", 
                icon: "robot",
                techs: [
                    { name: "OpenAI API", icon: "openai" },
                    { name: "LangChain", icon: "langchain" },
                    { name: "Machine Learning", icon: "cpu" },
                    { name: "NLP", icon: "cpu" },
                    { name: "scikit-learn", icon: "python" },
                    { name: "Pandas", icon: "python" },
                    { name: "NumPy", icon: "python" }
                ]
            },
            { 
                category: "Backend", 
                icon: "terminal",
                techs: [
                    { name: "Python", icon: "python" },
                    { name: "FastAPI", icon: "fastapi" },
                    { name: "Node.js", icon: "nodejs" },
                    { name: "APIs REST", icon: "code" }
                ]
            },
            { 
                category: "Frontend", 
                icon: "code",
                techs: [
                    { name: "React", icon: "react" },
                    { name: "Next.js", icon: "nextjs" },
                    { name: "TypeScript", icon: "typescript" },
                    { name: "JavaScript", icon: "javascript" }
                ]
            },
            { 
                category: "Databases", 
                icon: "database",
                techs: [
                    { name: "PostgreSQL", icon: "postgresql" },
                    { name: "MongoDB", icon: "mongodb" },
                    { name: "SQL Server", icon: "database" }
                ]
            },
            { 
                category: "Cloud & Tools", 
                icon: "cloud",
                techs: [
                    { name: "AWS", icon: "aws" },
                    { name: "Docker", icon: "docker" },
                    { name: "Git", icon: "git" },
                    { name: "Automation", icon: "cpu" },
                    { name: "VPS", icon: "cloud" }
                ]
            }
        ];

        return (
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{
                    flex: 2,
                    padding: "1rem",
                    maxWidth: 420,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s ease-out 0.4s",
                }}
            >
                <RevealFx delay={0.6}>
                    <h3 style={{ 
                        color: "#60a5fa", 
                        fontSize: "1.4rem", 
                        fontWeight: 700, 
                        marginBottom: "1.5rem",
                        borderBottom: "2px solid #60a5fa",
                        paddingBottom: "0.5rem"
                    }}>
                        Stack Tecnológico
                    </h3>
                </RevealFx>
                
                {techStack.map((category, index) => (
                    <RevealFx key={category.category} delay={0.7 + index * 0.1}>
                        <div style={{ 
                            marginBottom: "1.5rem",
                            width: "100%"
                        }}>
                            <h4 style={{ 
                                color: "#fff", 
                                fontSize: "1rem", 
                                fontWeight: 600, 
                                marginBottom: "0.8rem",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}>
                                <Icon name={category.icon as any} size="s" style={{ color: "#60a5fa" }} />
                                {category.category}
                            </h4>
                            <div style={{ 
                                display: "flex", 
                                flexWrap: "wrap", 
                                gap: "0.5rem" 
                            }}>
                                {category.techs.map((tech) => (
                                    <span
                                        key={tech.name}
                                        style={{
                                            background: "rgba(96, 165, 250, 0.1)",
                                            border: "1px solid rgba(96, 165, 250, 0.3)",
                                            color: "#b0b6be",
                                            padding: "0.3rem 0.8rem",
                                            borderRadius: "12px",
                                            fontSize: "0.85rem",
                                            fontWeight: 500,
                                            transition: "all 0.3s ease",
                                            cursor: "default",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "rgba(96, 165, 250, 0.2)";
                                            e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.5)";
                                            e.currentTarget.style.color = "#60a5fa";
                                            e.currentTarget.style.transform = "translateY(-2px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "rgba(96, 165, 250, 0.1)";
                                            e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.3)";
                                            e.currentTarget.style.color = "#b0b6be";
                                            e.currentTarget.style.transform = "translateY(0)";
                                        }}
                                    >
                                        <Icon name={tech.icon as any} size="xs" />
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealFx>
                ))}
                
                
            </Flex>
        );
    };

    return (
        <Flex
            ref={heroRef}
            id="home"
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            style={{
                padding: "7rem 2rem 4rem 2rem",
                width: "100vw",
                margin: "0",
                position: "relative",
                zIndex: 1,
                transition: "background 0.3s ease",
                minHeight: "100vh",
                background: "black"
            }}
        >
            <div style={{ 
                width: "100%", 
                maxWidth: "1400px", 
                margin: "0 auto", 
                display: "flex", 
                alignItems: "stretch" 
            }}>
                <LeftSection />
                <CenterSection />
                <RightSection />
            </div>
        </Flex>
    );
};

export default Hero;
