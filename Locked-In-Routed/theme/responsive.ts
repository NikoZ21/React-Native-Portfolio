import { Dimensions, StatusBar, useWindowDimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

console.log(StatusBar.currentHeight);

const statusBarHeight = StatusBar.currentHeight || 0;
const tabBarHeight = 66;

// console.log("Screen...", screenWidth, screenHeight);
// console.log("Window...", width, height);

// console.log("Logging...", width, height);

const baseWidth = 448;
const baseHeight = 997 - statusBarHeight - tabBarHeight;

console.log(baseHeight);

const scaleWidth = (size: number) => (width / baseWidth) * size;
const scaleHeight = (size: number) => (height / baseHeight) * size;

const tabBarHeightRescaled = scaleHeight(tabBarHeight);

const typography = {
  fontSize: {
    xs: scaleWidth(12),
    sm: scaleWidth(14),
    md: scaleWidth(16),
    md2: scaleWidth(18),
    lg: scaleWidth(20),
    lg2: scaleWidth(22),
    xl: scaleWidth(24),
    xl2: scaleWidth(26),
    xxl: scaleWidth(28),
    xxxl: scaleWidth(30),
  },
};

export { tabBarHeightRescaled };
export { scaleHeight };
export { scaleWidth };
export { typography };
