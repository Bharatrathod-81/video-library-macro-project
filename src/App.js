import "./App.css";
import "./components/Utilities/Utilities.css";
import { NavBar } from "./components/nav-bar/nav-bar";
import { RoutesFunc } from "./routes/routes";


function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutesFunc />
    </div>
  );
}

export default App;
