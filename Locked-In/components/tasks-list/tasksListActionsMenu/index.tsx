import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";

export default function TaskActionsMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upcoming Tasks</Text>
      <View style={styles.buttonsContainer}>
        <Button>
          <Ionicons name="add-outline" color="white" size={15} />
        </Button>
        <Button>
          <Ionicons name="ellipsis-horizontal-sharp" color="white" size={15} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    width: 126,
    height: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    width: 55,
    justifyContent: "space-between",
  },
});
