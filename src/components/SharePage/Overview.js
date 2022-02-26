import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "white" }}>Overview</h2>
      <h3 style={{ color: "white" }}>
        Learn about GitHub's APIs, secure your deployments, and join <br />
        GitHub's Developer Program.
      </h3>
      <br />
      <br />
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
      <br />
    </div>
  );
};

export default Overview;
