import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

export default function GradientBorderBox() {
  return (
    <View style={styles.centered}>
      <Svg width={350} height={350}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="350" y2="350">
            <Stop offset="0" stopColor="#164F18" stopOpacity="1" />
            <Stop offset="1" stopColor="#32B537" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="350"
          height="350"
          rx="30"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="5"
        />
      </Svg>
      {/* Content inside the SVG */}
      <View style={styles.innerContent}>
        <Text style={{ color: "#10360B", fontWeight: "bold" }}>
          New Task Modal
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  innerContent: {
    width: 290,
    height: 290,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    // Add your inputs/buttons here!
  },
});
