import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Button } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>I am Home Page</Text>
      <Button title="Go to Settings" onPress={() => router.push("settings")} />
      <Button
        title="Go to Profile"
        color="red"
        onPress={() => router.push("profile")}
      />
      <Button title=" <- Go Back" color="black" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    backgroundColor: "red",
    color: "white",
    padding: 10,
  },
});
