import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function TripsShow() {
  const [trip, setTrip] = useState({ places: [] });
  const params = useParams();

  const handleShowTrip = () => {
    axios.get(`http://localhost:3000/trips/${params.id}.json`).then((response) => {
      console.log(response.data);
      setTrip(response.data);
    });
  };

  useEffect(handleShowTrip, []);

  return (
    <div>
      <div>
        <img src={trip.image_url} />
        <div>
          <h2>{trip.title}</h2>
          <p>Arrival: {trip.start_time}</p>
          <p>Departure: {trip.end_time}</p>
          <div className="row">
            {trip.places.map((place) => (
              <div className="col-md-6 mb-4" key={place.id}>
                <div className="card">
                  <img src={place.image_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h2 className="card-title">{place.name}</h2>
                    <p className="card-text">Address: {place.address}</p>
                    <p className="card-text">Description: {place.description}</p>
                    <p className="card-text">Arrival: {place.start_time}</p>
                    <p className="card-text">Departure: {place.end_time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="btn btn-outline-info" href="/trips">
            Back to All Trips
          </a>
        </div>
      </div>
    </div>
  );
}
