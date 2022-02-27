import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const AppsContent = () => {
  return (
    <div className=" content p-5">
      <br /> 
      <h2 style={{ color: "white" }}>Apps</h2>
      <h3 style={{ color: "gray" }}>
        You can automate and streamline your workflow by building your own apps.
        <br />
        Getting started with apps
      </h3>
      <br />
      <br />
      <Link to="/home/thanksBP">About apps</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">Activating optional features for apps</Link>
        <br />
        <Link to="/home/thanksBP">
          Differences between GitHub Apps and OAuth Apps
        </Link>
        <br />
        <Link to="/home/thanksBP">Migrating OAuth Apps to GitHub Apps</Link>
        <br />
        <Link to="/home/thanksBP">
          Setting up your development environment to create a GitHub App
        </Link>
      </div>
      <br />
      <br />
      <Link to="/home/thanksBP">Building GitHub Apps</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">Creating a GitHub App</Link>
        <br />
        <Link to="/home/thanksBP">Setting permissions for GitHub Apps</Link>
        <br />
        <Link to="/home/thanksBP">Authenticating with GitHub Apps</Link>
        <br />
        <Link to="/home/thanksBP">
          Identifying and authorizing users for GitHub Apps
        </Link>
        <br />
        <Link to="/home/thanksBP">Rate limits for GitHub Apps</Link>
        <br />
        <Link to="/home/thanksBP">Refreshing user-to-server access tokens</Link>
        <br />
        <Link to="/home/thanksBP">Creating a GitHub App from a manifest</Link>
        <br />
        <Link to="/home/thanksBP">
          Creating a GitHub App using URL parameters
        </Link>
        <br />
        <Link to="/home/thanksBP">
          Creating a custom badge for your GitHub App
        </Link>
      </div>
      <br />
      <br />
      <Link to="/home/thanksBP">Managing GitHub Apps</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP"></Link>
        <Link to="/home/thanksBP">Installing GitHub Apps</Link>
        <br />
        <Link to="/home/thanksBP">Modifying a GitHub App</Link>
        <br />
        <Link to="/home/thanksBP">Editing a GitHub App's permissions</Link>
        <br />
        <Link to="/home/thanksBP">Making a GitHub App public or private</Link>
        <br />
        <Link to="/home/thanksBP">Suspending a GitHub App installation</Link>
        <br />
        <Link to="/home/thanksBP">Transferring ownership of a GitHub App</Link>
        <br />
        <Link to="/home/thanksBP">Deleting a GitHub App</Link>
      </div>
      <br />
      <br />
      <Link to="/home/thanksBP">Building OAuth Apps</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">Creating an OAuth App</Link>
        <br />
        <Link to="/home/thanksBP">Authorizing OAuth Apps</Link>
        <br />
        <Link to="/home/thanksBP">Scopes for OAuth Apps</Link>
        <br />
        <Link to="/home/thanksBP">
          Creating a custom badge for your OAuth App
        </Link>
      </div>
      <br />
      <br />
      <Link to="/home/thanksBP">Managing OAuth Apps</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">Modifying an OAuth App</Link>
        <br />
        <Link to="/home/thanksBP">Transferring ownership of an OAuth App</Link>
        <br />
        <Link to="/home/thanksBP">
          Troubleshooting authorization request errors
        </Link>
        <br />
        <Link to="/home/thanksBP">
          Troubleshooting OAuth App access token request errors
        </Link>
      </div>
      <br />
      <br />
      <Link to="/home/thanksBP">Guides</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">Using the GitHub API in your app</Link>
        <br />
        <Link to="/home/thanksBP">Creating CI tests with the Checks API</Link>
        <br />
        <Link to="/home/thanksBP"></Link>
      </div>
    </div>
  );
};

export default AppsContent;
