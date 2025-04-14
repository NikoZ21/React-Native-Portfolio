import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, {
  Circle,
  LinearGradient,
  Defs,
  Stop,
  Text as SvgText,
  RadialGradient,
} from "react-native-svg";

const SIZE = 300;
const STROKE_WIDTH = 20;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;

export default function SelectedTask() {
  return (
    <View style={styles.container}>
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#B0F8C2" />
            <Stop offset="100%" stopColor="#1D6013" />
          </LinearGradient>
          <RadialGradient
            id="radialGrad"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor="#B0F8C2" />
            <Stop offset="100%" stopColor="#1D6013" />
          </RadialGradient>
        </Defs>

        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke="#0E330F"
          fill={"transparent"}
        />
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE_WIDTH}
          stroke="url(#radialGrad)"
          fill="transparent"
          strokeDasharray={`${Math.PI * RADIUS} ${Math.PI * RADIUS}`}
          strokeDashoffset={`${Math.PI * RADIUS * 0.5}`}
        />

        {/* Timer text */}
        <SvgText
          x={SIZE / 2}
          y={SIZE / 2 + 10}
          fill="white"
          fontSize="40"
          fontWeight="bold"
          textAnchor="middle"
        >
          22:10
        </SvgText>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
