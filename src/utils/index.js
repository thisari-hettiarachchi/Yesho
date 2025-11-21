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
  team1,
  team2,
  team3,
  beforeafter1,
  beforeafter2,
  beforeafter3,
  beforeafter4,
} from "@/assets";

import { Mail, Building2, Phone } from "lucide-react";

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
    path: "/ContactUs",
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
  {
    id: 1,
    title: "Handling Color & Uneven Shading",
    description:
      "We specialize in identifying and correcting color mismatches, dye stains, and shading inconsistencies that occur during production or washing. Our experts use precision color-handling methods to restore uniformity and maintain the original fabric tone, ensuring every garment meets your brand’s color standards.",
    img: img1,
    cardStyle: "top-0 left-0 w-80 md:w-[320px]",
    textStyle: "top-10 left-[380px] md:left-[380px]",
    enterX: 150,
    exitX: -150,
  },
  {
    id: 2,
    title: "Comprehensive Garment & Textile Review",
    description:
      "Our review process covers every detail of garment construction — from stitching accuracy to fabric integrity. Using strict inspection criteria, we assess defects, measurements, trims, and finishing quality to guarantee that only top-grade garments move forward in the production cycle.",
    img: img2,
    cardStyle: "top-0 right-0 w-72 md:w-72",
    textStyle: "top-25 right-[380px] md:right-[340px]",
    enterX: -150,
    exitX: 150,
  },
  {
    id: 3,
    title: "Expert Repair & Mending of Defects",
    description:
      "Our skilled technicians perform precise repairs to correct holes, tears, and loose threads without altering the garment’s appearance. With years of industry experience, we restore fabrics to their original condition, reducing wastage and ensuring shippable quality for every item.",
    img: img3,
    cardStyle: "bottom-10 left-0 w-64 md:w-[300px]",
    textStyle: "top-[190px] right-[380px] md:right-[540px]",
    enterX: 150,
    exitX: -150,
  },
  {
    id: 4,
    title: "Professional Stain Removal Services",
    description:
      "We remove stains caused by oils, dyes, rust, and chemicals using fabric-safe solutions and advanced cleaning techniques. Each garment is treated carefully to preserve texture and color while achieving spotless, ready-for-sale results.",
    img: img4,
    cardStyle: "bottom-10 right-0 w-64 md:w-[300px]",
    textStyle: "top-[190px] right-[380px] md:right-[340px]",
    enterX: -150,
    exitX: 150,
  },
  {
    id: 5,
    title: "Quality Assurance & Compliance Checks",
    description:
      "Our QA process ensures that every garment meets industry standards and regulatory requirements. We perform thorough checks on fabric strength, stitching quality, sizing accuracy, and safety compliance. This service guarantees that your products are not only high-quality but also reliable and market-ready.",
    img: img5,
    cardStyle: "bottom-10 left-0 w-64 md:w-[300px]",
    textStyle: "top-[180px] right-[380px] md:right-[540px]",
    enterX: 150,
    exitX: -150,
  },
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
const contactDetails = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Our team can respond in real time.",
    info: (
      <a
        href="mailto:info@yeshoint.com"
        className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
      >
        info@yeshoint.com
      </a>
    ),
  },
  {
    icon: Building2,
    title: "Visit Our Office",
    description: "Visit our location in real life.",
    info: (
      <p className="text-red-500 hover:text-red-400 text-sm font-medium">
        207/7 Dahampasal MW, Pahala Bomiriya, Kaduwela, Sri Lanka
      </p>
    ),
  },
  {
    icon: Phone,
    title: "Call Us Directly",
    description: "Available during working hours.",
    info: (
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <a
          href="tel:+94777722485"
          className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
        >
          (+94) 777 - 722 - 485
        </a>
        <a
          href="tel:+94711155055"
          className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
        >
          (+94) 711 - 155 - 055
        </a>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "How soon will I get a response?",
    answer:
      "You'll usually receive a response within 24 hours during our regular business hours. Messages sent on weekends or holidays will be replied to on the next working day.",
  },
  {
    question: "Do you provide support outside business hours?",
    answer:
      "While our standard support hours are Monday to Friday, 9 AM to 6 PM, we do monitor urgent requests outside these hours. For critical issues, please call our emergency hotline.",
  },
  {
    question: "Can I schedule a meeting with your team?",
    answer:
      "Absolutely! You can request a meeting through our contact form, and our team will reach out to schedule a convenient time. We offer both in-person and virtual meetings.",
  },
];

const works = [beforeafter1, beforeafter2, beforeafter3, beforeafter4];

const teams = [
  { src: team1, alt: "Team working on project" },
  { src: team2, alt: "Team collaborating in meeting" },
  { src: team3, alt: "Team presenting final product" },
];


export {
  navLinks,
  features,
  linkSections,
  stats,
  teamMembers,
  services,
  serviceImages,
  contactDetails,
  works,
  teams,
  faqs,
};
