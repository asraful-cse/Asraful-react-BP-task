import React from "react";
import { Link } from "react-router-dom";

const WebHooks = () => {
  return (
    <div className="container">
      <h2>Webhooks and events</h2>
      <h3>
        You can set up, test, and secure webhooks so your integrations can
        subscribe and react to events on GitHub.
      </h3>
      <Link to="/home/thanksBP">Webhooks</Link>
      <br />
      <br />
      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">About webhooks</Link>
        <br />
        <Link to="/home/thanksBP">Creating webhooks</Link>
        <br />
        <Link to="/home/thanksBP">
          Configuring your server to receive payloads
        </Link>
        <br />
        <Link to="/home/thanksBP">Testing webhooks</Link>
        <br />
        <Link to="/home/thanksBP">Securing your webhooks</Link>
        <br />
        <Link to="/home/thanksBP">Webhook events and payloads</Link>
      </div>
      <br />

      <Link to="/home/thanksBP">Events</Link>
      <br />
      <br />

      <div style={{ marginLeft: "40px" }}>
        <Link to="/home/thanksBP">GitHub event types</Link>
        <br />
        <Link to="/home/thanksBP">Issue event types</Link>
      </div>
    </div>
  );
};

export default WebHooks;
