import React from "react";
import { Text, Linking, View, StyleSheet } from "react-native";
import Botun from "./Botun";
//

//
function Header({ drop, dropSet }) {
  return (
    <View style={styles.header}>
      <Botun
        text="map"
        onPress={() => Linking.openURL("https://maps.google.com")}
      ></Botun>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    alignItems: "baseline",
    justifyContent: "center",
    flex: 1,
  },
});
