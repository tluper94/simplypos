import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import NavLayout from './layouts/NavLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  const { isDark } = useSelector(state => state.theme);
  const colorTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const doc = document.documentElement;
    if (isDark) {
      doc.style.setProperty('background-color', '#0b1727');
    } else {
      doc.style.setProperty('background-color', '#f9fafd');
    }
  }, [isDark]);

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', documentHeight);
    window.addEventListener('orientationchange', documentHeight);
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
