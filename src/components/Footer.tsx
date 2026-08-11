import { useLocale } from "../hooks/useLocale";
import { LINK_KIND } from "../i18n";

export function Footer() {
  const { dictionary } = useLocale();
  const { profile, ui } = dictionary;
  const email = profile.links.find((link) => link.kind === LINK_KIND.EMAIL);

  return (
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
  );
}
