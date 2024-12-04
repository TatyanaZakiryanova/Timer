import Timer from './Timer';
import { render, screen, fireEvent, act } from '@testing-library/react';

jest.useFakeTimers();

describe('Timer Component', () => {
  test('renders Timer component', () => {
    render(<Timer />);
    expect(screen.getByText('00 : 00')).toBeInTheDocument();
  });

  test('starts timer and updates seconds', () => {
    render(<Timer />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('00 : 03')).toBeInTheDocument();
  });

  test('pauses timer', () => {
    render(<Timer />);

    const startButton = screen.getByRole('button', { name: /start/i });
    fireEvent.click(startButton);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const pauseButton = screen.getByRole('button', { name: /pause/i });
    fireEvent.click(pauseButton);

    expect(pauseButton).toBeInTheDocument();
  });
});
