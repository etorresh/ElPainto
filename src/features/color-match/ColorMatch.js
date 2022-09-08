import "./ColorMatch.css";
import ColorLabel from "../shared/label/ColorLabel";
import ColorMath from "../../core/utils/color-math";

function ColorMatch(props) {
  const selectedColor = {};
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
        ></ColorLabel>
      </div>
      <div></div>
    </div>
  );
}

export default ColorMatch;
