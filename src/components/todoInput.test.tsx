import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './todoInput';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

describe('TodoInput', () => {
  test('should call onEnter callback with correct payload when Enter key is pressed', () => {
    const mockOnEnter = vi.fn();
    const payload = { id: 1, text: 'Test todo', completed: false };

    render(<TodoInput onEnter={mockOnEnter} />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: payload.text } });
    expect(inputElement).toHaveValue(payload.text);
    expect(inputElement).toBeInTheDocument();
    fireEvent.keyUp(inputElement, { key: 'Enter', code: 'Enter' });
    expect(inputElement).toHaveValue('');
  });
});
