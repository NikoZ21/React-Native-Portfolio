import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  iconName: string;
  buttonText: string;
};

export default function Button({ onPress, iconName, buttonText }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Ionicons name={iconName as any} size={24} color="white" />
      </Pressable>
      <Text style={styles.text}>{buttonText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    width: 60,
    height: 96,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#26392C",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: "#BDBDBD",
    fontWeight: "400",
    fontFamily: "Rubik",
  },
});
