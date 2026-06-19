import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function MedicalAgencyPage() {
  return (
    <IndustryTemplate
      title="Medical Agencies"
      subtitle="Digital systems built for pharmaceutical distributors."
      description="Manage inventory, payments, customer records and ordering processes through a centralized platform designed specifically for medical agencies."
      challenges={[
        "Tracking pending payments manually",
        "Managing medicine inventory",
        "Following up with customers",
        "Handling multiple customer accounts",
        ]}

        solutions={[
        "Automated payment reminders",
        "Inventory tracking system",
        "Customer ledger management",
        "Centralized billing dashboard",
        ]}
      includedFeatures={[
        "Home Page",
        "About Company",
        "Product Catalog",
        "Brand-wise Products",
        "Category-wise Products",
        "Contact Page",
        "WhatsApp Integration",
        "Mobile Responsive Design",
        "Basic SEO",
      ]}

      additionalFeatures={[
        "Bill Management System",
        "Customer Ledger",
        "Due Date Tracking",
        "WhatsApp Payment Reminders",
        "Manual Payment Collection",
        "Partial Payment Tracking",
        "Inventory Management",
        "Low Stock Alerts",
        "Online Ordering System",
        "Customer Portal",
        "Sales Dashboard",
        "Staff Dashboard",
        "Multi Branch Support",
      ]}
    />
  );
}