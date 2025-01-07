import { socials } from '@/common/components/Socials';
import Link from 'next/link';
import React from 'react';

type FooterSectionProps = {
  title: string;
  content: React.ReactNode;
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, content }) => (
  <div className="space-y-5">
    <h5 className="font-bold">{title}</h5>
    <div className="text-white opacity-60">{content}</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-footer !mt-36">
      <div className="container w-full py-6">
        <p className="text-white opacity-50 text-center">Announcements</p>
      </div>
      <div className="w-full gradient-border"></div>
      <div className="container w-full py-24 grid md:grid-cols-3 gap-20">
        <FooterSection
          title="About"
          content="Crafting responsive websites that bring your digital vision to life. Transforming raw footage into captivating visual stories through seamless editing. Creating visually stunning graphics that make a lasting impression."
        />
        <FooterSection
          title="Links"
          content={
            <div className="flex flex-col gap-2">
              {socials.map((link) => (
                <Link key={link.label} href={link.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          }
        />
        <FooterSection
          title="Have questions?"
          content={
            <div className="flex flex-col gap-2">
              <Link href="tel:+917908304170" className="text-white underline">
                +91 7908304170
              </Link>
              <Link href="mailto:sumonsenji@gmail.com" className="text-white underline">
                sumonsenji@gmail.com
              </Link>
            </div>
          }
        />
      </div>
      <p className="text-white opacity-50 text-center pb-6 col-span-3">Made with ❤️ by Suman Sengupta</p>
    </footer>
  );
};

export default Footer;
