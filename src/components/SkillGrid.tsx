import type { SkillGroup } from "../i18n";

export function SkillGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <section
          key={group.label}
          data-reveal="pending"
          className="rounded-xl border border-zinc-200 p-5 transition hover:border-accent-500/50 dark:border-zinc-800 dark:hover:border-accent-400/40"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent-600 dark:text-accent-400">
            {group.label}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
