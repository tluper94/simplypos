import React from 'react';

const Dropdown = ({ width, show, children }) => {
  console.log(show ? 'inline' : 'hidden');
  const classes = {
    wrapper: `${
      show ? 'inline' : 'hidden'
    } flex flex-col absolute w-40 h-40 rounded-lg bg-light dark:bg-darkMono/90`
  };
  return <div className={classes.wrapper}>{children}</div>;
};

export default Dropdown;
