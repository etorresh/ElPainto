import { useState, useEffect } from "react";
import "./Home.css";
import ColorMath from "../../core/utils/color-math";
import ColorsBox from "../colors-box/ColorsBox";
import ColorMatch from "../color-match/ColorMatch";

const colors = require("./../../core/utils/colors.json");

function Home() {
  const [filter, setFilter] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  function handleClick(color) {
    setSelectedColor(color);
  }

  useEffect(() => {
    if (selectedColor) {
      setSelectedColor();
    }
  }, [filter]);

  return (
    <div className="home">
      <div className="description">
        <h2>
          Match <span style={{ color: "#E84393" }}>colors</span> between
        </h2>
        <h2>paint companies, or find paint colors</h2>
        <h2>by RGB/HEX code.</h2>
      </div>
      <div className="search-wrap">
        <input
          autoFocus
          className="search"
          type="text"
          onChange={(event) => setFilter(event.target.value)}
        ></input>
        <div className="examples-root" style={{ display: "flex" }}>
          <div className="examples-wrap">
            <p className="example" style={{ fontWeight: "800" }}>
              Search examples:{" "}
            </p>
            <p className="example">● Agreeable Gray</p>
            <p className="example">● 7029</p>
          </div>
          <div
            className="examples-wrap"
            style={{ marginTop: "19px", marginLeft: "15px" }}
          >
            <p className="example">● #D1CBC1</p>
            <p className="example">● (209,203,193)</p>
          </div>
        </div>
      </div>
      {!selectedColor ? (
        <ColorsBox
          filter={filter}
          colors={colors}
          onClick={(color) => handleClick(color)}
        ></ColorsBox>
      ) : (
        <ColorMatch colors={colors} selectedColor={selectedColor}></ColorMatch>
      )}
    </div>
  );
}
export default Home;
