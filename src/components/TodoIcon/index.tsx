import React from 'react';
import { ReactComponent as CheckSVG } from './../../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from './../../assets/icons/delete.svg';
import './TodoIcon.css';

type TodoIconProp = {
  type: 'check' | 'delete';
  color: string;
  onClick: () => void;
};

const iconTypes = {
  check: (color: string) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color: string) => <DeleteSVG className="Icon-svg" fill={color} />,
};

export const TodoIcon = ({
  type,
  color,
  onClick,
}: TodoIconProp): React.JSX.Element => {
  return (
    <button className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </button>
  );
};
