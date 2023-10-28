import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ThemeContext } from './contexts';
import UserPage from './pages/UserPage';
import styles from './App.module.css';
import CONSTANTS from './constants';

const {
  THEMES: { LIGTH, DARK, PURPLE },
} = CONSTANTS;

function App() {
  const [theme, setTheme] = useState(LIGTH);

  // 1 Зчитати дані при монтуванні
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme ? savedTheme : LIGTH);
  }, []);

  // 2 Записувати змінені данні після зміни теми
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const containerClassName = classNames(styles.pageContainer, {
    [styles.light]: theme === LIGTH,
    [styles.dark]: theme === DARK,
    [styles.purple]: theme === PURPLE,
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={containerClassName}>
        <UserPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

// - App
//   - UserPage
//     - Header
//       - ThemeSwitcher
//     - main
