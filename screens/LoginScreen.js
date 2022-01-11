import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="lock" type="feather" color="black" />
          <TextInput
            placeholder="Type your username"
            maxLength={20}
            style={styles.inputStyle}
            placeholderTextColor="#c4c4c4"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder="Type your password"
            secureTextEntry
            style={styles.inputStyle}
            placeholderTextColor="#c4c4c4"
          />
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate("DashboardScreen");
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          <Text
            style={{
              color: "#4287f5",
              fontSize: 15,
              textDecorationLine: "underline",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    backgroundColor: "#4287f5",
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
  inputStyle: {
    width: 250,
    height: 50,
    fontSize: 15,
    fontWeight: "bold",
    padding: 5,
    borderBottomWidth: 3,
    borderColor: "#c4c4c4",
    margin: 5,
    color: "#4287f5",
    flex: 1,
  },
});
