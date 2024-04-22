import React from "react";
import { SafeAreaView } from "react-native";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const Login = ({ navigation }) => {
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
          <TextInput placeholder="Enter your email address" />
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
          <TextInput placeholder="Enter your password" />
        </View>
        <Button title="Login" style={{ marginTop: 18, marginBottom: 4 }} />
        <Text>Dont You Have an Account?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text>Register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
