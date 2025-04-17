import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

type Props = {
  children?: React.ReactNode;
  style?: object;
  placeholder: string;
};

export default function BaseInput({ children, style, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#646464"
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderColor: "#165219",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    width: "85%",
  },
  input: {
    // height: 40,
    // borderColor: "#ccc",
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    color: "#646464",
  },
});
