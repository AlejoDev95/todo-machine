import React from 'react';
import { Todo } from './App';
import './TodoItem.css';

type TodoItemProp = {
  onComplete: () => void;
  onDelete: () => void;
};

type Props = Todo & TodoItemProp;

export const TodoItem = ({
  text,
  completed,
  onComplete,
  onDelete,
}: Props): React.JSX.Element => {
  return (
    <li className="TodoItem">
      <button
        onClick={onComplete}
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
      >
        V
      </button>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <button onClick={onDelete} className="Icon Icon-delete">
        X
      </button>
    </li>
  );
};
