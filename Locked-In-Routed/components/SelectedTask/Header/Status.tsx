import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 12,
    color: "#FD5B71",
    fontWeight: "500",
  },
});
