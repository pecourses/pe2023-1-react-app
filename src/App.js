import { useContext } from 'react';
import { createContext } from 'react';

// 1 Створення контекста
const DataContext = createContext('default');
const UserContext = createContext(null);

function App() {
  const data = 'data in App';
  const user = { name: 'Test', surname: 'Testovych' };
  // 2 Обгортаємо все дерево компонентів,
  // яке повинне мати доступ до значення, в Provider
  // в проп value
  return (
    <UserContext.Provider value={user}>
      <DataContext.Provider value={data}>
        <Child />
      </DataContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

function Child() {
  return <ChildChild />;
}

function ChildChild() {
  // 3 Зчитати дані, які поклали в проп value за допомогою useContext(Ім'яКонтекста)
  const data = useContext(DataContext);
  return (
    <div>
      {data}
      <ChildChildChild />
    </div>
  );
}

function ChildChildChild() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}

// Створити потомка ChildChild - ChildChildChild,
// якому прокинути user = {name: 'Test', surname: "Testovych"}
// з App
