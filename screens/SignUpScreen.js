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
      
        <TouchableOpacity style={styles.loginButton} onPress={()=>{this.props.navigation.navigate('LoginScreen');}}>
          <Text>Login</Text>
        </TouchableOpacity>

          <Text>Sign Up</Text>
   
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
