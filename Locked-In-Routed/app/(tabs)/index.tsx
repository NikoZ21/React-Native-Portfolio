import { StyleSheet, Text, useWindowDimensions, View } from "react-native";

function identity<Type>(arg: Type) {
  return arg;
}

let output = identity<string>("1");
console.log(output);

export default function Page() {
  const { height, width, scale, fontScale } = useWindowDimensions();

  console.log("Height:", height);
  console.log("Width:", width);
  console.log("Scale:", scale);
  console.log("Font Scale:", fontScale);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ textAlign: "center" }}>This is Index Page</Text>
      </View>
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
