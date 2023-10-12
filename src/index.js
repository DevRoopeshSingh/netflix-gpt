import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //UseFull in development phase  showing logs twice will not show in production its only for development
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

