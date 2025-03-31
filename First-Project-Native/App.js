import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredInputText) {
    setGoals((prevValue) => [
      ...prevValue,
      { text: enteredInputText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setGoals((preValue) => preValue.filter((item) => item.id !== id));
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function cancelAddGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#5e0acc"
        />
        <GoalInput
          isVisible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCancelGoal={cancelAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 10,
  },
  goalsContainer: {
    flex: 4,
  },
});
