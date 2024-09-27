import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
}

export default Header;