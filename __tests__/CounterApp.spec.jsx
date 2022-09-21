import { fireEvent, render, screen } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';

describe('Tests on <CounterApp />', () => {
  const initialValue = 10;

  it('should match the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  it('should to show an initial value of 100', () => {
    const initialValue = 100;

    render(<CounterApp value={initialValue} />);

    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  it('should increment with the +1 button', () => {
    render(<CounterApp value={initialValue} />);

    const btnAdd = screen.getByText('+1');

    fireEvent.click(btnAdd);

    expect(screen.getByText(11)).toBeTruthy();
  });

  it('should decrement with the -1 button', () => {
    render(<CounterApp value={initialValue} />);

    const btnSubstrac = screen.getByText('-1');

    fireEvent.click(btnSubstrac);

    expect(screen.getByText(9)).toBeTruthy();
  });

  it('should return to initial value with reset button', () => {
    render(<CounterApp value={initialValue} />);

    const btnAdd = screen.getByText('+1');
    const btnReset = screen.getByRole('button', { name: 'btn-reset' });

    fireEvent.click(btnAdd);
    fireEvent.click(btnAdd);
    fireEvent.click(btnReset);

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
