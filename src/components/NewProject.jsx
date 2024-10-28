import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onAddProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation ...

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
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
  );
}