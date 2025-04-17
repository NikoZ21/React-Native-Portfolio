import { Text, StyleSheet, Pressable } from "react-native";

export default function CreateNewButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Create New</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",

    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    fontSize: 15,
  },
});
