import { compliance, ecofriendly, skills, trust } from "@/assets";

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
  { number: "10k+", label: "Completed Projects" },
  { number: "15k", label: "Satisfied Customers" },
  { number: "10K+", label: "Years Of Mastery" },
  { number: "45+", label: "Worldwide Honors" },
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
  "High-Quality Reviewing",
  "Expert Repair and Mending",
  "Professional Stain Removal",
  "Quality Assurance and Compliance Checks",
];

export { navLinks, features, linkSections, stats, teamMembers, services };
