import React from "react";
import { View, StyleSheet } from "react-native";
import Timer from "./Timer";
import Header from "./Header";
import Task from "../Task";

export default function SelectedTask() {
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.taskContainer}>
        <Task />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },

  headerContainer: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    flex: 4,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
