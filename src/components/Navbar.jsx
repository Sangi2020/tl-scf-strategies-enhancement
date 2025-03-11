"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import useCompanyStore from "@/store/useCompanyStore";

const NavLink = ({ href, children, dropdown, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative group ${isMobile ? "w-full" : ""}`}>
      <Link
        className={`nav-link p-2 font-semibold transition-colors duration-300 flex items-center justify-between ${
          isMobile
            ? "w-full py-2 text-gray-900 hover:text-blue-500"
            : "hover:text-blue-500"
        }`}
        href={href}
        onClick={toggleDropdown}
      >
        {children}
        {dropdown &&
          (isMobile ? (
            isOpen ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )
          ) : (
            <ChevronDown className="ml-1 w-4 h-4" />
          ))}
      </Link>
      {dropdown && (
        <div
          className={`${
            isMobile
              ? "mt-2 w-full bg-white transition-all duration-300"
              : "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300"
          } ${isMobile ? (isOpen ? "block" : "hidden") : "opacity-0 invisible group-hover:opacity-100 group-hover:visible w-56"}`}
        >
          <div role="menu">{dropdown}</div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { logoUrl, fetchCompanyDetails } = useCompanyStore();

  useEffect(() => {
    fetchCompanyDetails();
    console.log(logoUrl,"log")
  },[]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full py-3 z-20 transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                {logoUrl && (
                  <Image
                    src={logoUrl?logoUrl:"https://www.scfstrategies.com/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"}
                    alt="Company Logo"
                    width={80}
                    height={50}
                    className="cursor-pointer"
                  />
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <div className="flex items-baseline space-x-4">
                <NavLink href="/">Home</NavLink>
                <NavLink
                  href="#"
                  dropdown={
                    <>
                      <Link href="/advisory-service" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Advisory Service
                      </Link>
                      <Link href="/consulting-service" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Consulting Service
                      </Link>
                    </>
                  }
                >
                  Services
                </NavLink>
                <NavLink href="/about-us">About Us</NavLink>
                <NavLink
                  href="#"
                  dropdown={
                    <>
                      <Link href="/blog" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Blogs
                      </Link>
                      <Link href="/clients" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Clients
                      </Link>
                      <Link href="/resource-center" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Resource Center
                      </Link>
                      <Link href="/enablement" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        Solutions & Enablement
                      </Link>
                      <Link href="/faqs" className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100">
                        FAQs
                      </Link>
                    </>
                  }
                >
                  Explore
                </NavLink>
                <NavLink href="/contact-us">Contact</NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-x-0 top-0 h-screen bg-white transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 pt-5 pb-6 space-y-6">
            {/* Logo & Close Button */}
            <div className="flex items-center justify-between">
            src={logoUrl?logoUrl:"https://www.scfstrategies.com/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"}
            <button
                onClick={() => setIsOpen(false)}
                className="bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="grid gap-y-5">
              <NavLink href="/" isMobile>Home</NavLink>
              <NavLink href="#" isMobile dropdown={<>
                <Link href="/advisory-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Advisory Service</Link>
                <Link href="/consulting-service" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Consulting Service</Link>
              </>}>Services</NavLink>
              <NavLink href="/about-us" isMobile>About Us</NavLink>
              <NavLink href="/contact-us" isMobile>Contact</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
