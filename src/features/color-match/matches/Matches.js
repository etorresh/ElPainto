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
  return (
    <div className="matches-wrap">
      <div
        className="matches-background"
        style={{
          backgroundColor: "#" + match.hex,
        }}
      >
        <p className="arrow">{"<"}</p>
        <ColorLabel
          label={match.label}
          name={match.name}
          company={props.matches[shownMatch][0]}
        ></ColorLabel>
        <p className="arrow">{">"}</p>
      </div>
    </div>
  );
}

export default Matches;
