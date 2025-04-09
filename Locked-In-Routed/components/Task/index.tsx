import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TaskTimer from "./Timer";
import TaskTitle from "./Title";
import TaskDate from "./Date";
import TaskButton from "./Button";

export default function Task({ title = "Workout", timer = "25:00" }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View>
          <TaskTitle title={title} />
          <TaskDate />
        </View>
      </View>
      <View style={styles.rightSide}>
        <TaskTimer timer={timer} />
        <TaskButton>
          <Text style={{ color: "white", fontSize: 10 }}>Start Task</Text>
          <Ionicons name="play" size={10} color="white" />
        </TaskButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 67,
    backgroundColor: "#252525d4",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 11,
  },
  leftSide: {
    //backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },

  rightSide: {
    //backgroundColor: "red",
    alignItems: "flex-end",
  },
});
