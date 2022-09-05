import "./Header.css";
import img_logo from "../../../assets/elpainto64.png";
import img_github from "../../../assets/github.svg";
import img_cv from "../../../assets/curriculum__profile__resume.svg";

function Header() {
  return (
    <div className="header">
      <img className="logo" src={img_logo} alt="El Painto Logo"></img>
      <h1 className="title">El Painto</h1>
      <span className="margin"></span>
      <div className="links">
        <span className="dot"></span>
        <img className="cv" src={img_cv} alt="link to resume"></img>
        <span className="dot"></span>
        <img
          className="github"
          src={img_github}
          alt="link to source code"
        ></img>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Header;
