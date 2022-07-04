import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Nav from './components/navbar/sidebar/VerticalNav';
import routes from './routes/routes';
import { MdMenu } from 'react-icons/md';
import { Routes, Route } from 'react-router';

import Dashboard from './pages/dashboard/Dashboard';
import Stores from './pages/stores/Stores';
import Finace from './pages/finance/Finance.jsx';
import Employees from './pages/employees/Employees';
import Products from './pages/products/Products';

function App() {
  const { isDark } = useSelector(state => state.theme);
  const colorTheme = isDark ? 'dark' : 'light';

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(colorTheme);

    localStorage.setItem('theme', isDark);
  }, [colorTheme, isDark]);

  console.log(isDark);
  return (
    <>
      <div className="App bg-light dark:bg-dark max-w-8xl mx-auto h-screen ">
        <Nav
          className=" mx-4 md:m-0 py-4 md:p-4 border-b border-gray-800/40"
          brand={
            <div className=" flex content-center items-center justify-center align-center">
              <h1 className="text-2xl h-fit dark:text-font-dark2 text-font-light2">
                Simply POS
              </h1>
            </div>
          }
        ></Nav>
        <Nav
          className="inline md:hidden border-b border-gray-800/40"
          brand={
            <div className="p-4 dark:text-font-dark text-font-light">
              <MdMenu size="28px" />
            </div>
          }
        ></Nav>
        <div className="overflow-hidden h-full px-4">
          <div className="hidden md:inline">
            <Nav routes={routes} isVertical collapse={isCollapsed}></Nav>
          </div>
          <div className="m-0 md:ml-60">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/stores" element={<Stores />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/products" element={<Products />} />
              <Route path="/Finance" element={<Finace />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
