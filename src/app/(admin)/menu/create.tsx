import { StyleSheet, Text, TextInput, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { router, Tabs, useLocalSearchParams } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import Button from "@/src/components/Button";
import { defailtPizzaImage } from "@/src/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const { id: idString } = useLocalSearchParams();
  const isUpdating = !!idString;

  console.log(isUpdating);

  //   reset field
  const resetFields = () => {
    setName("");
    setPrice("");
  };

  //   validate input data
  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is required");
      return false;
    }
    if (!price) {
      setErrors("Price is required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a number");
      return false;
    }
    return true;
  };

  // on submit

  const onSubmit = () => {
    if (isUpdating) {
      // update
      onUpdate();
    } else {
      onCreate();
    }
  };

  //   on create cart
  const onCreate = async () => {
    if (!validateInput()) {
      return;
    }
    console.warn(`Creating product:  `, image, name, price);

    // Save in the database
    resetFields();
  };

  //on update cart
  const onUpdate = async () => {
    if (!validateInput()) {
      return;
    }
    console.warn(`Creating product:  `, name, price);
    resetFields();
  };

  // delete cart produtcs

  const onDelete = () => {
    // deleteProduct(id, {
    //   onSuccess: () => {
    resetFields();
    router.replace("/(admin)");
    //   },
    // });
  };

  //   delete products
  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure you want to delete this product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  // select image from device library
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: isUpdating ? "Update Product" : "Create Product",
          headerShown: true,
        }}
      />
      <Image
        source={{ uri: image || defailtPizzaImage }}
        style={styles.image}
      />

      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onSubmit} text={isUpdating ? "Update" : "Create"} />
      {/* <Button onPress={confirmDelete} text={"Delete"} /> */}
      {isUpdating && <Button onPress={confirmDelete} text={"Delete"} />}
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  button: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.dark.text,
    marginVertical: 10,
  },
});
