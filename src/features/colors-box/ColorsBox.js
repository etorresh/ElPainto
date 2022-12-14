import { useState, useEffect } from "react";
import "./ColorsBox.css";

import Box from "./box/Box";

import ColorMath from "../../core/utils/color-math";

function ColorBox(props) {
  const [shownColors, setShownColors] = useState([]);
  const size = useWindowSize();
  const [corners, setCorners] = useState([]);
  const [screenSize, setScreenSize] = useState(2);
  useEffect(() => {
    if (
      (size.width > 1100 && screenSize === 2) ||
      (size.width <= 1100 && size.width > 550 && screenSize === 1) ||
      (size.width <= 550 && screenSize === 0)
    ) {
      return;
    }
    if (size.width > 1100) {
      setScreenSize(2);
    } else if (size.width > 550) {
      setScreenSize(1);
    } else {
      setScreenSize(0);
    }
  }, [size]);
  useEffect(() => {
    let newCorners;
    if (screenSize > 0) {
      if (screenSize === 1) {
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
    } else {
      newCorners = [10, 0, 0, 7, 0, 0];
      if (shownColors.length < 4) {
        newCorners[2] = 7;
      }
      if (shownColors.length < 3) {
        newCorners[1] = 7;
      }
      if (shownColors.length < 2) {
        newCorners[0] = 9;
      }
    }
    setCorners([...newCorners]);
  }, [shownColors, screenSize]);
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
      const rgb = props.filter
        .replace("(", "")
        .replace(")", "")
        .trim()
        .split(",");
      props.onClick({
        rgb: rgb,
      });
    } else if (props.filter.charAt(0) === "#") {
      props.onClick({ hex: props.filter });
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
      {shownColors.slice(0, screenSize < 2 ? 4 : 6).map((color, index) => (
        <Box
          onClick={() => props.onClick(color)}
          key={color.company + color.index}
          company={color.company}
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
