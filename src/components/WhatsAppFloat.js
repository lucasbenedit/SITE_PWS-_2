import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5513991620801";
    const message = "Olá! Gostaria de mais informações.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleWhatsAppClick}>
      <div className="whatsapp-tooltip">Fale conosco!</div>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsAppFloat;