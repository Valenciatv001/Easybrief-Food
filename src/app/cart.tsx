import { FlatList, StyleSheet, Text, View } from "react-native";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";

const CartScrren = () => {
  const { items, total } = useCart();

  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "500" }}>
        Total: ${total}
      </Text>
      <Button
        // onPress={checkout}
        text="Checkout"
      />
    </View>
  );
};

export default CartScrren;

const styles = StyleSheet.create({});
