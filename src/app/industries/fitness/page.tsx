import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function FitnessPage() {
  return (
    <IndustryTemplate
      title="Gyms & Fitness"
      subtitle="Membership, training and growth solutions for fitness businesses."
      description="Increase member engagement and simplify operations through digital platforms built specifically for gyms and fitness centers."
      challenges={[
        "Low member retention",
        "Difficulty tracking progress",
        "Manual attendance records",
        "Membership renewal follow-ups",
        ]}

        solutions={[
        "Workout and diet plan management",
        "Attendance tracking",
        "Member progress monitoring",
        "Automated membership renewals",
        ]}

      includedFeatures={[
        "Home Page",
        "About Gym",
        "Membership Plans",
        "Trainer Profiles",
        "Contact Page",
        "WhatsApp Integration",
        "Google Maps",
        "Mobile Responsive Design",
      ]}

      additionalFeatures={[
        "Workout Plans",
        "Diet Plans",
        "Attendance Tracking",
        "Exercise Tracking",
        "Progress Tracking",
        "Trainer Dashboard",
        "Membership Renewal",
        "Water Intake Tracking",
        "Online Payments",
        "Member Portal",
      ]}
    />
  );
}