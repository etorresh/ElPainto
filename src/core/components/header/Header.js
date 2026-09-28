import "./Header.css";
import img_logo from "../../../assets/elpainto64.webp";

function Header() {
  return (
    <div className="header">
      <div className="title-wrap">
        <img className="logo" src={img_logo} alt="El Painto Logo"></img>
        <h1 className="title">El Painto</h1>
      </div>
    </div>
  );
}

export default Header;
