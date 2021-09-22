import defaultColors from "./colors";

const colors = {
  ...defaultColors,

  primary: defaultColors.red,
  primaryDark: defaultColors.blueDark,
  font: "#dddddd",
  fontDark: "#8a8a8a",
  background: "#1c1e21",
  mainBackground: "#242526",
  border: "#323234",
  hover: defaultColors.red,
  shadow: defaultColors.gray + "33",
  type: "dark",
};

export default {
  colors: colors,
};
