export const appFeaturesByIndustry = {
    healthcare: {
  included: [
    "Clinic Information",
    "Doctor Profiles",
    "Contact Information",
    "Google Maps",
    "Push Notifications",
  ],

  optional: [
    {
      id: "appointments",
      title: "Appointment Booking",
      description:
        "Patients can book appointments directly from the app.",
    },

    {
      id: "patient-accounts",
      title: "Patient Accounts",
      description:
        "Patients can securely log in and access personal information.",
    },

    {
      id: "reports",
      title: "Medical Reports",
      description:
        "Patients can access and download reports.",
    },

    {
      id: "prescriptions",
      title: "Prescription Access",
      description:
        "Patients can view prescription history anytime.",
    },

    {
      id: "payments",
      title: "Online Payments",
      description:
        "Accept consultation and booking payments inside the app.",
    },

    {
      id: "reminders",
      title: "Appointment Reminders",
      description:
        "Automatic reminders before appointments.",
    },

    {
      id: "video-consultation",
      title: "Video Consultation",
      description:
        "Doctors can consult patients remotely through video calls.",
    },
  ],
},
fitness: {
  included: [
    "Gym Information",
    "Membership Information",
    "Contact Information",
    "Push Notifications",
  ],

  optional: [
    {
      id: "workout-plans",
      title: "Workout Plans",
      description:
        "Provide custom workout plans to members.",
    },

    {
      id: "diet-plans",
      title: "Diet Plans",
      description:
        "Assign personalized diet plans.",
    },

    {
      id: "attendance",
      title: "Attendance Tracking",
      description:
        "Track gym visits and attendance.",
    },

    {
      id: "exercise-tracking",
      title: "Exercise Tracking",
      description:
        "Members can record completed exercises, sets and repetitions.",
    },

    {
      id: "progress-tracking",
      title: "Progress Tracking",
      description:
        "Track weight, measurements and fitness progress.",
    },

    {
      id: "trainer-dashboard",
      title: "Trainer Dashboard",
      description:
        "Trainers can monitor member performance.",
    },

    {
      id: "membership-renewal",
      title: "Membership Renewal",
      description:
        "Members can renew memberships directly from the app.",
    },

    {
      id: "water-tracker",
      title: "Water Intake Tracking",
      description:
        "Track daily water consumption goals.",
    },
  ],
},
"medical_agency": {
  included: [
    "Product Catalog",
    "Brand-wise Products",
    "Category-wise Products",
    "Product Search",
    "Notifications",
    "Contact Information",
  ],

  optional: [
    {
      id: "bill-management",
      title: "Bill Management",
      description:
        "Upload bills, invoices and manage payment records.",
    },

    {
      id: "customer-ledger",
      title: "Customer Ledger",
      description:
        "View payment history and outstanding balances.",
    },

    {
      id: "due-tracking",
      title: "Due Date Tracking",
      description:
        "Track upcoming and overdue payments automatically.",
    },

    {
      id: "whatsapp-reminders",
      title: "WhatsApp Payment Reminders",
      description:
        "Send automatic payment reminders to customers.",
    },

    {
      id: "manual-payments",
      title: "Manual Payment Collection",
      description:
        "Update received payments manually.",
    },

    {
      id: "partial-payments",
      title: "Partial Payment Tracking",
      description:
        "Track remaining balances after partial payments.",
    },

    {
      id: "inventory",
      title: "Inventory Management",
      description:
        "Manage medicine stock and availability.",
    },

    {
      id: "low-stock",
      title: "Low Stock Alerts",
      description:
        "Get notified when stock levels become low.",
    },

    {
      id: "ordering",
      title: "Online Ordering",
      description:
        "Allow customers to place medicine orders.",
    },

    {
      id: "dashboard",
      title: "Business Dashboard",
      description:
        "View collections, pending payments and inventory.",
    },

    {
      id: "staff-dashboard",
      title: "Staff Dashboard",
      description:
        "Separate employee access and controls.",
    },
  ],
},
restaurants: {
  included: [
    "Restaurant Information",
    "Digital Menu",
    "Contact Information",
    "Google Maps",
    "Featured Dishes",
  ],

  optional: [
    {
      id: "table-booking",
      title: "Table Reservation System",
      description:
        "Customers can reserve tables directly from the app.",
    },

    {
      id: "reservation-slots",
      title: "Reservation Time Slots",
      description:
        "Manage reservation timings and cleaning intervals.",
    },

    {
      id: "food-ordering",
      title: "Food Ordering",
      description:
        "Customers can order food directly from the app.",
    },

    {
      id: "online-payments",
      title: "Online Payments",
      description:
        "Accept food and reservation payments.",
    },

    {
      id: "arrival-confirmation",
      title: "Arrival Confirmation",
      description:
        "Customers or staff can confirm arrival status.",
    },

    {
      id: "loyalty-program",
      title: "Loyalty Rewards",
      description:
        "Reward repeat customers with points and offers.",
    },

    {
      id: "coupon-system",
      title: "Coupon System",
      description:
        "Offer discount coupons and promotions.",
    },

    {
      id: "push-notifications",
      title: "Push Notifications",
      description:
        "Notify customers about offers and new dishes.",
    },

    {
      id: "admin-dashboard",
      title: "Restaurant Dashboard",
      description:
        "Manage reservations, orders and customers.",
    },
  ],
},
"real-estate": {
  included: [
    "Property Listings",
    "Property Details",
    "Contact Information",
    "Agent Profiles",
    "Property Gallery",
  ],

  optional: [
    {
      id: "property-search",
      title: "Property Search",
      description:
        "Search properties by location and keywords.",
    },

    {
      id: "advanced-filters",
      title: "Advanced Filters",
      description:
        "Filter by budget, size, type and amenities.",
    },

    {
      id: "saved-properties",
      title: "Saved Properties",
      description:
        "Users can save favourite properties.",
    },

    {
      id: "property-visits",
      title: "Visit Scheduling",
      description:
        "Schedule property visits directly from the app.",
    },

    {
      id: "lead-management",
      title: "Lead Management",
      description:
        "Track and manage potential buyers.",
    },

    {
      id: "crm",
      title: "CRM Dashboard",
      description:
        "Manage customer interactions and leads.",
    },

    {
      id: "mortgage-calculator",
      title: "Mortgage Calculator",
      description:
        "Estimate monthly payments for buyers.",
    },

    {
      id: "virtual-tour",
      title: "360° Property View",
      description:
        "Interactive property viewing experience.",
    },
  ],
},
education: {
  included: [
    "Courses",
    "Faculty Information",
    "Notices",
    "Contact Information",
    "Push Notifications",
  ],

  optional: [
    {
      id: "student-accounts",
      title: "Student Accounts",
      description:
        "Students can log in securely.",
    },

    {
      id: "study-material",
      title: "Study Material",
      description:
        "Access PDFs, notes and resources.",
    },

    {
      id: "video-lessons",
      title: "Video Lessons",
      description:
        "Watch recorded classes and tutorials.",
    },

    {
      id: "attendance",
      title: "Attendance Tracking",
      description:
        "Track attendance percentages.",
    },

    {
      id: "online-tests",
      title: "Online Tests",
      description:
        "Conduct quizzes and examinations.",
    },

    {
      id: "assignments",
      title: "Assignments",
      description:
        "Upload and submit assignments.",
    },

    {
      id: "results",
      title: "Result Dashboard",
      description:
        "View marks and performance reports.",
    },

    {
      id: "fees",
      title: "Fee Management",
      description:
        "Manage student payments and dues.",
    },

    {
      id: "parent-portal",
      title: "Parent Portal",
      description:
        "Parents can monitor progress and attendance.",
    },

    {
      id: "live-classes",
      title: "Live Classes",
      description:
        "Integrate Zoom or Google Meet sessions.",
    },
  ],
},
others: {
  included: [
    "Company Information",
    "Contact Information",
    "Notifications",
    "Basic App Screens",
  ],

  optional: [],
},
}