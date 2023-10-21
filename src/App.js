import { useState } from 'react';
import ViewPortParams from './components/ViewPortParams/index';

function App() {
  const [isHide, setHide] = useState(false);

  const changeHide = () => {
    setHide(!isHide);
  };

  return (
    <>
      <button onClick={changeHide}>{isHide ? 'Show' : 'Hide'} component</button>
      {!isHide && <ViewPortParams />}
    </>
  );
}

export default App;
