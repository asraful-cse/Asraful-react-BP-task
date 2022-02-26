import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faCode,
  faCodePullRequest,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-container container">
      <div>
        <div className="mt-4">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h5>Did this doc help you?</h5>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="footer-menu-container">
                <h6>Help us make these docs great!</h6>
                <p>
                  All GitHub docs are open source. See something <br /> that's
                  wrong or unclear? Submit a pull request.
                </p>
              </div>
              <button className="btn btn-outline-info">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faCodePullRequest} />{" "}
                  <small>Make a Contribution</small>
                </Link>
              </button>
            </div>
            <div className="col-md-2">
              <div className="right-footer-container">
                <h3 className="text-light">Still need help?</h3>
                <Link to="/home/appsContent">
                  <small>Ask the GitHub community</small>
                </Link>
                <br />
                <Link to="/home/appsContent">
                  <small>Contact support</small>
                </Link>
              </div>
            </div>
          </div>

          <nav class="navbar navbar-expand-lg navbar-info text-center align-items-center justify-content-center mt-4 ">
            <div class="container-fluid m-5">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-2">
                  <li class="nav-item mx-2" >
                    <a class="nav-link ">
                      <small style={{ color: "gray" }}>© 2022 GitHub, Inc. </small>
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Teams
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Security</a>
                  </li>
                  <li class="nav-item mx-2" >
                    <a class="nav-link ">Status</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Help</a>
                  </li>
                  <li class="nav-item mx-2">
                    <div className="icon">
                      <FontAwesomeIcon icon={faCode} />
                    </div>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Contact GitHub</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Pricing</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Developer API</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Trainig</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">Blog</a>
                  </li>
                  <li class="nav-item mx-2">
                    <a class="nav-link ">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
