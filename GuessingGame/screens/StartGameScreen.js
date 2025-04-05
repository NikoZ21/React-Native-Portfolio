import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={styles.rootContainer}>
      <Title style={styles.title}>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>Enter A Number</InstructionText>
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
            <PrimaryButton onPress={resetInputNumberHandler}>
              Reset
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 64,
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: Colors.accent500,
    marginVertical: 10,
    width: 65,
    color: Colors.accent500,
    fontFamily: "lilita-one",
    fontSize: 32,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  title: {
    padding: 15,
  },
});
