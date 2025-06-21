"use client";
import { Flex, Background } from "@/once-ui/components";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Portfolio from "@/app/components/Portfolio";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

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
			{/* Background component moved from layout */}
			<Background
				style={{zIndex: '-1'}}
				position="fixed"
				mask="cursor"
				dots={{
					display: true,
					opacity: 0.4,
					size: '20'
				}}
				gradient={{
					display: true,
					opacity: 0.4,
				}}/>

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

			<Header />

			<Hero isLoaded={isLoaded} />

			<Portfolio isLoaded={isLoaded} />
			
			<About />

			<Contact />

			<Footer />
		</Flex>
	);
}