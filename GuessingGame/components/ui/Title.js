import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 3,
    padding: 8,
  },
});
