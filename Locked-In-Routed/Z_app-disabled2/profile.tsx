import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => router.navigate("settings")}
      />
      <Button
        title="Go to Home"
        color="red"
        onPress={() => router.navigate("/")}
      />
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
    backgroundColor: "green",
    color: "white",
    padding: 10,
    marginBottom: 20,
  },
});

export default Profile;
