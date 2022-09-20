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
    alignItems: "center",
    flex: 5,
    paddingTop: 20,
  },
});
