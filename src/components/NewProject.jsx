import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAddProject, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} closeButtonText='확인'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>
          유효하지 않은 입력값 입니다.
        </h2>
        <p className='text-stone-600 mb-4'>
          이런... 값 입력을 잊으신 것 같습니다.
        </p>
        <p className='text-stone-600 mb-4'>
          모든 칸에 유효한 값을 입력하셨는지 확인해주세요.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              className='text-stone-800 hover:text-stone-950'
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' ref={titleRef} labelText='Title' />
          <Input ref={descriptionRef} labelText='Description' isTextarea />
          <Input type='date' ref={dueDateRef} labelText='Due Date' />
        </div>
      </div>
    </>
  );
}
