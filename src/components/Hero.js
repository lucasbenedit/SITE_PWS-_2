import React from 'react';
import { FaLightbulb, FaPaperPlane, FaCode, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1><FaLightbulb /> Transformando Ideias em Soluções Digitais</h1>
          <p>Desenvolvimento web e mobile de alta qualidade com tecnologias modernas e design inovador</p>
          <button className="cta-button" onClick={scrollToContact}>
            <FaPaperPlane /> Começar Projeto
          </button>
        </div>
      </div>
      <div className="hero-bg"></div>
      <div className="floating-element"><FaCode /></div>
      <div className="floating-element"><FaMobileAlt /></div>
      <div className="floating-element"><FaLaptopCode /></div>
    </section>
  );
};

export default Hero;