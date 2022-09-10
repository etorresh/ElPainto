import { useEffect, useState, useMemo } from "react";
import ColorLabel from "../../shared/label/ColorLabel";
import "./Matches.css";

function Matches(props) {
  const [shownMatch, setShownMatch] = useState(0);
  const match = useMemo(() => {
    return props.colors[props.matches[shownMatch][0]][
      props.matches[shownMatch][1]
    ];
  }, [shownMatch]);
  function clickHandle(value) {
    if (shownMatch + value === props.matches.length) {
      setShownMatch(0);
    } else if (shownMatch + value === -1) {
      return;
    } else {
      setShownMatch(shownMatch + value);
    }
  }
  return (
    <div className="matches-wrap">
      <div
        className="matches-background"
        style={{
          backgroundColor: "#" + match.hex,
        }}
      >
        <div className="controls">
          <p
            className="arrow"
            onClick={() => clickHandle(-1)}
            style={{
              opacity: shownMatch === 0 ? "0" : "1",
              cursor: shownMatch === 0 ? "default" : "pointer",
            }}
          >
            {"<"}
          </p>
          <ColorLabel
            label={match.label}
            name={match.name}
            company={props.matches[shownMatch][0]}
            delta={props.matches[shownMatch][2]}
          ></ColorLabel>
          <p
            className="arrow"
            onClick={() => clickHandle(1)}
            style={{
              opacity: shownMatch === props.matches.length - 1 ? "0" : "1",
              cursor:
                shownMatch === props.matches.length - 1 ? "default" : "pointer",
            }}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Matches;
