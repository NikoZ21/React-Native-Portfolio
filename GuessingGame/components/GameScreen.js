import { StyleSheet, Text } from "react-native";

export default function GameScreen() {
  return <Text style={styles.text}>This is Game Screen</Text>;
}

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
  },
});
