import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/sigmaedify",
    icon: <Facebook className="h-5 w-5" />,
  },
  {
    name: "Twitter",
    href: "https://x.com/sigmaedify",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sigmaedify",
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/sigmaedify",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@sigmaedify",
    icon: <Youtube className="h-5 w-5" />,
  },
];

const quickLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Our Courses", href: "/courses" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Latest News", href: "/latest-news" },
  { name: "Career Guide", href: "/career-guide" },
  { name: "Help Center", href: "/help-center" },
];

const popularExams = [
  { name: "UPSC Civil Services", href: "/courses" },
  { name: "SSC CGL", href: "/courses" },
  { name: "Bank PO", href: "/courses" },
  { name: "Railway RRB", href: "/courses" },
  { name: "Teaching (CTET)", href: "/courses" },
  { name: "Defence Services", href: "/courses" },
];

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "123 Education Street, New Delhi - 110001",
  },
  // Phone Icon and add a phone number
  // {
  //   icon: <Phone className="h-5 w-5" />,
  //   label: "",
  // },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "contact@sigmaedify.com",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Monday - Saturday: 9:00 AM - 7:00 PM",
  },
];

const legalLinks = [
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Policy", href: "/cookie-policy" },
  { name: "Refund Policy", href: "/refund-policy" },
];

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/sigmaedify.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Sigma Edify</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering aspirants to achieve their dreams through comprehensive
              exam preparation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h3 className="font-semibold mb-4">Popular Exams</h3>
            <ul className="space-y-2">
              {popularExams.map((exam) => (
                <li key={exam.name}>
                  <a
                    href={exam.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(exam.href);
                    }}
                  >
                    {exam.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start space-x-3">
                  <span className="text-primary mt-0.5">{info.icon}</span>
                  <span className="text-muted-foreground text-sm">
                    {info.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sigma Edify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
