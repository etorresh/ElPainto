import "./ColorMatch.css";
import displayCompany from "../../core/utils/display-company";
import ColorLabel from "../shared/label/ColorLabel";
function ColorMatch(props) {
  return (
    <div
      className="match-wrap"
      style={{
        backgroundColor:
          "#" +
          props.colors[props.selectedColor.company][props.selectedColor.index]
            .hex,
      }}
    >
      <ColorLabel
        company={props.selectedColor.company}
        label={
          props.colors[props.selectedColor.company][props.selectedColor.index]
            .label
        }
        name={
          props.colors[props.selectedColor.company][props.selectedColor.index]
            .name
        }
      ></ColorLabel>
    </div>
  );
}

export default ColorMatch;
