import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">
          Enter to reach us directly? Here's how.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Visit Our Office</h3>
            <p className="text-muted-foreground">
              347/2, Dharmapala Mawatha, Peliyagoda,
              <br />
              Kelaniya, Kesbewa, Sri Lanka
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
            <a 
              href="mailto:info@yeshoint.com"
              className="text-primary hover:underline"
            >
              info@yeshoint.com
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Call Us Directly</h3>
            <div className="space-y-1">
              <a 
                href="tel:+94772324460"
                className="block text-primary hover:underline"
              >
                (+94) 772 - 324 - 460
              </a>
              <a 
                href="tel:+94717130365"
                className="block text-primary hover:underline"
              >
                (+94) 717 - 130 - 365
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
