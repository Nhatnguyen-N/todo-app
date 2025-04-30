import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 40,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0090b0",
  },
  text: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
  },
});
