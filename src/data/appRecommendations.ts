export const appRecommendations = {
  healthcare: 5,
  medical_agency: 6,
  fitness: 5,
  restaurants: 5,
  "real-estate": 6,
  education: 6,
  others: 4,
};

export function getRecommendedScreens(
  industry: string,
  featureCount: number
) {
  const base =
    appRecommendations[
      industry as keyof typeof appRecommendations
    ] ?? 4;

  return base + featureCount;
}

export function getAppTimeline(
  screenCount: number
) {
  if (screenCount <= 5) return "4-6 Weeks";
  if (screenCount <= 10) return "6-8 Weeks";
  if (screenCount <= 15) return "8-12 Weeks";

  return "12+ Weeks";
}