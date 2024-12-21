import { Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: 'white',
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: 'white',
  }
});
