export default function TechnoItem(props) {
  const { techno } = props;
  return (
    <ul key={techno.id}>
      <div>{techno.name}</div>
      <div>{techno.categorie}</div>
      <div>{techno.descrption}</div>
    </ul>
  );
}
