"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="transition-opacity hover:opacity-80">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                wachsum.app
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Platform
              </button>
            </div>
            <div className="relative group">
              <Link href="/solutions" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Solutions
              </Link>
            </div>
            <div className="relative group">
              <Link href="/pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Pricing
              </Link>
            </div>
            <div className="relative group">
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Resources
              </Link>
            </div>
            <div className="relative group">
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 transition-all duration-200" asChild>
              <a href="https://app.wachsum.app" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <nav className="space-y-4">
              <div>
                <button
                  className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Platform
                </button>
              </div>
              <div>
                <Link
                  href="/solutions"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
              </div>
              <div>
                <Link
                  href="/pricing"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
              </div>
              <div>
                <Link
                  href="/resources"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resources
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-blue-600 transition-all duration-200"
                  asChild
                >
                  <a href="https://app.wachsum.app" target="_blank" rel="noopener noreferrer">
                    Log in
                  </a>
                </Button>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://api.leadconnectorhq.com/widget/booking/sjHvld0GhtDNlZV8wG3b', '_blank');
                  }}
                >
                  Book Demo
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
