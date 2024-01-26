import React from 'react';
import './CreateTodoButton.css';
import { useTodoContext } from '../../context/useTodoContext';

export const CreateTodoButton = (): React.JSX.Element => {
  const { setIsOpenModal, isOpenModal } = useTodoContext();

  const handleToggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <button
      className={`CreateTodoButton ${
        isOpenModal && 'CreateTodoButton--open-modal'
      }`}
      onClick={handleToggleModal}
    >
      +
    </button>
  );
};
