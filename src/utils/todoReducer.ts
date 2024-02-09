import { TodoItem, TodoReducerAction } from '../types/todo.model';

export default function reducer(
  draft: TodoItem[],
  action: TodoReducerAction
): TodoItem[] {
  const data: TodoItem = {
    task: action.task || '',
    id: action.id,
  };

  switch (action.type) {
    case 'add': {
      if (action.task?.length === 0) {
        return draft;
      }

      return [data, ...draft];
    }
    case 'toggle': {
      return draft.map((g) => {
        if (g.id === data.id) {
          g.isCompleted = !g.isCompleted;
          return g;
        }
        return g;
      });
    }
    case 'clear': {
      return draft.filter((g) => !g.isCompleted);
    }
    case 'update': {
      return draft.map((g) => {
        if (g.id === data.id) {
          g.task = data.task || '';
        }
        return g;
      });
    }
    default: {
      throw Error('unknown action');
    }
  }
}
