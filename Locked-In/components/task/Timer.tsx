import { View, StyleSheet, Text } from "react-native";

export default function Timer({ timer = "25:00" }) {
  return (
    <View style={styles.timer}>
      <Text style={styles.text}>{timer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    width: 50,
    height: 20,
    backgroundColor: "rgba(255, 255, 255, 0.29)",
    justifyContent: "center",
    borderRadius: 2,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
});
