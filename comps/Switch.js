import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Toggle from "react-toggle";
//

export const DarkToggle = () => {
  const [mORp, mORpSet] = useState(true);
  //
  useEffect(() => {
    if (mORp) {
      dropSet("mao");
    } else {
      dropSet("");
    }
  }, [mORp]);
  return (
    <View className="toggle-container">
      <Toggle
        className="react-switch-checkbox"
        checked={mORp}
        onChange={(event) => mORpSet(event.target.checked)}
        id={`react-switch-new`}
      />

      <Text
        style={{ background: mORp && "#ff8700" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </Text>
      <p> switch to {mORp ? "Map" : "Game"} mode</p>
    </View>
  );
};
