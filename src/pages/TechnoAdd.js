export default function TechnoAdd() {
  return (
    <div className="techno-Add">
      <h1>Add a Techno</h1>
      <div>
        <form>
          <label htmlFor="techno-name">Name:</label>
          <br />
          <input type="text" name="techno-name" id="techno-name" />
          <br />
          <label htmlFor="techno-name">Techno categorie:</label>
          <br />
          <select name="techno-category" id="technoy-category">
            <option value="">Select a gategory</option>
            <option value="Front">Front</option>
            <option value="back">back</option>
            <option value="fullStack">Full stack</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label htmlFor="techno-description">Description:</label>
          <br />
          <textarea name="techno-description" cols="30" rows="10"></textarea>
          <br />
          <input type="submit" value="Add Techno" />
        </form>
      </div>
    </div>
  );
}
