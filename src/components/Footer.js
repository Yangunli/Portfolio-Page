import twitter from "../assets/Twitter.svg";
import linkedin from "../assets/LinkedIn.svg";
import github from "../assets/Octocat.svg";

const Footer = () => {
  return (
    <div className="ref-container">
      <div className="ref-main">
        <div className="ref-a">2022 © Yangunli</div>
        <div className="footer-icons">
          <a href="https://twitter.com/yanyangirl_tw">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/wei-yi-li-898baa234/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Yangunli">
            <img src={github} alt="" />
          </a>
        </div>
      </div>

      <hr />
      <div
        style={{
          fontSize: "0.5rem",
          display: "flex",
          width: "100%",
          gap: "1em",
          color: "black",
        }}
      >
        <a href="https://storyset.com/work">Illustrations by Storyset</a>
        <br />
        <br />
        <a href="https://icons8.com/">Illustrations and Icons by Icons8</a>
      </div>
    </div>
  );
};

export default Footer;
