import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ onAddGoal, isVisible, onCancelGoal }) {
  const [enteredInput, setEnteredInput] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredInput(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredInput);
    setEnteredInput("");
    onCancelGoal();
  }

  function cancelAddGoalHandler() {
    onCancelGoal();
    setEnteredInput("");
  }

  return (
    <Modal visible={isVisible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add New Goal"
          onChangeText={goalInputHandler}
          value={enteredInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" color="#5e0acc" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Close"
              color="#f31282"
              onPress={cancelAddGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "20%",
    margin: 10,
  },
  image: {
    height: 130,
    width: 130,
    marign: 20,
  },
});
