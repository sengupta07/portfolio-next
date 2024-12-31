'use client';
import React, { useState } from 'react';
import { categories } from '../data/contact.data';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ContactForm from './ContactForm';
import Link from 'next/link';

interface DetailSectionProps {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
  border?: boolean;
}

const DetailSection: React.FC<DetailSectionProps> = ({ title, description, children, border = true }) => {
  return (
    <div className={`space-y-6 ${border ? 'border-b border-white border-opacity-10 pb-6' : ''}`}>
      <h4 className="font-medium">{title}</h4>
      {description && <p className="text-white opacity-85">{description}</p>}
      {children}
    </div>
  );
};

const ContactCard = () => {
  const [interest, setInterest] = useState('Others');
  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, href: 'https://facebook.com' },
    { id: 2, icon: <FaTwitter />, href: 'https://twitter.com' },
    { id: 3, icon: <FaInstagram />, href: 'https://instagram.com' },
    { id: 4, icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
  ];

  return (
    <div className="grid grid-cols-[2fr_3fr] p-6 gap-6 ">
      <aside className="bg-foreground rounded-elements flex flex-col">
        <div className="p-10 relative space-y-6 flex-1">
          <DetailSection title="Address" description="Riverside 25, San Francisco, California">
            <Link href={'https://www.google.com/maps'} className="text-base font-medium text-white opacity-85">
              View on Maps
            </Link>
          </DetailSection>
          {/* <DetailSection
            title="Call us"
            description={
              <Link href="tel:+917908304170" className="text-white underline">
                +91 7908304170
              </Link>
            }
          /> */}
          <DetailSection title="I'm interested in...">
            <div className="flex flex-wrap gap-2 ">
              {categories.map((option, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    interest === option.label ? 'bg-white text-black ' : 'bg-white bg-opacity-10 text-white'
                  } hover:bg-white hover:text-black transition-colors duration-300 ease-in-out`}
                  onClick={() => setInterest(option.label)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </DetailSection>
        </div>
        <div className="p-10">
          <DetailSection border={false} title="Follow us">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primaryTheme transition-all text-xl"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </DetailSection>
        </div>
      </aside>
      <ContactForm />
    </div>
  );
};

export default ContactCard;
