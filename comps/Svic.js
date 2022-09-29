import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectToggle, toggle } from "../redux/dropSlice";
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  label: { color: "#e2ba42", backgroundColor: "#33128f" },
});
//
export const Svic = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSwitch = useSelector(selectToggle);
  console.log("to gle", toggleSwitch);
  const dispatch = useDispatch();
  //
  const handleFavCheck = () => {
    dispatch(toggle());
  };
  //

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={toggleSwitch ? "#red" : "#yellow"}
        ios_backgroundColor="#3e3e3e"
        // onValueChange={dispatch(setIsEnabled())}
        value={toggleSwitch}
        onChange={handleFavCheck}
      />
      <Text style={styles.label}>
        switch to {toggleSwitch ? "Game" : "Map"}
      </Text>
    </View>
  );
};
