import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} />
      <PrimaryButton>Comfirm</PrimaryButton>
      <PrimaryButton>Reset</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#72063c",
    elevation: 8,
  },

  input: {
    borderBottomWidth: 2,
    borderColor: "#ddb52f",
    marginVertical: 10,
    width: "20%",
    color: "#ddb52f",
    fontWeight: "bold",
    fontSize: 32,
  },
});
