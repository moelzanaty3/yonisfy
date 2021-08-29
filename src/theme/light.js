import defaultColors from "./colors";

const colors = {
  ...defaultColors,

  primary: defaultColors.blue,
  primaryDark: defaultColors.blueDark,
  font: "#333334",
  fontDark: "#121213",
  background: "#f4f4f4",
  mainBackground: "#fefefe",
  border: "#DBDDDF",
  hover: defaultColors.blue,
  shadow: defaultColors.gray + "33",
  type: "light",
};

export default {
  colors: colors,
};
