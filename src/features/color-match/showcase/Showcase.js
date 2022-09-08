import { useEffect, useState } from "react";
import "./Showcase.css";

const companies = [
  "Avery",
  "Behr",
  "Benjamin Moore",
  "Colorhouse",
  "DIC",
  "Dunn Edwards",
  "Dutch Boy",
  "Farrow & Ball",
  "HKS",
  "Hallman Lindsay",
  "IKEA",
  "Kilz",
  "Kobra",
  "Matthews",
  "Neenah Paper Co.",
  "PPG",
  "RAL",
  "Sherwin Williams",
  "TOYO",
  "TRUMATCH",
  "Valspar",
  "Vista",
];

function Showcase() {
  const [selectedCompanies, setSelectedCompanies] = useState(
    new Array(22).fill(false)
  );
  return (
    <div className="options-wrap">
      <div className="options-background">
        {companies.map((company, index) => (
          <label className="container" key={company}>
            {company}
            <input
              type="checkbox"
              onChange={() =>
                setSelectedCompanies((prev) => {
                  const newSelectedCompanies = [...prev];
                  newSelectedCompanies[index] = !prev[index];
                  return newSelectedCompanies;
                })
              }
            ></input>
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
      <button className="options-button">Start Search</button>
    </div>
  );
}

export default Showcase;
