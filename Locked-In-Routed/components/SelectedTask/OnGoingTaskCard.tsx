import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "../Task";
import { scaleHeight, typography } from "../../theme/responsive";

export default function OnGoingTaskCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OnGoing Task</Text>
      <Task />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: scaleHeight(40),
    // backgroundColor: "#1E1E1E",
  },
  text: {
    fontSize: typography.fontSize.md,
    fontWeight: "500",
    color: "#CCCCCC",
    marginBottom: scaleHeight(15),
  },
});
