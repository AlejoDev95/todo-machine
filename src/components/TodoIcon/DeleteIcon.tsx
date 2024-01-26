import React from 'react';
import { TodoIcon } from '.';

type DeleteIconProps = {
  onDelete: () => void;
};

export const DeleteIcon = ({
  onDelete,
}: DeleteIconProps): React.JSX.Element => {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
};
