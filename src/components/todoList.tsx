import { IReducerPayload, Itodo } from '../utils/todoReducer';
import TodoItem from './todoItem';

type TodoListProps<T> = {
  todos: T[];
  onUpdate: (payload: IReducerPayload) => void;
};

export default function TodoList({ todos, onUpdate }: TodoListProps<Itodo>) {
  return (
    <div className="h-[600px] overflow-auto w-[300px]">
      <div>
        {todos.map((t) => (
          <TodoItem key={t.id} task={t} onUpdate={onUpdate} />
        ))}
      </div>
      {todos.length === 0 && <p>Empty Tasks!</p>}
    </div>
  );
}
