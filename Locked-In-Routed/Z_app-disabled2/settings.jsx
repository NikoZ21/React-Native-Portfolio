import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <Button title="Go to profile" onPress={() => router.push("profile")} />
      <Button title="Go to Home" color="red" onPress={() => router.push("/")} />
      <Button title=" <- Go Back" color="black" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "gray",
    color: "white",
    padding: 10,
    marginBottom: 20,
  },
});

export default Settings;
