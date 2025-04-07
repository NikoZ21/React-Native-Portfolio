import { router } from "expo-router";
import { Text, Button, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <Text>This is profile page</Text>
      <Button
        title="Back"
        onPress={() => {
          router.back();
        }}
      />
    </View>
  );
}
