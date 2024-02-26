// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VisitorCountProvider } from './VisitorCountContext'; // Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Remove React.StrictMode to stop double invocation in development
  <VisitorCountProvider>
    <App />
  </VisitorCountProvider>
);
