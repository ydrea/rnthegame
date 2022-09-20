import { Text, Linking, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
//

//
function Header({ drop, dropSet }) {
  return (
    <View style={styles.header}>
      <View style={styles.bot}>
        <View style={styles.un}>
          <Button
            mode="outlined"
            onPress={() => Linking.openURL("https://maps.google.com")}
          >
            <Text style={styles.lab}>map</Text>
          </Button>
        </View>
      </View>
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
  bot: {
    backfaceVisibility: "hidden",
  },
  un: {
    borderColor: "#e2ba42",
    borderWidth: 2,
    borderRadius: 9,
    opacity: 0.25,
  },
  lab: {
    color: "#e2ba42",
  },
});
