import { View, StyleSheet, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TasksHeader from "../../components/TasksHeader";
import SearchTaskInput from "../../components/SearchTaskInput";

export default function Tasks() {
  return (
    <LinearGradient
      colors={["#193117", "#1E1E1E"]}
      style={styles.rootContainer}
    >
      <TasksHeader />
      <SearchTaskInput />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});
