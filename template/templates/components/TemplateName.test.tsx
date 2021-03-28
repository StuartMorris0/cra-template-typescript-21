import React from 'react';

import { render, screen } from 'global/utils/test-utils';

import TemplateName from './TemplateName';

test('renders TemplateName', () => {
  render(<TemplateName />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
