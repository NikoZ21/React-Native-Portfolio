import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Oponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.primary700,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  text: {
    fontFamily: "lilita-one",
    fontSize: 17,
  },
});
