import displayCompany from "../../../core/utils/display-company";
import "./ColorLabel.css";

function ColorLabel(props) {
  return (
    <div
      className="info-wrap"
      style={{
        marginBottom: props.margin ? "20px" : "0px",
        height: props.delta ? "85px" : "55px",
      }}
    >
      <p className="label">
        {props.label} {props.name}
      </p>
      <p className="company">{displayCompany(props.company)}</p>
      {props.delta && (
        <p
          className="delta"
          style={{
            color:
              props.delta <= 1 ? "green" : props.delta <= 4 ? "orange" : "red",
          }}
        >
          {" "}
          Delta: {props.delta.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default ColorLabel;
