import { Link, Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/src/hooks/useColorScheme";
import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { Colors } from "@/src/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: "gainsboro",
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="list" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
