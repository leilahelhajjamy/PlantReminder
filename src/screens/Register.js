import React from "react";
import { Text, View, Image, TextInput, NativeModules } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
const { StatusBarManager } = NativeModules;
export default class Register extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          paddingTop: StatusBarManager.HEIGHT,
        }}
      >
        <Image
          source={require("../images/logo.png")}
          style={{ resizeMode: "contain", width: "100%", height: "50%" }}
        />
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            color: "#4c6224",
          }}
        >
          Take care of your plants
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 40,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="#77a03e"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#77a03e"
            style={{ paddingHorizontal: 10 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            placeholderTextColor="#77a03e"
            style={{ paddingHorizontal: 10 }}
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#77a03e",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Register
          </Text>
        </View>
      </View>
    );
  }
}
