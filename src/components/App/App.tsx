import React, { useState } from 'react';

import { useLocalstorage } from '../../hooks/useLocalstorage';
import { Todo } from '../../models/todo.model';
import { AppUI } from './AppUI';

export const App = (): React.JSX.Element => {
  const { item: todos, saveItem: saveTodos, isLoading, error } = useLocalstorage<Todo[]>(
    'Todo_v1',
    []
  );
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const toggleCompleteTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      toggleCompleteTodo={toggleCompleteTodo}
      totalTodos={totalTodos}
      isLoading={isLoading}
      error={error}
    />
  );
};
