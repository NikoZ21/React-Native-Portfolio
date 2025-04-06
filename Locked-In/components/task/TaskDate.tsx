import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskDate() {
  return (
    <View style={styles.clock}>
      <Ionicons
        name="time-outline"
        size={13}
        color="white"
        style={styles.clockIcon}
      />
      <Text style={styles.clockTitle}>Today</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 67,
  },
  clockIcon: {},
  clockTitle: {
    color: "#CCCCCC",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
  },
});
