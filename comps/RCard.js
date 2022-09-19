import { View, Text } from "react-native";
import { Card } from "react-native-paper";

function RCard({ sculpture }) {
  return (
    <View>
      <View>
        <Text>Correct!</Text>
      </View>
      <Card>
        <View>
          <Text>{sculpture.description}</Text>
        </View>
      </Card>
    </View>
  );
}

export default RCard;
