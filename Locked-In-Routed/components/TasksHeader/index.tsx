import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TasksHeader() {
  const { width, height } = Dimensions.get("window");

  console.log(width, height);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleText}>Happy Working</Text>
      <View style={styles.iconActionMenu}>
        <Ionicons name="notifications-outline" size={24} color="white" />
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/image/profile.jpg")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "8%",
    width: "90%",
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
    borderRadius: 15,
    borderColor: "white",
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
