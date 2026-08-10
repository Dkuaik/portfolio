export const LOCALE = {
  EN: "en",
  ES: "es",
} as const;

export type Locale = (typeof LOCALE)[keyof typeof LOCALE];

export const DEFAULT_LOCALE: Locale = LOCALE.EN;

export const WORK_KIND = {
  FULL_TIME: "full-time",
  INTERNSHIP: "internship",
} as const;

export type WorkKind = (typeof WORK_KIND)[keyof typeof WORK_KIND];

export const LINK_KIND = {
  EMAIL: "email",
  GITHUB: "github",
  LINKEDIN: "linkedin",
} as const;

export type LinkKind = (typeof LINK_KIND)[keyof typeof LINK_KIND];

export interface ContactLink {
  kind: LinkKind;
  label: string;
  href: string;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Position {
  company: string;
  role: string;
  kind: WorkKind;
  period: string;
  current: boolean;
  highlights: Highlight[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  summary: string;
  focusAreas: string[];
  links: ContactLink[];
  positions: Position[];
  skills: SkillGroup[];
  education: Education[];
  languages: LanguageSkill[];
}

export interface NavStrings {
  experience: string;
  stack: string;
  background: string;
}

export interface SectionStrings {
  experience: string;
  stack: string;
  background: string;
  education: string;
  languages: string;
}

export interface UiStrings {
  nav: NavStrings;
  sections: SectionStrings;
  internshipBadge: string;
  footerNote: string;
  switchToLight: string;
  switchToDark: string;
  switchLanguage: string;
  /** Easter egg toast. Must contain the {count} placeholder. */
  swarmSpawn: string;
  swarmTerminated: string;
  documentTitle: string;
  documentDescription: string;
}

export interface Dictionary {
  locale: Locale;
  htmlLang: string;
  profile: Profile;
  ui: UiStrings;
}
