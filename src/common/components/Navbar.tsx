import { menuItems } from '@/app/data/navbar.data';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="container flex justify-between items-center pt-5">
      <Link href="/" className="font-bold text-2xl">
        Suman Sengupta
      </Link>
      <div className="bg-foreground flex items-center rounded-full px-9">
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
    </nav>
  );
};

export default Navbar;
