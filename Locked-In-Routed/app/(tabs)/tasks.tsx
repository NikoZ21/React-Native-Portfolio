import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TasksHeader from "../../components/TasksHeader";
import SearchTaskInput from "../../components/SearchTaskInput";
import TasksList from "../../components/tasks-list";

export default function Tasks() {
  return (
    <LinearGradient
      colors={["#193117", "#1E1E1E"]}
      style={styles.rootContainer}
    >
      <TasksHeader />
      <SearchTaskInput />
      <TasksList />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
