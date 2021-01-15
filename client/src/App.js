import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>App ready</h1>
        <h3>Redux setup</h3>
        <h3>Router setup</h3>
        <h3>Express server setup</h3>
      </div>
    </Provider>
  );
}

export default App;
