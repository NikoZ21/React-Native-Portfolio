import { StyleSheet, StatusBar } from "react-native";
import { Tabs } from "expo-router";

import { createTab } from "../../utils/TabFactory";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1B1B1B" />
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
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1B1B1B",
    height: 66,
  },
});
