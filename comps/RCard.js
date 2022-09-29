import { View, Text, StyleSheet, ScrollView } from "react-native";

//
const styles = StyleSheet.create({
  container: { backgroundColor: "#31328f" },
  question: {
    paddingHorizontal: 10,
    color: "#e2ba42",
    fontSize: 18,
  },
  reply: { backgroundColor: "#31328f" },
});
//
function RCard({ sculpture }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.question}>Correct!</Text>
      </View>
      <View style={styles.reply}>
        <Text style={styles.question}>{sculpture.description}</Text>
      </View>
    </View>
  );
}

export default RCard;
