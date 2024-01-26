import { createContext } from 'react';
import { Todo } from '../models/todo.model';

type ContextTodo = {
  completedTodos: number;
  deleteTodo: (text: string) => void;
  searchedTodos: Todo[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  toggleCompleteTodo: (text: string) => void;
  totalTodos: number;
  isLoading: boolean;
  error: boolean;
  todos: Todo[]
};

const contextValue: ContextTodo = {
  todos: [],
  completedTodos: 0,
  deleteTodo: () => undefined,
  searchedTodos: [],
  searchValue: '',
  setSearchValue: () => undefined,
  toggleCompleteTodo: () => undefined,
  totalTodos: 0,
  isLoading: true,
  error: false,
};

export const TodoContext = createContext<ContextTodo>(contextValue);
