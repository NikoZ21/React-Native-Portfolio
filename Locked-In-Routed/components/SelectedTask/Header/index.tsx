import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Status from "./Status";
import BackButton from "./BackButton";
import { typography } from "../../../theme/responsive";

export default function Header() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>You Are Locked-In</Text>
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
    fontSize: typography.fontSize.xxl,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Rubik",
  },
});
