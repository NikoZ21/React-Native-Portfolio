import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Slot, Tabs } from "expo-router";

import { createTab } from "../../utils/TabFactory";
import { LinearGradient } from "expo-linear-gradient";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {createTab("index", "Home", "home-outline")}
      {createTab("tasks", "Tasks", "document-outline")}
      {createTab("profile", "Profile", "person-outline")}
      {createTab("settings", "Settings", "settings-outline")}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1B1B1B",
    height: 66,
  },
  gradient: {
    flex: 1,
  },
});
