export default function Home() {
  return (
    <div className="home">
      <h1>My Progression</h1>
      <div>
        Welcome to this site devoted to your programing progression
        {new Date().toString()}
      </div>
    </div>
  );
}
