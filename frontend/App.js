import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Login, Register } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}