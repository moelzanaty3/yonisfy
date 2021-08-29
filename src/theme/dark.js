import defaultColors from "./colors";

const colors = {
  ...defaultColors,

  primary: defaultColors.red,
  primaryDark: defaultColors.blueDark,
  font: "#dddddd",
  fontDark: "#8a8a8a",
  background: "#051e34",
  mainBackground: "#192e40",
  border: "#323234",
  hover: defaultColors.red,
  shadow: defaultColors.gray + "33",
  type: "dark",
};

export default {
  colors: colors,
};
