import "./App.css";
import Home from "./pages/Home";
import "./css/app.css";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<TechnoAdd></TechnoAdd>}></Route>
        <Route path="/list" element={<TechnoList></TechnoList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
