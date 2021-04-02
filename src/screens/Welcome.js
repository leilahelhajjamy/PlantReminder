import React from "react";
import {
  View,
  StyleSheet,
  Image,
  NativeModules,
  Text,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import IconBadge from "react-native-icon-badge";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const tasks = [
  {
    id: "iuzgeffffiuezgf",
    notificationNumber: 4,
    taskTitle: "laila",
    name: "flower",
  },
  {
    id: "iuzgefigtuezgf",
    notificationNumber: 2,
    taskTitle: "laila",
    name: "flower-poppy",
  },
  {
    id: "iuzgeftyiuezgf",
    notificationNumber: 3,
    taskTitle: "laila",
    name: "flower-tulip",
  },
  {
    id: "iuzgzr'refiuezgf",
    notificationNumber: 1,
    taskTitle: "laila",
    name: "pine-tree",
  },
  {
    id: "iuzgefithyuezgf",
    notificationNumber: 3,
    taskTitle: "laila",
    name: "spa",
  },
  {
    id: "iuzgezefiuezgf",
    notificationNumber: 2,
    taskTitle: "laila",
    name: "sprout",
  },
  {
    id: "iuzgefiuedfrzgf",
    notificationNumber: 5,
    taskTitle: "laila",
    name: "tree",
  },
];
function Welcome(props) {
  const RenderTasksIcons = () => {
    return tasks.map((elt) => {
      return (
        <View style={styles.buttonLeft}>
          <IconBadge
            BadgeElement={
              <Text style={{ color: "#FFFFFF" }}>{elt.notificationNumber}</Text>
            }
            IconBadgeStyle={styles.badge}
            Hidden={false}
          />
          <TouchableOpacity>
            <MaterialCommunityIcons name={elt.name} size={32} color="#77a03e" />
          </TouchableOpacity>
        </View>
      );
    });
  };
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        paddingTop: StatusBarManager.HEIGHT,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "10%" }}>
        <RenderTasksIcons />
      </View>
      <View
        style={{
          width: "80%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.containerRight}>
          <TouchableOpacity>
            <Image
              source={require("../images/pot3.jpg")}
              style={{
                resizeMode: "contain",
                height: 300,
                width: 200,
                opacity: 0.4,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{ position: "absolute", fontSize: 40, color: "#77a03e" }}
          >
            Fertilize
          </Text>
        </View>
        <View style={styles.containerRight}>
          <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require("../images/pot3.jpg")}
                style={styles.image}
              />
              <View style={styles.plantName}>
                <Text style={styles.text}>Zygocactus</Text>
              </View>
            </View>
            <View>
              <Image
                source={require("../images/pot1.png")}
                style={styles.image}
              />
              <View style={styles.plantName}>
                <Text style={styles.text}>PencilCactus</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Welcome;
const styles = {
  buttonLeft: {
    backgroundColor: "#FFF",
    height: 60,
    width: 60,
    borderRadius: 5,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  badge: {
    position: "absolute",
    top: -20,
    left: 10,
    minWidth: 25,
    height: 25,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#acc640",
  },
  plantName: {
    backgroundColor: "#acc640",
    width: 155,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 10,
    elevation: 5,
  },
  image: {
    resizeMode: "contain",
    height: 260,
    width: 230,
    borderRadius: 7,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    color: "#4c6224",
    marginVertical: 10,
  },
  containerRight: {
    backgroundColor: "#FFF",
    elevation: 5,
    borderRadius: 10,
    alignSelf: "flex-end",
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
};
