import React from 'react';
import './TodoLoading.css';

export const TodosLoading = (): React.JSX.Element => {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <p className="LoadingTodo-text"></p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  );
};
