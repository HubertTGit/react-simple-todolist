import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoFilter from './todoFilter';
import App from './../App';
import { Itodo } from '../utils/todoReducer';

test('click all button', async () => {
  const onChange = () => {};
  const todos: Itodo[] = [];
  const filter = 'all';
  // ARRANGE
  render(<TodoFilter todos={todos} filter={filter} onChange={onChange} />);

  // ACT
  const buttonAll = screen.getByTestId('button-all');
  const activeCss = 'bg-red-950';
  await userEvent.click(buttonAll);

  // ASSERT
  expect(buttonAll).toHaveClass(activeCss);
});

test('click all button', async () => {
  const onChange = () => {};
  const todos: Itodo[] = [
    { task: 'hello', isCompleted: true, id: '123' },
    { task: 'hello', isCompleted: true, id: '333' },
  ];
  const filter = 'completed';
  // ARRANGE
  render(<TodoFilter todos={todos} filter={filter} onChange={onChange} />);

  // ACT
  const buttonCmpt = screen.getByTestId('button-completed');
  const activeCss = 'bg-red-950';
  await userEvent.click(buttonCmpt);

  // ASSERT
  expect(buttonCmpt).toHaveClass(activeCss);
  expect(buttonCmpt).toHaveTextContent('completed');
  expect(buttonCmpt.querySelector('span')).toHaveTextContent('(2)');
});
