import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

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
    <div className="App bg-light dark:bg-dark">
      <div className="bg-gray-300 dark:bg-gray-1000 rounded-xl shadow p-8 m-10">
        <p className="text-3xl dark:text-font-dark text-font-light font-bold mb-5">
          Welcome!
        </p>
        <p className="text-font-light dark:text-font-dark text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  );
}
export default App;
