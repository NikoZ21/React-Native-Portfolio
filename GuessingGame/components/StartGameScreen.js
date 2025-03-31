import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType="number-pad" />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton>Comfirm</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 30,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#4e0329",
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
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
