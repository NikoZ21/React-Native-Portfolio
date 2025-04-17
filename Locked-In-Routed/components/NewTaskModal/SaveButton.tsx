import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { scaleHeight, scaleWidth, typography } from "../../theme/responsive";
import { LinearGradient } from "expo-linear-gradient";

export default function SaveButton() {
  return (
    <LinearGradient
      colors={["rgba(22, 79, 24, 1)", "rgb(32, 131, 35)"]}
      style={[styles.outerContainer, { borderRadius: 25, padding: 1 }]}
    >
      <LinearGradient
        colors={["#006400", "#003C00"]}
        style={[styles.innerContainer, { borderRadius: 25 }]}
      >
        <Pressable
          onPress={() => {
            console.log("Saving Task");
          }}
          style={[styles.button, { borderRadius: 20 }]}
        >
          <Text style={styles.text}>Save Task</Text>
        </Pressable>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: scaleWidth(132),
    height: scaleHeight(37),
    alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    borderRadius: 25,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
  },
  button: {
    // backgroundColor: "#007BFF",
    // padding: 10,
    borderRadius: 25,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: typography.fontSize.md,
    // fontWeight: "bold",
  },
});
