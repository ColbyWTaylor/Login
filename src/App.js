import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import UserInfo from "./Components/UserInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/link2">Login</Link>
            </li>
            <li>
              <Link to="/link3">Content</Link>
            </li>
          </ul>
          <UserInfo />
        </nav>
        <Switch>
          <Route exact path="/">
            <p>Home</p>
            You should <Link to="/link2">log in</Link>.
          </Route>
          <Route path="/link2">
            <p>Login</p>
            <Login />
          </Route>
          <Route path="/link3">
            <p>Content</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
