import { Text, View, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text>This is Settings Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
