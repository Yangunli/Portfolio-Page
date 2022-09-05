import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap/";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="form">
        <div className="menu">
          <img
            onClick={handleShow}
            alt="menu-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAAvklEQVR4nO3ZQQqDQAxAUVt6/0uVXqu6FURwEiaM43urCgo2RFv4ywIAAABAnVfDuWu3uxjTpdm8e9/F7D6Ba1q29o6anjQbmBQZ4Hf3+TfhcZPIAPcr/p/wuJt1ecYvcdP39A5MMsAkA0yK/A98wnvwMhsIAAABmsg5TaSCJnKkiVTSRDQRTWQ0mkglA0wywCRNJMkGAgBAgCZyThOpoIkcaSKVNBFNRBMZjSZSyQCTDDBJE0mygQAAAADcyAbEjKkPbkWKUQAAAABJRU5ErkJggg=="
          />
        </div>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <footer>
        <div className="footer-container">
          {" "}
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
