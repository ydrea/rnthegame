import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
//
import Navigator from "./routes/homeStack";
//
import "react-native-gesture-handler";
//
export default function App() {
  //prettier-ignore
  // const [drop, dropSet] = useState(
  //   ["monuments", "planets", "l8r..."]
  // );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxProvider store={store}>
        <Navigator />
      </ReduxProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#e2ba42",
    backgroundColor: "#31328f",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    color: "#e2ba42",
  },
  text: {
    fontSize: 20,
  },
});
