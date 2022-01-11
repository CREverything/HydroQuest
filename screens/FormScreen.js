import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" maxLength={20} />
        <TextInput placeholder="Password" secureTextEntry />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            this.props.navigation.navigate("LoginScreen");
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          <Text>Sign Up</Text>
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
});
