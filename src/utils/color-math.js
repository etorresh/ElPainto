var dE00 = require("./dE00");

function rgb2lab(rgb) {
  var r = rgb[0] / 255,
    g = rgb[1] / 255,
    b = rgb[2] / 255,
    x,
    y,
    z;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
  z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return { L: 116 * y - 16, A: 500 * (x - y), B: 200 * (y - z) };
}

function hex2rgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return [r, g, b];
}

function rgb2hex(r, g, b) {
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function getDelta(lab1, lab2) {
  var deltaE = new dE00(lab1, lab2);
  return deltaE.getDeltaE();
}

function compareAll(
  colors,
  selectedCompanies,
  selectedColor,
  excludeCompany = null
) {
  const color_matches = [];
  for (let company of selectedCompanies) {
    if (excludeCompany && excludeCompany === company) {
      continue;
    }
    for (let i in colors[company]) {
      if (colors[company][i]["hex"] === selectedColor) {
        color_matches.push([company, i, 0]);
      }
    }
  }
  // a length of 0 means that it didn't find a perfect a match
  if (color_matches.length === 0) {
    for (let company of selectedCompanies) {
      if (excludeCompany && excludeCompany === company) {
        continue;
      }
      for (let i in colors[company]) {
        color_matches.push([
          company,
          i,
          getDelta(
            rgb2lab(hex2rgb(selectedColor)),
            rgb2lab(hex2rgb(colors[company][i]["hex"]))
          ),
        ]);
      }
    }
    color_matches.sort(function (a, b) {
      return a[2] - b[2];
    });
  }
  return color_matches.slice(0, 5);
}

const ColorMath = {
  rgb2hex: rgb2hex,
  hex2rgb: hex2rgb,
  compareAll: compareAll,
};

export default ColorMath;
