import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

//
const styles = StyleSheet.create({
  question: {
    paddingHorizontal: 10,
    color: "#e2ba42",
  },
});
//
function RCard({ sculpture }) {
  return (
    <View>
      <View>
        <Text style={styles.question}>Correct!</Text>
      </View>
      <Card>
        <View>
          <Text style={styles.question}>{sculpture.description}</Text>
        </View>
      </Card>
    </View>
  );
}

export default RCard;
