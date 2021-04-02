import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Welcome from "../screens/Welcome";
import Add from "../screens/Add";

const Tab = createBottomTabNavigator();
function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "create" : "create-outline";
          } else if (route.name === "Plantiary") {
            iconName = focused ? "leaf" : "leaf-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#77a03e",
        inactiveTintColor: "#77a03e",
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#eff5dd",
          elevation: 4,
        },
      }}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Plantiary" component={Add} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
const styles = StyleSheet.create({});
