import { View, Text, StyleSheet } from "react-native";

import CountDown from "./CountDown";
import Button from "./Button";

export default function Timer() {
  return (
    <View style={styles.root}>
      <View></View>
      <View>
        <CountDown />
      </View>
      <View style={styles.buttons}>
        <Button
          iconName="pause"
          buttonText="Pause"
          onPress={() => {
            console.log("pausing task");
          }}
        />
        <Button
          iconName="stop"
          buttonText="Quit"
          onPress={() => {
            console.log("pausing task");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  countDown: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    // backgroundColor: "red",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
