import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Eğer stil dosyan varsa
import App from './App'; // Ana uygulama bileşeni

// React uygulamasını DOM'a render et
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
