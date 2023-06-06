export default function TechnoItem(props) {
  const { techno, deleteTechno } = props;

  function handalDelete(id) {
    deleteTechno(id);
  }

  return (
    <ul className="cart" key={techno.id}>
      <div>{techno.name}</div>
      <div>{techno.categorie}</div>
      <div>{techno.descrption}</div>
      <div className="footer">
        <button className="btn-delete" onClick={() => handalDelete(techno.id)}>
          Supprimer
        </button>
      </div>
    </ul>
  );
}
