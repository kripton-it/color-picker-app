import chroma from "chroma-js";

/* const col = {
  paletteName: "Material UI Colors",
  id: "material-ui-colors",
  emoji: "🎨",
  colors: [
    { name: "red", color: "#F44336" },
    { name: "pink", color: "#E91E63" },
    { name: "purple", color: "#9C27B0" },
    { name: "deeppurple", color: "#673AB7" },
    { name: "indigo", color: "#3F51B5" },
    { name: "blue", color: "#2196F3" },
    { name: "lightblue", color: "#03A9F4" },
    { name: "cyan", color: "#00BCD4" },
    { name: "teal", color: "#009688" },
    { name: "green", color: "#4CAF50" },
    { name: "lightgreen", color: "#8BC34A" },
    { name: "lime", color: "#CDDC39" },
    { name: "yellow", color: "#FFEB3B" },
    { name: "amber", color: "#FFC107" },
    { name: "orange", color: "#FF9800" },
    { name: "deeporange", color: "#FF5722" },
    { name: "brown", color: "#795548" },
    { name: "grey", color: "#9E9E9E" },
    { name: "bluegrey", color: "#607D8B" }
  ]
} */

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const getRange = hexColor => {
  const endColor = "#ffffff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    endColor
  ];
};

const generateScale = (hexColor, numberOfColors) =>
  chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);

const generateColor = ({ name, color }, index) => {
  const scale = generateScale(color, levels.length).reverse();
  const newColor = {
    name: `${name} ${levels[index]}`,
    id: name.toLowerCase().replace(/ /g, "-"),
    hex: scale[index],
    rgb: chroma(scale[index]).css(),
    rgba: chroma(scale[index])
      .css()
      .replace("rgb", "rgba")
      .replace(")", ",1.0)")
  };
  return newColor;
};

export const generatePalette = ({ paletteName, id, emoji, colors }) => {
  const newColors = {};
  levels.forEach((level, index) => {
    if (level !== 50) {
      newColors[level] = colors.map(color => generateColor(color, index));
    }
  });
  const newPalette = {
    paletteName,
    id,
    emoji,
    colors: newColors
  };

  return newPalette;
};

export const extractShadesFromPalette = (palette, id) => {
  return levels.filter(level => level !== 50).map(level =>
    palette.colors[level].find(color => color.id === id)
  );
};
