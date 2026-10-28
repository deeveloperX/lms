import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('teacher pages use separate routes inside the shared layout', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Teacher Dashboard' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /create courses/i })).toHaveAttribute('href', '/create-course');

  fireEvent.click(screen.getByRole('link', { name: /view courses/i }));

  expect(screen.getByRole('heading', { name: 'Your Courses' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /view courses/i })).toBeInTheDocument();
});
