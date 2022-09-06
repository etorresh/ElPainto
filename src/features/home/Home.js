import { useState, useEffect } from "react";
import "./Home.css";
import ColorMath from "../../core/utils/color-math";

import Box from "./box/Box";

const colors = require("./../../core/utils/colors.json");

function displayCompany(company) {
  switch (company) {
    case "avery": {
      return "Avery";
    }
    case "behr": {
      return "Behr";
    }
    case "benjamin-moore": {
      return "Benjamin Moore";
    }
    case "colorhouse": {
      return "Colorhouse";
    }
    case "dic": {
      return "DIC";
    }
    case "dunn-edwards": {
      return "Dunn Edwards";
    }
    case "dutch": {
      return "Dutch Boy";
    }
    case "farrow-ball": {
      return "Farrow & Ball";
    }
    case "hks": {
      return "HKS";
    }
    case "hl": {
      return "Hallman Lindsay";
    }
    case "ikea": {
      return "IKEA";
    }
    case "kilz": {
      return "Kilz";
    }
    case "kobra": {
      return "Kobra";
    }
    case "mpc": {
      return "Matthews";
    }
    case "neenah": {
      return "Neenah Paper Co.";
    }
    case "ppg": {
      return "PGG";
    }
    case "ral": {
      return "RAL";
    }
    case "sherwin-williams": {
      return "Sherwin Williams";
    }
    case "toyo": {
      return "TOYO";
    }
    case "trumatch": {
      return "TRUMATCH";
    }
    case "valspar": {
      return "Valspar";
    }
    case "vista": {
      return "Vista";
    }
  }
}

function Home() {
  const [shownColors, setShownColors] = useState([
    { company: "sherwin-williams", index: 1299 },
    { company: "avery", index: 334 },
    { company: "benjamin-moore", index: 800 },
    { company: "behr", index: 3117 },
    { company: "dic", index: 186 },
    { company: "hks", index: 177 },
  ]);
  const [filter, setFilter] = useState("");
  const size = useWindowSize();
  let corners = null;
  let shownSize = 6;
  if (size.width <= 1100) {
    corners = [1, 2, 3, 4, 0, 0];
    shownSize = 4;
  } else {
    corners = [1, 0, 2, 3, 0, 4];
    shownSize = 6;
  }
  useEffect(() => {
    let color_matches = [];
    if (filter === "") {
      color_matches = [
        { company: "sherwin-williams", index: 1299 },
        { company: "avery", index: 334 },
        { company: "benjamin-moore", index: 800 },
        { company: "behr", index: 3117 },
        { company: "dic", index: 186 },
        { company: "hks", index: 177 },
      ];
    } else if (filter.charAt(0) === "(") {
      console.log("it's rgb");
    } else if (filter.charAt(0) === "#") {
      console.log("its hex");
    } else {
      for (let company in colors) {
        for (let index in colors[company]) {
          if (
            colors[company][index].name
              .toLowerCase()
              .includes(filter.toLowerCase())
          ) {
            color_matches.push({ company: company, index: index });
          } 
        }
      }
    }
    setShownColors(color_matches.slice(0, 6));
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
      <div className="box-wrapper">
        {shownColors.slice(0, shownSize).map((color, index) => (
          <Box
            key={color.company + color.index}
            company={displayCompany(color.company)}
            color={colors[color.company][color.index]}
            corner={corners[index]}
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
