export function getRecommendedTimeline(
  pages: number,
  featureCount: number
) {
  const complexity = pages + featureCount;

  if (complexity <= 8) {
    return {
      flexible: "4-6 Weeks",
      recommended: "3-4 Weeks",
      priority: "2 Weeks",
    };
  }

  if (complexity <= 15) {
    return {
      flexible: "6-8 Weeks",
      recommended: "4-6 Weeks",
      priority: "3 Weeks",
    };
  }

  return {
    flexible: "8-12 Weeks",
    recommended: "6-8 Weeks",
    priority: "4-5 Weeks",
  };
}