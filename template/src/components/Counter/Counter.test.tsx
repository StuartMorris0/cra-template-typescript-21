import React from 'react';

import { render, userEvent, waitFor } from 'global/utils/test-utils';

import Counter from '.';

describe('Counter component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Add Amount')).toBeInTheDocument();
  });

  it('handles increment', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const incrementBtn = getByText('+');
    expect(getByTestId('count').textContent).toBe('0');
    userEvent.click(incrementBtn);
    expect(getByTestId('count').textContent).toBe('1');
  });

  it('handles decrement', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const incrementBtn = getByText('+');
    userEvent.click(incrementBtn);
    userEvent.click(incrementBtn);
    const decrementBtn = getByText('-');
    userEvent.click(decrementBtn);
    expect(getByTestId('count').textContent).toBe('2');
  });

  it('handles increment by amount', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const amountInput = getByTestId('counterinput');
    userEvent.clear(amountInput);
    userEvent.type(amountInput, '23');
    const addAmountBtn = getByText('Add Amount');
    userEvent.click(addAmountBtn);
    expect(getByTestId('count').textContent).toBe('25');
  });

  it('handle async increment', async () => {
    const { getByText, getByTestId } = render(<Counter />);
    const amountInput = getByTestId('counterinput');
    userEvent.clear(amountInput);
    userEvent.type(amountInput, '5');
    const addAsync = getByText('Add Async');
    userEvent.click(addAsync);
    await waitFor(() => expect(getByText('30')).toBeInTheDocument());
  });

  it('handles increment by amount with invalid input', () => {
    const { getByText, getByTestId } = render(<Counter />);
    const amountInput = getByTestId('counterinput');
    const currentCount = getByTestId('count').textContent;
    userEvent.clear(amountInput);
    userEvent.type(amountInput, 'TEST');
    const addAmountBtn = getByText('Add Amount');
    userEvent.click(addAmountBtn);
    expect(getByTestId('count').textContent).toBe(currentCount);
  });

  it('handle async increment with invalid input', async () => {
    const { getByText, getByTestId, findByTestId } = render(<Counter />);
    const amountInput = getByTestId('counterinput');
    const currentCount = getByTestId('count').textContent;
    userEvent.clear(amountInput);
    userEvent.type(amountInput, 'TEST');
    const addAsync = getByText('Add Async');
    userEvent.click(addAsync);
    expect(await (await findByTestId('count')).textContent).toBe(currentCount);
  });
});
