import React from "react";
import { Link } from "react-router-dom";
import img from "../../Image/404.jpg";
import "../Navbar/Navbar.css";
const NotFound = () => {
  return (
    <div className="content p-5" style={{ backgroundColor: "white" }}>
      <button className="btn btn-outline-info">
        <Link to="/home" style={{ textDecoration: "none" }}>
          Back To Home
        </Link>
      </button>
      <img className="img-fluid w-100  rounded " src={img} alt="" />
    </div>
  );
};

export default NotFound;
