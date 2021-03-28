import React from 'react';

import { render, screen } from '@testing-library/react';

import TemplateName from './TemplateName';

test('renders TemplateName', () => {
  render(<TemplateName />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
