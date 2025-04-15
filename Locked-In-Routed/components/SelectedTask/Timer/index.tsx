import { View, StyleSheet } from "react-native";

import CountDown from "./CountDown";
import Button from "./Button";
import { scaleWidth, typography } from "../../../theme/responsive";

export default function Timer() {
  return (
    <View style={styles.root}>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  countDown: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: scaleWidth(230),
  },
});
