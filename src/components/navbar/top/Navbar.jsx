import { useEffect, useRef } from 'react';

const Navbar = ({ brand, children }) => {
  const navbarRef = useRef();

  useEffect(() => {
    const doc = document.documentElement;
    doc.style.setProperty(
      '--navbar-height',
      `${navbarRef.current.getBoundingClientRect().height}px`
    );
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 h-[60px] border-b border-gray-800/60 bg-light/80 dark:bg-dark/80 backdrop-blur-sm backdrop-filter flex flex-row w-full p-4"
    >
      {brand && brand}
      <section className="flex flex-row ml-auto">{children}</section>
    </nav>
  );
};

export default Navbar;
