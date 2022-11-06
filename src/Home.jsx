import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";
import { PlacesNew } from "./PlacesNew";

export function Home() {
  const [trips, setTrips] = useState([]);
  const [places, setPlaces] = useState([]);

  const handleIndexTrips = () => {
    console.log("handleIndexTrips");
    axios.get("http://localhost:3000/trips.json").then((response) => {
      console.log(response.data);
      setTrips(response.data);
    });
  };

  const handleCreateTrip = (params, successCallback) => {
    console.log("handleCreateTrip", params);
    axios.post("http://localhost:3000/trips.json", params).then((response) => {
      setTrips([...trips, response.data]);
      successCallback();
    });
  };

  const handleCreatePlace = (params, successCallback) => {
    console.log("handleCreatePlace", params);
    axios.post("http://localhost:3000/places.json", params).then((response) => {
      setPlaces([...places, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexTrips, []);
  return (
    <div>
      <PlacesNew onCreatePlace={handleCreatePlace} />
      <TripsNew onCreateTrip={handleCreateTrip} />
      <TripsIndex trips={trips} />
    </div>
  );
}
