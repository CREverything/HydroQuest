import * as React from "react";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AvatarScreen from "../screens/AvatarScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "AvatarScreen") {
              iconName = focused ? "book" : "book-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={25}
                color={color}
                style={styles.icons}
              />
            );
          },
        })}
        activeColor={"#fff"}
        inactiveColor={"#fff"}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pet" component={AvatarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#ec254e",
    height: "8%",
    overflow: "hidden",
    position: "absolute",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icons: {
    width: 30,
    height: 30,
  },
});
