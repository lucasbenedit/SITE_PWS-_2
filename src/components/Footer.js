import React from 'react';
import { 
  FaChevronRight, 
  FaHeart, 
  FaFacebookF, 
  FaInstagram, 
  FaGithub 
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
    { label: 'Trabalhe Conosco', href: '/public/index.html' }
  ];

  const serviceLinks = [
    { label: 'Desenvolvimento Web', href: '#' },
    { label: 'Aplicações Móveis', href: '#' },
    { label: 'Landing Pages', href: '#' },
    { label: 'Páginas de Vendas', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>A PereiraWeb Solutions é uma empresa de tecnologia focada em criar soluções digitais inovadoras para
            empresas de todos os tamanhos.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61574497716961">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/pere.iraweb/">
              <FaInstagram />
            </a>
            <a href="https://github.com/lucasbenedit" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }
                  }}
                >
                  <FaChevronRight /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Serviços</h3>
          <ul className="footer-links">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>
                  <FaChevronRight /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PereiraWeb Solutions. Todos os direitos reservados.</p>
        <p>Desenvolvido com <FaHeart style={{ color: '#e74c3c' }} /> pela nossa equipe</p>
      </div>
    </footer>
  );
};

export default Footer;