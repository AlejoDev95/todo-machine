import React from 'react';
import { TodoIcon } from './TodoIcon';

type DeleteIconProps = {
  onDelete: () => void;
};

export const DeleteIcon = ({
  onDelete,
}: DeleteIconProps): React.JSX.Element => {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
};
