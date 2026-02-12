

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
    <footer className="bg-black border-t border-red-900/30 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-rose-500 bg-clip-text text-transparent mb-4">
              ATLA Knots
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern IT services and software development company dedicated to
              making technology simple, reliable, and impactful for businesses
              of every size.
            </p>

            <div className="flex space-x-5">
              <a
                href="https://www.facebook.com/people/Atla-Knots/61585771087389"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/atla-knots-solutions-756702394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/atlaknotssolutions?utm_source=qr&igsh=aW83dzk2bDdkbXZq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={22} />
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
                <a href="/" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-red-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-500 transition-colors">
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
                <a href="#web-dev" className="hover:text-red-500 transition-colors">
                  Web & App Development
                </a>
              </li>
              <li>
                <a href="#testing" className="hover:text-red-500 transition-colors">
                  Testing & QA
                </a>
              </li>
              <li>
                <a href="#ams" className="hover:text-red-500 transition-colors">
                  Application Maintenance
                </a>
              </li>
              <li>
                <a href="#consulting" className="hover:text-red-500 transition-colors">
                  IT Consulting
                </a>
              </li>
              <li>
                <a href="#gov-projects" className="hover:text-red-500 transition-colors">
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
                <MapPin size={18} className="mr-3 text-red-500 mt-1 shrink-0" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-red-500 shrink-0" />
                <span>+91 78696 36070</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-red-500 shrink-0" />
                <span>contact@atlaknots.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/20 py-6 text-center md:flex md:justify-between md:items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} ATLA Knots IT Solution. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
