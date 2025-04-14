import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  name: string;
  title: string;
};

export default function Tab({ name, title }: Props) {
  return (
    <Tabs.Screen
      name={name}
      options={{
        tabBarLabel: ({ focused }: { focused: boolean }) => (
          <Text style={{ color: focused ? "#4CAF50" : "#888" }}>{title}</Text>
        ),
        tabBarItemStyle: styles.tab,
        tabBarLabelStyle: styles.tabTitle,
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <Ionicons
            name="home-outline"
            size={19}
            color={focused ? "#4CAF50" : "#ffffff"}
          />
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#1B1B1B",
    height: 66,
  },
  tab: {
    fontWeight: "700",
  },
  tabTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
});
