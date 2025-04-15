import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TaskTypeIndicator({ title = "Workout" }) {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/images/task-icon.png")} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  text: {
    marginLeft: 8,
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: "#FFF",
  },
});
