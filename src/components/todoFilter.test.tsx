import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoFilterType, TodoItem } from '../types/todo.model';
import { TodoFilter } from './todoFilter';

test('check if the all button is selected', async () => {
  const onChange = () => {};
  const todos: TodoItem[] = [];
  const filter: TodoFilterType = 'all';
  // ARRANGE
  render(<TodoFilter todos={todos} filter={filter} onChange={onChange} />);

  // ACT
  const buttonAll = screen.getByTestId('button-all');
  const activeCss = 'bg-red-950';

  // ASSERT
  expect(buttonAll).toHaveClass(activeCss);
});

test('set todos and check buttons visibility', async () => {
  const onChange = () => {};
  const todos: TodoItem[] = [
    { task: 'hello', isCompleted: true, id: '123' },
    { task: 'hello', isCompleted: false, id: '333' },
  ];
  const filter = 'completed';
  // ARRANGE
  render(<TodoFilter todos={todos} filter={filter} onChange={onChange} />);

  // ACT
  const buttonAll = screen.getAllByRole('button')[0];
  const buttonCmpt = screen.getAllByRole('button')[2];
  const buttonOpen = screen.getAllByRole('button')[1];

  const activeCss = 'bg-red-950';

  // ASSERT
  expect(buttonCmpt).toHaveClass(activeCss);
  expect(buttonCmpt).toHaveTextContent('completed');
  expect(buttonAll).toHaveTextContent('(2)');
  expect(buttonCmpt).toHaveTextContent('(1)');
  expect(buttonOpen).toHaveTextContent('(1)');
});
