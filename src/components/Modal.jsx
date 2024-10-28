import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

export default forwardRef(function Modal({ children, closeButtonText }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'
    >
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{closeButtonText}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});
