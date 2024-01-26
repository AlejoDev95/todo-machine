import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps): React.JSX.Element => {
  return createPortal(
    <div className="Modal">
      <div className="Modal-content">{children}</div>
    </div>,
    document.getElementById('modal')!
  );
};
