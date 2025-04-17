import React, { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  children?: ReactNode;
  onPress?: () => void;
};

export default function Button({ children, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.main}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1B1B1B",
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: "center",
  },
  main: { flex: 1, justifyContent: "center", alignItems: "center" },
});
