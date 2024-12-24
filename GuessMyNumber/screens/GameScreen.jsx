import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(
    () => {
      if (currentGuess === userNumber) {
        onGameOver(guessRounds.length);
      }
    },
    [currentGuess, userNumber, onGameOver]
  );

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevRounds => [newRndNumber, ...prevRounds]);
  };

  const guessRoundsListLenght = guessRounds.length;

  let content = 
  <>
  <NumberContainer>
    {currentGuess}
  </NumberContainer>
  <Card>
    <InstructionText additionalStyles={{ marginBottom: 5 }}>
      Higher or lower?
    </InstructionText>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="remove" size={24} color="white" />
        </PrimaryButton>
      </View>
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="add" size={24} color="white" />
        </PrimaryButton>
      </View>
    </View>
  </Card>
  </>

  if(width > 300){
    content = 
    <>
      <View style= {styles.buttonsContainerWide}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        <NumberContainer>
          {currentGuess}
        </NumberContainer>
        <View style={styles.buttonWrapper}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
      </View>
    </>
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
    {content}
      <View style={styles.logRoundsContainer}>
        <FlatList
          data={guessRounds}
          renderItem={itemData =>
            <GuessLogItem
              roundNumber={guessRoundsListLenght - itemData.index}
              guess={itemData.item}
            />}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonWrapper: {
    flex: 1
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center"
  },
  logRoundsContainer: {
    flex: 1,
    padding: 16
  }
});
