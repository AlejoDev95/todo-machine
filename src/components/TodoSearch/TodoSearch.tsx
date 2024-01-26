import React from 'react';
import './TodoSearch.css';

type TodoSearchProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const TodoSearch = ({
  searchValue,
  setSearchValue,
}: TodoSearchProps): React.JSX.Element => {
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
