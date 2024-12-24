import { Text, StyleSheet, Platform } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: 'white',
    textAlign: "center",
    padding: 12,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({android: 2, ios: 0}),
    borderColor: 'white',
  }
});
