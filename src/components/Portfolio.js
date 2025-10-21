import React from 'react';
import { FaBriefcase, FaShoppingCart, FaMotorcycle, FaChartPie, FaBullseye } from 'react-icons/fa';

const Portfolio = () => {
  const portfolioItems = [
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Moderno',
      description: 'Plataforma completa de vendas online com painel administrativo e integração com gateways de pagamento.'
    },
    {
      icon: <FaMotorcycle />,
      title: 'App de Delivery',
      description: 'Aplicativo móvel para delivery de comida com sistema de pedidos em tempo real e rastreamento GPS.'
    },
    {
      icon: <FaChartPie />,
      title: 'Dashboard Analytics',
      description: 'Painel de controle interativo para análise de dados com gráficos dinâmicos e relatórios personalizados.'
    },
    {
      icon: <FaBullseye />,
      title: 'Landing Page Conversão',
      description: 'Página de vendas otimizada que aumentou a conversão do cliente em 300% em apenas 3 meses.'
    }
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title"><FaBriefcase /> Portfólio</h2>
        <p className="section-subtitle">Alguns dos nossos projetos mais recentes</p>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-image">
                {item.icon}
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;