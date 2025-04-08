// TabFactory.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export function createTab(name: string, title: string, icon: string) {
  return (
    <Tabs.Screen
      key={name}
      name={name}
      options={{
        tabBarLabel: ({ focused }: { focused: boolean }) => (
          <Text style={{ color: focused ? "#4CAF50" : "#888" }}>{title}</Text>
        ),
        tabBarItemStyle: {
          fontWeight: "700",
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
          color: "white",
        },
        tabBarIcon: ({ focused }: { focused: boolean }) => (
          <Ionicons
            name={icon as any}
            size={19}
            color={focused ? "#4CAF50" : "white"}
          />
        ),
      }}
    />
  );
}
