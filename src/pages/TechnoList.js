import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
  const { listTechno } = props;
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {listTechno.map((element) => (
          <TechnoItem techno={element}></TechnoItem>
        ))}
      </div>
    </div>
  );
}
