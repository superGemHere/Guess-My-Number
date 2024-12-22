import { View, TextInput, StyleSheet, Alert} from "react-native";
import React, { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
      </Card>
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
