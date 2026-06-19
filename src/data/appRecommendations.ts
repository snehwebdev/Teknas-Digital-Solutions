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