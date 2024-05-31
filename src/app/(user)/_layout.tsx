import { Link, Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Pressable } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="cutlery" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name="list" size={24} color={color} />
            <TabBarIcon name="book" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
