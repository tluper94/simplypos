import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../hooks/onClickOutsideHook';

const Dropdown = ({ icon, items }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  const onClickHandler = () => {
    setOpen(prevState => !prevState);
  };

  items.map(item => console.log(item));

  return (
    <div ref={ref} className="relative items-center h-full">
      <button
        onClick={onClickHandler}
        className="inline-flex border-none justify-center items-center"
      >
        {icon}
      </button>
      <div
        className={`${open ? 'block' : 'hidden'} 
          absolute w-48 right-0 p-4 rounded-md bg-gray-300 dark:bg-darkMono`}
      >
        {items.map(item => (
          <div onClick={onClickHandler} className="mb-5 last:mb-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
