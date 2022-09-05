import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        className="logo"
        onClick={() => {
          navigate(-1);
        }}
      >
        YANYANGIRL
      </div>
      <div className="link-container">
        <Link to="/application">About</Link>
        <Link to="/projectList">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
