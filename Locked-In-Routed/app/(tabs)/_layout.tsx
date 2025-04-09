import {
  StyleSheet,
  StatusBar,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot, Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { createTab } from "../../utils/TabFactory";

export default function Layout() {
  const windowDimenstions = useSafeAreaInsets();
  //windowDimenstions.bottom = 66;
  console.log((windowDimenstions.bottom = 0));

  // const window = Dimensions.get("window");

  // console.log(
  //   "Width of the window: " +
  //     window.width +
  //     " Height of the window: " +
  //     window.height
  // );

  // const screen = Dimensions.get("screen");

  // console.log(
  //   "Width of the screen: " +
  //     screen.width +
  //     " Height of the screen: " +
  //     screen.height
  // );

  return (
    // <>
    //   <StatusBar barStyle="light-content" backgroundColor="#1B1B1B" />
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
    // </>
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
