import React, { useState } from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

export type Todo = {
  text: string;
  completed: boolean;
};

const listOfTodos: Todo[] = [
  { text: 'Estudiar React', completed: false },
  { text: 'Repasar Angular', completed: false },
  { text: 'Sacar a coco', completed: true },
  { text: 'Leer un libro', completed: false },
];

export const App = (): React.JSX.Element => {
  const [todos, setTodos] = useState(listOfTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
