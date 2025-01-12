'use client';
import { menuItems } from '@/app/data/navbar.data';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from '@/app/data/animationVariants.data';
import HamburgerMenu from '../icons/HamburgerMenu';

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

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // const menuVariants = {
  //   hidden: { opacity: 0, y: '-100%' },
  //   visible: { opacity: 1, y: '0%', transition: { duration: 0.5 } },
  //   exit: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, x: '-20%' },
  //   visible: (index: number) => ({
  //     opacity: 1,
  //     x: '0%',
  //     transition: { delay: index * 0.1, duration: 0.4 },
  //   }),
  // };

  return (
    <div
      className={`transition-transform duration-300 ease-in-out sticky z-[99] top-0 ${
        isScrolled ? 'border-b border-[#2e2e2e]' : ''
      }`}
    >
      <div className="absolute inset-0 h-full w-full bg-background/90 !opacity-100 transition-opacity"></div>
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
        {/* <div className="md:hidden flex items-center"> */}
        {/* <button className="text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button> */}
        <HamburgerMenu toggleMenu={() => setIsMenuOpen(!isMenuOpen)} isMenuOpen={isMenuOpen} color="#FFFFFF" />
        {/* </div> */}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background backdrop-blur-sm z-[-1] flex flex-col items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  // custom={index}
                  // initial="hidden"
                  // animate="visible"
                  // exit="hidden"
                >
                  <Link
                    href={item.href}
                    className="text-2xl hover:text-textHover transition-colors duration-200 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
