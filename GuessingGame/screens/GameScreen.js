import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
import Random from "../utils/Random";
import GuessContainer from "../components/game/GuessContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ playerNumber }) {
  const initialGuess = Random(minBoundary, maxBoundary, playerNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  console.log("🎯 Target Goal: " + playerNumber);

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
        <Text>Higher or lower?</Text>
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
  },
  button: {
    flex: 1,
  },
});
