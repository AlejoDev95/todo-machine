import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import './TodoForm.css';
import { useTodoContext } from '../../context/useTodoContext';

export const TodoForm = (): React.JSX.Element => {
  const { addTodo, setIsOpenModal } = useTodoContext();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput: FormEventHandler<HTMLInputElement> = (event) => {
    const inputTarget = event.currentTarget.value;
    setInputValue(inputTarget);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (inputValue.length < 3) {
      return;
    }
    addTodo(inputValue);
    setIsOpenModal(false);
  };

  return (
    <>
      <h2 className="Form-title">Todo Form</h2>
      <form className="Form">
        <input
          autoFocus
          type="text"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
    </>
  );
};
