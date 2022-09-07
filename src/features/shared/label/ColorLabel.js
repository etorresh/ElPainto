import displayCompany from "../../../core/utils/display-company";
import "./ColorLabel.css";

function ColorLabel(props) {
  return (
    <div className="info-wrap">
      <div>
        <p className="label">
          {props.label} {props.name}
        </p>
        <p className="company">{displayCompany(props.company)}</p>
      </div>
    </div>
  );
}

export default ColorLabel;
