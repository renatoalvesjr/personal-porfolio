import { Image, StyleSheet, Dimensions, View } from "react-native";
import React from "react";

type ThemeImageProps = {
  src?: string;
  alt?: string;
};

const defaultProps = {
  src: require("@/assets/images/no-image.png"),
  alt: "No image",
};

export const ThemedImage: React.FC<ThemeImageProps> = ({
  src = require("@/assets/images/no-image.png"),
  alt = "No image",
}) => {
  return (
    <View style={styles.container}>
      <Image source={src} alt={alt} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  container: {
    flexDirection: "row",
  },
});
