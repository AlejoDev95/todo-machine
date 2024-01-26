import React from 'react';
import './EmptyTodos.css';

type TodosEmptyProps = {
  message: string;
};

export const TodosEmpty = ({ message }: TodosEmptyProps): React.JSX.Element => {
  return (
    <div className="EmptyTodos">
      <p>{message}</p>
    </div>
  );
};
