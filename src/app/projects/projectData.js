import homeNest from "../../../assets/homeNest.png";
import AllApps from "../../../assets/AllApps.png";
import greenNest from "../../../assets/greenNest.png";
import dragonNews from "../../../assets/dragonNews.png";
import ticketBooking from "../../../assets/Book.png";
import hishabKitab from "../../../assets/hishabKitab.png";
import careXyz from "../../../assets/careXyz.png";

export const projectsData = [
  {
    slug: "ticket-bari",
    title: "TicketBari",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Firebase",
      "TanStack Query",
      "Recharts",
    ],
    description:
      "Developed a high-concurrency full-stack SaaS platform ensuring accurate and reliable ticket booking across multiple transport services.",
    image: ticketBooking,
    liveLink: "https://online-ticket-booking-platform.netlify.app/",
    githubClient:
      "https://github.com/sakhawat236hossain/Online-Ticket-Booking-Platform-client-",
    color: "from-rose-500 via-pink-600 to-purple-600",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Firebase",
      "TanStack Query",
      "Recharts",
    ],
    problem:
      "Ticket booking systems must prevent inventory inconsistencies while providing a real-time seat selection experience for multiple transport services.",
    solution:
      "Engineered a payment-contingent seat update system using Stripe so seats are reserved only after successful transactions, combined with Firebase authentication and role-based dashboards for User, Vendor, and Admin access.",
    impact:
      "Eliminated false reservations, improved booking reliability, and delivered analytics-ready dashboards for vendors and administrators.",
    highlights: [
      "Implemented role-based dashboards with Firebase authentication and protected routes",
      "Built a payment-contingent seat workflow with Stripe to prevent inventory inconsistencies",
      "Developed advanced search, filtering, and analytics features using TanStack Query and Recharts",
      "Designed admin controls for ticket moderation, vendor verification, and advertisement management",
    ],
  },
  {
    slug: "care-xyz",
    title: "Care.xyz",
    tags: [
      "Next.js",
      "MongoDB",
      "NextAuth.js",
      "Tailwind",
      "Firebase",
      "Cloudinary",
    ],
    description:
      "Developed a responsive caregiving service platform with structured booking, dynamic pricing, and real-time booking status tracking.",
    image: careXyz,
    liveLink: "https://care-xyz-client-web.vercel.app/",
    githubClient: "https://github.com/sakhawat236hossain/Care-xyz-client",
    color: "from-indigo-400 via-purple-500 to-pink-600",
    stack: [
      "Next.js 16",
      "Tailwind CSS",
      "MongoDB",
      "NextAuth.js",
      "Nodemailer",
      "Cloudinary",
      "Lucide Icons",
    ],
    problem:
      "Users needed a trusted booking experience for caregiving services with transparent pricing and easy role management.",
    solution:
      "Built a full admin suite for managing services and user roles, with email invoicing automation via Nodemailer and scalable media storage using Cloudinary.",
    impact:
      "Delivered a smooth, transparent booking process and strengthened communication through automated HTML invoices.",
    highlights: [
      "Full admin dashboard for service, user, and booking management",
      "Dynamic booking cost calculation with real-time status tracking",
      "Email automation with Nodemailer and scalable Cloudinary media storage",
      "Responsive UI built for caregiver and customer interactions",
    ],
  },
  {
    slug: "home-nest",
    title: "Home Nest",
    tags: ["React", "Firebase", "MongoDB", "Swiper JS", "DaisyUI"],
    description:
      "Developed a modern property buy-sell platform with advanced search, filters, and CRUD management for real estate listings.",
    image: homeNest,
    liveLink: "https://home-nest-a10-b12.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/Home-Nest-client",
    color: "from-blue-600 via-indigo-600 to-violet-700",
    stack: [
      "React",
      "Firebase",
      "MongoDB",
      "Tailwind CSS",
      "DaisyUI",
      "Swiper JS",
      "SweetAlert2",
    ],
    problem:
      "Property seekers needed a clean, fast interface with strong filtering and listing management capabilities.",
    solution:
      "Built a seamless property marketplace with location, price, and type filters, plus CRUD operations and a feedback system for property details.",
    impact:
      "Helped users discover listings faster and enabled rich property management with actionable user feedback.",
    highlights: [
      "User-friendly interface for browsing, listing, and managing properties",
      "Full CRUD support for property management",
      "Advanced filtering and search for location, price, and type",
      "Integrated feedback system for property reviews",
    ],
  },
  {
    slug: "green-nest",
    title: "Green Nest",
    tags: ["React", "Tailwind", "Firebase"],
    description:
      "A premium eco-commerce platform for plant enthusiasts. Features include plant care guides and environmental awareness modules.",
    image: greenNest,
    liveLink: "https://greennest-assigment-9.firebaseapp.com/",
    githubClient: "https://github.com/sakhawat236hossain/Green-Nest-A9",
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    stack: ["React", "Tailwind CSS", "Firebase"],
    problem:
      "Plant buyers wanted a modern e-commerce experience that also provided care guidance and sustainability context.",
    solution:
      "Designed an eco-first storefront with plant care resources, wishlist support, and Firebase authentication for returning customers.",
    impact:
      "Created a trustworthy shopping journey with educational value and secure user accounts.",
    highlights: [
      "Eco-driven storefront with plant care content",
      "Firebase-backed authentication and database",
      "Responsive mobile-first shopping experience",
    ],
  },
  {
    slug: "apps-hub",
    title: "Apps Hub",
    tags: ["JavaScript", "Tools", "React"],
    description:
      "An integrated dashboard featuring utility tools and mini-apps, designed with a focus on seamless user navigation.",
    image: AllApps,
    liveLink: "https://apps-hub-and-dtails.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/all-app-data",
    color: "from-orange-500 via-red-500 to-rose-600",
    stack: ["React", "JavaScript", "CSS"],
    problem:
      "Users wanted quick access to multiple utility tools from one clean dashboard without repeated navigation.",
    solution:
      "Built a unified app hub with instant tool access, intuitive categorization, and smooth transitions between utilities.",
    impact:
      "Reduced tool discovery time and organized utilities into a polished dashboard.",
    highlights: [
      "Centralized utility dashboard",
      "Smooth navigation across mini-apps",
      "Modern UI with clear information hierarchy",
    ],
  },
  {
    slug: "dragon-news",
    title: "Dragon News",
    tags: ["React", "Context", "Firebase"],
    description:
      "A real-time news aggregation platform with category filtering and dynamic content loading for a smooth experience.",
    image: dragonNews,
    liveLink: "https://all-news-data.netlify.app/",
    githubClient: "https://github.com/sakhawat236hossain/all-app-data",
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
    stack: ["React", "Context API", "Firebase"],
    problem:
      "News readers needed a fast filtering experience and consistent content updates across categories.",
    solution:
      "Implemented a dynamic aggregation interface with category filters and smooth hydration for instant reading.",
    impact:
      "Improved content discovery and lowered load times for browsing trending stories.",
    highlights: [
      "Category-based news filtering",
      "Real-time content flow with React Context",
      "Responsive reading experience",
    ],
  },
  {
    slug: "hishab-kitab",
    title: "Hishab Kitab",
    tags: ["Next.js", "MongoDB", "Typescript"],
    description:
      "A real-time Habit tracking application with interactive dashboards and data visualization, built to practice Next.js and MongoDB integration.",
    image: hishabKitab,
    liveLink: "https://hishabkitam.vercel.app/",
    githubClient: "https://github.com/sakhawat236hossain/HishabKitab",
    color: "from-purple-600 via-fuchsia-500 to-pink-500",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    problem:
      "Users wanted a way to track daily habits with clear progress visuals and personalized achievement tracking.",
    solution:
      "Built a habit-tracking dashboard with progress visuals, goal summaries, and MongoDB-backed persistence.",
    impact:
      "Delivered a motivating tracking experience with data-driven progress feedback.",
    highlights: [
      "Habit progress visualization",
      "Persistent data storage with MongoDB",
      "Goal-setting dashboard experience",
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projectsData.find((project) => project.slug === slug);
