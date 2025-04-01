import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function StartGameScreen({ onNumberPick }) {
  const [inputNumber, setInputNumber] = useState("");

  function setInputNumberHandler(input) {
    setInputNumber(input);
  }

  function resetInputNumberHandler() {
    setInputNumber("");
  }

  function confirmInputNumberHandler() {
    const number = parseInt(inputNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid Number",
        "Input is not a valid number, it should be above 0 and below or equal to 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputNumberHandler,
          },
        ]
      );
      return;
    }

    console.log("Valid Number");
    onNumberPick(number);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={setInputNumberHandler}
        value={inputNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputNumberHandler}>
            Comfirm
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputNumberHandler}>Reset</PrimaryButton>
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
