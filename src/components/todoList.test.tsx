import { render, screen } from '@testing-library/react';
import { TodoList } from './todoList';
import { vi } from 'vitest';
import { TodoItem } from '../types/todo.model';

const mockOnUpdate = vi.fn();
const mockOnToggle = vi.fn();

describe('TodoList', () => {
  it('renders a list of todos', () => {
    const mockTodos: TodoItem[] = [
      { id: '1', task: 'Task 1', isCompleted: false },
      { id: '2', task: 'Task 2', isCompleted: true },
    ];

    render(
      <TodoList
        todos={mockTodos}
        onUpdate={mockOnUpdate}
        onToggle={mockOnToggle}
      />
    );

    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(mockTodos.length);

    mockTodos.forEach((todo) => {
      const todoItem = screen.getByText(todo.task);
      expect(todoItem).toBeInTheDocument();
    });
  });

  it('calls onUpdate when a todo is updated', () => {
    render(
      <TodoList todos={[]} onUpdate={mockOnUpdate} onToggle={mockOnToggle} />
    );
    const noitems = screen.getByTestId('noitems');
    expect(noitems).toBeInTheDocument();
    expect(noitems).toHaveTextContent('No Items!');
  });
});
