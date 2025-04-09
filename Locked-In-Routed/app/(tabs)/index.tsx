import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CreateNewButton from "../../components/tasks-list/CreateNewButton";

export default function Page() {
  const frutis = [
    "apple",
    "orange",
    "banana",
    "grape",
    "kiwi",
    "mango",
    "pineapple",
    "strawberry",
    "watermelon",
  ];

  return (
    <LinearGradient colors={["#193117", "#1E1E1E"]} style={styles.container}>
      <View style={styles.top}>
        <View style={styles.headContent}></View>
      </View>
      <View style={styles.bottom}>
        <View
          style={{ height: "10%", backgroundColor: "black", width: "100%" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Upcoming Tasks</Text>
        </View>
        <FlatList
          data={frutis}
          renderItem={({ item }) => (
            <View
              style={{
                height: 80,
                backgroundColor: "green",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
          style={styles.list}
        />
        <View style={{ height: 50 }}>
          <LinearGradient
            colors={["#1B1B1B", "#FFFFFF", "#1B1B1B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              height: 2,
              width: "100%",
            }}
          />
          <CreateNewButton />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  headContent: {
    width: "90%",
    height: 100,
    backgroundColor: "gray",
  },

  bottom: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    width: "90%",
    backgroundColor: "gray",
  },
});
