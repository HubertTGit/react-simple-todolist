import { IReducerPayload, Itodo } from '../utils/todoReducer';
import TodoItem from './todoItem';

type TodoListProps<T> = {
  todos: T[];
  onUpdate: (payload: IReducerPayload) => void;
};

export default function TodoList({ todos, onUpdate }: TodoListProps<Itodo>) {
  return (
    <div className="h-[600px] overflow-x-hidden w-full">
      {todos.map((t) => (
        <TodoItem key={t.id} task={t} onUpdate={onUpdate} />
      ))}
      {todos.length === 0 && <p>Empty Tasks!</p>}
    </div>
  );
}
