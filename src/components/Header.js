import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Yanyangirl</Link>
      </div>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/application">Application</Link>
        <Link to="/projectList">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
