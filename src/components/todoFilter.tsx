import { TodoItem, TodoFilterType } from '../types/todo.model';

type filterProps<T> = {
  onChange: (d: T) => void;
  filter: T;
  todos: TodoItem[];
};

export const TodoFilter = ({
  onChange,
  filter,
  todos,
}: filterProps<TodoFilterType>) => {
  const allCss = `px-2 border rounded-md border-red-950 text-sm ${
    filter === 'all' && 'bg-red-950 text-white'
  }`;
  const completedCss = `px-2 border rounded-md border-red-950 text-sm ${
    filter === 'completed' && 'bg-red-950 text-white'
  }`;

  const openCss = `px-2 border rounded-md border-red-950 text-sm ${
    filter === 'open' && 'bg-red-950 text-white'
  }`;

  const all = todos?.length;
  const completed = todos?.filter((o) => o.isCompleted).length;
  const open = todos?.filter((o) => !o.isCompleted).length;

  return (
    <div className="w-full py" data-testid="todo-filter">
      <div className=" flex gap-2">
        <button
          data-testid="button-all"
          className={allCss}
          onClick={() => onChange('all')}
        >
          all ({all})
        </button>
        <button
          data-testid="button-open"
          className={openCss}
          onClick={() => onChange('open')}
        >
          open ({open})
        </button>
        <button
          data-testid="button-completed"
          className={completedCss}
          onClick={() => onChange('completed')}
        >
          completed ({completed})
        </button>
      </div>
    </div>
  );
};
