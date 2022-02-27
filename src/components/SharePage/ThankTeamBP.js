import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const ThankTeamBP = () => {
  return (
    <div className=" mt-5 p-5 content justify-content-center text-align-center align-item-center">
      <h2 style={{ color: "white" }}>Coming soon</h2>
      <br />
      <h5 style={{ color: "green" }}>
        I have not been given this task, if this task is given to me, I can do
        it very easily. <br /> Thanks to everyone on the Bangla Puzzle team.
      </h5>
      <br />
      <button className="btn btn-outline-info">
        <Link to="/home" style={{ textDecoration: "none" }}>
          Back To Home
        </Link>
      </button>
      <br />
    </div>
  );
};

export default ThankTeamBP;
