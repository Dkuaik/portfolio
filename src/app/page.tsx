"use client";
import { Flex, Avatar, Tag, Button, Icon, RevealFx } from "../once-ui/components";
import ProjectList from "../once-ui/components/ProjectList";
import React, { useState, useEffect } from "react";

const SOCIALS = [
	{
		href: "https://github.com/Dkuaik",
		label: "GitHub",
		icon: "github",
	},
	{
		href: "https://linkedin.com/in/enrqriosf",
		label: "LinkedIn",
		icon: "linkedin",
	},
	{
		href: "mailto:enrq.rios.f@gmail.com",
		label: "Email",
		icon: "email",
	},
];

export default function Home() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<Flex
			direction="column"
			style={{
				position: "relative",
				background: "#121419",
				minHeight: "100vh",
			}}
		>
			{/* Background effect */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					height: "100vh",
					background:
						"radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 70%)",
					zIndex: 0,
				}}
			/>

			{/* Header with Mobile Menu */}
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
				
				{/* Navigation for desktop */}
				<nav
					style={{
						display: "flex",
						gap: "1.5rem",
					}}
				>
					<a
						href="#home"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "0.95rem",
							opacity: 0.9,
							transition: "all 0.2s ease",
						}}
					>
						Inicio
					</a>
					<a
						href="#about"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "0.95rem",
							opacity: 0.7,
							transition: "all 0.2s ease",
						}}
					>
						Sobre mí
					</a>
					<a
						href="#portfolio"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "0.95rem",
							opacity: 0.7,
							transition: "all 0.2s ease",
						}}
					>
						Proyectos
					</a>
					<a
						href="#contact"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "0.95rem",
							opacity: 0.7,
							transition: "all 0.2s ease",
						}}
					>
						Contacto
					</a>
				</nav>

				{/* Mobile menu button */}
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
					onClick={() => {
						const mobileMenu = document.getElementById('mobile-menu');
						if (mobileMenu) {
							mobileMenu.classList.toggle('active');
						}
					}}
				>
					<Icon name="chevronDown" size="m" style={{ color: "#60a5fa" }} />
				</div>

				{/* Mobile menu overlay */}
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
						display: "none",
						flexDirection: "column",
						gap: "1rem",
						zIndex: 10,
						transform: "translateY(-10px)",
						opacity: 0,
						transition: "all 0.3s ease",
					}}
					className="mobile-menu"
				>
					<a
						href="#home"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "1.1rem",
							padding: "0.8rem 0",
							borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						Inicio
						<Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
					</a>
					<a
						href="#about"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "1.1rem",
							padding: "0.8rem 0",
							borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						Sobre mí
						<Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
					</a>
					<a
						href="#portfolio"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "1.1rem",
							padding: "0.8rem 0",
							borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						Proyectos
						<Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
					</a>
					<a
						href="#contact"
						style={{
							color: "#fff",
							textDecoration: "none",
							fontWeight: 500,
							fontSize: "1.1rem",
							padding: "0.8rem 0",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						Contacto
						<Icon name="chevronRight" size="s" style={{ color: "#60a5fa" }} />
					</a>
				</div>
			</header>

			{/* Main Content */}
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
				{/* Lado Izquierdo: Presentación principal */}
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
						<span
							style={{
								display: "block",
								width: 80,
								height: 4,
								background:
									"linear-gradient(90deg, #3b82f6, #60a5fa)",
								borderRadius: 4,
								marginBottom: 32,
							}}
						/>
					</RevealFx>

					<RevealFx delay={0.1}>
						<span
							style={{
								fontWeight: 600,
								color: "#60a5fa",
								fontSize: "1.1rem",
								marginBottom: "1rem",
								letterSpacing: "0.5px",
								display: "block",
							}}
						>
							Hola, soy
						</span>
					</RevealFx>

					<RevealFx delay={0.2}>
						<h1
							style={{
								fontSize: "4rem",
								fontWeight: 800,
								color: "#fff",
								marginBottom: 24,
								lineHeight: 1.1,
							}}
						>
							Enrique Ríos
							<div
								style={{
									color: "#60a5fa",
									marginTop: "0.5rem",
									fontSize: "3rem",
								}}
							>
								Espacialista en IA
							</div>
						</h1>
					</RevealFx>

					<RevealFx delay={0.3}>
						<p
							style={{
								color: "#b0b6be",
								fontSize: "1.2rem",
								marginBottom: 32,
								maxWidth: 500,
								lineHeight: 1.6,
							}}
						>
							Entusiasta de la tecnología y la inteligencia artificial, con
							experiencia en automatización de procesos, integración de APIs y
							desarrollo de soluciones innovadoras con IA.
						</p>
					</RevealFx>

					<RevealFx delay={0.4}>
						<Flex
							gap={"m"}
							style={{ marginBottom: "2rem" }}
							className="social-buttons"
						>
							{SOCIALS.map((s) => (
								<Button
									key={s.href}
									href={s.href}
									prefixIcon={s.icon}
									size="m"
									variant="tertiary"
									target="_blank"
									rel="noopener noreferrer"
									className="social-button"
									style={{
										transition: "all 0.3s ease",
										border: "1px solid rgba(96, 165, 250, 0.3)",
										background: "rgba(59, 130, 246, 0.08)",
										position: "relative",
										overflow: "hidden",
									}}
								>
									<span className="button-text">{s.label}</span>
									<span className="button-glow"></span>
								</Button>
							))}
						</Flex>
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
								overflow: "hidden",
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

				{/* Centro: Foto principal con efecto interactivo mejorado */}
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
					{/* Efecto de luz de fondo */}
					<div className="profile-background-glow"></div>
					
					{/* Marco decorativo exterior */}
					<div className="profile-frame">
						{/* Marco con borde animado */}
						<div className="profile-border">
							{/* Contenedor real de la imagen */}
							<div className="profile-image-container">
								<Avatar
									size="xl"
									src="/images/cover.png"
									empty={false}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
								{/* Efecto de destello */}
								<div className="profile-image-shine"></div>
							</div>
						</div>
					</div>

					{/* Elemento decorativo - Círculo con efectos */}
					<div className="floating-element floating-circle-1">
						<div className="floating-element-content">
							<Icon
								name="chevronRight"
								size="m"
								style={{ color: "#60a5fa" }}
							/>
						</div>
					</div>

					{/* Elemento decorativo - Hexágono con efectos */}
					<div className="floating-element floating-hexagon">
						<div className="floating-element-content">
							<Icon
								name="github"
								size="m"
								style={{ color: "#60a5fa" }}
							/>
						</div>
					</div>

					{/* Elemento decorativo - Rectángulo redondeado */}
					<div className="floating-element floating-pill">
						<div className="floating-element-content">
							<Icon
								name="openLink"
								size="m"
								style={{ color: "#60a5fa" }}
							/>
						</div>
					</div>

					{/* Pequeñas burbujas decorativas con diferentes tamaños */}
					<div className="floating-bubble bubble-1"></div>
					<div className="floating-bubble bubble-2"></div>
					<div className="floating-bubble bubble-3"></div>
				</Flex>

				{/* Lado Derecho: Info rápida */}
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
						<div
							style={{
								marginBottom: 40,
								width: "100%",
							}}
						>
							<h2
								style={{
									color: "#fff",
									fontWeight: 700,
									fontSize: "1.3rem",
									marginBottom: 16,
									letterSpacing: 0.5,
									position: "relative",
									paddingBottom: "12px",
								}}
							>
								Sobre mí
								<span
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "60px",
										height: "3px",
										background:
											"linear-gradient(90deg, #3b82f6, transparent)",
										borderRadius: "2px",
									}}
								></span>
							</h2>
							<p
								style={{
									color: "#b0b6be",
									fontSize: "1.05rem",
									marginBottom: "1.2rem",
									lineHeight: 1.6,
								}}
							>
								Apasionado por la IA, ciencia de datos y automatización.
								Experiencia en proyectos de optimización, integración de APIs y
								despliegue de sistemas.
							</p>
							<Button
								href="#about"
								variant="tertiary"
								prefixIcon="chevronRight"
								style={{
									fontWeight: 600,
									color: "#60a5fa",
									background: "rgba(59, 130, 246, 0.08)",
									border: "1px solid rgba(59, 130, 246, 0.2)",
									borderRadius: "8px",
									transition: "all 0.3s ease",
								}}
							>
								Saber más
							</Button>
						</div>
					</RevealFx>

					<RevealFx delay={0.4}>
						<div
							style={{
								marginBottom: 40,
								width: "100%",
							}}
						>
							<h2
								style={{
									color: "#fff",
									fontWeight: 700,
									fontSize: "1.3rem",
									marginBottom: 16,
									letterSpacing: 0.5,
									position: "relative",
									paddingBottom: "12px",
								}}
							>
								{"Mi trabajo"}
								<span
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "60px",
										height: "3px",
										background:
											"linear-gradient(90deg, #3b82f6, transparent)",
										borderRadius: "2px",
									}}
								></span>
							</h2>
							<p
								style={{
									color: "#b0b6be",
									fontSize: "1.05rem",
									marginBottom: "1.2rem",
									lineHeight: 1.6,
								}}
							>
								Proyectos de automatización, ciencia de datos y soluciones con IA
								para empresas y organizaciones.
							</p>
							<Button
								href="#portfolio"
								variant="tertiary"
								prefixIcon="chevronRight"
								style={{
									fontWeight: 600,
									color: "#60a5fa",
									background: "rgba(59, 130, 246, 0.08)",
									border: "1px solid rgba(59, 130, 246, 0.2)",
									borderRadius: "8px",
									transition: "all 0.3s ease",
								}}
							>
								Ver portafolio
							</Button>
						</div>
					</RevealFx>

					<RevealFx delay={0.5}>
						<div style={{ width: "100%" }}>
							<h2
								style={{
									color: "#fff",
									fontWeight: 700,
									fontSize: "1.3rem",
									marginBottom: 16,
									letterSpacing: 0.5,
									position: "relative",
									paddingBottom: "12px",
								}}
							>
								Especialidades
								<span
									style={{
										position: "absolute",
										bottom: 0,
										left: 0,
										width: "60px",
										height: "3px",
										background:
											"linear-gradient(90deg, #3b82f6, transparent)",
										borderRadius: "2px",
									}}
								></span>
							</h2>
							<Flex
								gap={"xs"}
								wrap
								style={{ flexWrap: "wrap" }}
							>
								<Tag
									className="brand m"
									style={{
										margin: "0 4px 8px 0",
										background: "rgba(59, 130, 246, 0.15)",
										border: "1px solid rgba(59, 130, 246, 0.3)",
									}}
								>
									Inteligencia Artificial
								</Tag>
								<Tag
									className="accent m"
									style={{
										margin: "0 4px 8px 0",
										background: "rgba(96, 165, 250, 0.15)",
										border: "1px solid rgba(96, 165, 250, 0.3)",
									}}
								>
									Machine Learning
								</Tag>
								<Tag
									className="brand m"
									style={{
										margin: "0 4px 8px 0",
										background: "rgba(59, 130, 246, 0.15)",
										border: "1px solid rgba(59, 130, 246, 0.3)",
									}}
								>
									Python
								</Tag>
								<Tag
									className="accent m"
									style={{
										margin: "0 4px 8px 0",
										background: "rgba(96, 165, 250, 0.15)",
										border: "1px solid rgba(96, 165, 250, 0.3)",
									}}
								>
									Docker
								</Tag>
								<Tag
									className="brand m"
									style={{
										margin: "0 4px 8px 0",
										background: "rgba(59, 130, 246, 0.15)",
										border: "1px solid rgba(59, 130, 246, 0.3)",
									}}
								>
									Automatización
								</Tag>
							</Flex>
						</div>
					</RevealFx>
				</Flex>
			</Flex>

			{/* CSS para animaciones mejoradas */}
			<style jsx>{`
				/* Animaciones básicas */
				@keyframes pulse {
					0% {
						box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4);
					}
					70% {
						box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
					}
					100% {
						box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
					}
				}

				@keyframes float {
					0% {
						transform: translateY(0px);
					}
					50% {
						transform: translateY(-15px);
					}
					100% {
						transform: translateY(0px);
					}
				}

				@keyframes rotateFloat {
					0% {
						transform: translateY(0px) rotate(0deg);
					}
					50% {
						transform: translateY(-15px) rotate(5deg);
					}
					100% {
						transform: translateY(0px) rotate(0deg);
					}
				}

				@keyframes spin {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes ripple {
					0% {
						transform: scale(0.8);
						opacity: 1;
					}
					100% {
						transform: scale(2);
						opacity: 0;
					}
				}

				@keyframes shimmer {
					0% {
						transform: translateX(-150%);
					}
					100% {
						transform: translateX(150%);
					}
				}

				@keyframes borderRotate {
					0% {
						background-position: 0% 0%;
					}
					100% {
						background-position: 135% 135%;
					}
				}

				/* Estilos para elementos interactivos */
				a:hover {
					opacity: 1 !important;
				}

				/* Perfil central y efectos */
				.profile-background-glow {
					position: absolute;
					width: 400px;
					height: 400px;
					border-radius: 50%;
					background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
					filter: blur(20px);
					z-index: -1;
				}

				.profile-frame {
					position: relative;
					width: 350px;
					height: 350px;
					border-radius: 50%;
					overflow: hidden;
					background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.2));
					box-shadow: 
						0 20px 40px rgba(0, 0, 0, 0.3),
						0 0 60px rgba(59, 130, 246, 0.25);
					padding: 6px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.profile-border {
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					background: linear-gradient(-45deg, #3b82f6, #60a5fa, #93c5fd);
					background-size: 300% 300%;
					animation: borderRotate 8s linear infinite;
					padding: 5px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.profile-image-container {
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					overflow: hidden;
					background: #121419;
					box-shadow: inset 0 0 0 8px rgba(18, 20, 25, 0.8);
					transition: transform 0.3s ease;
				}

				.profile-image-container:hover {
					transform: scale(1.03);
				}

				.profile-image-shine {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(
						90deg, 
						transparent, 
						rgba(255, 255, 255, 0.15), 
						transparent
					);
					transform: skewX(25deg);
					animation: shimmer 3s infinite;
				}

				/* Elementos flotantes decorativos */
				.floating-element {
					position: absolute;
					display: flex;
					align-items: center;
					justify-content: center;
					backdrop-filter: blur(5px);
					border: 1px solid rgba(59, 130, 246, 0.3);
					box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
					z-index: -1;
					transition: all 0.3s ease;
				}

				.floating-element:hover {
					transform: scale(1.1) translateY(-5px);
					border: 1px solid rgba(59, 130, 246, 0.8);
					box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
				}

				.floating-element-content {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1.2rem;
					color: white;
				}

				.floating-circle-1 {
					width: 80px;
					height: 80px;
					border-radius: 50%;
					background: rgba(59, 130, 246, 0.1);
					top: 10%;
					right: 5%;
					animation: rotateFloat 6s ease-in-out infinite;
				}

				.floating-hexagon {
					width: 65px;
					height: 65px;
					border-radius: 12px;
					background: rgba(59, 130, 246, 0.08);
					bottom: 18%;
					left: 5%;
					animation: float 7s ease-in-out infinite 1s;
				}

				.floating-pill {
					width: 70px;
					height: 70px;
					border-radius: 20px;
					background: rgba(59, 130, 246, 0.08);
					top: 55%;
					right: 0;
					animation: float 8s ease-in-out infinite 2s;
				}

				.floating-bubble {
					position: absolute;
					border-radius: 50%;
					background: rgba(96, 165, 250, 0.15);
					border: 1px solid rgba(96, 165, 250, 0.2);
					filter: blur(1px);
					z-index: -2;
				}

				.bubble-1 {
					width: 20px;
					height: 20px;
					top: 25%;
					left: 30%;
					animation: float 10s ease-in-out infinite 0.5s;
				}

				.bubble-2 {
					width: 15px;
					height: 15px;
					bottom: 25%;
					right: 35%;
					animation: float 12s ease-in-out infinite 1.5s;
				}

				.bubble-3 {
					width: 10px;
					height: 10px;
					top: 60%;
					left: 10%;
					animation: float 9s ease-in-out infinite 1s;
				}

				/* Estilos para botones interactivos */
				button:hover, a[role="button"]:hover {
					transform: translateY(-3px);
					box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
				}
				
				/* Estilos para botones sociales */
				.social-button {
					overflow: hidden;
					position: relative;
					z-index: 1;
				}
				
				.social-button:hover {
					border-color: rgba(96, 165, 250, 0.8);
					background: rgba(59, 130, 246, 0.15);
				}
				
				.button-glow {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: linear-gradient(
						90deg, 
						transparent, 
						rgba(96, 165, 250, 0.2), 
						transparent
					);
					transform: skewX(25deg) translateX(-200%);
					transition: all 0.5s ease;
				}
				
				.social-button:hover .button-glow {
					transform: skewX(25deg) translateX(200%);
					transition: all 0.8s ease;
				}
				
				.button-text {
					position: relative;
					z-index: 2;
				}
				
				/* Estilos para el botón principal (CTA) */
				.cta-button {
					overflow: hidden;
					position: relative;
					z-index: 1;
				}
				
				.cta-button:hover {
					background-position: right center;
					transform: translateY(-5px);
					box-shadow: 0 20px 30px rgba(59, 130, 246, 0.45);
				}
				
				.cta-button-effect {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
					transform: scale(0);
					opacity: 0;
					transition: all 0.5s ease-out;
				}
				
				.cta-button:hover .cta-button-effect {
					transform: scale(2);
					opacity: 1;
				}
				
				/* Estilos para las secciones */
				.section-header {
					text-align: center;
					margin-bottom: 4rem;
					width: 100%;
					max-width: 800px;
					margin-left: auto;
					margin-right: auto;
				}

				.section-header h2 {
					font-size: 2.5rem;
					font-weight: 800;
					color: #fff;
					margin-bottom: 0.5rem;
					background: linear-gradient(90deg, #3b82f6, #60a5fa);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}

				.section-underline {
					display: block;
					width: 100px;
					height: 4px;
					margin: 0.5rem auto 1.5rem;
					background: linear-gradient(90deg, #3b82f6, #60a5fa);
					border-radius: 2px;
				}

				.section-description {
					color: #b0b6be;
					font-size: 1.1rem;
					line-height: 1.6;
					max-width: 700px;
					margin: 0 auto;
				}
				
				/* Estilos para sección de habilidades */
				.skills-title {
					color: #fff;
					font-size: 1.5rem;
					font-weight: 700;
					margin-bottom: 1.5rem;
					position: relative;
					padding-bottom: 0.8rem;
				}

				.skills-title::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 60px;
					height: 3px;
					background: linear-gradient(90deg, #3b82f6, transparent);
					border-radius: 2px;
				}

				.skills-container {
					display: flex;
					flex-direction: column;
					gap: 1.5rem;
				}

				.skill-item {
					width: 100%;
				}

				.skill-header {
					display: flex;
					justify-content: space-between;
					margin-bottom: 0.5rem;
				}

				.skill-name {
					font-weight: 600;
					color: #fff;
				}

				.skill-percentage {
					color: #60a5fa;
					font-weight: 600;
				}

				.skill-bar {
					height: 8px;
					background: rgba(255, 255, 255, 0.1);
					border-radius: 4px;
					overflow: hidden;
					position: relative;
				}

				.skill-progress {
					position: relative;
					height: 100%;
					border-radius: 4px;
					background: linear-gradient(90deg, #3b82f6, #60a5fa);
					transform-origin: left;
					transform: scaleX(0);
					animation: skillProgress 1.5s ease-out forwards;
				}

				@keyframes skillProgress {
					from {
						transform: scaleX(0);
					}
					to {
						transform: scaleX(1);
					}
				}

				/* Estilos para sección de experiencia */
				.experience-container {
					display: flex;
					flex-direction: column;
					gap: 2rem;
					position: relative;
				}

				.experience-item {
					position: relative;
					padding-left: 30px;
				}

				.experience-dot {
					position: absolute;
					left: 0;
					top: 0;
					width: 16px;
					height: 16px;
					background: #3b82f6;
					border-radius: 50%;
					border: 3px solid rgba(59, 130, 246, 0.2);
					z-index: 2;
				}

				.experience-timeline {
					position: absolute;
					left: 7px;
					top: 16px;
					bottom: -36px;
					width: 2px;
					background: rgba(59, 130, 246, 0.2);
					z-index: 1;
				}

				.experience-content {
					padding-left: 1.5rem;
				}

				.experience-date {
					display: inline-block;
					padding: 0.25rem 0.6rem;
					background: rgba(59, 130, 246, 0.15);
					border-radius: 4px;
					color: #60a5fa;
					font-size: 0.85rem;
					font-weight: 600;
					margin-bottom: 0.5rem;
				}

				.experience-position {
					color: #fff;
					font-size: 1.2rem;
					font-weight: 700;
					margin-bottom: 0.3rem;
				}

				.experience-company {
					color: #b0b6be;
					font-size: 0.95rem;
					font-weight: 600;
					margin-bottom: 0.8rem;
				}

				.experience-description {
					color: #8e949d;
					font-size: 0.95rem;
					line-height: 1.5;
				}

				/* Estilos para sección de contacto */
				.contact-info-container {
					background: rgba(24, 24, 27, 0.6);
					border-radius: 12px;
					padding: 1.5rem;
					margin-bottom: 1.5rem;
					border: 1px solid rgba(59, 130, 246, 0.1);
					transition: all 0.3s ease;
					text-align: center;
				}

				.contact-info-container:hover {
					transform: translateY(-5px);
					border-color: rgba(59, 130, 246, 0.3);
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
				}

				.contact-icon-container {
					width: 60px;
					height: 60px;
					margin: 0 auto 1rem;
					background: rgba(59, 130, 246, 0.1);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #60a5fa;
					font-size: 1.5rem;
				}

				.contact-icon {
					color: #60a5fa;
				}

				.contact-info-container h4 {
					color: #fff;
					font-size: 1.1rem;
					font-weight: 600;
					margin-bottom: 0.5rem;
				}

				.contact-link {
					color: #60a5fa;
					text-decoration: none;
					font-size: 0.95rem;
					transition: all 0.3s ease;
				}

				.contact-link:hover {
					color: #93c5fd;
					text-decoration: underline;
				}

				/* Estilos para formulario de contacto */
				.contact-form {
					background: rgba(24, 24, 27, 0.6);
					border-radius: 12px;
					padding: 2rem;
					border: 1px solid rgba(59, 130, 246, 0.1);
				}

				.form-group {
					margin-bottom: 1.5rem;
				}

				.form-group label {
					display: block;
					margin-bottom: 0.5rem;
					color: #fff;
					font-weight: 600;
					font-size: 0.95rem;
				}

				.form-control {
					width: 100%;
					background: rgba(18, 20, 25, 0.8);
					border: 1px solid rgba(255, 255, 255, 0.1);
					border-radius: 8px;
					color: #fff;
					padding: 0.75rem 1rem;
					font-size: 1rem;
					transition: all 0.3s ease;
				}

				.form-control:focus {
					outline: none;
					border-color: #3b82f6;
					box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
				}

				.form-control::placeholder {
					color: rgba(255, 255, 255, 0.3);
				}

				.submit-button {
					display: flex;
					align-items: center;
					justify-content: center;
					background: linear-gradient(45deg, #3b82f6, #60a5fa);
					color: #fff;
					border: none;
					border-radius: 8px;
					padding: 0.9rem 1.8rem;
					font-size: 1rem;
					font-weight: 600;
					cursor: pointer;
					transition: all 0.3s ease;
					position: relative;
					overflow: hidden;
				}

				.submit-button:hover {
					transform: translateY(-3px);
					box-shadow: 0 10px 25px rgba(59, 130, 246, 0.35);
				}

				.submit-button-effect {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
					transform: scale(0);
					opacity: 0;
					transition: all 0.5s ease-out;
				}

				.submit-button:hover .submit-button-effect {
					transform: scale(2);
					opacity: 1;
				}
				
				/* Estilos para el footer */
				.footer-social-link {
					transition: all 0.3s ease;
				}
				
				.footer-social-link:hover {
					background: rgba(59, 130, 246, 0.2);
					transform: translateY(-3px);
				}

				/* Mobile menu styles */
				.mobile-menu.active {
					display: flex;
					animation: mobileMenuEnter 0.3s ease forwards;
				}

				@keyframes mobileMenuEnter {
					from {
						transform: translateY(-10px);
						opacity: 0;
					}
					to {
						transform: translateY(0);
						opacity: 1;
					}
				}
				
				/* Scroll animation styles */
				.skill-item, .experience-item, .contact-info-container {
					opacity: 0;
					transform: translateY(20px);
					transition: opacity 0.6s ease, transform 0.6s ease;
				}
				
				.skill-item.animate-in, .experience-item.animate-in, .contact-info-container.animate-in {
					opacity: 1;
					transform: translateY(0);
				}
				
				/* 3D hover effect for profile image */
				.profile-image-container {
					transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
					transform-style: preserve-3d;
				}
			`}</style>
			{/* Sección de proyectos */}
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
				{/* Fondo de la sección */}
				<div
					style={{
						position: "absolute",
						top: "20%",
						right: "5%",
						width: "300px",
						height: "300px",
						background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.08), transparent 70%)",
						borderRadius: "50%",
						zIndex: -1,
					}}
				></div>
				<div
					style={{
						position: "absolute",
						bottom: "10%",
						left: "5%",
						width: "250px",
						height: "250px",
						background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.06), transparent 70%)",
						borderRadius: "50%",
						zIndex: -1,
					}}
				></div>

				{/* Lista de proyectos */}
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
			
			{/* Sección de Habilidades */}
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
				<div className="section-header">
					<RevealFx>
						<h2>Habilidades & Experiencia</h2>
					</RevealFx>
					<RevealFx delay={0.1}>
						<div className="section-underline"></div>
					</RevealFx>
					<RevealFx delay={0.2}>
						<p className="section-description">
							Con amplia experiencia en tecnologías de IA y automatización, he desarrollado soluciones
							innovadoras para optimizar procesos y mejorar resultados empresariales.
						</p>
					</RevealFx>
				</div>

				<Flex
					direction="row"
					style={{ flexWrap: "wrap", gap: "2rem", marginTop: "3rem" }}
				>
					{/* Columna izquierda */}
					<Flex
						direction="column"
						style={{ 
							flex: 1,
							minWidth: "300px",
							opacity: isLoaded ? 1 : 0,
							transform: isLoaded ? "translateY(0)" : "translateY(20px)",
							transition: "all 0.8s ease-out 0.4s",
						}}
					>
						<RevealFx delay={0.2}>
							<h3 className="skills-title">Habilidades Técnicas</h3>
						</RevealFx>

						<div className="skills-container">
							<RevealFx delay={0.3}>
								<div className="skill-item">
									<div className="skill-header">
										<span className="skill-name">Inteligencia Artificial</span>
										<span className="skill-percentage">95%</span>
									</div>
									<div className="skill-bar">
										<div className="skill-progress" style={{width: '95%'}}></div>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.4}>
								<div className="skill-item">
									<div className="skill-header">
										<span className="skill-name">Machine Learning</span>
										<span className="skill-percentage">90%</span>
									</div>
									<div className="skill-bar">
										<div className="skill-progress" style={{width: '90%'}}></div>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.5}>
								<div className="skill-item">
									<div className="skill-header">
										<span className="skill-name">Python</span>
										<span className="skill-percentage">92%</span>
									</div>
									<div className="skill-bar">
										<div className="skill-progress" style={{width: '92%'}}></div>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.6}>
								<div className="skill-item">
									<div className="skill-header">
										<span className="skill-name">Automatización de Procesos</span>
										<span className="skill-percentage">88%</span>
									</div>
									<div className="skill-bar">
										<div className="skill-progress" style={{width: '88%'}}></div>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.7}>
								<div className="skill-item">
									<div className="skill-header">
										<span className="skill-name">Cloud Computing</span>
										<span className="skill-percentage">85%</span>
									</div>
									<div className="skill-bar">
										<div className="skill-progress" style={{width: '85%'}}></div>
									</div>
								</div>
							</RevealFx>
						</div>
					</Flex>

					{/* Columna derecha */}
					<Flex
						direction="column"
						style={{ 
							flex: 1,
							minWidth: "300px",
							opacity: isLoaded ? 1 : 0,
							transform: isLoaded ? "translateY(0)" : "translateY(20px)",
							transition: "all 0.8s ease-out 0.6s",
						}}
					>
						<RevealFx delay={0.2}>
							<h3 className="skills-title">Experiencia Profesional</h3>
						</RevealFx>

						<div className="experience-container">
							<RevealFx delay={0.3}>
								<div className="experience-item">
									<div className="experience-dot"></div>
									<div className="experience-timeline"></div>
									<div className="experience-content">
										<span className="experience-date">2022 - Presente</span>
										<h4 className="experience-position">Especialista en IA y Automatización</h4>
										<p className="experience-company">TechInnovate Solutions</p>
										<p className="experience-description">
											Desarrollo de soluciones basadas en IA para la automatización de procesos empresariales y análisis de datos.
										</p>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.4}>
								<div className="experience-item">
									<div className="experience-dot"></div>
									<div className="experience-timeline"></div>
									<div className="experience-content">
										<span className="experience-date">2019 - 2022</span>
										<h4 className="experience-position">Desarrollador Senior</h4>
										<p className="experience-company">DataMind Technologies</p>
										<p className="experience-description">
											Implementación de APIs y sistemas de integración para aplicaciones empresariales.
										</p>
									</div>
								</div>
							</RevealFx>

							<RevealFx delay={0.5}>
								<div className="experience-item">
									<div className="experience-dot"></div>
									<div className="experience-content">
										<span className="experience-date">2017 - 2019</span>
										<h4 className="experience-position">Analista de Datos</h4>
										<p className="experience-company">InnoData Analytics</p>
										<p className="experience-description">
											Análisis y visualización de datos para la toma de decisiones empresariales.
										</p>
									</div>
								</div>
							</RevealFx>
						</div>
					</Flex>
				</Flex>
			</Flex>

			{/* Sección de Contacto */}
			<Flex
				id="contact"
				direction="column"
				justifyContent="center"
				alignItems="center"
				style={{
					padding: "6rem 2rem",
					maxWidth: 1400,
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
				}}
			>
				{/* Fondo de la sección */}
				<div
					style={{
						position: "absolute",
						bottom: "0",
						right: "0",
						width: "60%",
						height: "60%",
						background: "radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.08), transparent 70%)",
						zIndex: -1,
					}}
				></div>

				<div className="section-header">
					<RevealFx>
						<h2>Contacto</h2>
					</RevealFx>
					<RevealFx delay={0.1}>
						<div className="section-underline"></div>
					</RevealFx>
					<RevealFx delay={0.2}>
						<p className="section-description">
							¿Interesado en trabajar juntos o tienes alguna pregunta?<br />
							Envíame un mensaje y me pondré en contacto contigo lo antes posible.
						</p>
					</RevealFx>
				</div>

				<Flex
					direction="row"
					style={{ 
						flexWrap: "wrap", 
						gap: "3rem", 
						marginTop: "3rem", 
						width: "100%", 
						justifyContent: "center" 
					}}
				>
					{/* Información de contacto */}
					<Flex
						direction="column"
						style={{ 
							flex: 1,
							minWidth: "300px",
							maxWidth: "400px",
							opacity: isLoaded ? 1 : 0,
							transform: isLoaded ? "translateY(0)" : "translateY(20px)",
							transition: "all 0.8s ease-out 0.4s",
						}}
					>
						<RevealFx delay={0.3}>
							<div className="contact-info-container">
								<div className="contact-icon-container">
									<Icon name="email" size="m" className="contact-icon" />
								</div>
								<h4>Email</h4>
								<a href="mailto:enrq.rios.f@gmail.com" className="contact-link">
									enrq.rios.f@gmail.com
								</a>
							</div>
						</RevealFx>

						<RevealFx delay={0.4}>
							<div className="contact-info-container">
								<div className="contact-icon-container">
									<Icon name="github" size="m" className="contact-icon" />
								</div>
								<h4>GitHub</h4>
								<a href="https://github.com/Dkuaik" target="_blank" rel="noopener noreferrer" className="contact-link">
									github.com/Dkuaik
								</a>
							</div>
						</RevealFx>

						<RevealFx delay={0.5}>
							<div className="contact-info-container">
								<div className="contact-icon-container">
									<Icon name="linkedin" size="m" className="contact-icon" />
								</div>
								<h4>LinkedIn</h4>
								<a href="https://linkedin.com/in/enrqriosf" target="_blank" rel="noopener noreferrer" className="contact-link">
									linkedin.com/in/enrqriosf
								</a>
							</div>
						</RevealFx>
					</Flex>

					{/* Formulario de contacto */}
					<Flex
						direction="column"
						style={{ 
							flex: 1,
							minWidth: "300px",
							maxWidth: "600px",
							opacity: isLoaded ? 1 : 0,
							transform: isLoaded ? "translateY(0)" : "translateY(20px)",
							transition: "all 0.8s ease-out 0.6s",
						}}
					>
						<RevealFx delay={0.4}>
							<div className="contact-form">
								<div className="form-group">
									<label htmlFor="name">Nombre</label>
									<input 
										type="text" 
										id="name" 
										className="form-control" 
										placeholder="Tu nombre" 
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input 
										type="email" 
										id="email" 
										className="form-control" 
										placeholder="tu.email@ejemplo.com" 
									/>
								</div>
								<div className="form-group">
									<label htmlFor="message">Mensaje</label>
									<textarea 
										id="message" 
										className="form-control" 
										rows={5} 
										placeholder="¿Cómo puedo ayudarte?"
									></textarea>
								</div>
								<button className="submit-button">
									<span>Enviar mensaje</span>
									<Icon name="arrowUpRight" size="s" style={{ marginLeft: "8px" }} />
									<div className="submit-button-effect"></div>
								</button>
							</div>
						</RevealFx>
					</Flex>
				</Flex>
			</Flex>

			{/* Footer */}
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
				<p style={{ 
					color: "#b0b6be", 
					fontSize: "0.9rem",
					marginBottom: "1rem",
					textAlign: "center" 
				}}>
					© {new Date().getFullYear()} Enrique Ríos Flores. Todos los derechos reservados.
				</p>
				<Flex gap={"s"} style={{ justifyContent: "center" }}>
					{SOCIALS.map((s) => (
						<a
							key={s.href}
							href={s.href}
							target="_blank"
							rel="noopener noreferrer"
							style={{
								width: "40px",
								height: "40px",
								borderRadius: "50%",
								background: "rgba(59, 130, 246, 0.1)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "#60a5fa",
								transition: "all 0.3s ease",
							}}
							className="footer-social-link"
						>
							<Icon name={s.icon} size="s" />
						</a>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}