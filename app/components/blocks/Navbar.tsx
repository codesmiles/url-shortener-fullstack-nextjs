'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div style={{ fontSize: "2rem" }} className="font-bold">
            <Link href="/">Shortly</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.svg
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
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
            </motion.svg>
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-4 bg-[hsl(257,27%,26%)] text-white rounded-lg p-6 absolute top-10 max-w-4xl left-0 right-0 mx-auto z-50"
            >
              <div className="flex flex-col space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="#" className="py-2 hover:text-gray-300">
                    Features
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="#" className="py-2 hover:text-gray-300">
                    Pricing
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="#" className="py-2 hover:text-gray-300">
                    Resources
                  </Link>
                </motion.div>
                <hr className="border-gray-600" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="#" className="py-2 hover:text-gray-300">
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="#"
                    className="bg-[#2BD0D0] text-white py-2 rounded-full hover:bg-opacity-70 transition-colors block"
                  >
                    Sign Up
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
