import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { typography } from "../../../theme/responsive";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <Pressable style={styles.button} onPress={() => router.navigate("tasks")}>
      <Ionicons
        name="arrow-back-outline"
        size={typography.fontSize.xxl}
        color="white"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
