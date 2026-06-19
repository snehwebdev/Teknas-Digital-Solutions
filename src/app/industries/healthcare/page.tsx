import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function HealthcarePage() {
  return (
    <IndustryTemplate
      title="Healthcare & Clinics"
      subtitle="Modern digital experiences for healthcare providers."
      description="Build trust, improve patient experience and streamline operations with websites and systems designed specifically for healthcare businesses."
      challenges={[
        "Missed appointments",
        "Manual patient management",
        "Limited online visibility",
        "High administrative workload",
      ]}

      solutions={[
        "Online appointment booking",
        "Patient self-service access",
        "Automated reminders",
        "Streamlined clinic operations",
      ]}
      includedFeatures={[
        "Home Page",
        "About Clinic",
        "Doctor Profiles",
        "Services",
        "Contact Page",
        "WhatsApp Integration",
        "Google Maps",
        "Mobile Responsive Design",
        "Basic SEO",
      ]}

      additionalFeatures={[
        "Online Appointment Booking",
        "Patient Accounts",
        "Medical Report Downloads",
        "Prescription Access",
        "Online Payments",
        "Staff Dashboard",
        "Content Management System",
        "Health Blog",
        "Appointment Reminders",
      ]}
    />
  );
}