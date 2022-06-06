import "./App.css";
import "./components/Utilities/Utilities.css";
import { NavBar } from "./components/nav-bar/nav-bar";
import { RoutesFunc } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar />
      <RoutesFunc />
    </div>
  );
}

export default App;
