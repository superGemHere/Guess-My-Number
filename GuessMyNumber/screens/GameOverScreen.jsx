import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame
}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds
          to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36
  },
  image: {
    width: "100%",
    height: "100%"
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  }
});
