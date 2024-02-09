import { TodoItem, TodoFilterType } from '../types/todo.model';

export function filterHelper(
  filter: TodoFilterType,
  todos: TodoItem[]
): TodoItem[] {
  switch (filter) {
    case 'completed': {
      return todos.filter((d) => d.isCompleted);
    }
    case 'open': {
      return todos.filter((d) => !d.isCompleted);
    }
    default: {
      return todos;
    }
  }
}
