import React, { ReactNode } from 'react';
import './TodoList.css';

type TodoListProps = {
  children: ReactNode;
};

export const TodoList = ({ children }: TodoListProps): React.JSX.Element => {
  return <ul className="TodoList">{children}</ul>;
};
