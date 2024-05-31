import { View, FlatList, Pressable } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { Link, Stack, Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";

export default function HomeScreen() {
  return (
    <View>
      <Tabs.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={24}
                    color={Colors.light.tint}
                    style={{ opacity: pressed ? 0.8 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerShown: true,
        }}
      />

      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
