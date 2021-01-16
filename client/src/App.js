import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "./containers/StartPage/StartPage";
import GamePage from "./containers/GamePage/GamePage";

/**
 *
 */
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact strict path="/" component={StartPage} />
          <Route exact strict path="/game" component={GamePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
