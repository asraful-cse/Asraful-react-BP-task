import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "../../App.css";
const Home = () => {
  return (
    <>
      <div className="container ">
        <br />
        <br />
        <br />
        <br />
        <div className="container text-white   ">
          <h2> Developers </h2>
          <h3>
            Go deeper with GitHub by integrating with our APIs, customizing your
            GitHub workflow, and building and sharing apps with the community.
          </h3>
        </div>
        <br />
        <div className="container ">
          <div class="card text-white App-header mb-3">
            <div class=" card-body card_style">
              <Link to="/home/overview" className="card_style2">
                <h6 class="card-title">Overview</h6>
                <p class="card-text">
                  Learn about GitHub's APIs, secure your deployments, and join
                  GitHub's Developer Program.
                </p>
              </Link>
            </div>
            <br />

            <div class=" card-body card_style">
              <Link to="/home/webHooks" className="card_style2">
                <h6 class="card-title">Webhooks and events</h6>
                <p class="card-text">
                  You can set up, test, and secure webhooks so your integrations
                  can subscribe and react to events on GitHub.
                </p>
              </Link>
            </div>
            <br />

            <div class=" card-body card_style">
              <Link to="/home/appsContent" className="card_style2">
                <h6 class="card-title">App</h6>
                <p class="card-text">
                  You can automate and streamline your workflow by building your
                  own apps.
                </p>
              </Link>
            </div>
            <br />

            <div class=" card-body card_style">
              <Link to="/home/gitHubMarket" className="card_style2">
                <h6 class="card-title">GitHub Marketplace</h6>
                <p class="card-text">
                  List your tools in GitHub Marketplace for developers to use or
                  purchase.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> 
    </>
  );
};

export default Home;
