export function TripsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateTrip(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Trip</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image: <input name="url" type="text" />
        </div>
        <div>
          Arrival: <input name="start_time" type="text" />
        </div>
        <div>
          Departure: <input name="end_time" type="text" />
        </div>
        <button type="submit">Create Trip</button>
      </form>
    </div>
  );
}
