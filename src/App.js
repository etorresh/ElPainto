import "./App.css";
import ColorMath from "./utils/color-math";

const colors = require("./utils/colors");
const selectedCompanies = [
  "avery",
  "sherwin-williams",
  "benjamin-moore",
  "behr",
  "ikea",
  "toyo",
  "trumatch",
  "vista",
  "hks",
];

ColorMath.compareAll(colors, selectedCompanies, "94b2bd");

function App() {
  return <p>Yes</p>;
}

export default App;
