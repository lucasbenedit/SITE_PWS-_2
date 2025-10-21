import React from 'react';
import { FaCogs, FaCode, FaMobileAlt, FaRocket, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web responsivas com tecnologias modernas como React, Vue.js e Node.js. Focamos em performance, SEO e experiência do usuário.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Desenvolvimento Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android. Utilizamos React Native e Flutter para criar apps performáticos e intuitivos.'
    },
    {
      icon: <FaRocket />,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para maximizar seus resultados. Design atrativo, carregamento rápido e foco na experiência do usuário.'
    },
    {
      icon: <FaChartLine />,
      title: 'Páginas de Vendas',
      description: 'Sales pages estratégicas que convertem visitantes em clientes. Copywriting persuasivo e design otimizado para vendas.'
    }
  ];

  return (
    <section id="servicos" className="services">
      <div className="container">
        <h2 className="section-title"><FaCogs /> Nossos Serviços</h2>
        <p className="section-subtitle">Oferecemos soluções completas para todas as suas necessidades digitais</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;