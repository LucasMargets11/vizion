import React from 'react';
import { Container } from './Container';

const clients = ['ClientOne', 'ClientTwo', 'ClientThree', 'ClientFour', 'ClientFive', 'ClientSix'];

export const LogoCloud: React.FC = () => (
  <div className="py-10">
    <Container>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-80">
        {clients.map((c) => (
          <li key={c} className="text-center text-sm font-medium tracking-wide text-slate-400 hover:opacity-100 transition">
            {c}
          </li>
        ))}
      </ul>
    </Container>
  </div>
);
