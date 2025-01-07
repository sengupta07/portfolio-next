'use client';
import { menuItems } from '@/app/data/navbar.data';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`transition-transform duration-300 ease-in-out sticky z-[99] top-0 ${
        isScrolled ? 'border-b border-[#2e2e2e]' : ''
      }`}
    >
      <div className="absolute inset-0 h-full w-full bg-background/90 dark:bg-background/95 !opacity-100 transition-opacity"></div>
      <nav className="container backdrop-blur-sm flex justify-between items-center py-5">
        <Link href="/" className="font-bold text-2xl">
          Suman Sengupta
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-foreground items-center rounded-full px-9">
          {menuItems.map((item, index) => (
            <Link
              className="text-base hover:text-textHover transition-colors duration-200 ease-in-out px-4 py-5"
              href={item.href}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-foreground z-[999] flex flex-col items-center justify-center">
          <ul className="space-y-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-2xl hover:text-textHover transition-colors duration-200 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
