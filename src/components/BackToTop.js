import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { useBackToTop } from '../hooks/useBackToTop';

const BackToTop = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <a 
      href="#" 
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <FaChevronUp />
    </a>
  );
};

export default BackToTop;