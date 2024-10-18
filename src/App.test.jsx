import { render, screen } from '@testing-library/react';
import App from './App';
import ReservationForm from './components/ReservationForm';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Date input works correctly', () => {
  render(<MemoryRouter><ReservationForm /></MemoryRouter>);
  const date = screen.getByLabelText(/Choose date/);
  fireEvent.change(date, { target: { value: "2023-04-03" } });
  expect(date.value).toEqual("2023-04-03");
});