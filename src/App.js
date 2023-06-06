import "./App.css";
import Home from "./pages/Home";
import "./css/app.css";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v1 as uuid } from "uuid";

function App() {
  const [technos, setTechnos] = useState([
    {
      id: uuid(),
      name: "React",
      categorie: "Front",
      descrption: "Technologie front",
    },
    {
      id: uuid(),
      name: "Node",
      categorie: "back",
      descrption: "technologie back",
    },
  ]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, id: uuid() }]);
  }

  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/add"
          element={
            <TechnoAdd AddTechno={handleAddTechno} hello="Word"></TechnoAdd>
          }
        ></Route>
        <Route
          path="/list"
          element={<TechnoList listTechno={technos}></TechnoList>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
