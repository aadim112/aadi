import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows a selected minor project in the major project section', async () => {
  const user = userEvent.setup();

  render(<App />);
  expect(screen.getByText('VIRA (Vigilance And Rapid Alerts)')).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /Pure Change/i }));

  expect(screen.getAllByText('Pure Change')).toHaveLength(2);
  expect(screen.getByText(/Production-grade web platform combining behavioral logic/i)).toBeInTheDocument();
});
