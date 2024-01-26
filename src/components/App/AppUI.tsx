import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { Todo } from '../../models/todo.model';


type AppUIProps = {
  completedTodos: number;
  deleteTodo: (text: string) => void;
  searchedTodos: Todo[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  toggleCompleteTodo: (text: string) => void;
  totalTodos: number;
};

export const AppUI = (props: AppUIProps): React.JSX.Element => {
  return (
    <>
      <TodoCounter completed={props.completedTodos} total={props.totalTodos} />
      <TodoSearch searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
      <TodoList>
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
