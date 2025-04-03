import { StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [playerNumber, setPlayerNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);

  function pickedNumberHandler(number) {
    setPlayerNumber(number);
  }

  function gameOverHandler() {
    setIsGameOver(true);
  }

  let screen = <StartGameScreen onNumberPick={pickedNumberHandler} />;

  if (playerNumber)
    screen = (
      <GameScreen playerNumber={playerNumber} onGameOver={gameOverHandler} />
    );

  if (isGameOver && playerNumber) screen = <GameOverScreen />;

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.safeArea}>{screen}</View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },

  backgroundImage: {
    opacity: 0.2,
  },
});
