// src/pages/Welcome/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome'; // Import as a named export
import './Welcome.css'; // Import styles if needed

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);
