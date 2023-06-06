import { useState } from "react";
export default function TechnoAdd(props) {
  const [techno, setTechnos] = useState({
    name: "",
    categorie: "",
    descrption: "",
  });

  const { AddTechno } = props;

  function handlSubmit(evt) {
    evt.preventDefault();
    AddTechno(techno);
    setTechnos({
      name: "",
      categorie: "",
      descrption: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTechnos({ ...techno, [name]: value });
  }

  return (
    <div className="techno-Add">
      <h1>Add a Techno</h1>
      <div>
        <form onSubmit={(evt) => handlSubmit(evt)}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={techno.name}
            onChange={(event) => handleChange(event)}
          />
          <br />
          <label htmlFor="categorie">Techno categorie:</label>
          <br />
          <select
            name="categorie"
            id="categorie"
            value={techno.categorie}
            onChange={(event) => handleChange(event)}
          >
            <option value="">Select a gategory</option>
            <option value="Front">Front</option>
            <option value="back">back</option>
            <option value="fullStack">Full stack</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label htmlFor="descrption">Description:</label>
          <br />
          <textarea
            name="descrption"
            cols="30"
            rows="10"
            value={techno.descrption}
            onChange={(event) => handleChange(event)}
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="button" />
        </form>
      </div>
    </div>
  );
}
