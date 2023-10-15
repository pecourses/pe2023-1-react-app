import { useState } from 'react';
import styles from './App.module.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import User from './components/User';

function App() {
  const [isLight, setIsLight] = useState(false);

  const containerStyle = {
    color: isLight ? 'black' : 'white',
    backgroundColor: isLight ? 'white' : 'black',
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <ThemeSwitcher isLight={isLight} setIsLight={setIsLight} />
      <User isLight={isLight} />
    </div>
  );
}

export default App;
