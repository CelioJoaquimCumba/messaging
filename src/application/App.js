import "./App.css";

import { NavbarComponent as Navbar } from "../ui/navbar/Navbar.tsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Outlet/>
    </div>
  );
}

export default App;
