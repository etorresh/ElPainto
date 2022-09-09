import "./ColorMatch.css";
import ColorLabel from "../shared/label/ColorLabel";
import ColorMath from "../../core/utils/color-math";
import Showcase from "./showcase/Showcase";
import { useState } from "react";

function ColorMatch(props) {
  const selectedColor = {};
  const [matches, setMatches] = useState();
  function startSearch(companies) {
    const parsedCompanies = [];
    let i = 0;
    for (let key in props.colors) {
      if (companies[i]) {
        parsedCompanies.push(key);
      }
      i++;
    }
    setMatches(
      ColorMath.compareAll(props.colors, parsedCompanies, selectedColor.hex)
    );
  }
  if (props.selectedColor.hasOwnProperty("hex")) {
    selectedColor.company = "custom";
    selectedColor.name = "";
    selectedColor.label = props.selectedColor.hex;
    selectedColor.hex = props.selectedColor.hex.substring(1);
  } else if (props.selectedColor.hasOwnProperty("rgb")) {
    const rgb = [0, 0, 0];
    let colorIndex = 0;
    for (let value of props.selectedColor.rgb) {
      if (!Number.isNaN(parseInt(value))) {
        rgb[colorIndex] = parseInt(value);
      }
      colorIndex++;
    }
    selectedColor.company = "custom";
    selectedColor.name = "";
    selectedColor.label = rgb[0] + " " + rgb[1] + " " + rgb[2];
    selectedColor.hex = ColorMath.rgb2hex(rgb[0], rgb[1], rgb[2]);
  } else {
    selectedColor.company = props.selectedColor.company;
    selectedColor.label =
      props.colors[props.selectedColor.company][
        props.selectedColor.index
      ].label;
    selectedColor.name =
      props.colors[props.selectedColor.company][props.selectedColor.index].name;
    selectedColor.hex =
      props.colors[props.selectedColor.company][props.selectedColor.index].hex;
  }
  return (
    <div
      className="match-wrap"
      style={{
        backgroundColor: "#" + selectedColor.hex,
      }}
    >
      <div className="selected-label">
        <ColorLabel
          company={selectedColor.company}
          label={selectedColor.label}
          name={selectedColor.name}
          margin={false}
        ></ColorLabel>
      </div>
      <Showcase onClick={startSearch}></Showcase>
    </div>
  );
}

export default ColorMatch;
