import { Pressable, View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  color: string;
};

export default function CategoryGridTile({ title, color }: Props) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable style={styles.button} android_ripple={{ color: "#ccc" }}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 175,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
