// utils/experience.ts

const START_DATE: Date = new Date("2015-10-01"); // début DGA

/**
 * Calcule le nombre d'années d'expérience pleines écoulées depuis START_DATE.
 * @param referenceDate - date de référence pour le calcul (par défaut : aujourd'hui)
 */
export function yearsOfExperience(referenceDate: Date = new Date()): number {
  let years = referenceDate.getFullYear() - START_DATE.getFullYear();

  const hasHadAnniversaryThisYear =
    referenceDate.getMonth() > START_DATE.getMonth() ||
    (referenceDate.getMonth() === START_DATE.getMonth() &&
      referenceDate.getDate() >= START_DATE.getDate());

  if (!hasHadAnniversaryThisYear) years -= 1;

  return years;
}
