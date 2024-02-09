import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);

  // Assert that the component renders without throwing any errors
  expect(screen.getByTestId('todo-heading')).toBeInTheDocument();
  expect(screen.getByTestId('todo-filter')).toBeInTheDocument();
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  expect(screen.getByTestId('todo-list')).toBeInTheDocument();
});

test('Add an Item', () => {
  render(<App />);

  const input = screen.getByTestId('todo-input');

  // Add an item
  fireEvent.change(input, { target: { value: 'New Item' } });
  fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

  // Assert that the item is added
  expect(screen.getByText('New Item')).toBeInTheDocument();

  const items = screen.getAllByTestId('todo-item');
  expect(items.length).toBe(1);
  expect(input).toHaveValue('');
});

test('Add an Item then set to complete', () => {
  render(<App />);

  const input = screen.getByTestId('todo-input');

  // Add an item
  fireEvent.change(input, { target: { value: 'New Item' } });
  fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

  // Assert that the item is added
  expect(screen.getByText('New Item')).toBeInTheDocument();

  const items = screen.getAllByTestId('todo-item');
  expect(items.length).toBe(1);

  // Delete the item
  fireEvent.click(items[0]);

  expect(items[0]).toHaveClass('line-through');

  fireEvent.click(items[0]);

  expect(items[0]).not.toHaveClass('line-through');
});
