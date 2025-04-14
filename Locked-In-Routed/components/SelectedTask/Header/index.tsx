import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Status from "./Status";
import BackButton from "./BackButton";

export default function Header() {
  return (
    <View style={styles.container}>
      <BackButton
        onPress={() => {
          console.log("going back");
        }}
      />
      <Text style={styles.title}>Task Start Now</Text>
      <Status />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Rubik",
  },
});
