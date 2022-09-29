import React from "react";
import { View, StyleSheet } from "react-native";
import AGame from "./AGame";
import BGame from "./BGame";
import { useSelector } from "react-redux";
import { selectToggle } from "../redux/dropSlice";

//
function Main() {
  const toggleSwitch = useSelector(selectToggle);

  return (
    <View style={styles.main}>{toggleSwitch ? <BGame /> : <AGame />}</View>
  );
}

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
