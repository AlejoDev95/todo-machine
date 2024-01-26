import React from 'react';

import { AppUI } from './AppUI';
import { TodoProvider } from '../../context/TodoProvider';

export const App = (): React.JSX.Element => {
  return (
    <TodoProvider>
      <AppUI />;
    </TodoProvider>
  );
};
