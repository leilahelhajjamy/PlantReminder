import React from "react";
import { View, NativeModules, StyleSheet } from "react-native";
import TabsNavigator from "./src/navigations/TabsNavigator";
import AppNavigator from "./src/navigations/Navigator";
import { NavigationContainer } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;
function App(props) {
  return (
    <>
      <AppNavigator></AppNavigator>
    </>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: StatusBarManager.HEIGHT,
  },
});
