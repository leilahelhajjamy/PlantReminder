import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
  Modal,
  TouchableHighlight,
} from "react-native";
import DayIcon from "./DayIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListItem({ item }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const daysLetters = ["M", "T", "W", "T", "F", "S", "S"];
  function toggleSwitch() {
    setModalVisible(true);
    setIsEnabled((previousState) => !previousState);
  }
  const RenderDaysIcons = () => {
    return daysLetters.map((elt) => {
      return (
        <TouchableOpacity>
          <DayIcon
            lettre={elt}
            styleContainer={styles.iconDayContainer}
            styleDay={styles.lettreDay}
          />
        </TouchableOpacity>
      );
    });
  };

  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name={item.name}
              size={30}
              color="#77a03e"
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textSubtitle}>{item.subtitle}</Text>
          </View>
        </View>

        <View style={styles.switchButton}>
          <Switch
            trackColor={{ false: "#acc640", true: "#f2f6e6" }}
            thumbColor={isEnabled ? "#acc640" : "#f2f6e6"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.selectDaysText}>Select week days</Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    marginVertical: 10,
                  }}
                >
                  <RenderDaysIcons />
                </View>
                <View style={styles.barDivider}></View>
                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#acc640" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>Confirm</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      </View>
      <View style={styles.barDivider}></View>
    </>
  );
}

export default ListItem;
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#f2f6e6",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  textTitle: {
    color: "#77a03e",
    marginLeft: 10,
    marginBottom: 2,
  },
  textSubtitle: {
    color: "#acc640",
    marginLeft: 10,
    marginBottom: 2,
  },
  switchButton: {
    width: "40%",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  leftContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "55%",
    alignSelf: "flex-start",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: 40,
    marginBottom: "-120%",
    height: "30%",
    width: "90%",
    backgroundColor: "#eff5dd",
    borderRadius: 15,
    elevation: 9,
    padding: 20,
    alignItems: "center",
    shadowColor: "#77a03e",
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  openButton: {
    backgroundColor: "#acc640",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    paddingHorizontal: 25,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  selectDaysText: {
    color: "#acc640",
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 15,
    marginBottom: 10,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  barDivider: {
    backgroundColor: "#acc640",
    width: "80%",
    height: 1,
    alignSelf: "center",
  },
  iconDayContainer: {
    backgroundColor: "#acc640",
    height: 35,
    width: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  lettreDay: {
    color: "#77a03e",
    fontSize: 10,
    alignSelf: "center",
  },
});
