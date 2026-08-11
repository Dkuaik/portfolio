import { useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";

import { useLocale } from "../hooks/useLocale";
import { swarmTriggerStore } from "../stores/swarm";

interface AgentPreset {
  label: string;
  emoji: string;
}

const AGENT_PRESETS: readonly AgentPreset[] = [
  { label: "crew_ai", emoji: "🤖" },
  { label: "langgraph", emoji: "🕸️" },
  { label: "vllm", emoji: "⚡" },
  { label: "neo4j", emoji: "🔗" },
  { label: "mcp", emoji: "🔌" },
  { label: "yolo", emoji: "👁️" },
  { label: "n8n", emoji: "🔁" },
  { label: "k8s", emoji: "☸️" },
] as const;

const SWARM_SIZE = 6;
const LIFETIME_MS = 7000;
const TOAST_FADE_MS = 1600;
const NODE_WIDTH = 128;
const NODE_HEIGHT = 36;

interface SwarmAgent {
  id: number;
  label: string;
  emoji: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  spin: number;
}

interface AgentSwarmProps {
  /** Increments on every activation; 0 means "never triggered". */
  trigger: number;
  spawnMessage: string;
  doneMessage: string;
}

/**
 * Easter egg: clicking the wordmark releases a handful of labelled agents that
 * bounce around the viewport and then shut themselves down.
 *
 * Positions live in refs and are written straight to the DOM, so the animation
 * runs at 60fps without re-rendering React on every frame.
 */
export function AgentSwarm({ trigger, spawnMessage, doneMessage }: AgentSwarmProps) {
  const [agents, setAgents] = useState<SwarmAgent[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  const particlesRef = useRef(new Map<number, Particle>());
  const nodesRef = useRef(new Map<number, HTMLDivElement>());

  useEffect(() => {
    if (trigger === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const created: SwarmAgent[] = [];
    particlesRef.current.clear();

    for (let index = 0; index < SWARM_SIZE; index += 1) {
      const preset = AGENT_PRESETS[(trigger + index) % AGENT_PRESETS.length];
      if (!preset) continue;

      const id = trigger * 1000 + index;
      created.push({ id, label: preset.label, emoji: preset.emoji });
      particlesRef.current.set(id, {
        // They all launch from the wordmark in the top-left corner.
        x: 24,
        y: 24,
        vx: 2 + Math.random() * 3.5,
        vy: 1 + Math.random() * 3,
        spin: (Math.random() - 0.5) * 1.2,
      });
    }

    setAgents(created);
    setToast(spawnMessage.replace("{count}", String(created.length)));

    let frame = 0;
    let elapsed = 0;

    const step = () => {
      elapsed += 1;
      const maxX = window.innerWidth - NODE_WIDTH;
      const maxY = window.innerHeight - NODE_HEIGHT;

      particlesRef.current.forEach((particle, id) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= maxX) {
          particle.vx *= -1;
          particle.x = Math.min(Math.max(particle.x, 0), maxX);
        }
        if (particle.y <= 0 || particle.y >= maxY) {
          particle.vy *= -1;
          particle.y = Math.min(Math.max(particle.y, 0), maxY);
        }

        const node = nodesRef.current.get(id);
        if (!node) return;
        const angle = Math.sin(elapsed * 0.04 + id) * 8 * particle.spin;
        node.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0) rotate(${angle}deg)`;
      });

      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);

    const stopTimer = setTimeout(() => {
      cancelAnimationFrame(frame);
      setAgents([]);
      particlesRef.current.clear();
      setToast(doneMessage);
    }, LIFETIME_MS);

    const clearToastTimer = setTimeout(() => setToast(null), LIFETIME_MS + TOAST_FADE_MS);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(stopTimer);
      clearTimeout(clearToastTimer);
    };
  }, [trigger, spawnMessage, doneMessage]);

  if (agents.length === 0 && !toast) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40">
      {agents.map((agent) => (
        <div
          key={agent.id}
          ref={(node) => {
            if (node) nodesRef.current.set(agent.id, node);
            return () => {
              nodesRef.current.delete(agent.id);
            };
          }}
          className="absolute left-0 top-0 flex w-32 items-center gap-2 rounded-full border border-accent-500/40 bg-white/80 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-zinc-900/80"
        >
          <span className="text-base leading-none">{agent.emoji}</span>
          <span className="truncate font-mono text-xs text-zinc-700 dark:text-zinc-200">
            {agent.label}
          </span>
        </div>
      ))}

      {toast && (
        <p className="animate-fade-up absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-zinc-300 bg-white/90 px-4 py-2 font-mono text-xs text-zinc-600 shadow-lg backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-300">
          {toast}
        </p>
      )}
    </div>
  );
}

export function SwarmLayer() {
  const trigger = useStore(swarmTriggerStore);
  const { dictionary } = useLocale();

  return (
    <AgentSwarm
      trigger={trigger}
      spawnMessage={dictionary.ui.swarmSpawn}
      doneMessage={dictionary.ui.swarmTerminated}
    />
  );
}
