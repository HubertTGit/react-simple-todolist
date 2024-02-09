import { useState, useEffect, useCallback } from 'react';
import { TodoInput } from './components/todoInput';
import { TodoList } from './components/todoList';
import { TodoFilter } from './components/todoFilter';
import { TodoHeader } from './components/todoHeader';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { TodoItem, TodoFilterType } from './types/todo.model';
import { filterHelper } from './utils/utilities';

const initialTodos: TodoItem[] = getLocalStorage();

function App() {
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const [todos, setTodo] = useState(initialTodos);

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  const filteredTodos = filterHelper(filter, todos);

  const onDeleteHandler = useCallback(() => {
    setTodo(todos.filter((todo) => !todo.isCompleted));
  }, [todos]);

  const onChangeHandler = useCallback((filter: TodoFilterType) => {
    setFilter(filter);
  }, []);

  const onEnterHandler = useCallback(
    (task: string) => {
      const _id = (Math.random() * 1000_000).toString();
      const newTodo: TodoItem = { task, id: _id, isCompleted: false };
      setTodo([newTodo, ...todos]);
    },
    [todos]
  );

  const onUpdate = useCallback(
    (task: string, id: string) => {
      setTodo(todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id: string) => {
      setTodo(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos]
  );
  return (
    <div className=" flex justify-center items-center flex-col h-full bg-slate-400">
      <div className="w-[300px] rounded-md bg-white p-2">
        <TodoHeader onDelete={onDeleteHandler} title="Todo list" />
        <TodoFilter onChange={onChangeHandler} filter={filter} todos={todos} />
        <TodoInput onEnter={onEnterHandler} />
        <TodoList
          todos={filteredTodos}
          onUpdate={onUpdate}
          onToggle={onToggle}
        />
      </div>
    </div>
  );
}

export default App;
