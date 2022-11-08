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
          User id: <input name="user_id" className="form-control" type="text" />
        </div>
        <div>
          Title: <input name="title" className="form-control" type="text" />
        </div>
        <div>
          Image: <input name="image_url" className="form-control" type="text" />
        </div>
        <div>
          Arrival: <input name="start_time" className="form-control" type="text" />
        </div>
        <div>
          Departure: <input name="end_time" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create Trip
        </button>
      </form>
    </div>
  );
}
