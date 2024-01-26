import React from 'react';
import './TodoCounter.css';
import { useTodoContext } from '../../context/useTodoContext';

export const TodoCounter = (): React.JSX.Element => {
  const { totalTodos, completedTodos } = useTodoContext()
  return (
    <h1 className="TodoCounter">
      Haz completado {completedTodos} de {totalTodos} Todos
    </h1>
  );
};
