import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children, additionalStyles }) => {
  return (
    <Text style={[styles.instructionText, additionalStyles]}>
      {children}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  }
});
