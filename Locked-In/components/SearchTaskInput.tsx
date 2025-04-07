import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchTaskInput() {
  return (
    <View style={styles.searchTaskInput}>
      <Ionicons name="search" size={18} color="#888" style={styles.iconLeft} />
      <TextInput
        placeholder="Search Task..."
        placeholderTextColor="#888"
        style={styles.input}
      />
      <Ionicons
        name="chevron-expand-outline"
        size={20}
        color="white"
        style={styles.iconRight}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchTaskInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    width: 350,
    paddingHorizontal: 10,
    height: 40,
    paddingRight: 18,
    paddingLeft: 18,
    borderRadius: 8,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: "auto",
  },
  input: {
    flex: 1,
    color: "#fff",
  },
});
