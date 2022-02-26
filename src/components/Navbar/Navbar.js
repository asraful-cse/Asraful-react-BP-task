import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <small>Developer</small>
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Free, Pro, & Team
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Free, Pro, & Team
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Cloud
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Server 3.4
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Server 3.3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Server 3.2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Server 3.1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enterprise Server 3.0
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GitHub AE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <small>All Enterprise Server release </small>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <small>About versions </small>
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      简体中文 (Simplified Chinese)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      日本 (Japanese)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Española (Spanish)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Portuguese do brasil (Portuguese)
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="btn btn-outline-success" type="submit">
                Sign Up
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
    </>
  );
};

export default Navbar;
