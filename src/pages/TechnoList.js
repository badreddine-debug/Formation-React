import TechnoItem from "../components/TechnoItem";

export default function TechnoList(props) {
  const { listTechno, deleteTechno } = props;
  return (
    <div className="techno-list">
      <h1>All Technos</h1>
      <div>
        {listTechno.map((element) => (
          <TechnoItem
            techno={element}
            key={element.id}
            deleteTechno={deleteTechno}
          ></TechnoItem>
        ))}
      </div>
    </div>
  );
}
