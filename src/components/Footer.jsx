import React, { useEffect, useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import Link from 'next/link';
import {
  FileText,
  Link as LinkIcon,
  Globe,
  ChevronUp,
  PhoneIcon,
  MailIcon
} from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaInstagram, FaLocationArrow, FaSeedling } from 'react-icons/fa';
import { subscribeToNewsletter } from '@/app/action';
import XIcon from './ui/XIcon';
import Image from 'next/image';
import toast from 'react-hot-toast';
import useCompanyStore from '@/store/useCompanyStore';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { phone,companymail, fetchCompanyDetails } = useCompanyStore();

  useEffect(() => {
    fetchCompanyDetails();
   
  },[fetchCompanyDetails]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // logoUrl: '',
    // location: '',
    // email: '',
    // phone: '',
    // mapUrl: '',
    try {
      const response = await fetch("https://scf-cms-be-360l.onrender.com/api/v1/web/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
       toast.error("Failed to subscribe");
      }
  
      const data = await response.json();
      toast.success(data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Clients', href: '/clients' }
  ];

  const services = [
    { name: 'Advisory Service', href: '/advisory-service' },
    { name: 'Consulting Service', href: '/consulting-service' }
  ];

  const resources = [
    { name: 'Blogs', href: '/blog' },
    { name: 'Resource Center', href: '/resource-center' },
    { name: 'Solutions & Enablement', href: '/enablement' },
    { name: 'Frequently Asked Questions', href: '/faqs' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Use', href: '/terms-and-conditions' },
    { name: 'Disclaimer', href: '/disclaimer' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 ">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 max-w-7xl py-4 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
              <LinkIcon className="w-4 h-4 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 text-base md:text-lg transition-colors flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-blue-400 text-base md:text-lg transition-colors flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="hover:text-blue-400 text-base md:text-lg transition-colors flex items-center"
                  >
                    <span className="hover:translate-x-1 transition-transform">
                      {resource.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="space-y-6">
            {/* Newsletter Signup Section */}
            <div className="space-y-4">
              <h3 className="text-white text-xl font-semibold">Subscribe to Our Newsletter</h3>
              <form
                className="flex flex-col space-y-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border border-gray-700 rounded px-4 py-2 w-full text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="  rounded-lg space-y-4">
              <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
              <div className="flex flex-col space-y-4">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <PhoneIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">{phone} </span>
                </a>

                <a
                  href={`mailto:${companymail}`}
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <HiOutlineMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">{companymail}</span>
                </a>

                {/* <a
                  href="https://www.google.com/maps/place/Bonita+Springs,+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <FaLocationArrow className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">Bonita Springs, FL</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto max-w-7xl p-4">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
            {/* Developer Credit */}
            <div className="order-3 md:order-1 flex items-center mt-2 md:mt-0 space-x-2 justify-center md:justify-start">

              <Link
                href="https://connect.tltechnologies.net/"
                className="text-gray-400 hover:text-blue-400 transition-colors text-base md:text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developed by
              </Link>
              <a href="https://tltechnologies.net/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/Logo TL white.png"
                width={100} 
                height={24}
                alt="TL Technologies Logo"
                className="h-8 md:h-9 w-auto"
                quality={100} 
                priority 
                unoptimized 
              />
              </a>
              
            </div>

            {/* Copyright */}
            <div className="order-2 text-center text-gray-400 text-base md:text-lg">
              © {currentYear} SCF Strategies. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="order-1 md:order-3 flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-base md:text-lg flex items-center group"
                >
                  <FileText className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;