import "./ColorMatch.css";
import ColorLabel from "../shared/label/ColorLabel";
function ColorMatch(props) {
  const selectedColor = {};
  if (props.selectedColor.hasOwnProperty("hex")) {
    selectedColor.company = "Custom Color";
    selectedColor.label = props.selectedColor.hex;
    selectedColor.name = "";
    selectedColor.hex = selectedColor.label.substring(1);
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
          company={props.selectedColor.company}
          label={selectedColor.label}
          name={selectedColor.name}
        ></ColorLabel>
      </div>
      <div></div>
    </div>
  );
}

export default ColorMatch;
