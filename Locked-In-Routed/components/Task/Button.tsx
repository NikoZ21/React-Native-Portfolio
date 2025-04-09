import { ReactNode } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children?: ReactNode;
  onPress?: () => void;
};

export default function Button({ children, onPress }: Props) {
  return (
    <LinearGradient
      colors={["#0C2C0D", "#10360B"]}
      style={styles.buttonOutterContainer}
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        // android_ripple={{ color:  }}
      >
        <View style={styles.contentContainer}>{children}</View>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 6,
    borderColor: "#164F18",
    borderWidth: 1,
    overflow: "hidden",
    width: 80,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  buttonInnerContainer: {
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
