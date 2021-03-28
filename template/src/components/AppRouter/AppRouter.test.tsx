import React from 'react';

import { render, userEvent } from 'global/utils/test-utils';

import AppRouter from '.';

describe('AppRouter', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<AppRouter />);
    expect(getByText('Learn React')).toBeInTheDocument();
  });

  it('renders counter page', () => {
    const { getByText } = render(<AppRouter />);
    userEvent.click(getByText('Counter'));
    expect(getByText('+')).toBeInTheDocument();
  });

  it('renders not found page', () => {
    const { getByText } = render(<AppRouter />);
    userEvent.click(getByText('NotFound'));
    expect(getByText('Page Not Found')).toBeInTheDocument();
  });
});
