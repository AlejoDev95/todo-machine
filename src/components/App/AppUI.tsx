import React from 'react';
import { Todo } from '../../models/todo.model';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';

type AppUIProps = {
  completedTodos: number;
  deleteTodo: (text: string) => void;
  searchedTodos: Todo[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  toggleCompleteTodo: (text: string) => void;
  totalTodos: number;
  isLoading: boolean;
  error: boolean;
};

export const AppUI = (props: AppUIProps): React.JSX.Element => {
  return (
    <>
      <TodoCounter completed={props.completedTodos} total={props.totalTodos} />
      <TodoSearch
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <TodoList>
        {props.isLoading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {props.error && <TodosError />}
        {!props.isLoading && props.searchedTodos.length === 0 && <TodosEmpty />}
        {props.searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
            onToggleComplete={() => props.toggleCompleteTodo(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
