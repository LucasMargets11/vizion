import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import { Providers } from './app/providers';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './app/ScrollToTop';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioPortal from './pages/PortfolioPortal';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trabajos" element={<PortfolioPortal />} />
          <Route path="/trabajos/:slug" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);
