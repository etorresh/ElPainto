import "./Matches.css";

function Matches(props) {
  console.log(props.colors[props.matches[0][0]][props.matches[0][1]]);
  return (
    <div className="matches-wrap">
      <div
        className="matches-background"
        style={{
          backgroundColor:
            "#" + props.colors[props.matches[0][0]][props.matches[0][1]].hex,
        }}
      ></div>
    </div>
  );
}

export default Matches;
