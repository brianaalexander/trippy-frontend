import { useState } from "react";

export function TripsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div>
      <div className="container" id="trips-index">
        <h1>All Trips</h1>
        Search filter:{" "}
        <input
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          type="text"
          list="titles"
        />
        <datalist id="titles">
          {props.trips.map((trip) => (
            <option key={trip.id}>{trip.title}</option>
          ))}
        </datalist>
        <div className="row">
          {props.trips
            .filter((trip) => trip.title.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((trip) => (
              <div className="col-md-3 mb-4" key={trip.id}>
                <div className="card">
                  <img src={trip.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{trip.title}</h2>
                    <p className="card-text">Arrival: {trip.start_time}</p>
                    <p className="card-text">Departure: {trip.end_time}</p>
                    <a className="btn btn-outline-info" href={`/trips/${trip.id}`}>
                      Trip Info
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
