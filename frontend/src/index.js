// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VisitorCountProvider } from './VisitorCountContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VisitorCountProvider>
    <App />
  </VisitorCountProvider>
);
