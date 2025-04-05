import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: "lilita-one",
  },
});
