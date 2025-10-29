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
  {
    id: 1,
    title: "Handling Color & Uneven Shading",
    description:
      "We ensure that every garment achieves consistent color throughout, correcting any uneven shading, fading, or patchiness. Our experts analyze the fabric type and dye behavior to provide precise adjustments, guaranteeing that your products look uniform, professional, and visually appealing.",
    img: img1,
  },
  {
    id: 2,
    title: "Comprehensive Garment & Textile Review",
    description:
      "Our team conducts a meticulous inspection of garments and textiles, assessing stitching, fabric quality, seams, and overall construction. We identify potential defects, weak points, and areas for improvement, providing detailed feedback to ensure every piece meets high-quality standards before reaching the market.",
    img: img2,
  },
  {
    id: 3,
    title: "Expert Repair & Mending of Defects",
    description:
      "From small tears and loose threads to more significant fabric damage, our skilled professionals expertly mend defects, restoring garments to their original condition. We use precise stitching techniques and high-quality materials to extend the lifespan of garments while maintaining their original look and feel.",
    img: img3,
  },
  {
    id: 4,
    title: "Professional Stain Removal Services",
    description:
      "We specialize in removing stubborn stains such as oil, ink, wine, and more without damaging the fabric. Using advanced stain treatment methods and safe, fabric-specific solutions, we ensure that your garments are clean, fresh, and retain their original texture and color vibrancy.",
    img: img4,
  },
  {
    id: 5,
    title: "Quality Assurance & Compliance Checks",
    description:
      "Our QA process ensures that every garment meets industry standards and regulatory requirements. We perform thorough checks on fabric strength, stitching quality, sizing accuracy, and safety compliance. This service guarantees that your products are not only high-quality but also reliable and market-ready.",
    img: img5,
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

export {
  navLinks,
  features,
  linkSections,
  stats,
  teamMembers,
  services,
  serviceImages,
  contactDetails,
};
