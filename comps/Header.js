import { Text, Linking, View, StyleSheet } from "react-native";
import Botun from "./Botun";
//

//
function Header({ drop, dropSet }) {
  return (
    <View style={styles.header}>
      <Botun
        style={styles.botun}
        text="map"
        onPress={() => dropSet(!drop)}
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
  botun: { margin: 10, position: "absolute" },
});
