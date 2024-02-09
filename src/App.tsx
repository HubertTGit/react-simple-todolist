import { useState, useEffect } from 'react';

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
    console.log('todos', todos);
    setLocalStorage(todos);
  }, [todos]);

  const filteredTodos = filterHelper(filter, todos);

  return (
    <div className=" flex justify-center items-center flex-col h-full bg-slate-400">
      <div className="w-[300px] rounded-md bg-white p-2">
        <TodoHeader onDelete={setTodo} title="Todo list" />
        <TodoFilter onChange={setFilter} filter={filter} todos={todos} />
        <TodoInput onEnter={setTodo} />
        <TodoList todos={filteredTodos} onUpdate={setTodo} />
      </div>
    </div>
  );
}

export default App;
