import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { Heading } from '../Heading';

describe('Heading', () => {
  it('renders proper level', () => {
    render(<Heading level={3}>Titulo</Heading>);
    const el = screen.getByText('Titulo');
    expect(el.tagName).toBe('H3');
  });
});
