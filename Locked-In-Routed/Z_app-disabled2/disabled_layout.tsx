// app/_layout.tsx
import { LinearGradient } from "expo-linear-gradient";
import { Stack, Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <LinearGradient colors={["#193117", "#1E1E1E"]} style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My App Header</Text>
      </View>
      {/* <Slot /> */}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
