import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Title({ title = "Workout Online" }) {
  return (
    <View style={styles.root}>
      <Ionicons
        name="document-outline"
        size={15}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {},
  title: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 15,
    marginLeft: 5,
  },
});
