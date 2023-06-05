import { useState } from "react";
export default function TechnoAdd(props) {
  const [techno, setTechnos] = useState({
    technoname: "",
    technocategory: "",
    technodescription: "",
  });

  const { AddTechno } = props;

  function handlSubmit(evt) {
    evt.preventDefault();
    AddTechno(techno);
    setTechnos({
      technoname: "",
      technocategory: "",
      technodescription: "",
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
          <label for="technoname">Name:</label>
          <br />
          <input
            type="text"
            name="technoname"
            id="technoname"
            value={techno.technoname}
            onChange={(event) => handleChange(event)}
          />
          <br />
          <label for="technoname">Techno categorie:</label>
          <br />
          <select
            name="technocategory"
            id="technoycategory"
            value={techno.technocategory}
            onChange={(event) => handleChange(event)}
          >
            <option value="">Select a gategory</option>
            <option value="Front">Front</option>
            <option value="back">back</option>
            <option value="fullStack">Full stack</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label for="technodescription">Description:</label>
          <br />
          <textarea
            name="technodescription"
            cols="30"
            rows="10"
            value={techno.technodescription}
            onChange={(event) => handleChange(event)}
          ></textarea>
          <br />
          <input type="submit" value="Add Techno" className="button" />
        </form>
      </div>
    </div>
  );
}
