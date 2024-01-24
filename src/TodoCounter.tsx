import React from 'react';
import './TodoCounter.css';

type TodoCounterProps = {
  total: number;
  completed: number;
};

export const TodoCounter = ({
  total,
  completed,
}: TodoCounterProps): React.JSX.Element => {
  return (
    <h1 className='TodoCounter'>
      Haz completado {completed} de {total} Todos
    </h1>
  );
};
