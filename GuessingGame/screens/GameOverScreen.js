import { StyleSheet, Text, View, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  playerNumber,
  onGameRestart,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone took <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        roundes to guess the number
        <Text style={styles.highlight}>{playerNumber}</Text>.
      </Text>
      <PrimaryButton style={styles.restartBtn} onPress={onGameRestart}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 350,
    height: 350,
    borderWidth: 3,
    borderRadius: 175,
    borderColor: Colors.primary700,
    overflow: "hidden",
    marginTop: 26,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    marginTop: 24,
    marginBottom: 30,
    fontFamily: "lilita-one",
    fontSize: 20,
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary500,
    fontSize: 25,
  },
});
