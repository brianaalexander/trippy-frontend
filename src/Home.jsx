import axios from "axios";
import { useState, useEffect } from "react";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { TripsIndex } from "./TripsIndex";
import { TripsNew } from "./TripsNew";

export function Home() {
  const [trips, setTrips] = useState([]);

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

  useEffect(handleIndexTrips, []);
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <TripsNew onCreateTrip={handleCreateTrip} />
      <TripsIndex trips={trips} />
    </div>
  );
}
