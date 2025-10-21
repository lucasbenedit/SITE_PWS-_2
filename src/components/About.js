import React from 'react';
import { FaRocket, FaCheckCircle, FaUsers, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <section id="sobre">
      <div className="container">
        <h2 className="section-title"><FaRocket /> Sobre Nós</h2>
        <div className="about-content">
          <div className="about-text">
            <p><FaCheckCircle /> A Pereira Web Solutions é uma empresa especializada em
              desenvolvimento de soluções digitais inovadoras. Com foco em tecnologias modernas e design
              centrado no usuário, criamos experiências digitais que impulsionam o crescimento dos nossos
              clientes.</p>

            <p><FaUsers /> Nossa equipe combina expertise técnica com criatividade para
              entregar projetos que não apenas atendem às necessidades atuais, mas também se adaptam às
              demandas futuras do mercado digital.</p>

            <p><FaStar /> Acreditamos que cada projeto é único e merece uma abordagem
              personalizada, garantindo soluções que realmente fazem a diferença no seu negócio.</p>
          </div>
          <div className="about-image">
            <FaRocket />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;