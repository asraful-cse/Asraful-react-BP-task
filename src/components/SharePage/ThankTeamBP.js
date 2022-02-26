import React from "react";
import { Link } from "react-router-dom";

const ThankTeamBP = () => {
  return (
    <div className="container justify-content-center text-align-center align-item-center">
     <h2 style={{color:'white'}}>Coming soon</h2> 
     <p style={{color:'green'}}>I have not been given this task, if this task is given to me, I
      can do it very easily. <br/> Thanks to everyone on the Bangla Puzzle team.</p> 
      <button className="btn btn-outline-info" >
          <Link to='/home' style={{textDecoration:'none'}}>
Back To Home
          </Link>
      </button>
    </div>
  );
};

export default ThankTeamBP;
