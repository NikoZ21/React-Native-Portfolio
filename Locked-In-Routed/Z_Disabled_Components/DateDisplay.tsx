import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DateDisplay() {
  return (
    <View style={styles.container}>
      <Ionicons name="time-outline" size={20} color="white" />
      <Text style={styles.text}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  text: {
    marginLeft: 8,
    fontSize: 14,
    color: "white",
  },
});
