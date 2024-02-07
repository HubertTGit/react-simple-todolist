import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './todoItem';
import { Itodo } from '../utils/todoReducer';
import { vi } from 'vitest';

describe('TodoItem', () => {
  const mockTask: Itodo = {
    id: '1',
    task: 'Buy groceries',
    isCompleted: false,
  };

  const mockOnUpdate = vi.fn();

  beforeEach(() => {
    render(<TodoItem task={mockTask} onUpdate={mockOnUpdate} />);
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
    const itemInput = screen.getByTestId('todo-item-input');
    expect(itemInput).toBeInTheDocument();
  });

  test('onblur out input field text item should be visible again', () => {
    const itemList = screen.getByTestId('todo-item');
    fireEvent.dblClick(itemList);
    const itemInput = screen.getByTestId('todo-item-input');
    fireEvent.blur(itemInput);
    const itemText = screen.getByTestId('todo-item-text');
    expect(itemInput).not.toBeInTheDocument();
    expect(itemText).toBeInTheDocument();
  });
});
