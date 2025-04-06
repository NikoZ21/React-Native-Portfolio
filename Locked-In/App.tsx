import { StyleSheet, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Home from "./screens/Home";

export default function App() {
  const screen = <Home />;

  return (
    <LinearGradient
      style={styles.rootContainer}
      colors={["#193117", "#1E1E1E"]}
    >
      <View style={styles.safeArea}>{screen}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
