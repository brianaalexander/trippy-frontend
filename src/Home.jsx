import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <div id="home">
      <h1>Time To See The world!</h1>
      <img
        className="welcome"
        src="https://worldinparis.com/wp-content/uploads/2018/06/paris-travel-planning.jpg"
        alt="..."
      />
      <div className="mx-auto">
        <Calendar onChange={onChange} value={value} />
      </div>
      <a className="btn btn-outline-info" href="/trips">
        All Trips
      </a>
    </div>
  );
}
