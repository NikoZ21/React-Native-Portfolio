import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function GuessContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
