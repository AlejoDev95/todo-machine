import React from 'react';
import { useTodoContext } from '../../context/useTodoContext';
import './TodoSearch.css';

export const TodoSearch = (): React.JSX.Element => {
  const { searchValue, setSearchValue } = useTodoContext()
  return (
    <input
      className="TodoSearch"
      placeholder="¿Qué deseas buscar?"
      type="search"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};
