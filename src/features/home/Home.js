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
            company={displayCompany(color.company)}
            color={colors[color.company][color.index]}
          ></Box>
        ))}
      </div>
    </div>
  );
}
export default Home;
