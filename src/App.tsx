import { useState, useMemo } from 'react';

import { useImmerReducer } from 'use-immer';
import reducer, { Itodo, filterType } from './utils/todoReducer';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';
import TodoFilter from './components/todoFilter';
import TodoHeader from './components/todoHeader';
import { getLS, setLS } from './utils/localStorage';

const initialTodos: Itodo[] = getLS();

function App() {
  const [filter, setFilter] = useState<filterType>('all');
  const [todos, dispatchTodo] = useImmerReducer(reducer, initialTodos);

  const filteredTodos = useMemo<Itodo[]>(() => {
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
  }, [filter, todos]);

  setLS(filteredTodos);

  return (
    <div className=" flex justify-center items-center flex-col h-full">
      <div className="w-[300px]">
        <TodoHeader onDelete={dispatchTodo} title="Todo list" />
        <TodoFilter onChange={setFilter} filter={filter} todos={todos} />

        <TodoInput onEnter={dispatchTodo} />

        <TodoList todos={filteredTodos} onUpdate={dispatchTodo} />
      </div>
    </div>
  );
}

export default App;