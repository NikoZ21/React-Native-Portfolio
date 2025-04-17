import { StyleSheet, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TasksHeader from "../../../components/TasksHeader";
import SearchTaskInput from "../../../components/SearchTaskInput";
import CreateNewButton from "../../../components/TasksList/CreateNewButton";
import TasksList from "../../../components/TasksList";
import NewTaskModal from "../../../components/NewTaskModal";

export default function Tasks() {
  console.log(Dimensions.get("window").width);
  console.log(Dimensions.get("window").height);

  return (
    <LinearGradient
      colors={["#193117", "#1E1E1E"]}
      style={styles.rootContainer}
    >
      <NewTaskModal />
      <View style={styles.top}>
        <TasksHeader />
        <SearchTaskInput />
      </View>
      <View style={styles.bottom}>
        <TasksList />
      </View>
      <View
        style={{
          width: "90%",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <LinearGradient
          colors={["#1B1B1B", "#FFFFFF", "#1B1B1B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 2,
            width: "100%",
            position: "absolute",
            top: "40%",
          }}
        />
        <CreateNewButton />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  bottom: {
    flex: 4,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});
