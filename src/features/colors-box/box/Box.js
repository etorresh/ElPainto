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
      case 5:
        return "0 5% 5% 0";
      case 6:
        return "0 0 5% 0";
      case 7:
        return "0 0 5% 5%";
      case 8:
        return "5% 0 0 5%";
      case 9:
        return "5% 5% 5% 5%";
      case 10:
        return "5% 5% 0 0";
      case 11:
        return "0";
    }
  };

  return (
    <div
      onClick={props.onClick}
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
