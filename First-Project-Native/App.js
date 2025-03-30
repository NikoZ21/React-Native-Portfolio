import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  console.log("Refreshing......");

  const [enteredInput, setEnteredInput] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredInput(enteredText);
  }

  function addGoalHandler() {
    setGoals((prevValue) => [...prevValue, enteredInput]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add New Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: "orange",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "74%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "28%",
    margin: 2,
  },
  listContainer: {
    flex: 4,
    backgroundColor: "blue",
  },
});
