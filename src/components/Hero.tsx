import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";
import { useLocale } from "../hooks/useLocale";
import { useReveal } from "../hooks/useReveal";
import { LINK_KIND, type ContactLink, type LinkKind, type Profile } from "../i18n";

const LINK_ICONS: Record<LinkKind, typeof MailIcon> = {
  [LINK_KIND.EMAIL]: MailIcon,
  [LINK_KIND.GITHUB]: GithubIcon,
  [LINK_KIND.LINKEDIN]: LinkedinIcon,
};

function ContactButton({ link }: { link: ContactLink }) {
  const Icon = LINK_ICONS[link.kind];
  const isExternal = !link.href.startsWith("mailto:");

  return (
    <a
      href={link.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 font-mono text-xs text-zinc-700 transition hover:border-accent-500 hover:text-accent-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-accent-400 dark:hover:text-accent-300"
    >
      <Icon className="size-4" />
      {link.label}
    </a>
  );
}

type HeroProps = Pick<Profile, "name" | "title" | "location" | "summary" | "focusAreas" | "links">;

export function Hero({ name, title, location, summary, focusAreas, links }: HeroProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section id="top" ref={revealRef} className="py-20 md:py-28">
      <p
        data-reveal="pending"
        className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400"
      >
        {location}
      </p>

      <h1
        data-reveal="pending"
        className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl"
      >
        {name}
      </h1>

      <p
        data-reveal="pending"
        className="mt-4 text-lg font-medium text-zinc-600 dark:text-zinc-400 md:text-xl"
      >
        {title}
      </p>

      <p
        data-reveal="pending"
        className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
      >
        {summary}
      </p>

      <ul data-reveal="pending" className="mt-8 flex flex-wrap gap-2">
        {focusAreas.map((area) => (
          <li
            key={area}
            className="rounded-md bg-accent-500/10 px-3 py-1.5 font-mono text-xs text-accent-700 ring-1 ring-accent-500/25 dark:text-accent-300"
          >
            {area}
          </li>
        ))}
      </ul>

      <div data-reveal="pending" className="mt-10 flex flex-wrap gap-3">
        {links.map((link) => (
          <ContactButton key={link.kind} link={link} />
        ))}
      </div>
    </section>
  );
}

export function HeroSection() {
  const { dictionary } = useLocale();
  const { profile } = dictionary;

  return (
    <Hero
      name={profile.name}
      title={profile.title}
      location={profile.location}
      summary={profile.summary}
      focusAreas={profile.focusAreas}
      links={profile.links}
    />
  );
}
