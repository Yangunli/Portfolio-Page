import { useNavigate, Link } from "react-router-dom";
import notyet from "../assets/notyet.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="contact">
        <div className="contact-img">
          <Link
            className="contact-img-link
          "
            to="/"
          >
            <img style={{ maxWidth: "100%" }} src={notyet} alt="Not yet" />
          </Link>
        </div>
        <div className="goback">
          <img
            onClick={() => navigate(-1)}
            alt="goback"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="gohome">
          <img
            onClick={() => navigate(-2)}
            alt="goback"
            src="data:image/png;base64,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"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
