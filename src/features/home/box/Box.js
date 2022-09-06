import "./Box.css";

function Box(props) {
  const roundBox = () => {
    switch (props.corner) {
      case 1:
        return "5% 0 0 0";
      case 2:
        return "0 5% 0 0";
      case 3:
        return "0 0 0 5%";
      case 4:
        return "0 0 5% 0";
    }
  };

  return (
    <div
      className="box"
      style={{
        backgroundColor: "#" + props.color.hex,
        borderRadius: roundBox(),
      }}
    >
      <div className="info-wrap">
        <div>
          <p className="label">
            {props.color.label} {props.color.name}
          </p>
          <p className="company">{props.company}</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
