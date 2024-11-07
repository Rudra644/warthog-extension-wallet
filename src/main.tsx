import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './pages/Popup/Popup'; // Ensure the Popup component is correctly imported
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
