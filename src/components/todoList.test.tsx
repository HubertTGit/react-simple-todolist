import { render, screen } from '@testing-library/react';
import TodoList from './todoList';
import { Itodo } from '../utils/todoReducer';
import { vi } from 'vitest';

const mockOnUpdate = vi.fn();

describe('TodoList', () => {
  it('renders a list of todos', () => {
    const mockTodos: Itodo[] = [
      { id: '1', task: 'Task 1', isCompleted: false },
      { id: '2', task: 'Task 2', isCompleted: true },
    ];

    render(<TodoList todos={mockTodos} onUpdate={mockOnUpdate} />);

    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(mockTodos.length);

    mockTodos.forEach((todo) => {
      const todoItem = screen.getByText(todo.task);
      expect(todoItem).toBeInTheDocument();
    });
  });

  it('calls onUpdate when a todo is updated', () => {
    render(<TodoList todos={[]} onUpdate={mockOnUpdate} />);
    const noitems = screen.getByTestId('noitems');
    expect(noitems).toBeInTheDocument();
    expect(noitems).toHaveTextContent('No Items!');
  });
});
