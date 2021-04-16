import "./App.css";
import { CssBaseline } from "@material-ui/core";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./components/Details";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
