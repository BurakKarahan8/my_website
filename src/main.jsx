import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM'dan root modülünü import et
import './index.css';
import App from './App.jsx';

// React 18'de yeni yöntem
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

