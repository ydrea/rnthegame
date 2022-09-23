import React from "react";
import { View, StyleSheet } from "react-native";
import AGame from "./AGame";
import BGame from "./BGame";
//

const styles = StyleSheet.create({
  main: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
//

const drop = ["monuments", "planets"];

//
function Main({ drop }) {
  return (
    <View style={styles.main}>
      {drop === "planets" ? <BGame /> : <AGame />}
    </View>
  );
}

export default Main;
