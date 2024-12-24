import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: Colors.accent500
  },
  numberText: {
    color: Colors.accent500,
    fontSize: width < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  }
});
