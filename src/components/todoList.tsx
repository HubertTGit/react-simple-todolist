import { TodoReducerAction, Todoitem } from '../types/todo.model';
import { TodoItem } from './todoItem';

type TodoListProps<T> = {
  todos: T[];
  onUpdate: (payload: TodoReducerAction) => void;
};

export const TodoList = ({ todos, onUpdate }: TodoListProps<Todoitem>) => {
  return (
    <ul className="h-[400px] overflow-x-hidden w-full" data-testid="todo-list">
      {todos.map((t) => (
        <TodoItem key={t.id} task={t} onUpdate={onUpdate} />
      ))}
      {todos.length === 0 && (
        <li className=" text-center mt-5" data-testid="noitems">
          No Items!
        </li>
      )}
    </ul>
  );
};
