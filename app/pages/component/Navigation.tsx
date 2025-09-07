"use client";

import { useState, useEffect } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // ✅ current path from Next.js router

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
          }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl md:text-2xl font-bold text-gray-900"
              aria-label="DevPortfolio Home"
            >
              Shahzad<span className="text-primary">Ali</span>
            </Link>

            {/* Desktop Nav */}
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/" ? "text-primary font-semibold" : ""
                  }`}
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/about-us" ? "text-primary font-semibold" : ""
                  }`}
              >
                About Us
              </Link>

              <Link
                href="/skills"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/skills" ? "text-primary font-semibold" : ""
                  }`}
              >
                My Skills
              </Link>

              <Link
                href="/projects"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/projects" ? "text-primary font-semibold" : ""
                  }`}
              >
                Projects
              </Link>

              <Link
                href="/faq"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/faq" ? "text-primary font-semibold" : ""
                  }`}
              >
                FAQ
              </Link>

              <Link
                href="/contact-us"
                className={`text-gray-600 hover:text-gray-900 text-[18px] transition-colors relative ${pathname === "/contact" ? "text-primary font-semibold" : ""
                  }`}
              >
                Contact Us
              </Link>
            </div>


            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <Button
                type="text"
                icon={isOpen ? <CloseOutlined style={{ fontSize: '28px' }} /> : <MenuOutlined style={{ fontSize: '28px' }} />}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <span className="text-xl font-bold text-gray-900">
            Shahzad<span className="text-primary">Ali</span>
          </span>
        }
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={280}
        className="md:hidden"
        id="mobile-menu"
      >
        <div className="py-4 space-y-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/about-us"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            About Us
          </Link>

          <Link
            href="/skills"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/skills"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            My Skills
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/projects"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            Projects
          </Link>

          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/faq"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            FAQ
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 text-[18px] font-medium transition-colors ${pathname === "/contact-us"
                ? "text-primary font-semibold bg-gray-50 border-l-4 border-primary"
                : "text-gray-600 hover:text-gray-900"
              }`}
          >
            Contact Us
          </Link>
        </div>


      </Drawer>
    </>
  );
}
