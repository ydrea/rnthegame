import { Button, Linking, View, StyleSheet } from "react-native";

//
function Header({ drop, dropSet }) {
  return (
    <View style={styles.header}>
      <Button
        title="map"
        onPress={() => Linking.openURL("https://maps.google.com")}
      />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    color: "#fff",
    padding: 2,
    backgroundColor: "#121",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
  },
});
