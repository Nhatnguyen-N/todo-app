import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const AddButton = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.navigate("/addtodo")}
    >
      <MaterialCommunityIcons name="plus" size={32} color={"#fff"} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 25,
    right: 20,
    backgroundColor: "#0090b0",
    padding: 15,
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
});
