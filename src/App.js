import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Nav from './components/navbar/sidebar/VerticalNav';
import routes from './routes/routes';

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
    <div className="App bg-light dark:bg-dark max-w-8xl mx-auto px-4 sm:px-6 md:px-8 ">
      <Nav routes={routes} isVertical collapse={isCollapsed}></Nav>
      <div className="ml-20 md:ml-60">
        <div className="bg-gray-300 dark:bg-gray-1000 rounded-xl shadow p-8 m-10">
          <p className="text-3xl dark:text-font-dark text-font-light font-bold mb-5">
            Welcome!
          </p>
          <p className="text-font-light dark:text-font-dark text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
