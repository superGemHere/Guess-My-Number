import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import React, { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

const StartGameScreen = ({ onPickNumber }) => {
  const [inputNumber, setInputNumber] = useState("");

  const inputNumberHandler = inputText => {
    setInputNumber(inputText);
  };

  const resetInputHandler = () => {
    setInputNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler
          }
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContaner}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType={"number-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputNumberHandler}
          value={inputNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContaner:{
    flex: 1,
    marginTop: 100,
    alignItems: "center"
  },  
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  instructionText: {
   color: Colors.accent500,
   fontSize: 24,
  },
  input: {
    height: 70,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold"
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 1
  }
});
