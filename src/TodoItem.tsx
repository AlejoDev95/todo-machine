import React from 'react';
import { Todo } from './App';
import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

type TodoItemProp = {
  onToggleComplete: () => void;
  onDelete: () => void;
};

type Props = Todo & TodoItemProp;

export const TodoItem = ({
  text,
  completed,
  onToggleComplete,
  onDelete,
}: Props): React.JSX.Element => {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onToggleComplete={onToggleComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
};
