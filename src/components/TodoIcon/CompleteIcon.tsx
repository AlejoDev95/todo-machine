import React from 'react';
import { TodoIcon } from '.';

type CompleteIconProps = {
  completed: boolean;
  onToggleComplete: () => void;
};

export const CompleteIcon = ({
  completed,
  onToggleComplete,
}: CompleteIconProps): React.JSX.Element => {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onToggleComplete}
    />
  );
};
