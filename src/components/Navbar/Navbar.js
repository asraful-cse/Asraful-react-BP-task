import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div class="sidebar">
        <Link to="/home">
          <h3>
            <FontAwesomeIcon icon={faAtom} /> GitHub Doc
          </h3>
        </Link>

        <div class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <small>Overview</small>
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
         
            <Link to="/home/thanksBP">About GitHub's APIs</Link>

            <Link to="/home/thanksBP">Managing deploy keys</Link>
 
            <Link to="/home/thanksBP">Using SSH agent forwarding</Link>
        
            <Link to="/home/thanksBP">Secret scanning partner program</Link>
 
            <Link to="/home/thanksBP">Replacing GitHub Services</Link>
       
            <Link to="/home/thanksBP">GitHub Developer Program</Link>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <small>WEBHOOKS AND EVENTS</small>
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
         
            <Link to="/home/thanksBP">About GitHub's APIs</Link>

            <Link to="/home/thanksBP">Managing deploy keys</Link>
 
            <Link to="/home/thanksBP">Using SSH agent forwarding</Link>
        
            <Link to="/home/thanksBP">Secret scanning partner program</Link>
 
            <Link to="/home/thanksBP">Replacing GitHub Services</Link>
       
            <Link to="/home/thanksBP">GitHub Developer Program</Link>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <small>Apps</small>
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
         
            <Link to="/home/thanksBP">About GitHub's APIs</Link>

            <Link to="/home/thanksBP">Managing deploy keys</Link>
 
            <Link to="/home/thanksBP">Using SSH agent forwarding</Link>
        
            <Link to="/home/thanksBP">Secret scanning partner program</Link>
 
            <Link to="/home/thanksBP">Replacing GitHub Services</Link>
       
            <Link to="/home/thanksBP">GitHub Developer Program</Link>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <Link
            class="nav-link dropdown-toggle"
            id="navbarScrollingDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <small>GITHUB MARKETPLACE</small>
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
         
            <Link to="/home/thanksBP">About GitHub's APIs</Link>

            <Link to="/home/thanksBP">Managing deploy keys</Link>
 
            <Link to="/home/thanksBP">Using SSH agent forwarding</Link>
        
            <Link to="/home/thanksBP">Secret scanning partner program</Link>
 
            <Link to="/home/thanksBP">Replacing GitHub Services</Link>
       
            <Link to="/home/thanksBP">GitHub Developer Program</Link>
          </ul>
        </div>
      </div>

      <div class="content">
        <div className="d-flex justify-content-end  ">
          <nav className="navbar navbar-expand-lg navbar-dark nav_style container">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse "
                id="navbarSupportedContent"
              >
                <Link
                  to="/home"
                  role="button"
                  style={{ fontSize: "15px" }}
                  className="navbar-brand"
                >
                  <a style={{ textDecoration: "none" }} href="">
                    Developer
                  </a>
                </Link>
                <ul className="mx-5 navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item dropdown ">
                    <Link
                      to="home/thanksBP"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Free, Pro, & Team
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Free, Pro, & Team
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Cloud
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.4
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.3
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.2
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.1
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Enterprise Server 3.0
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          GitHub AE
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          <small>All Enterprise Server release </small>
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          <small>About versions </small>
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="home/thanksBP"
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          简体中文 (Simplified Chinese)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          日本 (Japanese)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Española (Spanish)
                        </Link>
                      </li>
                      <li>
                        <Link to="home/thanksBP" className="dropdown-item">
                          Portuguese do brasil (Portuguese)
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                    </ul>
                  </li>
                  <li className="btn btn-outline-info" type="submit">
                    <Link
                      to="/home/thanksBP"
                      style={{ textDecoration: "none" }}
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Topics, Products.."
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
