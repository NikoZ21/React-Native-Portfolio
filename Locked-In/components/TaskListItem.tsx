import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskListItem({ title = "Title" }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View>
          <View style={styles.task}>
            <Ionicons
              name="document-outline"
              size={15}
              color="white"
              style={styles.taskIcon}
            />
            <Text style={styles.taskTitle}>{title}</Text>
          </View>
          <View style={styles.clock}>
            <Ionicons
              name="time-outline"
              size={15}
              color="white"
              style={styles.clockIcon}
            />
            <Text style={styles.clockTitle}>Today</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSide}>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 67,
    backgroundColor: "#252525d4",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  leftSide: {
    //backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 200,
  },
  taskIcon: {},
  taskTitle: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 15,
    width: 176,
    //backgroundColor: "black",
  },
  clock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 67,
  },
  clockIcon: {},
  clockTitle: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
  },

  rightSide: {
    backgroundColor: "red",
  },
});
