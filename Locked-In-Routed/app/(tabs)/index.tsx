import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <LinearGradient colors={["#193117", "#1E1E1E"]} style={styles.container}>
      <View style={styles.container}>
        <Text>This is Index.tsx</Text>
        <Link href="settings">Go to settings</Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
