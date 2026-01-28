// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
              Alta Knots
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern IT services and software development company dedicated to
              making technology simple, reliable, and impactful for businesses
              of every size.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#web-dev"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Web & App Development
                </a>
              </li>
              <li>
                <a
                  href="#testing"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Testing & QA
                </a>
              </li>
              <li>
                <a
                  href="#ams"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Application Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#consulting"
                  className="hover:text-cyan-400 transition-colors"
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#gov-projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Government Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-cyan-400 mt-1" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-cyan-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-cyan-400" />
                <span>contact@altaknots.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm">
            © {currentYear} Alta Knots IT Solution. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
