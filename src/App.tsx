import { useState } from "react";

import { AgentSwarm } from "./components/AgentSwarm";
import { Background } from "./components/Background";
import { BackgroundFx } from "./components/BackgroundFx";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Section } from "./components/Section";
import { SkillGrid } from "./components/SkillGrid";
import { useLocale } from "./hooks/useLocale";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";
import { LINK_KIND } from "./i18n";

function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0] ?? "")
    .join("");
}

export function App() {
  const theme = useTheme();
  const locale = useLocale();
  const containerRef = useReveal<HTMLDivElement>();
  const [swarmTrigger, setSwarmTrigger] = useState(0);

  const { profile, ui } = locale.dictionary;
  const email = profile.links.find((link) => link.kind === LINK_KIND.EMAIL);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <BackgroundFx />

      <AgentSwarm
        trigger={swarmTrigger}
        spawnMessage={ui.swarmSpawn}
        doneMessage={ui.swarmTerminated}
      />

      <Nav
        initials={initialsOf(profile.name)}
        ui={ui}
        theme={theme}
        locale={locale}
        onWordmarkClick={() => setSwarmTrigger((count) => count + 1)}
      />

      <main ref={containerRef} className="relative z-10 mx-auto max-w-4xl px-6">
        <Hero
          name={profile.name}
          title={profile.title}
          location={profile.location}
          summary={profile.summary}
          focusAreas={profile.focusAreas}
          links={profile.links}
        />

        <Section id="experience" index="01" title={ui.sections.experience}>
          <Experience positions={profile.positions} internshipBadge={ui.internshipBadge} />
        </Section>

        <Section id="stack" index="02" title={ui.sections.stack}>
          <SkillGrid groups={profile.skills} />
        </Section>

        <Section id="background" index="03" title={ui.sections.background}>
          <Background
            education={profile.education}
            languages={profile.languages}
            educationLabel={ui.sections.education}
            languagesLabel={ui.sections.languages}
          />
        </Section>
      </main>

      <footer className="relative z-10 mx-auto max-w-4xl border-t border-zinc-200 px-6 py-12 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{ui.footerNote}</p>
        {email && (
          <a
            href={email.href}
            className="mt-2 inline-block font-mono text-sm text-accent-600 underline-offset-4 hover:underline dark:text-accent-400"
          >
            {email.label}
          </a>
        )}
      </footer>
    </div>
  );
}
