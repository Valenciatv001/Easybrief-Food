import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, router, Tabs, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defailtPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/src/constants/Colors";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScrren = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("L");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text> Product not found </Text>;
  }

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: product.name,
          headerRight: () => (
            <Link href="/" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
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
      <Image
        source={{ uri: product?.image || defailtPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}> {product.name}</Text>

      <Text style={styles.price}>${product.price} </Text>
    </View>
  );
};

export default ProductDetailsScrren;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
