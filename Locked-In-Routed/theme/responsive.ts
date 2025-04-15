import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const baseWidth = 448;
const baseHeight = 997;

const scaleWidth = (size: number) => (width / baseWidth) * size;
const scaleHeight = (size: number) => (height / baseHeight) * size;

const typography = {
  fontSize: {
    xs: scaleWidth(12),
    sm: scaleWidth(14),
    md: scaleWidth(16),
    md2: scaleWidth(18),
    lg: scaleWidth(20),
    lg2: scaleWidth(22),
    xl: scaleWidth(24),
    xxl: scaleWidth(30),
  },
};

export { scaleHeight };
export { scaleWidth };
export { typography };
