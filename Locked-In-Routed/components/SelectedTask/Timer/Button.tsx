import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { scaleHeight, scaleWidth, typography } from "../../../theme/responsive";

type Props = {
  onPress: () => void;
  iconName: string;
  buttonText: string;
};

export default function Button({ onPress, iconName, buttonText }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Ionicons
          name={iconName as any}
          size={typography.fontSize.xl}
          color="white"
        />
      </Pressable>
      <Text style={styles.text}>{buttonText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", //marginVertical: 10,
    width: scaleWidth(70),
    height: scaleHeight(106),
    // justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  button: {
    marginBottom: scaleHeight(10),
    backgroundColor: "#26392C",
    borderRadius: scaleWidth(35),
    width: scaleWidth(70),
    height: scaleWidth(70),
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: typography.fontSize.sm,
    color: "#BDBDBD",
    fontWeight: "600",
    fontFamily: "Rubik",
  },
});
