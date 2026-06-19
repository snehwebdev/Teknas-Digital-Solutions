export const featuresByIndustry = {
  healthcare: {
    included: [
      "Mobile Friendly Design",
      "Doctor Profiles",
      "Treatments & Services Pages",
      "Photo Gallery",
      "Testimonials Section",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Basic SEO Setup",
      "Fast Loading Website",
    ],

    optional: [
      {
        id: "appointments",
        title: "Online Appointment Booking",
        description:
          "Patients can request appointments directly from your website.",
      },
      {
        id: "accounts",
        title: "Patient Accounts",
        description:
          "Patients can log in and access their information securely.",
      },
      {
        id: "reports",
        title: "Medical Report Downloads",
        description:
          "Patients can download reports directly from their account.",
      },
      {
        id: "prescriptions",
        title: "Prescription Access",
        description:
          "Patients can view previous prescriptions online.",
      },
      {
        id: "payments",
        title: "Online Payments",
        description:
          "Collect consultation and booking payments online.",
      },
      {
        id: "staff",
        title: "Staff Dashboard",
        description:
          "Receptionists and staff can manage appointments and patients.",
      },
      {
        id: "cms",
        title: "Manage Website Content Yourself",
        description:
          "Update text, images and content without needing a developer.",
      },
      {
        id: "blog",
        title: "Health Blog",
        description:
          "Publish articles and improve visibility on Google.",
      },
      {
        id: "reminders",
        title: "Appointment Reminders",
        description:
          "Automatic WhatsApp or SMS reminders for patients.",
      },
    ],
  },

  medical_agency: {
    included: [
      "Home Page",
      "About Company",
      "Product Catalog",
      "Brand-wise Product Listing",
      "Category-wise Product Listing",
      "Product Search",
      "Contact Page",
      "WhatsApp Integration",
      "Mobile Responsive Design",
      "Basic SEO",
    ],
    optional: [
      {
        id: "bill-management",
        title: "Bill Management System",
        description:
          "Upload bills, manage invoices, track payments and organize records.",
      },

      {
        id: "customer-ledger",
        title: "Customer Ledger",
        description:
          "View complete payment history and outstanding balances for each customer.",
      },

      {
        id: "due-date-tracking",
        title: "Due Date Tracking",
        description:
          "Automatically track upcoming and overdue payments.",
      },

      {
        id: "whatsapp-reminders",
        title: "WhatsApp Payment Reminders",
        description:
          "Automatically send payment reminder messages before and after due dates.",
      },

      {
        id: "manual-payment-update",
        title: "Manual Payment Collection",
        description:
          "Mark payments as received manually and update remaining balances.",
      },

      {
        id: "partial-payments",
        title: "Partial Payment Tracking",
        description:
          "Support partially paid invoices and automatically calculate remaining amounts.",
      },

      {
        id: "inventory-management",
        title: "Medicine Inventory Management",
        description:
          "Track medicine stock levels and monitor inventory availability.",
      },

      {
        id: "low-stock-alerts",
        title: "Low Stock Alerts",
        description:
          "Receive alerts when medicines reach low stock levels.",
      },

      {
        id: "ordering-system",
        title: "Online Ordering System",
        description:
          "Allow customers to place orders directly through the platform.",
      },

      {
        id: "customer-portal",
        title: "Customer Portal",
        description:
          "Customers can view invoices, payments and order history.",
      },

      {
        id: "sales-dashboard",
        title: "Sales Dashboard",
        description:
          "View collected payments, pending payments and business performance.",
      },

      {
        id: "staff-dashboard",
        title: "Staff Dashboard",
        description:
          "Separate dashboard access for employees and sales staff.",
      },

      {
        id: "multi-branch",
        title: "Multi-Branch Support",
        description:
          "Manage multiple warehouses or business locations.",
      },
    ]
  },

  fitness: {
  included: [
    "Home Page",
    "About Gym",
    "Membership Plans",
    "Trainer Profiles",
    "Programs & Services",
    "Transformation Gallery",
    "Testimonials",
    "Contact Page",
    "WhatsApp Integration",
    "Google Maps",
    "Mobile Responsive Design",
    "Basic SEO",
  ],

  optional: [
    {
      id: "free-trial",
      title: "Free Trial Booking",
      description:
        "Allow visitors to book a free trial session online.",
    },

    {
      id: "membership-purchase",
      title: "Online Membership Purchase",
      description:
        "Allow customers to buy memberships directly from the website.",
    },

    {
      id: "membership-renewal",
      title: "Membership Renewal System",
      description:
        "Members can renew memberships online and receive reminders.",
    },

    {
      id: "attendance-tracking",
      title: "Attendance Tracking",
      description:
        "Track member check-ins and attendance history.",
    },

    {
      id: "diet-plans",
      title: "Custom Diet Plans",
      description:
        "Trainers can assign personalized diet plans to members.",
    },

    {
      id: "workout-plans",
      title: "Custom Workout Plans",
      description:
        "Create personalized workout schedules for members.",
    },

    {
      id: "progress-tracking",
      title: "Fitness Progress Tracking",
      description:
        "Track weight, body measurements and fitness progress.",
    },

    {
      id: "member-portal",
      title: "Member Portal",
      description:
        "Members can log in to view plans, progress and memberships.",
    },

    {
      id: "trainer-dashboard",
      title: "Trainer Dashboard",
      description:
        "Separate dashboard for trainers to manage clients.",
    },

    {
      id: "exercise-logging",
      title: "Exercise Completion Tracking",
      description:
        "Members can enter completed reps, sets and workout data.",
    },

    {
      id: "whatsapp-reminders",
      title: "WhatsApp Membership Reminders",
      description:
        "Automatic reminders for renewals and memberships.",
    },

    {
      id: "online-classes",
      title: "Online Class Booking",
      description:
        "Allow members to reserve classes online.",
    },

    {
      id: "mobile-app-sync",
      title: "Mobile App Integration",
      description:
        "Connect website functionality with a mobile application.",
    },

    {
      id: "ai-insights",
      title: "AI Fitness Insights",
      description:
        "AI-generated suggestions based on member activity and progress.",
    },
  ],
},
restaurants: {
  included: [
    "Home Page",
    "About Restaurant",
    "Digital Menu",
    "Featured Dishes Section",
    "Gallery",
    "Contact Page",
    "WhatsApp Integration",
    "Google Maps",
    "Mobile Responsive Design",
    "Basic SEO",
  ],

  optional: [
    {
      id: "table-reservation",
      title: "Table Reservation System",
      description:
        "Customers can reserve tables online before visiting your restaurant.",
    },

    {
      id: "time-slot-management",
      title: "Reservation Time Slot Management",
      description:
        "Manage reservation slots automatically and avoid overbooking.",
    },

    {
      id: "reservation-cancellation",
      title: "Automatic Reservation Expiry",
      description:
        "Reservations automatically expire if customers arrive late. Timing can be customized.",
    },

    {
      id: "pre-order-food",
      title: "Food Pre-Ordering",
      description:
        "Customers can choose menu items while reserving a table so food preparation can begin earlier.",
    },

    {
      id: "kitchen-notification",
      title: "Kitchen Preparation Alerts",
      description:
        "Notify kitchen staff when a customer places a pre-order.",
    },

    {
      id: "arrival-checkin",
      title: "Customer Arrival Check-In",
      description:
        "Customers or staff can mark arrival when reaching the restaurant.",
    },

    {
      id: "table-assignment",
      title: "Table Assignment Dashboard",
      description:
        "Staff can manage reserved tables and assign guests efficiently.",
    },

    {
      id: "online-ordering",
      title: "Online Food Ordering",
      description:
        "Allow customers to place pickup or delivery orders directly from the website.",
    },

    {
      id: "online-payments",
      title: "Online Payments",
      description:
        "Accept secure online payments for reservations and orders.",
    },

    {
      id: "qr-menu",
      title: "QR Code Menu",
      description:
        "Customers can scan a QR code to instantly access the digital menu.",
    },

    {
      id: "coupon-system",
      title: "Coupons & Discount Codes",
      description:
        "Create discount offers, promotional campaigns and special deals.",
    },

    {
      id: "loyalty-program",
      title: "Customer Loyalty Program",
      description:
        "Reward repeat customers with points, offers and membership benefits.",
    },

    {
      id: "whatsapp-campaigns",
      title: "WhatsApp Marketing",
      description:
        "Send offers, announcements and promotions directly to customers.",
    },

    {
      id: "review-system",
      title: "Review Collection System",
      description:
        "Collect customer feedback and ratings after their visit.",
    },

    {
      id: "customer-accounts",
      title: "Customer Accounts",
      description:
        "Customers can log in, view orders, reservations and loyalty points.",
    },

    {
      id: "membership-system",
      title: "VIP Membership Program",
      description:
        "Offer exclusive membership benefits, discounts and rewards.",
    },

    {
      id: "analytics-dashboard",
      title: "Restaurant Analytics Dashboard",
      description:
        "Track reservations, orders, revenue and popular dishes from a central dashboard.",
    },
  ],
},
"real-estate": {
  included: [
    "Home Page",
    "About Company",
    "Property Listings",
    "Property Details Pages",
    "Agent Profiles",
    "Contact Page",
    "WhatsApp Integration",
    "Google Maps",
    "Mobile Responsive Design",
    "Basic SEO",
  ],

  optional: [
    {
      id: "property-search",
      title: "Advanced Property Search",
      description:
        "Visitors can search properties by location, budget, property type and other criteria.",
    },

    {
      id: "property-filters",
      title: "Property Filters",
      description:
        "Filter properties by price, area, bedrooms, amenities and more.",
    },

    {
      id: "property-enquiry",
      title: "Property Enquiry Forms",
      description:
        "Capture leads directly from individual property pages.",
    },

    {
      id: "whatsapp-property",
      title: "WhatsApp Property Enquiries",
      description:
        "Customers can enquire about specific properties directly through WhatsApp.",
    },

    {
      id: "property-management",
      title: "Property Management Dashboard",
      description:
        "Add, edit and manage all properties from a central dashboard.",
    },

    {
      id: "property-status",
      title: "Property Status Tracking",
      description:
        "Mark properties as Available, Sold, Booked or Under Negotiation.",
    },

    {
      id: "property-visit",
      title: "Property Visit Scheduling",
      description:
        "Allow customers to request and schedule property visits online.",
    },

    {
      id: "lead-management",
      title: "Lead Management Dashboard",
      description:
        "Track enquiries, follow-ups and potential buyers from one dashboard.",
    },

    {
      id: "agent-dashboard",
      title: "Agent Dashboard",
      description:
        "Agents can manage their listings and enquiries separately.",
    },

    {
      id: "multi-agent",
      title: "Multi-Agent Management",
      description:
        "Support multiple agents with separate profiles and property assignments.",
    },

    {
      id: "customer-accounts",
      title: "Customer Accounts",
      description:
        "Visitors can save enquiries, property visits and favorite properties.",
    },

    {
      id: "saved-properties",
      title: "Saved Properties",
      description:
        "Allow visitors to bookmark properties and compare them later.",
    },

    {
      id: "property-comparison",
      title: "Property Comparison Tool",
      description:
        "Compare multiple properties side-by-side before making a decision.",
    },

    {
      id: "featured-properties",
      title: "Featured Property Showcase",
      description:
        "Highlight premium or priority properties on the homepage.",
    },

    {
      id: "property-gallery",
      title: "Advanced Property Gallery",
      description:
        "Showcase properties using image galleries, floor plans and videos.",
    },

    {
      id: "emi-calculator",
      title: "EMI Calculator",
      description:
        "Help buyers estimate monthly loan payments directly on the website.",
    },

    {
      id: "crm",
      title: "Client Relationship Dashboard",
      description:
        "Manage leads, follow-ups and customer interactions from one place.",
    },
  ],
},
education: {
  included: [
    "Home Page",
    "About Institute",
    "Courses Page",
    "Faculty Information",
    "Gallery",
    "Contact Page",
    "WhatsApp Integration",
    "Google Maps",
    "Mobile Responsive Design",
    "Basic SEO",
  ],

  optional: [
    {
      id: "student-accounts",
      title: "Student Accounts",
      description:
        "Students can securely log in to access their learning resources.",
    },

    {
      id: "study-material",
      title: "Study Material Portal",
      description:
        "Upload notes, PDFs and learning resources for students.",
    },

    {
      id: "video-lessons",
      title: "Video Lesson Library",
      description:
        "Upload demo classes and recorded lessons for students.",
    },

    {
      id: "attendance-system",
      title: "Attendance Tracking",
      description:
        "Track student attendance and view attendance percentages.",
    },

    {
      id: "holiday-calendar",
      title: "Holiday & Event Calendar",
      description:
        "Display holidays, exam dates and important announcements.",
    },

    {
      id: "online-tests",
      title: "Online Tests & Quizzes",
      description:
        "Conduct online tests and practice examinations.",
    },

    {
      id: "test-results",
      title: "Result Dashboard",
      description:
        "Students can view test scores and performance reports.",
    },

    {
      id: "assignment-system",
      title: "Assignments & Homework",
      description:
        "Upload assignments and collect student submissions.",
    },

    {
      id: "certificate-downloads",
      title: "Certificate Downloads",
      description:
        "Allow students to download certificates online.",
    },

    {
      id: "fee-management",
      title: "Fee Management System",
      description:
        "Track student fees and payment records.",
    },

    {
      id: "online-payments",
      title: "Online Fee Payments",
      description:
        "Accept course fees directly through the website.",
    },

    {
      id: "admission-form",
      title: "Online Admission Forms",
      description:
        "Students can apply and register online.",
    },

    {
      id: "batch-management",
      title: "Batch Management",
      description:
        "Organize students into different batches and courses.",
    },

    {
      id: "parent-portal",
      title: "Parent Portal",
      description:
        "Parents can monitor attendance and academic progress.",
    },

    {
      id: "live-classes",
      title: "Live Class Integration",
      description:
        "Integrate Zoom or Google Meet sessions for online learning.",
    },

    {
      id: "student-dashboard",
      title: "Student Dashboard",
      description:
        "Students can view attendance, results, assignments and notices from one place.",
    },

    {
      id: "admin-dashboard",
      title: "Institute Dashboard",
      description:
        "Manage students, batches, attendance, fees and content from one dashboard.",
    },
  ],
},
  others: {
    included: [
      "Mobile Friendly Design",
      "Services Pages",
      "Photo Gallery",
      "Testimonials",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps",
      "Basic SEO Setup",
    ],

    optional: [
      {
        id: "cms",
        title: "Manage Website Content Yourself",
        description:
          "Update content without developer assistance.",
      },
      {
        id: "payments",
        title: "Online Payments",
        description:
          "Accept payments directly from customers.",
      },
      {
        id: "accounts",
        title: "Customer Accounts",
        description:
          "Allow customers to sign in and manage information.",
      },
    ],
  },
} as const;