import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Routes, Route } from 'react-router';

import Dashboard from './pages/dashboard/Dashboard';
import Stores from './pages/stores/Stores';
import Finace from './pages/finance/Finance.jsx';
import Employees from './pages/employees/Employees';
import Products from './pages/products/Products';

import NavLayout from './layouts/NavLayout';
import MainLayout from './layouts/MainLayout';

function App() {
  const { isDark } = useSelector(state => state.theme);
  const colorTheme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(colorTheme);

    localStorage.setItem('theme', isDark);
  }, [colorTheme, isDark]);

  console.log(isDark);
  return (
    <>
      <div className="h-full overflow-y-auto bg-light dark:bg-dark max-w-8xl mx-auto h-full ">
        <NavLayout />
        <MainLayout />
      </div>
    </>
  );
}
export default App;
