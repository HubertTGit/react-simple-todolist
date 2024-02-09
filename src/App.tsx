import { useState, useEffect } from 'react';

import { useReducer } from 'react';
import reducer from './utils/todoReducer';
import { TodoInput } from './components/todoInput';
import { TodoList } from './components/todoList';
import { TodoFilter } from './components/todoFilter';
import { TodoHeader } from './components/todoHeader';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { Todoitem, TodoFilterType } from './types/todo.model';
import { filterHelper } from './utils/utilities';

const initialTodos: Todoitem[] = getLocalStorage();

function App() {
  const [filter, setFilter] = useState<TodoFilterType>('all');
  const [todos, dispatchTodo] = useReducer(reducer, initialTodos);

  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);

  const filteredTodos = filterHelper(filter, todos);

  return (
    <div className=" flex justify-center items-center flex-col h-full bg-slate-400">
      <div className="w-[300px] rounded-md bg-white p-2">
        <TodoHeader onDelete={dispatchTodo} title="Todo list" />
        <TodoFilter onChange={setFilter} filter={filter} todos={todos} />
        <TodoInput onEnter={dispatchTodo} />
        <TodoList todos={filteredTodos} onUpdate={dispatchTodo} />
      </div>
    </div>
  );
}

export default App;
