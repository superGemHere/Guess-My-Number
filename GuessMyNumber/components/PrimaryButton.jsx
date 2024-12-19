import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log(`${children} button pressed`);
  };

  return (
    <View style={styles.buttonOuterCointainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterCointainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
});
