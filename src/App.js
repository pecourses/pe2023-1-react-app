import './App.css';
import Header from './components/Header';

// реалізувати header, який містить логотип і
// або фото користувача, якщо він зологінився,
// або кнопки login/registration
function App() {
  const isLogin = true;

  return <Header isLogin={isLogin} />;
}

export default App;
