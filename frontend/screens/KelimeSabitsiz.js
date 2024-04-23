import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { colors } from "../constants";
import { Alert } from "react-native";
import { useEffect } from "react";
import io from "socket.io-client";
const socket = io("http://192.168.1.25:8000");
const KelimeSabitsiz = () => {
  //http://192.168.1.40:8000
  useEffect(() => {
    // Bağlantı kurulduğunda çalışacak kod
    socket.on("connect", () => {
      console.log("Sunucuya bağlandı");
    });

    // Sunucudan bir mesaj alındığında çalışacak kod
    socket.on("mesaj", (data) => {
      console.log("Sunucudan mesaj alındı:", data);
    });

    // Bağlantı kesildiğinde çalışacak kod
    socket.on("disconnect", () => {
      console.log("Sunucudan ayrıldı");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSquarePress = async (number) => {
    const playerCount = 0;
    try {
      const response = await fetch(
        "http://192.168.1.25:3000/add-player-to-room",
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
