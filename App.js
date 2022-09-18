import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//
import { Provider } from "react-redux";
import { store } from "./redux/store";
//
import Header from "./comps/Header";
import Footer from "./comps/Footer";
//
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider store={store}>
        {" "}
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
        <Footer />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
