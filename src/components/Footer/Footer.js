import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "../Navbar/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCode,
  faCodePullRequest,
  faComment,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-container  content mt-5 px-3">
      <div className="mt-5 border_style">
        <br/>
        <div className="row">
          <div className="col-md-3 mx-4">
            <div className="left-container text-start text-white">
              <h5>Did this doc help you?</h5>
              <div className="icons-container d-flex text-center ">
                <div className="icon">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faThumbsDown} />
                </div>
              </div>
              <Link
                to="/home/overview"
                style={{ textDecoration: "none", fontSize: "13px" }}
              >
                <small>Privacy policy</small>
              </Link>
            </div>
          </div>
          <div className="col-md-4  mx-4 ">
            <div className="footer-menu-container text-white">
              <h5>Help us make these docs great!</h5>
              <p style={{ fontSize: "14px", color: "gray" }}>
                All GitHub docs are open source. See something <br /> that's
                wrong or unclear? Submit a pull request.
              </p>
            </div>
            <button className="btn btn-outline-info mt-1">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faCodePullRequest} />{" "}
                <small>Make a Contribution</small>
              </Link>
            </button>
            <br />
            <Link
              style={{ textDecoration: "none", fontSize: "13px" }}
              to="/home"
            >
              <span style={{ color: "gray" }}>Or, </span>
              <small>learn how to contribute.</small>
            </Link>
          </div>
          <div className="col-md-3  mx-4 justify-content-end">
            <div className="right-footer-container ">
              <h5 className="text-light">Still need help?</h5>
              <Link style={{ textDecoration: "none" }} to="/home/appsContent">
                <FontAwesomeIcon icon={faUserGroup} />{" "}
                <small>Ask the GitHub community</small>
              </Link>
              <br />
              <Link style={{ textDecoration: "none" }} to="/home/appsContent">
                <FontAwesomeIcon icon={faComment} />{" "}
                <small>Contact support</small>
              </Link>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-info text-center align-items-center justify-content-center mt-4 ">
          <div class="container-fluid m-3">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item ">
                  <Link to="/home/appsContent" class="nav-link ">
                    <small style={{ color: "gray" }}>© 2022 GitHub, Inc.</small>
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link" href="#">
                    Teams
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/overview" class="nav-link" href="#">
                    Privacy
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link ">
                    Security
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link ">
                    Status
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link ">
                    Help
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link ">
                    Contact GitHub
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/appsContent" class="nav-link ">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home" class="nav-link ">
                    Developer API
                  </Link>
                </li>
                <li class="nav-item mx-2S">
                  <Link to="/home/thanksBP" class="nav-link ">
                    Trainig
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home" class="nav-link ">
                    Blog
                  </Link>
                </li>
                <li class="nav-item mx-2">
                  <Link to="/home/thanksBP" class="nav-link ">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
