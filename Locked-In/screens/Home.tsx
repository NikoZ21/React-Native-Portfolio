import { View, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SearchTaskInput from "../components/SearchTaskInput";
import TasksList from "../components/tasks-list";
import Task from "../components/task";

export default function Home() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Happy Working</Text>
          <View style={styles.iconActionMenu}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/images/profile.jpg")}
              />
            </View>
          </View>
        </View>
        <SearchTaskInput />
      </View>
      <TasksList />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  topContainer: {
    //backgroundColor: "blue",
    marginTop: 20,
    height: 75,
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    //backgroundColor: "black",
    width: 350,
  },
  iconActionMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 64,
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleText: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    fontFamily: "Helvetica Neue",
  },
});
