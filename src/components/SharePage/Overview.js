import React from "react";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="container">
      <h2>Overview</h2>
      <h3>
        Learn about GitHub's APIs, secure your deployments, and join <br />
        GitHub's Developer Program.
      </h3>
      <Link to='/home/thanksBP'>
        About GitHub's APIs
      </Link>
      <br />
      <Link to='/home/thanksBP'>
        Managing deploy keys
      </Link>
      <br />
      <Link to='/home/thanksBP'>
        Using SSH agent forwarding
      </Link>
      <br />
      <Link to='/home/thanksBP'>
        Secret scanning partner program
      </Link>
      <br />
      <Link to='/home/thanksBP'>
        Replacing GitHub Services
      </Link>
      <br />
      <Link to='/home/thanksBP'>
        GitHub Developer Program
      </Link>
      <br />
    </div>
  );
};

export default Overview;
