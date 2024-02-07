import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const windowWidth = Dimensions.get("window").width;

export function Logo({ type = "black", width}) {
  const image =
    type === "black"
      ? require("../../assets/deepak-nautiyal-lWUYwB0E9co-unsplash.jpg")
      : require("../../assets/deepak-nautiyal-lWUYwB0E9co-unsplash.jpg");
  const size = width || windowWidth * 0.6;
  const height = (1000 * size) / 1150;
  const  opacity= opacity || 0.70;

  return (
    <View style={styles.container}>
      <Image
        style={{
          height,
          width: size,
          tintColor:"transparent".Colors,
          backgroundColor: Colors.green,
          opacity,
        }}
        source={image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 20,
  },
});
