import { Alert, StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import Random from "../utils/Random";
import GuessContainer from "../components/game/GuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ playerNumber, onGameOver }) {
  const initialGuess = Random(1, 100, playerNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  console.log("🎯 Target Goal: " + playerNumber);

  useEffect(() => {
    if (currentGuess === playerNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, playerNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < playerNumber) ||
      (direction === "greater" && currentGuess > playerNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    console.log("Min: " + minBoundary);
    console.log("Max: " + maxBoundary);

    const randNumber = Random(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(randNumber);
    setGuessRounds((prevGuessRounds) => [randNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <GuessContainer>{currentGuess}</GuessContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons name="add-sharp" size={24} />
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons name="remove" size={24} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.logList}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRounds.length - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 14,
  },
  logList: {
    marginTop: 20,
  },
});
