import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Tabs, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { defailtPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScrren = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("L");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.log("Add to cart, size: ", selectedSize);
    console.warn("Add to cart, size: ", selectedSize);
  };

  if (!product) {
    return <Text> Product not found </Text>;
  }

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: product.name,
          headerShown: true,
        }}
      />
      <Image
        source={{ uri: product?.image || defailtPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.subtitle}> Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            key={size}
            style={[
              styles.size,
              { backgroundColor: selectedSize === size ? "gainsboro" : "#fff" },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: selectedSize === size ? "black" : "gray",
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price} </Text>
      <Button text="Add to Cart" onPress={addToCart} />
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
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    margin: "auto",
  },
});
