"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Send } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      contactSchema.parse(formData);
      setErrors({});
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="space-y-8 mr-20">
      <div>
        <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="fullName"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            className={errors.fullName ? "border-destructive" : ""}
          />
          <Input
            name="company"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "border-destructive" : ""}
          />
          <Input
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <Input
          name="subject"
          placeholder="Enter subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? "border-destructive" : ""}
        />

        <Textarea
          name="message"
          placeholder="Enter message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "border-destructive" : ""}
        />
        
        <div className="text-center pt-8">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full font-medium transition-all duration-300 overflow-hidden cursor-pointer">
            <span className="relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white">
              Send Message
            </span>
            <Send className="w-5 h-5 relative z-10 text-red-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
