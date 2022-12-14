export function PlacesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePlace(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Trip id: <input name="trip_id" className="form-control" type="text" />
        </div>
        <div>
          Address: <input name="address" className="form-control" type="text" />
        </div>
        <div>
          Name: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Description: <input name="description" className="form-control" type="text" />
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
        <button className="btn btn-outline-info mt-3" type="submit">
          Create Place
        </button>
      </form>
    </div>
  );
}
