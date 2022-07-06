import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import NavLayout from './layouts/NavLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  const { isDark } = useSelector(state => state.theme);
  const colorTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', documentHeight);
    documentHeight();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(colorTheme);

    localStorage.setItem('theme', isDark);
  }, [colorTheme, isDark]);

  return (
    <>
      <div className="App flex flex-col h-full overflow-y-auto bg-light dark:bg-dark max-w-8xl mx-auto ">
        <NavLayout />
        <MainLayout />
      </div>
    </>
  );
}
export default App;
