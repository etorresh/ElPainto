import { useState, useEffect } from "react";
import "./ColorsBox.css";
import displayCompany from "../../core/utils/display-company";

import Box from "./box/Box";

function ColorBox(props) {
  const [shownColors, setShownColors] = useState([]);
  const size = useWindowSize();
  const [corners, setCorners] = useState([]);
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    if (
      (size.width <= 1100 && smallScreen) ||
      (size.width > 1100 && !smallScreen)
    ) {
      return;
    } else {
      setSmallScreen((prev) => !prev);
    }
  }, [size]);
  useEffect(() => {
    let newCorners;
    if (smallScreen) {
      newCorners = [1, 2, 3, 4, 0, 0];
      if (shownColors.length < 4) {
        newCorners[1] = 5;
        newCorners[2] = 7;
      }
      if (shownColors.length < 3) {
        newCorners[0] = 8;
      }
      if (size.width <= 550) {
        newCorners[0] = 10;
        newCorners[1] = 11;
        newCorners[2] = 11;
        newCorners[3] = 7;
      }
    } else {
      newCorners = [1, 0, 2, 3, 0, 4];
      if (shownColors.length < 6) {
        newCorners[2] = 5;
        newCorners[4] = 6;
      }
      if (shownColors.length < 5) {
        newCorners[3] = 7;
      }
      if (shownColors.length < 4) {
        newCorners[0] = 8;
      }
    }
    if (shownColors.length < 3) {
      newCorners[1] = 5;
    }
    if (shownColors.length < 2) {
      newCorners[0] = 9;
    }
    setCorners([...newCorners]);
  }, [shownColors, smallScreen]);
  useEffect(() => {
    let foundColors = [];
    if (props.filter === "") {
      foundColors = [
        { company: "sherwin-williams", index: "1299" },
        { company: "avery", index: "334" },
        { company: "benjamin-moore", index: "800" },
        { company: "behr", index: "3117" },
        { company: "dic", index: "186" },
        { company: "hks", index: "177" },
      ];
    } else if (props.filter.charAt(0) === "(") {
      let rgb = props.filter.replace("(", "").replace(")", "").split(",");
      // SET SELECTED COLOR
      //   setSelectedColor({
      //     hex:
      //       "#" +
      //       ColorMath.rgb2hex(
      //         parseInt(rgb[0]),
      //         parseInt(rgb[1]),
      //         parseInt(rgb[2])
      //       ),
      //   });
    } else if (props.filter.charAt(0) === "#") {
      // SET SELECTED COLOR
      //   setSelectedColor({ hex: props.filter });
    } else {
      let matches = [];
      for (let company in props.colors) {
        for (let index in props.colors[company]) {
          if (
            props.colors[company][index].name
              .toString()
              .toLocaleLowerCase()
              .includes(props.filter.toLocaleLowerCase()) ||
            props.colors[company][index].label
              .toString()
              .toLocaleLowerCase()
              .includes(props.filter.toLocaleLowerCase())
          ) {
            matches.push({ company: company, index: index });
          }
        }
      }
      for (let [i, val] of matches.entries()) {
        if (
          props.colors[val.company][val.index].name
            .toString()
            .toLocaleLowerCase() === props.filter.toLocaleLowerCase() ||
          props.colors[val.company][val.index].label
            .toString()
            .toLocaleLowerCase() === props.filter.toLocaleLowerCase()
        ) {
          foundColors.push(val);
          matches.splice(i, 1);
        }
      }
      if (foundColors.length < 6) {
        foundColors = [...foundColors, ...matches];
      }
    }
    setShownColors(foundColors.slice(0, 6));
  }, [props.filter]);
  return (
    <div className="box-wrapper">
      {shownColors.slice(0, smallScreen ? 4 : 6).map((color, index) => (
        <Box
          onClick={() => props.onClick(color)}
          key={color.company + color.index}
          company={displayCompany(color.company)}
          color={props.colors[color.company][color.index]}
          corner={corners[index]}
        ></Box>
      ))}
    </div>
  );
}
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
export default ColorBox;
