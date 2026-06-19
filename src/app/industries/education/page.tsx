import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function EducationPage() {
  return (
    <IndustryTemplate
      title="Education & Coaching"
      subtitle="Student-focused digital experiences for educational institutions."
      description="Create engaging learning experiences with portals, study material systems and management tools designed for modern education."
      challenges={[
        "Managing student records",
        "Tracking attendance manually",
        "Sharing study material efficiently",
        "Monitoring student performance",
        ]}

        solutions={[
        "Student portal access",
        "Attendance management",
        "Online learning resources",
        "Performance and result tracking",
        ]}
      includedFeatures={[
        "Home Page",
        "Courses",
        "Faculty Profiles",
        "Notice Board",
        "Contact Page",
        "WhatsApp Integration",
        "Mobile Responsive Design",
      ]}

      additionalFeatures={[
        "Student Accounts",
        "Study Material",
        "Video Lessons",
        "Attendance Tracking",
        "Online Tests",
        "Assignments",
        "Result Dashboard",
        "Fee Management",
        "Parent Portal",
        "Live Classes",
      ]}
    />
  );
}