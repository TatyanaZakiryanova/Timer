import { fireEvent, render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('Timer Component', () => {
  test('renders the initial state correctly', () => {
    render(<Timer />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeDisabled();
  });
});
