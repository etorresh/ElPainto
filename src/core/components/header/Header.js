import "./Header.css";
import img_logo from "../../../assets/elpainto64.webp";
import img_github from "../../../assets/github.svg";
import img_cv from "../../../assets/curriculum__profile__resume.svg";

function Header() {
  return (
    <div className="header">
      <div className="title-wrap">
        <img className="logo" src={img_logo} alt="El Painto Logo"></img>
        <h1 className="title">El Painto</h1>
      </div>
      <div className="links">
        <span id="dot-1" className="dot"></span>
        <a href="https://www.etorresh.com/" target="_blank">
          <img className="cv" src={img_cv} alt="link to resume"></img>
        </a>
        <span className="dot"></span>
        <a
          href="https://github.com/etorresh/color-cross-reference"
          target="_blank"
        >
          <img
            className="github"
            src={img_github}
            alt="link to source code"
          ></img>
        </a>
        <span id="dot-3" className="dot"></span>
      </div>
    </div>
  );
}

export default Header;
