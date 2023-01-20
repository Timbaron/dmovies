import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const ImageViewer = ({placeholderImageSource, selectedImage}) => {
  /* A ternary operator. It is a shorthand way of writing an if/else statement. */
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
      <Image source={imageSource} style={styles.image} />
  );
};

const styles = StyleSheet.create({    
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });
