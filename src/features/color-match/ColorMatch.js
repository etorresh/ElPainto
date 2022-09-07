import "./ColorMatch.css";
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
    ></div>
  );
}

export default ColorMatch;
