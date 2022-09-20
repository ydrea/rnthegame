import React from "react";
import { View, StyleSheet } from "react-native";
import AGame from "./AGame";
import BGame from "./BGame";
//
function Main({ drop }) {
  return (
    <View style={styles.main}>{drop === "map" ? <BGame /> : <AGame />}</View>
  );
}

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 5,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
