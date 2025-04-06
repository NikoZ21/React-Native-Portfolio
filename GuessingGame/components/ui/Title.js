import { Text, StyleSheet } from "react-native";

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "lilita-one",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 3,
    padding: 12,
  },
});
