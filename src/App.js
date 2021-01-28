import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
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
              <Link to="/link2">Link 2</Link>
            </li>
            <li>
              <Link to="/link3">Link 3</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <p>here is home</p>
          </Route>
          <Route path="/link2">
            <p>page 1</p>
          </Route>
          <Route path="/link3">
            <p>page2</p>
          </Route>
        </Switch>

        <Login />
      </div>
    </Router>
  );
}

export default App;
