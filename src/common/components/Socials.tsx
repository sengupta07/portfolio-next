import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';

const Socials = () => {
  const socials = [
    { icon: <FaFacebook />, link: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaLinkedin />, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, link: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLink />, link: '#', label: 'Link' },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-white text-opacity-70 p-6 aspect-square rounded-2xl bg-foreground hover:bg-linkHover transition-colors duration-200 ease-in-out flex justify-center items-center"
        >
          {React.cloneElement(social.icon, { size: 36 })}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
