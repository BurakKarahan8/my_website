import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Eğer stil dosyan varsa

import App from './App'; // Ana uygulama bileşeni

// React uygulamasını DOM'a render et
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 'root' ID'li HTML elementine yerleştir
);
