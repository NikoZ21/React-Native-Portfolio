import React from "react";
import { View, StyleSheet } from "react-native";

import Header from "./Header";
import Timer from "./Timer";
import OnGoingTaskCard from "./OnGoingTaskCard";
import { scaleHeight } from "../../theme/responsive";

export default function SelectedTask() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.timerContainer}>
        <Timer />
      </View>
      <View style={styles.taskContainer}>
        <OnGoingTaskCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },

  headerContainer: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  timerContainer: {
    flex: 4,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  taskContainer: {
    flex: 2,
    // backgroundColor: "red",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
