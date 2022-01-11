import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./screens/DashboardScreen";
export default class App extends React.Component {
  render() {
    return <AppCont />;
  }
}

var switchNav = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  SignUpScreen: { screen: SignUpScreen },
  DashboardScreen: { screen: DashboardScreen },
});

const AppCont = createAppContainer(switchNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  stylus: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    color: "",
  },
});
