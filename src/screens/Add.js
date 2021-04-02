import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  NativeModules,
  Text,
  FlatList,
} from "react-native";
import {
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import ListItem from "../components/ListItem";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { StatusBarManager } = NativeModules;

function Add(props) {
  const [isFocused, setFocusedStatus] = useState(false);

  const renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Water",
      subtitle: "Not set ",
      name: "water",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Fertilize",
      subtitle: "Not set ",
      name: "battery-charging-medium",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Rotate",
      subtitle: "Not set ",
      name: "rotate-left",
    },
    {
      id: "5869aee4a0f-3dzrra1-471f-bd96-145571e29d72",
      title: "Prune",
      subtitle: "Not set ",
      name: "scissors-cutting",
    },
    {
      id: "58ert694a0f-3da1-471f-bd96-145571etree29d72",
      title: "Repot",
      subtitle: "Not set ",
      name: "pot-steam",
    },
  ];

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "100%",
        width: "100%",
        paddingTop: StatusBarManager.HEIGHT,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "#f2f6e6",
          alignItems: "center",
          alignSelf: "center",
          height: "30%",
          width: "95%",
          marginVertical: 15,
          borderBottomEndRadius: 20,
          borderBottomStartRadius: 20,
          elevation: 9,
        }}
      >
        <View
          style={{
            borderColor: "#acc640",
            borderWidth: 3,
            height: 130,
            width: 130,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 65,
            padddingTop: 10,
          }}
        >
          <Image
            style={{ height: 100, width: 100, resizeMode: "contain" }}
            source={require("../images/pot.png")}
          />
          <MaterialCommunityIcons
            style={{ alignSelf: "flex-end" }}
            size={36}
            name="pencil-circle"
            color="#77a03e"
          />
        </View>
      </View>
      <View style={styles.plantInfo}>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            marginTop: 2,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 10,
            paddingVertical: 2,
            width: "50%",
            marginBottom: 10,
          }}
        >
          <Ionicons name="leaf" color="#77a03e" size={24} />
          <Text
            style={{
              position: "absolute",
              left: 34,
              top: !isFocused ? 12 : 0,
              fontSize: !isFocused ? 14 : 10,
              color: !isFocused ? "#aaa" : "#aaa",
            }}
          >
            Plant's name
          </Text>
          <TextInput onFocus={setFocusedStatus} style={{ paddingBottom: 10 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 2,
            marginTop: 2,
            paddingHorizontal: 10,
            borderColor: "#77a03e",
            borderRadius: 10,
            paddingVertical: 2,
            width: "50%",
          }}
        >
          <Ionicons name="leaf" color="#77a03e" size={24} />
          <Text
            style={{
              position: "absolute",
              left: 34,
              top: !isFocused ? 12 : 0,
              fontSize: !isFocused ? 14 : 10,
              color: !isFocused ? "#aaa" : "#aaa",
            }}
          >
            Plant's location
          </Text>
          <TextInput onFocus={setFocusedStatus} style={{ paddingBottom: 10 }} />
        </View>
      </View>

      <FlatList
        style={{ marginLeft: 16 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Add;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  plantInfo: {
    flexDirection: "row",
    width: "90%",

    justifyContent: "space-around",
    alignItems: "flex-start",
    alignSelf: "center",
    marginTop: 20,
    overflow: "visible",
    position: "relative",
  },
});
