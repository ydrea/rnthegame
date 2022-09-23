import { Text, Linking, View, StyleSheet } from "react-native";
import Botun from "./Botun";
//

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    color: "#fff",
    alignItems: "baseline",
    justifyContent: "center",
    flex: 1,
  },
});
//
function Header({ navigation }) {
  console.log(navigation);
  return (
    <View style={styles.header}>
      <Botun
        text="map"
        onPress={() => navigation.navigate("Map")}
        // {() => Linking.openURL("https://maps.google.com")}
      ></Botun>
    </View>
  );
}

export default Header;
