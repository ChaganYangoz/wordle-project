import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../constants";
import { Alert } from "react-native";
import { useEffect } from "react";
import { WebSocket } from "react-native";

const KelimeSabitsiz = () => {
  //http://192.168.1.40:3000
  useEffect(() => {
    const ws = new WebSocket("ws://192.168.1.40:8000");

    ws.on("open", () => {
      console.log("WebSocket connection opened");
    });

    ws.on("message", (message) => {
      console.log(`Received message: ${message}`);
    });

    ws.on("close", () => {
      console.log("WebSocket connection closed");
    });

    return () => {
      ws.close();
    };
  }, []);

  const handleSquarePress = async (number) => {
    const playerCount = 0;
    try {
      const response = await fetch(
        "http://192.168.1.40:3000/add-player-to-room",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ number, playerCount }),
        }
      );
      Alert.alert("User joined successfully");
    } catch (error) {
      console.error("Error joining room:", error);
      Alert.alert("An error occurred while joining room");
    }
    console.log(`Square ${number} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(4)}
        >
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(5)}
        >
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(6)}
        >
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => handleSquarePress(7)}
        >
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black, // Arka planı siyah olarak ayarlayın
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: colors.lightgrey,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    borderColor: colors.darkgrey,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default KelimeSabitsiz;
