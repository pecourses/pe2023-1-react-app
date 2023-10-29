import { useEffect } from 'react';
import Counter from './components/Counter';
import User from './components/User';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

// 1 Link змінює location
// 2 BrowserRouter підписано на зміни location
// 3 BrowserRouter в Switch шукає Route з path, як у location (тобто як у обраного Link) і
// 4 виводить компонент із пропа children або component

// Додати навігацію для Contacts і Components
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

// /components/counter
// /components/user
function Components() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Link to={`${url}/counter`}>Counter</Link>{' '}
      <Link to={`${url}/user`}>User</Link>
      <Switch>
        <Route path={`${path}/counter`}>
          <Counter />
        </Route>
        <Route path={`${path}/user`}>
          <User />
        </Route>
      </Switch>
    </div>
  );
}

function About() {
  return <div>About</div>;
}

function Contacts() {
  return <div>Contacts</div>;
}

function NotFound() {
  const history = useHistory();

  useEffect(() => {
    const id = setTimeout(() => {
      history.push('/');
    }, 5000);
    return () => {
      clearTimeout(id);
    };
  });

  return <div>404 Not Found</div>;
}
