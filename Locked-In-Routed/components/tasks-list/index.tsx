import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, ScrollView } from "react-native";

import TaskActionsMenu from "./tasksListActionsMenu";
import Task from "../Task";
import CreateNewButton from "./CreateNewButton";

export default function TasksList() {
  return (
    <View style={styles.container}>
      <TaskActionsMenu />
      <View style={[styles.tasksList, { overflow: "hidden" }]}>
        <ScrollView style={{ height: 500, backgroundColor: "red" }}>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </ScrollView>
      </View>
      <View style={styles.fixedBottom}>
        <LinearGradient
          colors={["#1B1B1B", "#FFFFFF", "#1B1B1B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 2,
            width: "100%",
            marginVertical: 20,
          }}
        />
        <CreateNewButton />
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
    //backgroundColor: "green",
  },
  fixedBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    //paddingBottom: 16,
    backgroundColor: "transparent",
  },
  tasksList: {
    marginTop: 16,
  },
  text: {
    fontSize: 18,
  },
});
