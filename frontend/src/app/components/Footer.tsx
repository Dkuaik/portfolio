"use client";
import { Flex, Icon } from "@/once-ui/components";
import React from "react";
import { SOCIALS } from "@/app/constants";


const Footer = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{
                padding: "2rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(18, 20, 25, 0.9)",
            }}
        >
            {/* Social links */}
            <Flex direction="row" justifyContent="center" alignItems="center" style={{ gap: "1rem", marginBottom: "1rem" }}>
                {SOCIALS.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#fff", fontSize: "1.2rem" }}
                    >
                        <Icon name={social.icon} size="m" />
                    </a>
                ))}
            </Flex>
            {/* Copyright */}
            <p style={{ color: "#b0b6be", fontSize: "0.9rem" }}>
                © {new Date().getFullYear()} Enrique Ríos Flores. Construido con Next.js y FastAPI.
            </p>
        </Flex>
    );
};

export default Footer;
