export const pageRecommendations = {
  healthcare: 7,
  "medical_agency": 8,
  fitness: 6,
  restaurants: 5,
  "real-estate": 10,
  education: 8,
  others: 6,
};

export function getRecommendedPages(
  industry: string,
  featureCount: number
) {
  const base =
    pageRecommendations[
      industry as keyof typeof pageRecommendations
    ] ?? 6;

  return base + Math.ceil(featureCount / 2);
}