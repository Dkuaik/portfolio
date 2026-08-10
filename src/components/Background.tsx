import type { Education, LanguageSkill } from "../i18n";

interface BackgroundProps {
  education: Education[];
  languages: LanguageSkill[];
  educationLabel: string;
  languagesLabel: string;
}

export function Background({
  education,
  languages,
  educationLabel,
  languagesLabel,
}: BackgroundProps) {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div data-reveal="pending">
        <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent-600 dark:text-accent-400">
          {educationLabel}
        </h3>
        <ul className="mt-4 space-y-4">
          {education.map((entry) => (
            <li key={entry.degree}>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{entry.degree}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{entry.institution}</p>
              <p className="font-mono text-xs text-zinc-500">{entry.period}</p>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="pending">
        <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent-600 dark:text-accent-400">
          {languagesLabel}
        </h3>
        <ul className="mt-4 space-y-2">
          {languages.map((entry) => (
            <li key={entry.language} className="flex items-baseline justify-between gap-4">
              <span className="text-zinc-900 dark:text-zinc-100">{entry.language}</span>
              <span className="font-mono text-xs text-zinc-500">{entry.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
