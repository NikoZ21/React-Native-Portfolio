import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function UserPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const array = ["I love it", "I Hate it"];

  return (
    <View>
      <Text>User Page - {array[parseInt(id) - 1]}</Text>
    </View>
  );
}
