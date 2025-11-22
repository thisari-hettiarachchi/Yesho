"use client";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <div className="space-y-8 sm:space-y-10 ml-0 sm:ml-4 md:ml-10">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Prefer to reach us directly? Here's how.
        </p>
      </motion.div>

      <div className="space-y-8">
        {[
          {
            icon: <MapPin className="w-6 h-6 text-primary-foreground" />,
            title: "Visit Our Office",
            content: (
              <>
                207/7 Dahampasal MW, Pahala Bomiriya,
                <br /> Kaduwela, Sri Lanka
              </>
            ),
          },
          {
            icon: <Mail className="w-6 h-6 text-primary-foreground" />,
            title: "Email Us",
            content: (
              <a href="mailto:info@yeshoint.com" className="text-primary hover:underline">
                info@yeshoint.com
              </a>
            ),
          },
          {
            icon: <Phone className="w-6 h-6 text-primary-foreground" />,
            title: "Call Us Directly",
            content: (
              <>
                <a href="tel:+94777722485" className="block text-primary hover:underline">
                  (+94) 777 - 722 - 485
                </a>
                <a href="tel:+94711155055" className="block text-primary hover:underline">
                  (+94) 711 - 155 - 055
                </a>
              </>
            ),
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex gap-4"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
