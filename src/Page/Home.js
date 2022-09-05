import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap/";
import { Link } from "react-router-dom";
import bg from "../components/webdesign.svg";
import project from "../components/html.svg";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="home">
        <div className="menu">
          <img
            onClick={handleShow}
            alt="menu-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAAvklEQVR4nO3ZQQqDQAxAUVt6/0uVXqu6FURwEiaM43urCgo2RFv4ywIAAABAnVfDuWu3uxjTpdm8e9/F7D6Ba1q29o6anjQbmBQZ4Hf3+TfhcZPIAPcr/p/wuJt1ecYvcdP39A5MMsAkA0yK/A98wnvwMhsIAAABmsg5TaSCJnKkiVTSRDQRTWQ0mkglA0wywCRNJMkGAgBAgCZyThOpoIkcaSKVNBFNRBMZjSZSyQCTDDBJE0mygQAAAADcyAbEjKkPbkWKUQAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="home-container">
          <img src={bg} alt="" className="bg-img" />
          <h1>
            Hi <i className="fa-solid fa-hand-wave" /> I'm Yangunli.
          </h1>
        </div>
        <div className="home-desc">
          <Link to="/application">
            <div className="fa">
              <i class="fa-solid fa-newspaper" />
              <h5>About</h5>
            </div>
          </Link>
          <Link to="/projectList">
            <div className="fa">
              <i class="fa-brands fa-react" />
              <h5>Projects</h5>
            </div>
          </Link>
          <Link to="/contact">
            <div className="fa">
              <i class="fa-solid fa-address-card" />
              <h5>Contact</h5>
            </div>
          </Link>
        </div>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="home-link">
              <Link to="/application"> About</Link>
              <Link to="/projectList">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <footer>
        <div className="footer-container">
          <div className="social-icons">
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-github-alt" />
            <i className="fa-brands fa-codepen" />
          </div>
          <div className="footer-sidebar">
            <small>© 2022 Yangunli</small>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
