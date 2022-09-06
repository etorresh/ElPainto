import { useState, useEffect } from "react";
import "./Home.css";
import ColorMath from "../../core/utils/color-math";

import Box from "./box/Box";

const colors = require("./../../core/utils/colors.json");

function Home() {
  const [shownColors, setShownColors] = useState([
    { company: "sherwin-williams", index: 1299 },
    { company: "avery", index: 334 },
    { company: "benjamin-moore", index: 800 },
    { company: "behr", index: 3117 },
    { company: "dic", index: 186 },
    { company: "hks", index: 177 },
  ]);
  const size = useWindowSize();
  let corners = null;
  if (size.width <= 1100) {
    corners = [1, 2, 3, 4, 0, 0];
  } else {
    corners = [1, 0, 2, 3, 0, 4];
  }
  return (
    <div className="home">
      <div className="description">
        <h2>
          Match <span style={{ color: "#E84393" }}>colors</span> between
        </h2>
        <h2>paint companies, or find paint colors</h2>
        <h2>by RGB/HEX code.</h2>
      </div>
      <input autoFocus className="search" type="text"></input>
      <div className="box-wrapper">
        {shownColors.map((color) => (
          <Box
            key={color.company + color.index}
            company={color.company}
            color={colors[color.company][color.index]}
          ></Box>
        ))}
      </div>
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default Home;
