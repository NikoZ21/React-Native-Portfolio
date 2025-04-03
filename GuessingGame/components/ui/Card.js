import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary700,
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 30,
    padding: 16,
    borderRadius: 6,
    elevation: 8,
  },
});
