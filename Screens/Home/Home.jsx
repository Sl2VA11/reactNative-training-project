import { Text, View } from "react-native";
import { useEffect } from "react";

export function Home({ navigation }) {
  useEffect(() => {
    {
      navigation.navigate("Posts");
    }
  }, []);
  return <Text>Home</Text>;
}
