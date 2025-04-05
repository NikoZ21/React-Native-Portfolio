import { StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Colors from "./constants/Colors";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 5000,
  fade: true,
});

export default function App() {
  const [playerNumber, setPlayerNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "lilita-one": require("./assets/fonts/LilitaOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(number) {
    setPlayerNumber(number);
  }

  function gameOverHandler(numberOfRounds) {
    setIsGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function restartGame() {
    setGuessRounds(0);
    setPlayerNumber(null);
    setIsGameOver(false);
  }

  let screen = <StartGameScreen onNumberPick={pickedNumberHandler} />;

  if (playerNumber)
    screen = (
      <GameScreen playerNumber={playerNumber} onGameOver={gameOverHandler} />
    );

  if (isGameOver && playerNumber)
    screen = (
      <GameOverScreen
        onGameRestart={restartGame}
        playerNumber={playerNumber}
        roundsNumber={guessRounds}
      />
    );

  return (
    <LinearGradient
      onLayout={onLayoutRootView}
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dices.png")}
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
