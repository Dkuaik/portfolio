"use client";
import { Flex, Avatar, Button, Icon, RevealFx } from "@/once-ui/components";
import { SOCIALS } from "@/app/constants";
import React from "react";

const Hero = ({ isLoaded }: { isLoaded: boolean }) => {
    return (
        <Flex
            id="home"
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            style={{
                padding: "7rem 2rem 4rem 2rem",
                maxWidth: 1400,
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
            }}
        >
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
                    <span style={{ display: "block", width: 80, height: 4, background: "linear-gradient(90deg, #3b82f6, #60a5fa)", borderRadius: 4, marginBottom: 32 }} />
                </RevealFx>
                <RevealFx delay={0.1}>
                    <span style={{ fontWeight: 600, color: "#60a5fa", fontSize: "1.1rem", marginBottom: "1rem", letterSpacing: "0.5px", display: "block" }}>Hola, soy</span>
                </RevealFx>
                <RevealFx delay={0.2}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1 }}>
                        Enrique Ríos
                        <div style={{ color: "#60a5fa", marginTop: "0.5rem", fontSize: "3rem" }}>Espacialista en IA</div>
                    </h1>
                </RevealFx>
                <RevealFx delay={0.3}>
                    <p style={{ color: "#b0b6be", fontSize: "1.2rem", marginBottom: 32, maxWidth: 500, lineHeight: 1.6 }}>
                        Entusiasta de la tecnología y la inteligencia artificial, con experiencia en automatización de procesos, integración de APIs y desarrollo de soluciones innovadoras con IA.
                    </p>
                </RevealFx>
                <RevealFx delay={0.4}>
                    <Flex gap={"m"} style={{ marginBottom: "2rem" }} className="social-buttons">
                        {SOCIALS.map((s) => (
                            <Button key={s.href} href={s.href} prefixIcon={s.icon} size="m" variant="tertiary" target="_blank" rel="noopener noreferrer" className="social-button" style={{ transition: "all 0.3s ease", border: "1px solid rgba(96, 165, 250, 0.3)", background: "rgba(59, 130, 246, 0.08)", position: "relative", overflow: "hidden" }}>
                                <span className="button-text"></span>
                                <span className="button-glow"></span>
                            </Button>
                        ))}
                    </Flex>
                </RevealFx>
                <RevealFx delay={0.5}>
                    <Button className="cta-button" style={{ marginTop: 10, background: "linear-gradient(45deg, #3b82f6, #60a5fa)", backgroundSize: "200% 200%", color: "#fff", fontWeight: 700, fontSize: "1.1rem", borderRadius: 12, padding: "1.1rem 2.3rem", border: "none", transition: "all 0.4s ease", boxShadow: "0 10px 25px rgba(59, 130, 246, 0.35)", position: "relative", overflow: "hidden" }} href="#portfolio" prefixIcon="chevronDown" variant="primary">
                        <span>Ver mi trabajo</span>
                        <div className="cta-button-effect"></div>
                    </Button>
                </RevealFx>
            </Flex>
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
                <div className="profile-background-glow"></div>
                <div className="profile-frame">
                    <div className="profile-border">
                        <div className="profile-image-container">
                            <Avatar size="xl" src="/images/cover.png" empty={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            <div className="profile-image-shine"></div>
                        </div>
                    </div>
                </div>
                {/* GitHub - Posición bubble-1 */}
                <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className="floating-bubble bubble-1 floating-social" title={SOCIALS[0].label}>
                    <div className="floating-element-content"><Icon name="github" size="m" style={{ color: "#60a5fa" }} /></div>
                </a>
                {/* LinkedIn - Posición bubble-2 */}
                <a href={SOCIALS[1].href} target="_blank" rel="noopener noreferrer" className="floating-bubble bubble-2 floating-social" title={SOCIALS[1].label}>
                    <div className="floating-element-content"><Icon name="linkedin" size="m" style={{ color: "#60a5fa" }} /></div>
                </a>
                {/* Email - Posición bubble-3 */}
                <a href={SOCIALS[2].href} className="floating-bubble bubble-3 floating-social" title={SOCIALS[2].label}>
                    <div className="floating-element-content"><Icon name="email" size="m" style={{ color: "#60a5fa" }} /></div>
                </a>
            </Flex>
            <Flex
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{
                    flex: 2,
                    padding: "2rem",
                    maxWidth: 420,
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s ease-out 0.4s",
                }}
            >
                <RevealFx delay={0.3}>
                    <div style={{ marginBottom: 40, width: "100%" }}>
                        <h2 style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", marginBottom: 16, letterSpacing: 0.5, position: "relative", paddingBottom: "12px" }}>
                            Sobre mí
                        </h2>
                    </div>
                </RevealFx>
                <RevealFx delay={0.4}><div style={{ marginBottom: 40, width: "100%" }}></div></RevealFx>
                <RevealFx delay={0.5} children={undefined}></RevealFx>
            </Flex>
        </Flex>
    );
};

export default Hero;
