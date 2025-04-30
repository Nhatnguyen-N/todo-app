import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const CustomHeader = ({
  title,
  isBackButton,
}: {
  title: string;
  isBackButton?: boolean;
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <Text style={styles.text}>{title}</Text>
        {isBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back-circle" size={32} color={"#fff"} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0090b0",
    padding: 15,
  },
  text: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "SpaceMono",
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    bottom: 0,
  },
});
