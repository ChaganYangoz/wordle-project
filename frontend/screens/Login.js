import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  Pressable,
  SafeAreaView,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const mailInput = useRef(null);
  const passInput = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonPress = async () => {
    if (email && password) {
      try {
        const response = await fetch("http://192.168.1.25:3000/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        console.log(response.data); // Sunucudan gelen yanıtı yazdırır
        Alert.alert("User logged successfully");
        navigation.navigate("KelimeSabitsiz");
      } catch (error) {
        console.error("Error logging user:", error);
        Alert.alert("An error occurred while logging user");
      }
    } else {
      Alert.alert("Email or password is empty");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Text style={{ marginVertical: 12 }}>Sign-In</Text>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8 }}>Email address</Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
          }}
        >
          <TextInput
            ref={mailInput}
            placeholder="Enter your email address"
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 8 }}>Password</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 48,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22,
          }}
        >
          <TextInput
            ref={passInput}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button
          title="Login"
          style={{ marginTop: 18, marginBottom: 4 }}
          onPress={() => {
            handleButtonPress();
          }}
        />
        <Text>Dont You Have an Account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
