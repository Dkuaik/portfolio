"use client";
import { Icon } from "@/once-ui/components";
import React, { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                padding: "1.5rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(18, 20, 25, 0.8)",
                backdropFilter: "blur(10px)",
                zIndex: 10,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                <div
                    style={{
                        width: "32px",
                        height: "32px",
                        background: "#3b82f6",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1.2rem",
                        }}
                    >
                        E
                    </span>
                </div>
                <h3
                    style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        marginLeft: "0.5rem",
                    }}
                >
                    Enrique Ríos
                </h3>
            </div>
            
            <nav
                className="desktop-nav"
                style={{
                    display: "flex",
                    gap: "1.5rem",
                }}
            >
                <a href="#home" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", opacity: 0.9, transition: "all 0.2s ease" }}>Inicio</a>
                <a href="#about" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", opacity: 0.7, transition: "all 0.2s ease" }}>Sobre mí</a>
                <a href="#portfolio" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", opacity: 0.7, transition: "all 0.2s ease" }}>Proyectos</a>
                <a href="#contact" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", opacity: 0.7, transition: "all 0.2s ease" }}>Contacto</a>
            </nav>

            <div 
                className="mobile-menu-button"
                style={{
                    display: "none",
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "rgba(59, 130, 246, 0.1)",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                }}
                onClick={toggleMobileMenu}
            >
                <Icon name="chevronDown" size="m" style={{ color: "#60a5fa" }} />
            </div>

            <div 
                id="mobile-menu"
                style={{
                    position: "fixed",
                    top: "80px",
                    left: 0,
                    right: 0,
                    background: "rgba(18, 20, 25, 0.95)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "1.5rem",
                    display: isMobileMenuOpen ? "flex" : "none",
                    flexDirection: "column",
                    gap: "1rem",
                    zIndex: 10,
                    transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: "all 0.3s ease",
                }}
                className="mobile-menu"
            >
                <a href="#home" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", padding: "0.8rem 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    Inicio
                    <Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
                </a>
                <a href="#about" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", padding: "0.8rem 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    Sobre mí
                    <Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
                </a>
                <a href="#portfolio" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", padding: "0.8rem 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    Proyectos
                    <Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
                </a>
                <a href="#contact" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", padding: "0.8rem 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    Contacto
                    <Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
                </a>
            </div>
        </header>
    );
};

export default Header;
