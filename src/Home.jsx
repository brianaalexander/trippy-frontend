export function Home() {
  return (
    <div id="home">
      <h1>Time To See The world!</h1>
      <img
        className="welcome"
        src="https://worldinparis.com/wp-content/uploads/2018/06/paris-travel-planning.jpg"
        alt="..."
      />
      <a className="btn btn-outline-info" href="/trips">
        All Trips
      </a>
    </div>
  );
}
