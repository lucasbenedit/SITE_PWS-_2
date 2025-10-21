import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaBriefcase, FaEnvelope, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'inicio', icon: <FaHome />, label: 'Início' },
    { id: 'sobre', icon: <FaInfoCircle />, label: 'Sobre' },
    { id: 'servicos', icon: <FaCogs />, label: 'Serviços' },
    { id: 'portfolio', icon: <FaBriefcase />, label: 'Portfólio' },
    { id: 'contato', icon: <FaEnvelope />, label: 'Contato' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className="container">
        <div className="logo">Pereira Web Solutions</div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;