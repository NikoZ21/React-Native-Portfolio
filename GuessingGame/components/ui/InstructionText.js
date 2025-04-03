import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 20,
    fontWeight: "bold",
  },
});
