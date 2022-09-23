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
// console.log(navigation);
// {() => Linking.openURL("https://maps.google.com")}
function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Botun text="map" onPress={() => navigation.push("Map")}></Botun>
    </View>
  );
}
export default Header;
