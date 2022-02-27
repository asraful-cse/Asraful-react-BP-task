import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Overview = () => {
  return (
    <div className=" content p-5">
      <br />
      <h2 style={{ color: "white" }}>Overview</h2>
      <h3 style={{ color: "gray" }}>
        Learn about GitHub's APIs, secure your deployments, and join <br />
        GitHub's Developer Program.
      </h3>
      <br />
      <br />
      <Link to="/home/thanksBP">About GitHub's APIs</Link>
      <br />
      <Link to="/home/thanksBP">Managing deploy keys</Link>
      <br />
      <Link to="/home/thanksBP">Using SSH agent forwarding</Link>
      <br />
      <Link to="/home/thanksBP">Secret scanning partner program</Link>
      <br />
      <Link to="/home/thanksBP">Replacing GitHub Services</Link>
      <br />
      <Link to="/home/thanksBP">GitHub Developer Program</Link>
    </div>
  );
};

export default Overview;
