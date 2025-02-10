import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';

export const socials = [
  { icon: <FaFacebook />, link: 'https://www.facebook.com/sumon.sengupta.1', label: 'Facebook' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/suman-sengupta/', label: 'LinkedIn' },
  { icon: <FaTwitter />, link: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLink />, link: '#', label: 'Link' },
];

const Socials = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-white text-opacity-70 lg:p-6 md:p-2 aspect-square rounded-2xl bg-foreground hover:bg-linkHover transition-colors duration-200 ease-in-out flex justify-center items-center border border-white border-opacity-10"
        >
          {React.cloneElement(social.icon, { size: 36 })}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
