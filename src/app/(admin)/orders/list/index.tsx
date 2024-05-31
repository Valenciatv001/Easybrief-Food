import orders from "@/assets/data/order";
import OrderListItem from "@/src/components/OrderListItem";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function OrderScreen() {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ padding: 10, gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({});
