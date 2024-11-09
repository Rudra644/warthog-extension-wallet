import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Create from './pages/Welcome/Create/Create';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
