import { View, StyleSheet } from "react-native";
import Counter from "./Counter";
//

const styles = StyleSheet.create({
  footer: {
    color: "#fff",
    flex: 5,
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
