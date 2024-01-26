import React from 'react';
import './EmptyTodos.css';

export const TodosEmpty = (): React.JSX.Element => {
  return (
    <div className='EmptyTodos'>
      <p>¡Crea tu primer TODO!</p>
    </div>
  );
};
