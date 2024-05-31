import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function MenuStack() {
  return (
    <Stack
      screenOptions={{
        title: "Menu",
        headerRight: () => (
          <Link href="/cart" asChild>
            <Pressable>
              {({ pressed }) => (
                <Ionicons
                  name="cart-outline"
                  size={24}
                  color={Colors.light.tint}
                  style={{ opacity: pressed ? 0.8 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    ></Stack>
  );
}
