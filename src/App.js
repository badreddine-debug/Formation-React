import "./App.css";
import Home from "./pages/Home";
import "./css/app.css";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log("useEffect with []");
  }, []);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, id: uuid() }]);
  }

  function handledelete(id) {
    setTechnos((technos) => {
      return technos.filter((i) => i.id !== id);
    });
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
          element={
            <TechnoList
              listTechno={technos}
              deleteTechno={handledelete}
            ></TechnoList>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
