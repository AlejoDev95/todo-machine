import React from 'react';
import { Todo } from '../../models/todo.model';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';
import { useTodoContext } from '../../context/useTodoContext';

export const TodoItem = ({ text, completed }: Todo): React.JSX.Element => {
  const { toggleCompleteTodo, deleteTodo } =
  useTodoContext()
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onToggleComplete={() => toggleCompleteTodo(text)} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <DeleteIcon onDelete={() => deleteTodo(text)} />
    </li>
  );
};
