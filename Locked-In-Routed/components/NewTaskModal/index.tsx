import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Modal, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { scaleHeight, scaleWidth } from "../../theme/responsive";
import SaveButton from "./SaveButton";
import CloseButton from "./CloseButton";
import BaseInput from "./BaseInput";

export default function NewTaskModal() {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.outerContainer}
          colors={["rgba(22, 79, 24, 1)", "rgb(29, 100, 32)"]}
        >
          <LinearGradient
            colors={["#0C2C0D", "#10360B"]}
            style={styles.innerContainer}
          >
            <View>
              <CloseButton />
            </View>
            <View>
              <BaseInput placeholder="Enter Task Name..." />
              <BaseInput placeholder="Description" />
              <BaseInput placeholder="Time/Duration" style={styles.timeInput}>
                <Ionicons name="chevron-down" color="#165219" size={20} />
              </BaseInput>
            </View>
            <View>
              <SaveButton />
            </View>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1 )",
    alignItems: "center",
    justifyContent: "center",
  },
  outerContainer: {
    width: scaleWidth(350),
    height: scaleHeight(350),
    padding: 2,
    borderRadius: 10,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 20,
  },
  timeInput: {},
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
