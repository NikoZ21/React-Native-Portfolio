import { StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./components/StartGameScreen";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [playerNumber, setPlayerNumber] = useState();

  function pickedNumberHandler(number) {
    setPlayerNumber(number);
  }

  let screen = <StartGameScreen onNumberPick={pickedNumberHandler} />;

  if (playerNumber) screen = <GameScreen />;

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
