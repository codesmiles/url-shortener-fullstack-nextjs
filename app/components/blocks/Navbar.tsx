'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link href="/">Shortly</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:w-full md:justify-between md:ml-10">
            <div className="flex space-x-8">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Features
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Resources
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="#"
                className="bg-[#2BD0D0] text-white px-6 py-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[hsl(257,27%,26%)] text-white rounded-lg p-6">
            <div className="flex flex-col space-y-4 text-center">
              <Link href="#" className="py-2 hover:text-gray-300">
                Features
              </Link>
              <Link href="#" className="py-2 hover:text-gray-300">
                Pricing
              </Link>
              <Link href="#" className="py-2 hover:text-gray-300">
                Resources
              </Link>
              <hr className="border-gray-600" />
              <Link href="#" className="py-2 hover:text-gray-300">
                Login
              </Link>
              <Link
                href="#"
                className="bg-[#2BD0D0] text-white py-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
