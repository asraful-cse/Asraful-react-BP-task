import React from "react";
import { Link } from "react-router-dom";

const GitHubMarket = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "white" }}>GitHub Marketplace</h2>
      <h3 style={{ color: "white" }}>
        List your tools in GitHub Marketplace for developers to use or purchase.
      </h3>
      <br />
      <br />
      <br />
      <br />
      <Link to="/home/thanksBP">GitHub Marketplace Overview</Link>
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
      <Link to="/home/thanksBP">Creating apps for GitHub Marketplace</Link>
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
      <Link to="/home/thanksBP">
        Using the GitHub Marketplace API in your app
      </Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
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
      <Link to="/home/thanksBP">Listing an app on GitHub Marketplace</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
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
      <Link to="/home/thanksBP">Selling your app on GitHub Marketplace</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
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
    </div>
  );
};

export default GitHubMarket;
