import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faGithub,
  faCodePullRequest
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer-container container">
      <div>
        <div className="mt-4">
          <div className="row">
            <div className="col-md-3">
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
            <div className="col-md-6 text-center">
              <div className="footer-menu-container">
                <h6>Help us make these docs great!</h6>
                <p>
                  All GitHub docs are open source. See something <br /> that's
                  wrong or unclear? Submit a pull request.
                </p>
              </div>
              <button className="btn btn-outline-info">
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faCodePullRequest} /> <small>Make a Contribution</small> 
                </Link>
              </button>
            </div>
            <div className="col-md-3">
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

          <nav class="navbar navbar-expand-lg navbar-info ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item " style={{ color: "gray" }}>
                    <small>© 2022 GitHub, Inc. </small>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Teams
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">Security</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">Status</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link ">Help</a>
                  </li>
                  <li class="nav-item">
                  <div className="icon">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link "></a>
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
