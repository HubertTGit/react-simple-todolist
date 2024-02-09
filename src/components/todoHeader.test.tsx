//write simple test
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { TodoHeader } from './todoHeader';
test('renders TodoHeader component', async () => {
  const onDeleteMock = vi.fn();
  const title = 'Test Title';

  render(<TodoHeader onDelete={onDeleteMock} title={title} />);

  const deleteButton = screen.getByRole('button', { name: /clear/i });
  const titleElement = screen.getByRole('heading', { name: title });

  expect(deleteButton).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});
