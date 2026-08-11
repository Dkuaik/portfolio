import { Section } from "./Section";
import { useLocale } from "../hooks/useLocale";
import { cn } from "../lib/cn";
import { WORK_KIND, type Position } from "../i18n";

interface PositionCardProps {
  position: Position;
  internshipBadge: string;
}

function PositionCard({ position, internshipBadge }: PositionCardProps) {
  return (
    <article data-reveal="pending" className="relative pl-8">
      <span
        className={cn(
          "absolute left-0 top-2 size-3 -translate-x-1/2 rounded-full ring-4",
          position.current
            ? "bg-accent-500 ring-accent-500/20"
            : "bg-zinc-300 ring-zinc-100 dark:bg-zinc-600 dark:ring-zinc-900",
        )}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {position.role}
          <span className="text-accent-600 dark:text-accent-400"> · {position.company}</span>
        </h3>
        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">{position.period}</span>
      </div>

      {position.kind === WORK_KIND.INTERNSHIP && (
        <span className="mt-2 inline-block rounded bg-zinc-100 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          {internshipBadge}
        </span>
      )}

      <ul className="mt-4 space-y-4">
        {position.highlights.map((highlight) => (
          <li key={highlight.title} className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{highlight.title}:</span>{" "}
            {highlight.description}
          </li>
        ))}
      </ul>
    </article>
  );
}

interface ExperienceProps {
  positions: Position[];
  internshipBadge: string;
}

export function Experience({ positions, internshipBadge }: ExperienceProps) {
  return (
    <div className="relative space-y-12 border-l border-zinc-200 dark:border-zinc-800">
      {positions.map((position) => (
        <PositionCard
          key={`${position.company}-${position.period}`}
          position={position}
          internshipBadge={internshipBadge}
        />
      ))}
    </div>
  );
}

export function ExperienceSection() {
  const { dictionary } = useLocale();
  const { profile, ui } = dictionary;

  return (
    <Section id="experience" index="01" title={ui.sections.experience}>
      <Experience positions={profile.positions} internshipBadge={ui.internshipBadge} />
    </Section>
  );
}
