import { Image, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import logo from "../assets/images/icon.png";
import { screenHeight, screenWidth } from "../utils/Constants";
import { useEffect, useState } from "react";
import { resetAndNavigate } from "../utils/Helpers";
export default function Main() {
  const [loaded] = useFonts({
    SpaceMono: require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [hasNavigated, setHasNavigated] = useState(false);
  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeOutId = setTimeout(() => {
        resetAndNavigate("/home");
      }, 1000);
      return () => clearTimeout(timeOutId);
    }
  }, [loaded, hasNavigated]);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
  },
  img: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.12,
  },
});
