import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Title({ title = "Workout" }) {
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
    justifyContent: "space-between",
    width: 200,
  },
  icon: {},
  title: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 15,
    width: 176,
    //backgroundColor: "black",
  },
});
