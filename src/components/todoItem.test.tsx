import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItemWidget } from './todoItem';
import { vi } from 'vitest';
import { TodoItem } from '../types/todo.model';

describe('TodoItem', () => {
  const mockTask: TodoItem = {
    id: '1',
    task: 'Buy groceries',
    isCompleted: false,
  };

  const mockOnUpdate = vi.fn();
  const mockOnToggle = vi.fn();

  beforeEach(() => {
    render(
      <TodoItemWidget
        task={mockTask}
        onUpdate={mockOnUpdate}
        onToggle={mockOnToggle}
      />
    );
  });

  test('renders item div holder', () => {
    const itemList = screen.getByTestId('todo-item');
    const itemText = screen.getByTestId('todo-item-text');
    expect(itemList).toBeInTheDocument();
    expect(itemText).toHaveTextContent(mockTask.task);
  });

  test('on double click renders the input', () => {
    const itemList = screen.getByTestId('todo-item');
    fireEvent.dblClick(itemList);
    setTimeout(() => {
      const itemInput = screen.getByTestId('todo-item-input');
      expect(itemInput).toBeInTheDocument();
    }, 300);
  });

  test('onblur out input field text item should be visible again', () => {
    const itemList = screen.getByTestId('todo-item');
    fireEvent.dblClick(itemList);

    setTimeout(() => {
      const itemInput = screen.getByTestId('todo-item-input');
      fireEvent.blur(itemInput);
      const itemText = screen.getByTestId('todo-item-text');
      expect(itemInput).not.toBeInTheDocument();
      expect(itemText).toBeInTheDocument();
    }, 300);
  });
});
