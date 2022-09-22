import { View, StyleSheet } from "react-native";
import Counter from "./Counter";
//

const styles = StyleSheet.create({
  footer: {
    color: "#e2ba42",
    flex: 1,
    // alignContent: "stretch",
    // justifyContent: "space-between",
    padding: 6,
    margin: 6,
  },
});
//
function Footer() {
  return (
    <View style={styles.footer}>
      <Counter />
    </View>
  );
}

export default Footer;
