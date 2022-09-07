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
      <div className="ref">
        <a href="https://storyset.com/work">Illustrations by Storyset</a>
        <a href="https://icons8.com/">Illustrations and Icons by Icons8</a>
      </div>
    </div>
  );
};

export default Footer;
