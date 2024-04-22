import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Text style={{ marginVertical: 12 }}>Create an Account</Text>

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
        <Button title="Register" style={{ marginTop: 18, marginBottom: 4 }} />
        <Text>Already Have an Account?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
