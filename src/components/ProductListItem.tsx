import products from "@/assets/data/products";
import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Text, View, Image } from "react-native";
import { Product } from "../types";

export const defailtPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/extravaganzza.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || defailtPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}> {product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
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
