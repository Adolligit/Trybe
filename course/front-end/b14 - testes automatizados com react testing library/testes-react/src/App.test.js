import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // criando o APP
  const input = screen.getByLabelText('Nome:'); // acessando o elemento
  userEvent.type(input, 'Adelson'); // interagindo com o elemento

  // teste lógica
  expect(input).toBeInTheDocument(); 
  expect(input.value).toBe('Adelson');
});
