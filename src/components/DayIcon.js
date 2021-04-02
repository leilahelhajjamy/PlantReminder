import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styles from "react-native-icon-badge/style";

function DayIcon({ lettre, styleContainer, styleDay }) {
  return (
    <View style={styleContainer}>
      <Text style={styleDay}>{lettre}</Text>
    </View>
  );
}

export default DayIcon;
