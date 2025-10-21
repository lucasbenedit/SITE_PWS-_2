import React from 'react';
import './styles/app.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}

export default App;