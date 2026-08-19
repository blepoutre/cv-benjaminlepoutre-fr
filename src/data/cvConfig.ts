// src/data/cvConfig.ts

export type SectionId =
  | "SectionCompetences"
  | "SectionPratiqueSportive"
  | "SectionExperiences"
  | "SectionFormations";

export interface Section {
  name: string;
  file: SectionId;
}

export const SECTIONS: Section[] = [
  { name: "Compétences", file: "SectionCompetences" },
  { name: "Expériences", file: "SectionExperiences" },
  { name: "Pratique sportive", file: "SectionPratiqueSportive" },
  { name: "Formations", file: "SectionFormations" },
];
