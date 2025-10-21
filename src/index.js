// Alternativa mais simples
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // se tiver um index.css
import './styles/app.css'; // ou apenas este
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);