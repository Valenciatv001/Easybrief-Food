import products from "@/assets/data/products";
import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Product } from "../types";
import { Link, router, useSegments } from "expo-router";

export const defailtPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png";

type ProductListItemProps = {
  product: Product;
};

const detailsScreen = () => {
  router.push("menu/product");
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  const segments = useSegments();
  console.log(segments);
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defailtPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}> {product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
