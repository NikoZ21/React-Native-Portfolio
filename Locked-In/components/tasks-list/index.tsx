import { View, Text, StyleSheet } from "react-native";
import TaskActionsMenu from "./tasksListActionsMenu";
import Task from "../task";

export default function TasksList() {
  return (
    <View style={styles.container}>
      <TaskActionsMenu />
      <View style={styles.tasksList}>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 350,
  },
  tasksList: {
    marginTop: 16,
  },
  text: {
    fontSize: 18,
  },
});
