import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../Navbar/Navbar.css";
const Home = () => {
  return (
    <div className="content  ">
      <div className=" ">
        <br />
        <div className="card_style2 p-5 ">
          <h2> Developers </h2>
          <h3 style={{ color: "gray" }}>
            Go deeper with GitHub by integrating with our APIs, customizing{" "}
            <br /> your GitHub workflow, and building and sharing apps with the{" "}
            <br /> community.
          </h3>
        </div>

        <div class="card  text-white App-header mb-3 p-5">
          <div class=" card-body card_style">
            <Link to="/home/overview" className="card_style2">
              <h6 class="card-title">Overview</h6>
              <p class="card-text content_style">
                Learn about GitHub's APIs, secure your deployments, and join
                GitHub's Developer Program.
              </p>
            </Link>
          </div>

          <div class=" card-body card_style">
            <Link to="/home/webHooks" className="card_style2">
              <h6 class="card-title">Webhooks and events</h6>
              <p class="card-text content_style">
                You can set up, test, and secure webhooks so your integrations
                can subscribe and react to events on GitHub.
              </p>
            </Link>
          </div>

          <div class=" card-body card_style">
            <Link to="/home/appsContent" className="card_style2">
              <h6 class="card-title">App</h6>
              <p class="card-text content_style">
                You can automate and streamline your workflow by building your
                own apps.
              </p>
            </Link>
          </div>

          <div class=" card-body card_style">
            <Link to="/home/gitHubMarket" className="card_style2">
              <h6 class="card-title">GitHub Marketplace</h6>
              <p class="card-text content_style">
                List your tools in GitHub Marketplace for developers to use or
                purchase.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
