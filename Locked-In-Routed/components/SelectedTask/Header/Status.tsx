import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scaleHeight, scaleWidth, typography } from "../../../theme/responsive";

export default function Status() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Work</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FD5B71",
    borderRadius: scaleWidth(6),
    paddingVertical: scaleHeight(5),
    paddingHorizontal: scaleWidth(8),
  },
  text: {
    fontSize: typography.fontSize.sm,
    color: "#FD5B71",
    fontWeight: "500",
  },
});
