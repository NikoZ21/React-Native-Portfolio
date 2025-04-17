import { Image } from "react-native";
import { Pressable, Text, StyleSheet } from "react-native";

export default function CloseButton() {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        console.log("Close Modal");
      }}
    >
      <Image source={require("../../assets/images/close.png")} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#ff4d4d",
    padding: 10,
    // marginRight: 10,
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
