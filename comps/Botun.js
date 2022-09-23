import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
//
const styles = StyleSheet.create({
  botun: {
    backgroundColor: "#31328f",
    borderColor: "#e2ba42",
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
  },
  label: {
    color: "#e2ba42",
    textAlign: "center",
  },
});
//
function Botun({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botun}>
        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Botun;
