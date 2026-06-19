import IndustryTemplate from "@/components/industry/IndustryTemplate";

export default function RestaurantsPage() {
  return (
    <IndustryTemplate
      title="Restaurants & Cafés"
      subtitle="Reservation and ordering systems designed for hospitality."
      description="Improve customer experience through online reservations, digital menus and streamlined restaurant operations."
      challenges={[
        "Managing reservations manually",
        "Table allocation issues",
        "Missed customer bookings",
        "Lack of repeat customers",
        ]}

        solutions={[
        "Digital table reservation system",
        "Automated booking management",
        "Online ordering capabilities",
        "Customer loyalty programs",
        ]}
      includedFeatures={[
        "Home Page",
        "Digital Menu",
        "Featured Dishes",
        "Contact Page",
        "WhatsApp Integration",
        "Google Maps",
        "Mobile Responsive Design",
      ]}

      additionalFeatures={[
        "Table Reservation System",
        "Reservation Time Slots",
        "Food Ordering",
        "Online Payments",
        "Arrival Confirmation",
        "Loyalty Rewards",
        "Coupon System",
        "Push Notifications",
        "Restaurant Dashboard",
      ]}
    />
  );
}