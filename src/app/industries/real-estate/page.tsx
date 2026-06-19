import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function RealEstatePage() {
  return (
    <IndustryTemplate
      title="Real Estate"
      subtitle="Lead generation and property showcase solutions."
      description="Convert more visitors into buyers through professional property platforms with search, filtering and lead management capabilities."
      challenges={[
        "Generating quality leads",
        "Managing property enquiries",
        "Tracking client interactions",
        "Showcasing properties effectively",
        ]}

        solutions={[
        "Advanced property search",
        "Lead management dashboard",
        "Property visit scheduling",
        "360° property viewing experience",
        ]}
      includedFeatures={[
        "Home Page",
        "Property Listings",
        "Property Gallery",
        "Agent Profiles",
        "Contact Page",
        "WhatsApp Integration",
        "Mobile Responsive Design",
      ]}

      additionalFeatures={[
        "Property Search",
        "Advanced Filters",
        "Saved Properties",
        "Visit Scheduling",
        "Lead Management",
        "CRM Dashboard",
        "Mortgage Calculator",
        "360° Property View",
      ]}
    />
  );
}