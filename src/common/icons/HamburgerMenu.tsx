import React from 'react';

interface MenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  color: string;
}

const HamburgerMenu: React.FC<MenuProps> = ({ toggleMenu, isMenuOpen, color }) => {
  return (
    <button onClick={toggleMenu} className={`hamburger-menu z-50 ${isMenuOpen ? 'is-open' : ''}`}>
      <span className={`bg-${color}`}></span>
      <span className={`bg-${color}`}></span>
      <span className={`bg-${color}`}></span>
    </button>
  );
};

export default HamburgerMenu;
