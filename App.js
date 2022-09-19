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
        <View style={styles.body}>
          <Text style={styles.text}>Alo medo!</Text>
        </View>
        <Footer />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
    backgroundColor: "#323",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    backgroundColor: "white",
  },
  text: {
    fontSize: "1.2rem",
  },
});
