import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import { Providers } from './app/providers';
import Home from './pages/Home';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <Home />
    </Providers>
  </React.StrictMode>
);
