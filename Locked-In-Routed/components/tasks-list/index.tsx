import { View, StyleSheet, FlatList } from "react-native";

import TaskActionsMenu from "./tasksListActionsMenu";
import Task from "../Task";

const tasks = [
  { key: 1, title: "Workout", timer: "20:00" },
  { key: 2, title: "Eat", timer: "25:00" },
  { key: 3, title: "Shower", timer: "30:00" },
  { key: 4, title: "Meditate", timer: "05:00" },
  { key: 5, title: "Make a list of goals", timer: "10:00" },
  { key: 6, title: "Take a power nap", timer: "49:00" },
  { key: 7, title: "Brainstorm", timer: "13:00" },
  { key: 8, title: "Sleep", timer: "60:00" },
];

export default function TasksList() {
  return (
    <View style={styles.container}>
      <TaskActionsMenu />
      <View style={[styles.tasksList]}>
        <FlatList
          data={tasks}
          renderItem={(item) => (
            <Task title={item.item.title} timer={item.item.timer} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  tasksList: {
    marginTop: 16,
  },
  text: {
    fontSize: 18,
  },
});
