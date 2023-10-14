import './App.css';
import Header from './components/Header';

function App() {
  const isLogin = true;

  const numbers0 = [1, 2, 3];
  // const numbers = [<li>1</li>, <li>2</li>, <li>3</li>];

  const numbers = numbers0.map((n, i) => <li key={i}>{n}</li>);

  // return <Header isLogin={isLogin} />;
  return <ul>{numbers}</ul>;
}

export default App;
