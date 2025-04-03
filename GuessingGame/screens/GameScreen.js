import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import Title from "../components/ui/Title";
import Random from "../utils/Random";
import GuessContainer from "../components/game/GuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ playerNumber, onGameOver }) {
  const initialGuess = Random(1, 100, playerNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  console.log("🎯 Target Goal: " + playerNumber);

  useEffect(() => {
    if (currentGuess === playerNumber) {
      onGameOver();
    }
  }, [currentGuess, playerNumber, onGameOver]);

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
    console.log("New rando number: " + randNumber);
    setCurrentGuess(randNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <GuessContainer>{currentGuess}</GuessContainer>
      <View>
        <Card>
          <InstructionText>Higher or lower?</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                +
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                -
              </PrimaryButton>
            </View>
          </View>
        </Card>
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
});
