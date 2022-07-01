import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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
    <div className="App">
      <div className="container mx-auto bg-darkgray-1100 dark:bg-darkgray-100 rounded-xl shadow p-8 m-10">
        <p className="text-3xl dark:text-gray-100 text-gray-800 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-800 dark:text-gray-white text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  );
}
export default App;
