import React from "react";
import { Text, View, Image, TextInput, NativeModules } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
const { StatusBarManager } = NativeModules;
export default class Login extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
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
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="mail" color="#77a03e" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
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
          <Icon name="lock" color="#77a03e" size={24} />
          <TextInput style={{ paddingHorizontal: 10 }} />
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
            Already a member
          </Text>
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#77a03e",

            paddingVertical: 30,
          }}
        >
          New User
        </Text>
      </View>
    );
  }
}
