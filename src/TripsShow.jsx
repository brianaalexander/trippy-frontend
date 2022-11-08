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
    <div className="col-md-3 mb-4" key={trip.id}>
      <div className="card">
        <img src={trip.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{trip.title}</h2>
          <p className="card-text">Arrival: {trip.start_time}</p>
          <p className="card-text">Departure: {trip.end_time}</p>
          <a className="btn btn-primary" href="/trips">
            Back to All Trips
          </a>
        </div>
      </div>
      {trip.places.map((place) => (
        <div key={place.id}>
          <h2>{place.name}</h2>
          <img src={place.image_url} />
          <p>Address: {place.address}</p>
          <p>Description: {place.description}</p>
          <p>Arrival: {place.start_time}</p>
          <p>Departure: {place.end_time}</p>
        </div>
      ))}
    </div>
  );
}
