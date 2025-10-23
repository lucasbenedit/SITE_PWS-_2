import React from 'react';
import { 
  FaEnvelope, 
  FaInfoCircle, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaUser,
  FaTag,
  FaComment,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaFacebookF
} from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://www.instagram.com/pere.iraweb/', title: 'Instagram' },
    { icon: <FaGithub />, url: 'https://github.com/lucasbenedit', title: 'GitHub' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/5513988199135', title: 'WhatsApp' },
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/profile.php?id=61574497716961', title: 'Facebook' }
  ];

  return (
    <section id="contato" className="contact">
      <div className="container">
        <h2 className="section-title"><FaEnvelope /> Entre em Contato</h2>
        <p className="section-subtitle">Pronto para transformar sua ideia em realidade? Vamos conversar!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3><FaInfoCircle /> Informações de Contato</h3>

            <div className="contact-item">
              <FaEnvelope />
              <span>contato@pereirawebsolutions.com.br</span>
            </div>

            <div className="contact-item">
              <FaPhone />
              <span>+55 (13) 98819 9135</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Praia Grande, SP - Brasil</span>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form">
            <form action="https://formsubmit.co/contato@pereirawebsolutions.com.br" method="POST">
              <div className="form-group">
                <label htmlFor="nome"><FaUser /> Nome</label>
                <input type="text" id="nome" name="nome" required />
              </div>

              <div className="form-group">
                <label htmlFor="email"><FaEnvelope /> E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="assunto"><FaTag /> Assunto</label>
                <input type="text" id="assunto" name="assunto" required />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem"><FaComment /> Mensagem</label>
                <textarea id="mensagem" name="mensagem" required></textarea>
              </div>

              <input type="hidden" name="_next" value="https://seusite.com/obrigado.html" />
              <input type="hidden" name="_captcha" value="false" />

              <button type="submit" className="cta-button">
                <FaPaperPlane /> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;