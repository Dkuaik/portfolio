import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 py-16 dark:border-zinc-800 md:py-24">
      <header data-reveal="pending" className="mb-10 flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent-600 dark:text-accent-400">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-3xl">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
