import {
  compliance,
  ecofriendly,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  skills,
  trust,
} from "@/assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "aboutus",
    title: "About Us",
    path: "/aboutus",
  },
  {
    id: "ourservices",
    title: "Our Services",
    path: "/ourservices",
  },
  {
    id: "contactus",
    title: "Contact Us",
    path: "/contactus",
  },
];

const features = [
  {
    icon: compliance,
    alt: "Compliance certification icon",
    title: "100% CERTIFIED",
    subtitle: "INTERNATIONAL STANDARDS",
    description: "All the required compliance certifications certified.",
  },
  {
    icon: trust,
    alt: "Trust and reliability icon",
    title: "TRUSTED BY",
    subtitle: "LEADING GARMENT EXPORTERS",
    description: "Partnering with top apparel manufacturers worldwide.",
  },
  {
    icon: skills,
    alt: "Skills and expertise icon",
    title: "SKILLED TEAM",
    subtitle: "ADVANCED TECHNIQUES",
    description: "Boosting productivity & profitability with expertise.",
  },
  {
    icon: ecofriendly,
    alt: "Eco-friendly practices icon",
    title: "ECO-FRIENDLY",
    subtitle: "EXPORT QUALITY",
    description: "Trusted across Asia for sustainable excellence.",
  },
];

const linkSections = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "500+", label: "Projects Done" },
  { number: "100+", label: "Happy Clients" },
  { number: "50+", label: "Team Members" },
];

const teamMembers = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const services = [
  "Meticulous garment reviewing and quality inspection",
  "Expert fabric and garment repair services",
  "Professional stain removal techniques",
  "Precision mending for all fabric types",
  "Quality restoration of finished garments",
];

const serviceImages = [
  {
    main: img1,
    top1: img5,
    top2: img6,
    tags1: ["Reviewing", "Quality"],
    tags2: ["Inspection", "Detail"],
  },
  {
    main: img2,
    top1: img5,
    top2: img7,
    tags1: ["Repair", "Expert"],
    tags2: ["Fix", "Restore"],
  },
  {
    main: img3,
    top1: img6,
    top2: img7,
    tags1: ["Stain", "Removal"],
    tags2: ["Clean", "Pure"],
  },
  {
    main: img4,
    top1: img5,
    top2: img7,
    tags1: ["Mending", "Precision"],
    tags2: ["Care", "Detail"],
  },
  {
    main: img2,
    top1: img5,
    top2: img6,
    tags1: ["Quality", "Garment"],
    tags2: ["Finish", "Perfect"],
  },
];

export {
  navLinks,
  features,
  linkSections,
  stats,
  teamMembers,
  services,
  serviceImages,
};
