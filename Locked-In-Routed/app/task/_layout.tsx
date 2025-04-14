import { StatusBar } from "react-native";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1B1B1B" />
      <Slot />
    </>
  );
}
