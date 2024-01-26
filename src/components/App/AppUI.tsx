import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { useTodoContext } from '../../context/useTodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

export const AppUI = (): React.JSX.Element => {
  const { error, isLoading, searchedTodos, todos, isOpenModal } =
    useTodoContext();
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {isLoading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}

        {!error && !isLoading && todos.length === 0 && (
          <TodosEmpty message="¡Crea tu primer TODO!" />
        )}

        {!error &&
          !isLoading &&
          searchedTodos.length === 0 &&
          todos.length > 0 && <TodosEmpty message="No hay coincidencias" />}

        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            key={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {isOpenModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
