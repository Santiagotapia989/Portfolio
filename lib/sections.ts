export const SECTION_IDS = [
  "home",
  "about",
  "experience",
  "projects",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
