import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
